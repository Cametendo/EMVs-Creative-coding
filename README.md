## Website:

Link to the Repository:
https://github.com/cametendo/EMVs-Creative-coding or
https://gitea.cametendo.org/Cametendo/EMVs-Creative-coding

Pre-requisities:

- p5.js v1.10.0

---

Recommendation:

- VSCode Extension: FiveServer
- Python 3.14.5

---

To open the website, click the little "Go Live" Button in the toolbar on the bottom right and then go to /website/index.html in the browser. There you will find all the cool stuff I did.

Another way to open the website is by using python:

```bash
cd /path/to/your/EMVs-Creative-coding && python -m http.server
```

Example output:

```
Serving HTTP on 0.0.0.0 port 8000 (http://0.0.0.0:8000/) ...
```

Access it via: `http://localhost:8000/website/`

---

## Minecraft Mod:

Pre-Requisities:

- fabric-api-0.141.4+1.21.11.jar
- iris-fabric-1.10.7+mc1.21.11.jar
- sodium-fabric-0.8.11+mc1.21.11.jar

To play with the mod, drag the `mc_kuwahara_shader` Folder into `/path/to/your/.minecraft/shaderpacks/`. When you did it correctly, you should get `/.../shaderpacks/mc_kuwahara_shader`.

The final tree structure should look like this:

```bash
/.../.minecraft/shaderpacks/mc_kuwahara_shader
├── final.fsh.settings
├── shaders
│   ├── final.fsh
│   ├── final.vsh
│   ├── gbuffers_terrain.fsh
│   └── gbuffers_terrain.vsh
└── shaders.properties
```

Note: It is not recommend to play this shader with integrated graphics (in fullscreen mode). The minimum required GPUs for this shader are:

- Nvidia: GTX 750 Ti
- AMD: RX 460
- Intel: UHD

If you do need to change the settings because of FPS, go to `/mc_kuwahara_shader/shaders/final.fsh` and change `STEP` from 3 to 4 (or 3 to 2 or even 3 to 1, if your PC is srong enough ;D)
