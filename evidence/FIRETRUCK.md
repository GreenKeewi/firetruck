# Fire Response release history · 2026-10-16

This document records earlier checkpoints. Current truck dimensions and controls are in ../README.md; lighting and fire validation are in LIGHTING.md and FIREFIGHTING.md. PERFORMANCE.md reconciles the historical timing captures below.

Foundation copied from GreenKeewi/taxi main d3ba87b6d44ba86c5fca3d40724dcc9e20732ff3, including its latest swept-hull highway GPS fix. Only the separate firetruck checkout and repository were changed; taxi, mirror, bio and games hub were untouched.

Core: interior cab, visible red 7.8 m truck body and hood, longer SAT collision, 160 km/h maximum, 48 default traffic vehicles with large blocking trucks, six rotating non-graphic emergency descriptions at varied destinations, timed dispatch and whole-truck marked bay parking, automatic next call, keyboard menus and restart. Rebound retains 12% of impact speed in the opposite direction. R searches recent collision-safe supported poses 2.5–15 m away, preferring 4.5 m; original layer/heading is preserved and candidates occupied by traffic/barriers are rejected. It refuses recovery if none is safe. R does not reset the run or refund/deduct dispatch time.

Validation:
- `node firetruck-physics.cjs`: speed reaches exactly 160 km/h without exceeding it, impact rebound -2.91 km/h, first/repeated recovery about 4.7/4.9 m, occupied history refused, ramp/highway height and heading restored, dispatch allowance unchanged.
- `node firetruck-check.cjs`: Chromium WebGL/SwiftShader actual keyboard start, forward driving, brake, first parking and next dispatch, pause/restart from untouched title spawn with normal traffic. No placement or simulation stepping for that route. Zero page errors.
- `node firetruck-recovery-keyboard.cjs`: obstacle fixture ahead, actual keyboard driving/crash/repeated R, low-power and rear-view captures. See JSON result.
- Existing region graph, highway14 ramp/wheel/seam/hull, mesh14 surfaces, terminal14 routes, GPS15 swept hull/rerouting and journey-polish checks passed. GPS checks use the changed 78 × 25 player dimensions.
- Inherited `physics-checks.cjs` fails its taxi-specific $15 roadside-assist assertion, intentionally superseded by free recent-position recovery. Its fixed 4.4 m taxi right-on-red fixture also does not fit the longer truck. Taxi/bus fare and boarding tests remain historical foundation tests, not release acceptance for this dispatch variant.
- Screenshots inspected locally; a cab self-occlusion issue found during inspection was fixed before publishing.

Limits: only the opening call has complete keyboard route coverage. Later calls and busy intersections have not received exhaustive driving coverage. Maximum-speed check uses engine simulation with highway heading guidance; it is not a complete keyboard highway journey. Cloud Chromium is not physical weak-computer validation. Live Pages reachability may be blocked by the cloud proxy; publication status is checked independently through GitHub.

Approved expansions (sirens/yielding, radio, smoke, alleys, vehicle handling choices, improved mirrors, scores, hose/rescue tasks and bot convoys) are deferred until after this base checkpoint. No multiplayer or weather added.

## Handling and dispatch update

Acceleration reduced from 42 to 36 world-units/s² (14% gentler); braking increased from 66 to 92. Space applies a 1.15 braking multiplier. At 160 km/h the measured full-brake stop takes 4.21 s / 93.35 m; S takes 4.83 s / 107.35 m. At 50 km/h full brake takes 1.32 s / 9.12 m. No reverse is allowed before zero; S then requires 0.35 s at standstill before reversing. Maximum reverse is 12 km/h.

The 4.6 m wheelbase remains; minimum steering-radius parameter increases from 3.2 m to 5.5 m. Steering input builds at 1.25/s rather than 1.8/s, returns at 2.2/s rather than 3.6/s, and yaw response is damped over 0.18 s rather than 0.10 s. Grip acceleration is bounded at 5.5 m/s². High-speed response checks through 160 km/h stay within that bound. These are accessible arcade physics, not a vehicle safety simulation.

Parking now requires every transformed body corner inside the 12.4 × 4.2 m bay. The truck now uses the same rectangular 78 × 25 envelope as its mesh, including corner contact and safe recovery. Positive/negative yaw 0.19 with lateral offsets ±0.7 m is rejected; fully contained parking completes normally. Emergency GPS approaches stay on the bay lane rather than drawing the inherited taxi curb maneuver.

Completed calls now start a varied 15–30 second standby. Response allowance remains untouched; pause freezes standby. Fresh Enter accepts early, while an already held Enter cannot skip it. Repeated dispatch tests cover eight cycles.

A lost express/collector transfer at station 5300 / lateral 98 now uses a swept-clear short move to the inner collector inside the same opening, followed by a gentler move to the outer collector. Both directions and both truck-sized hulls pass conservative swept clearance; existing GPS15 tests still pass.

## Traffic and priority update

`traffic-check.cjs` ran 20 seconds in Normal / High / Gridlock: 48 / 96 / 144 vehicles, 0 / 1 / 2 physical work-zone obstructions, mean speeds 25.77 / 23.11 / 17.95 km/h, and mean stopped counts 14.15 / 25.3 / 40.75. No initial/final vehicle overlaps were found. Queues use physical following and outbound intersection clearance. Stopped vehicles are not relocated; runtime density redistribution and highway wrapping are disabled. Initial world population is placed before driving begins.

Two local drivers reacted after 1.50 and 1.75 seconds, waited for safe space where necessary, pulled aside with bounded movement, and both safely rejoined. Reaction delay and waiting for clearance are distinct. Cars near intersections or blocked shoulders may be unable to yield. `signal-check.cjs` verifies queued vehicles comply with the priority green, requests expire when the truck stops, a second intersection operates independently, and turning away releases priority. Four-direction tests verify yellow, roughly 0.9 seconds all-red, and no conflicting greens. The shared signal function supplies both mesh lights and traffic.

`later-calls.cjs` now completes eight continuous calls using digital driving/parking controls and ordinary physics, with zero collisions, traffic removed and time allowance extended. It uses broad reverse/forward positioning where necessary to fit the entire body. Heavy right turns now use the inherited bus approach geometry, and the fixture driver slows appropriately for the larger turning circle. This is simulation coverage, not eight browser keyboard routes.

Actual browser keyboard checks cover Normal/High/Gridlock selection, moving/stopped traffic scenes, initial call driving/parking/restart, and standby acceptance. No page errors were recorded. Low-power WebGL through cloud SwiftShader measured only about 10–13 FPS in these captures; this is a material limitation, not a weak-device performance guarantee. Canvas fallback is tested separately. Player physics remain at 120 Hz; traffic runs at 60 Hz, or 30 Hz in low power, to bound CPU cost.

### Indexed traffic and measured callback timing

Traffic actors are indexed in 256-unit spatial bins; street actors also have directed-edge bins used for junction exit clearance. Local following queries retain their physical range and height filters. Nearby collision candidates, signal occupancy and pull-aside checks use the same index; building lookups are spatially indexed. Queries include movement padding so actors crossing a bin within a traffic step remain discoverable. `referenceTrafficScans` exists solely as an engine-test option to compare broad scans with indexed queries. `traffic-index-check.cjs` shows exactly zero trajectory error across two seeds × three densities × ten seconds. Seed 8427 measured 64–72% lower simulation update CPU time in this local reference comparison.

Low power retains all traffic actors and queues. It updates nearby traffic at 30 Hz and actors beyond 180 m at 10 Hz, with bounded movement and collision checks; the truck stays at 120 Hz. A ten-second low-power Gridlock run retained 144 vehicles without overlapping vehicles. The historical Canvas capture at 1024×768 reached 26 FPS with full callback p95 35.1 ms and draw-gap p95 53.2 ms; render-only p95 was 25.6 ms. This still includes stutter, and cloud Chromium is not physical weak-device validation. That capture is retained as history/performance-legacy-26.json; use PERFORMANCE.md for current source-bound measurements. Full callback and draw-gap timings are exposed under __taxi3d.performance, alongside the legacy render-only metric.
