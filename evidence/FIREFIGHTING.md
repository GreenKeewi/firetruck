# Roof monitor and fire calls

Warehouse yard calls contain two burning props; roadside vehicle fires contain one. They are non-graphic, solid driving obstacles placed clear of buildings, water, the parking bay and existing vehicles. Flames shrink with remaining heat and emit simple animated smoke. The monitor uses an arcing water stream with building, vehicle, ground and elevated-deck obstruction checks. No fluid simulation or dynamic shadow pass is used.

Fully park and stop for 1.5 seconds. F opens the roof monitor; arrows/WASD aim, Space sprays, Shift aims finely, and F returns to the cab. The response allowance freezes on arrival. All flames must be extinguished before crew-reset downtime begins. Pause freezes progress; recovery stows the monitor and retains progress. Other emergency calls retain their parking completion flow.

Validation:

- `fire-check.cjs` and `fire-tests.json`: two-fire and single-fire completion through ordinary digital aiming inputs; misses, driving mode, stale aim, wall obstruction and wrong road layer rejected; frozen travel allowance; 186 fire props checked against buildings across every parallel bay.
- `fire-browser.cjs` and `fire-monitor-browser.json`: real Chromium keyboard approach, parking, F entry/exit, aiming, spray, pause, extinguishing both flames and accepting the next call in Canvas and WebGL. Canvas additionally tests R and re-parking without losing progress. Test-only placement sets the initial approach and removes traffic to isolate these controls; no fire heat or monitor angles are written by the browser test.
- `later-calls.cjs` and `later-calls.json`: eight consecutive routed calls with digital driving, parking and monitor inputs; traffic removed to isolate route feasibility.
- `firetruck-check.cjs` and `fire-browser.json`: untouched title spawn, normal traffic, actual keyboard start, driving, parking the first call and restarting.
- Existing handling, full-hull parking, lighting, moving traffic index, signal-clearance and traffic-review regression checks passed. The 160 km/h cap and truck footprint remain in effect.

Screenshots inspected: [Canvas night monitor](fire-monitor-canvas.png) and [WebGL day monitor](fire-monitor-webgl.png). The stream begins beyond the monitor camera to prevent near-plane clipping.

Tests run against localhost in cloud Chromium. Public Pages proxy access previously returned 403, so deployment verification uses the exact successful Pages run and published commit, without claiming a live-origin browser playthrough. Performance figures are recorded separately in PERFORMANCE.md and are not physical weak-computer certification.
