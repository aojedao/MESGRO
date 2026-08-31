---
layout: project
title: "Bidirectional EST Path Planner for UR5"
description: "Custom Bidirectional Expansive Space Tree (BiEST) motion planner integrated with MoveIt 2 for collision-free trajectory generation on the UR5 manipulator. Combines weighted roulette-wheel sampling, goal-biased exploration, and iterative backtracking across dual trees. Tested in RViz, Gazebo, Isaac Sim, and on physical hardware."
status: completed
date: 2024-12-01
categories: [Motion Planning, C++, ROS2, MoveIt, Manipulation]
featured_image: "https://github.com/Seyi-roboticist/OluwaseyiR.github.io/assets/143431845/cdd1d19e-3765-42c3-9cce-d4a27d502e23"

code_files:
  - name: "BiEST Core Algorithm"
    file: "assignment3_context.cpp"
    language: "cpp"
    content: |
      // Bidirectional EST: alternating tree expansion with bridge detection
      ASBRContext::path ASBRContext::est(
          const vertex& q_init, const vertex& q_goal)
      {
          std::vector<vertex> V_root{q_init}, V_goal{q_goal};
          std::vector<index>  parent{0}, parent_goal{0};
          std::vector<weight> w{1.0}, w_goal{1.0};
          const int MAX_ITERATIONS{11300};
          double nearThreshold{13};
          long bridgeRootIdx{-1}, bridgeGoalIdx{-1};

          for (uint16_t i{1}; i < MAX_ITERATIONS; ++i) {
              if (random_bool()) {
                  if (extend(V_root, parent, w, V_goal,
                      bridgeRootIdx, bridgeGoalIdx,
                      nearThreshold, q_goal))
                      break;
              } else {
                  if (extend(V_goal, parent_goal, w_goal, V_root,
                      bridgeGoalIdx, bridgeRootIdx,
                      nearThreshold, q_init))
                      break;
              }
          }
          // Bridge the two half-paths
          path P_root = search_path(V_root, parent, 0, bridgeRootIdx);
          path P_goal = search_path(V_goal, parent_goal, 0, bridgeGoalIdx);
          P_root.insert(P_root.end(), P_goal.rbegin(), P_goal.rend());
          return P_root;
      }

  - name: "Weighted Sampling & Goal Biasing"
    file: "assignment3_context.cpp"
    language: "cpp"
    content: |
      // Roulette-wheel selection: favors less-explored regions
      ASBRContext::index ASBRContext::select_config_from_tree(
          const std::vector<weight>& w)
      {
          static std::uniform_real_distribution<> uniform_distro(
              0.0, std::accumulate(w.begin(), w.end(), 0.0));
          double random_point{uniform_distro(generator)};
          double cum_weight{0.0};
          index i{0};
          for (; i < w.size(); ++i) {
              cum_weight += w[i];
              if (random_point <= cum_weight) break;
          }
          return (i >= w.size()) ? w.size() - 1 : i;
      }

      // Sample nearby with 18.5% goal bias
      ASBRContext::vertex ASBRContext::sample_nearby(
          const vertex& q, const vertex& q_goal)
      {
          static std::normal_distribution<> gauss(0, M_PI);
          static std::uniform_real_distribution<double> coin(0, 1);
          const double GOAL_BIAS{0.185};

          if (coin(generator) < GOAL_BIAS && !state_collides(q_goal))
              return q_goal;

          vertex q_rand(q.size());
          for (std::size_t i{0}; i < q.size(); ++i)
              q_rand[i] = std::fmod(q[i] + gauss(generator) + M_PI,
                                     2 * M_PI) - M_PI;
          return state_collides(q_rand) ? q : q_rand;
      }

  - name: "Tree Extension & Bridge Detection"
    file: "assignment3_context.cpp"
    language: "cpp"
    content: |
      // Extend one tree toward the other, check for bridge connection
      bool ASBRContext::extend(
          std::vector<vertex>& V_from,
          std::vector<index>& parent_from,
          std::vector<weight>& w_from,
          const std::vector<vertex>& V_to,
          long& bridgeFromIdx, long& bridgeToIdx,
          double nearThreshold, const vertex& q_target)
      {
          index idx = select_config_from_tree(w_from);
          vertex q_rand = sample_nearby(V_from[idx], q_target);
          index idx_near = find_nearest_configuration(V_from, q_rand);

          if (is_local_path_collision_free(V_from[idx_near], q_rand)) {
              V_from.push_back(q_rand);
              parent_from.push_back(idx_near);
              w_from.push_back(1.0 / (1.0 + w_from[idx_near]));

              index idx_to = find_nearest_configuration(V_to, q_rand);
              if (euclidean_norm(q_rand, V_to[idx_to]) < nearThreshold
                  && is_local_path_collision_free(q_rand, V_to[idx_to])) {
                  bridgeFromIdx = V_from.size() - 1;
                  bridgeToIdx = idx_to;
                  return true;  // Trees connected
              }
          }
          return false;
      }
---

## Overview

I built this as part of *Algorithms for Sensor-Based Robotics* (EN.601.463/663) at Johns Hopkins. It's a graduate course I later TA'd for two semesters, mentoring 80+ students through these exact types of motion planning problems. Having seen dozens of students struggle with sampling-based planners (EST, RRT, RRT*, PRM), I know firsthand where the intuition breaks down: why weighted sampling matters, how goal bias interacts with cluttered environments, and why a deterministic tree alternation beats a random coin flip by nearly 5x in planning time. This project is my own ground-up implementation of a Bidirectional Expansive Space Tree, written in C++ and plugged directly into MoveIt 2 as a custom planning plugin for the UR5.

The idea is straightforward: grow two trees, one from start and one from goal, and try to connect them. The hard part is making the exploration efficient. I used three techniques that made the difference: weighted roulette-wheel sampling to push the trees into under-explored regions, a tuned 18.5% goal bias to keep the growth directional, and Gaussian perturbation with joint-limit wrapping so the sampler respects the UR5's workspace without clipping. I tested across RViz, Gazebo, NVIDIA Isaac Sim, and on a physical UR5, achieving a 95%+ success rate across all environments.

## Demo

![BiEST Path Planner Demo](https://github.com/Seyi-roboticist/OluwaseyiR.github.io/assets/143431845/cdd1d19e-3765-42c3-9cce-d4a27d502e23)

## System Architecture

<script src="https://cdn.jsdelivr.net/npm/mermaid@10/dist/mermaid.min.js"></script>
<script>mermaid.initialize({startOnLoad:true, theme:'dark'});</script>

<pre class="mermaid">
flowchart TB
    A["MoveIt 2 Planning Request"] --> B["solve()"]
    B --> C["est(q_init, q_goal)"]
    C --> D{"Alternate Trees"}
    D -->|"Tree 1"| E["extend(V_root → V_goal)"]
    D -->|"Tree 2"| F["extend(V_goal → V_root)"]
    E --> G["select_config_from_tree(w)"]
    F --> G
    G --> H["sample_nearby(q, q_target)"]
    H --> I["find_nearest_configuration()"]
    I --> J{"Local Path Collision Free?"}
    J -->|"Yes"| K["Add to Tree + Update Weights"]
    J -->|"No"| D
    K --> L{"Bridge Distance < Threshold?"}
    L -->|"Yes"| M["search_path() + Concatenate"]
    L -->|"No"| D
    M --> N["Interpolated Trajectory → RViz"]
</pre>

## How It Works

### The Core Loop

Every iteration, the planner picks one of the two trees to expand. I initially tried random selection, essentially flipping a coin to pick a tree. It worked, but it was slow. When I switched to a deterministic alternation (just toggle a boolean), planning time on the Bugatti obstacle scene dropped from 351ms to 72ms. That was a big lesson: in BiEST, balanced growth matters more than randomized fairness.

Each expansion attempt follows a pipeline. First, select a vertex from the tree. Then, sample a new configuration near it. Next, check if the path to the sample is collision-free. Finally, see if the new vertex is close enough to the *other* tree to form a bridge.

### Weighted Roulette-Wheel Sampling

The key insight behind EST is that you don't want to keep expanding from the same well-explored nodes. You want the tree to push outward into new territory. I handle this with a weight on every vertex. When a new node gets added, its weight is:

$$w_{\text{child}} \;=\; \frac{1}{1 \;+\; w_{\text{parent}}}$$

So a vertex spawned from a heavily-explored parent (high $w$) gets a *low* weight, while vertices in sparse regions keep their high weights. To actually select which vertex to expand from, I use roulette-wheel sampling over the cumulative weight distribution:

$$P(\text{select vertex } i) \;=\; \frac{w_i}{\displaystyle\sum_{j=1}^{|V|} w_j}$$

I draw a random point $r \sim \mathcal{U}\!\left(0,\; \sum w_j\right)$ and walk the cumulative distribution until I find the vertex that "owns" that point. Vertices with higher weights occupy larger intervals, so they get selected more often. This naturally drives exploration toward the sparse frontiers of the tree.

### Gaussian Perturbation with Joint-Limit Wrapping

Once I've selected a vertex $\mathbf{q}$ to expand from, I need to generate a nearby sample. I add Gaussian noise independently to each joint:

$$q_i^{\,\text{rand}} \;=\; \Big(\big(q_i \;+\; \underbrace{\mathcal{N}(0,\,\pi)}_{\text{noise}}\big) + \pi\Big) \bmod 2\pi \;\;-\;\; \pi$$

The $\sigma = \pi$ gives wide coverage of the configuration space, and the modular arithmetic wraps the result back into the UR5's joint limits $[-\pi,\,\pi]$ without clipping or rejection. If the resulting configuration is in collision, I retry up to 1000 times before falling back to the original vertex.

### Goal Biasing

Pure random exploration is thorough but slow. To speed things up, I added a tunable "greediness dial." With probability $p = 0.185$, the sampler skips the Gaussian perturbation entirely and just returns the target configuration:

$$\mathbf{q}^{\,\text{rand}} = \begin{cases} \mathbf{q}_{\text{target}} & \text{with probability } 0.185 \\ \mathbf{q} + \mathcal{N}(\mathbf{0},\, \pi\mathbf{I}) & \text{otherwise} \end{cases}$$

I landed on 18.5% after a lot of trial and error. Too high and the planner wastes iterations trying to force direct paths through obstacles. Too low and the trees grow aimlessly. This value gave me the best balance between directed growth and exploratory coverage across different obstacle scenes.

### Collision Checking Along Local Paths

Before adding a new vertex to the tree, I need to verify that the straight-line path in C-space between the nearest existing vertex and the new sample is collision-free. I do this by interpolating between the two configurations at a resolution of $\Delta t = 0.005$:

$$\mathbf{q}(t) \;=\; (1-t)\,\mathbf{q}_{\text{near}} \;+\; t\,\mathbf{q}_{\text{rand}}, \qquad t \in \{0.005,\; 0.01,\; \ldots,\; 1.0\}$$

That's 200 collision checks per local path segment. At each interpolated configuration, MoveIt's `isStateColliding()` queries the full planning scene. A coarser resolution (say $\Delta t = 0.01$) would be faster, but it misses narrow passages. I learned that the hard way when the planner kept producing paths that clipped obstacle corners.

### Bridge Detection and Path Recovery

After successfully adding a new vertex $\mathbf{q}_{\text{new}}$ to the expanding tree, I check its distance to the *nearest* vertex in the opposing tree:

$$d\big(\mathbf{q}_{\text{new}},\; \mathbf{q}_{\text{nearest}}^{\,\text{other}}\big) \;=\; \left\|\mathbf{q}_{\text{new}} - \mathbf{q}_{\text{nearest}}^{\,\text{other}}\right\|_2 \;<\; \tau$$

where the bridge threshold $\tau = 13$ (in C-space Euclidean distance). If the distance is below threshold *and* the local path between them is collision-free, the trees are connected. From there, I backtrack through each tree's parent array, walking from the bridge point back to each tree's root, and then concatenate the two half-paths. The goal-tree half gets reversed so the full path runs start to goal.

The backtracking uses an iterative approach with a visited-node set to prevent cycles. Recursive backtracking would work too, but I didn't want to risk a stack overflow on deep trees.

## Results

| Metric | Value |
|---|---|
| Planning success rate | 95%+ across test scenarios |
| Planning time (simple scene) | ~72 ms |
| Planning time (cluttered scene) | ~72 ms (alternating) vs ~351 ms (random) |
| Collision resolution | 200 points per segment |
| Goal bias | 18.5% |
| Bridge threshold | $\tau = 13$ |
| Max iterations | 11,300 |
| Tested on | RViz, Gazebo, Isaac Sim, physical UR5 |

## Links

- [Project Page](https://github.com/Seyi-roboticist/OluwaseyiR.github.io/tree/main/Projects/UR5_PathPlanning)
