# Reconciled performance evidence

Earlier chat checkpoints quoted individual captures of 26, 27 or 28 FPS. The previously committed JSON held a different 26 FPS capture; it was not evidence for the later 27 FPS claim. The original capture is retained in history/performance-legacy-26.json, and the 27 FPS tool result is preserved in history/performance-checkpoint-27.json with its limited provenance. Earlier captures did not consistently record backend scheduling or source hashes, so they must not be treated as controlled comparisons.

The canonical protocol is now performance-check.cjs: fresh Chromium Canvas context at 1024×768, keyboard-selected Gridlock, driving/braking followed by nine seconds of warm-up, no CPU throttle. Each result records timestamp, all 144 actors, UI and engine low-power flags, errors and SHA-256 hashes of the tested runtime files. Source files are checked for changes during measurement. sourceBase names the published base; runtimeHashes identify the actual tested files, including changes above that base.

| Capture | Last-window FPS | Vehicles | Full-callback p95 ms | Draw-gap p95 ms | Record |
| --- | ---: | ---: | ---: | ---: | --- |
| Baseline 920db49 | 28 | 144 | 28.0 | 48.4 | [performance-baseline-920d.json](performance-baseline-920d.json) |
| Lighting — day | 23 | 144 | 33.7 | 54.3 | [traffic-performance.json](traffic-performance.json) |
| Lighting — night | 25 | 144 | 34.7 | 51.7 | [lighting-performance-night.json](lighting-performance-night.json) |

All three new runs report no page errors and retain 144 vehicles. The lighting runs are not a performance gain claim. The last-window FPS, complete callback cost and draw gaps describe different samples/windows; callback samples include throttled callbacks that do not draw, while render-only samples omit simulation. Draw-gap p95 exposes visible stutter. These cloud measurements vary and do not predict a physical weak computer or a CPU-throttled benchmark. No traffic reduction was used to improve the reported numbers.

## Fire monitor checkpoint

[fire-performance-night.json](fire-performance-night.json) records the cannon release at night with all 144 vehicles retained: 30 FPS, full-callback p95 15.5 ms and draw-gap p95 35.7 ms, with zero page errors. The fixture places the truck at a warehouse bay, performs the keyboard parking hold and F entry, then holds Space on a miss while both fires remain active. The camera is stationary and faces the street; the fires are outside this view. This is a different scene from the driving captures above and is not evidence of a speed improvement. Runtime hashes include fire-response.js and identify the exact tested source. [Screenshot](fire-gridlock-night.png).
