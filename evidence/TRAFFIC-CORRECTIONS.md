# Traffic corrections after source review

All four reported defects were reproduced before changing the code.

- Changing title-screen time or traffic left the engine's low-power flag undefined while the UI still showed low power. New cities now inherit the current flag immediately. Canvas keyboard tests cover time/traffic changes and both directions of L toggling.
- An inner-lane car beginning 276 world units before a junction could pull aside, then stall at the 190-unit hold because recentering required forward speed. Rejoining now reserves sufficient alignment distance. If that distance is unavailable, the car checks a short path behind along the curb, backs up slowly only when clear, then creeps forward to merge. A blocked rear path makes it wait. The fixture recentres and crosses, with about 2.9 m of safe backing and no teleport; a blocked-then-cleared rear-space fixture also completes. Junction entry still requires alignment, signal permission and outbound clearance.
- NPC promotion tested an enlarged chamfered car before installing a rectangular truck. The proposed vehicle now has truck/box flags during every clearance test. The 41.5 / 11.5 corner-overlap fixture is rejected in the browser.
- Normal signal restoration previously released after the timer even with crossing traffic. Both the priority clearance and restoration phases now test actual vehicle-footprint occupancy of the lane conflict area, including the player's ground-level truck. All-red is retained while occupied. All four occupied-crossing headings hold, then release only after clearance; a same-XY elevated vehicle is excluded by height-aware collision.

`traffic-review-check.cjs`, `traffic-review-browser.cjs`, existing queue/yield/preemption checks, first-call keyboard driving/parking/restart, safe recovery and 160 km/h checks pass. `traffic-moving-index-check.cjs` compares broad scans against indexing over two seeds × city driving / highway driving / yielding / forced rejoin, 25 seconds per case. Player movement, player/NPC turns, yielding and rejoining are exercised; maximum trajectory error is exactly zero. Signal states are also identical.

The full-length truck, label removal, congestion counts and indexed traffic are preserved. Lighting and firefighting are not part of this correction release.
