# Fire Response

Playable static 3D fire-truck driving base: https://greenkeewi.github.io/firetruck/

Derived from GreenKeewi/taxi main d3ba87b6d44ba86c5fca3d40724dcc9e20732ff3 (2026-10-16). Original Toronto Taxi authorship and source comments retained. No original license file was present; no new license is asserted. Taxi and its mirror are independent and unchanged.

Enter starts. WASD/arrows drive, S brakes to zero, waits briefly, then reverses, Space brakes, Shift gives fine pedal control. Q/E glance, C rear view, Tab map, Esc/P pause, F1 help, L low power, M sound, J siren. R recovers a few metres back to a collision-safe recent position with original road layer and heading; timer is unchanged. Esc → Restart run starts fresh.

Drive the red 7.8 m truck to the amber incident bay, align the whole body and stop for 1.5 seconds. Calls vary through road collisions, alarms, fallen trees, smoke and spills, without graphic imagery. 48 traffic vehicles by default include large blocking trucks. The speed ceiling is 160 km/h; safe cornering needs much lower speed. Three missed calls or an empty condition gauge ends the run. After each response, a varied 15–30 second crew reset pauses the response clock. Press Enter to accept the next call sooner.

No dependencies, backend, accounts, purchases or build. Serve with `python3 -m http.server 8080`. Low power reduces resolution/draw distance and caps rendering at 30 FPS. Canvas fallback remains available. Cloud browser validation is not physical low-end hardware validation.

Handling update: acceleration 14% gentler, stronger predictable brakes, and progressive steering with a wider truck turning circle. Space gives full braking; S holds at zero for 0.35 seconds before reversing.

See evidence/FIRETRUCK.md for current validation and limits. Inherited evidence describes the taxi foundation, not this release.

Traffic update: Normal / High / Gridlock have 48 / 96 / 144 vehicles. High and Gridlock add physical work-zone bottlenecks and backed-up lanes. Every car follows vehicles, parked obstacles and the same visible signals. Yielding reacts locally after an individual 1–2 second delay, checks space, creeps aside and safely rejoins after passage; some drivers cannot move aside. Runtime traffic relocation is disabled. J switches the synthesized siren and local priority requests on/off. Priority signals use yellow, all-red clearance, then green; stopped or departed requests release safely. Low power updates traffic at 30 Hz while the truck collision physics remain at 120 Hz.
