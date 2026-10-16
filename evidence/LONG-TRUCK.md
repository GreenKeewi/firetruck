# Full-length firetruck

The player truck is 9.6 m long and 2.7 m wide, with a 6.0 m wheelbase. Mesh axles and physical tyre contacts share that wheelbase. Its rectangular collision envelope matches all emitted mesh corners, and the 3.7 m height includes the roof lights. First-person placement is moved into the longer cab; the rear camera sits beyond the rear body rather than inside it.

Response bays are 15.6 × 5.0 m. The complete transformed body must fit before parking progress starts; nearby recovery uses that same body and wheel support. The parking inset and world outline use the destination's actual dimensions.

Steering builds at 1.10/s, yaw response is damped over 0.20 s, and the minimum steering radius parameter is 6.8 m. An 8 km/h turn measured a 15.55 m diameter. Acceleration is 32 world-units/s²; full braking remains 92 × 1.15. Forward maximum remains 160 km/h and reverse is limited to 10 km/h.

Validation: emitted mesh bounds equal the physical footprint; positive/negative yaw/offset parking rejects protruding corners; eight continuous response routes and full-body parking complete with zero collisions using digital controls in a traffic-free engine fixture. Existing ramp tyre support, guardrails, curved highway seams and express/collector clearance checks pass with the larger dimensions. Rebound, repeated safe recovery, ramp/highway layer restoration and 160 km/h cap checks pass. Actual Chromium keyboard start, driving, parking, standby, restart and crash/recovery are checked separately; screenshots were inspected locally.

The traffic/indexing/signal update and removal of floating street-name tags are preserved. Geometry size changed without increasing truck mesh complexity. These cloud tests do not certify a physical weak computer.
