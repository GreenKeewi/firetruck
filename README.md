# Fire Response

Playable static 3D fire-truck driving base: https://greenkeewi.github.io/firetruck/

Derived from GreenKeewi/taxi main d3ba87b6d44ba86c5fca3d40724dcc9e20732ff3 (2026-10-16). Original Toronto Taxi authorship and source comments retained. No original license file was present; no new license is asserted. Taxi and its mirror are independent and unchanged.

Enter starts. WASD/arrows drive, S brakes then reverses, Space brakes, Shift gives fine pedal control. Q/E glance, C rear view, Tab map, Esc/P pause, F1 help, L low power, M sound. R recovers a few metres back to a collision-safe recent position with original road layer and heading; timer is unchanged. Esc → Restart run starts fresh.

Drive the red 7.8 m truck to the amber incident bay, align the whole body and stop for 1.5 seconds. Calls vary through road collisions, alarms, fallen trees, smoke and spills, without graphic imagery. 48 traffic vehicles by default include large blocking trucks. The speed ceiling is 160 km/h; safe cornering needs much lower speed. Three missed calls or an empty condition gauge ends the run. Calls continue after each response.

No dependencies, backend, accounts, purchases or build. Serve with `python3 -m http.server 8080`. Low power reduces resolution/draw distance and caps rendering at 30 FPS. Canvas fallback remains available. Cloud browser validation is not physical low-end hardware validation.

See evidence/FIRETRUCK.md for current validation and limits. Inherited evidence describes the taxi foundation, not this release.
