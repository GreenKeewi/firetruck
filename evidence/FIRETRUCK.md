# Fire Response base · 2026-10-16

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
