import linearGradient from "../_adaptationConfigs/linearGradient";
import trianglify from "../_adaptationConfigs/trianglify";
import particles from "../_adaptationConfigs/particles";
import perfectPurple from "../_adaptationConfigs/perfect_purple";
import wallPattern from "../_adaptationConfigs/wallPattern";
import strings25 from "../_adaptationConfigs/strings25";
import generateArt from "../_adaptationConfigs/generateArt";
import gradientWaves from "../_adaptationConfigs/gradientWaves";
import postmodern from "../_adaptationConfigs/postmodern";
import mesh from "../_adaptationConfigs/mesh";
import steppedGradient from "../_adaptationConfigs/steppedGradient";
import fiberRibbons from "../_adaptationConfigs/fiber_ribbons";
import fiberRectangles from "../_adaptationConfigs/fiber_rectangles";
import gradientBubbles from "../_adaptationConfigs/gradient_bubbles";
import chromaticLiquids from "../_adaptationConfigs/chromatic_liquids";
import blobmaker from "../_adaptationConfigs/blobmaker";
import subtleRib from "../_adaptationConfigs/subtle_rib";
import clipSpace3d from "../_adaptationConfigs/clipSpace3d";
import voronoi from "../_adaptationConfigs/voronoi";
import carpet from "../_adaptationConfigs/carpet";
import blank from "../_adaptationConfigs/blank";
import simpleRipple from "../_adaptationConfigs/simple_ripple";
import hedgehog from "../_adaptationConfigs/hedgehog";
import tatters from "../_adaptationConfigs/tatters";
// import cells from "../_adaptationConfigs/cells";
// import fog from "../_adaptationConfigs/fog";
import svgs from "./svgsList";

export const allAdaptationTypes = [
  linearGradient,
  trianglify,
  particles,
  perfectPurple,
  wallPattern,
  strings25,
  generateArt,
  gradientWaves,
  postmodern,
  mesh,
  steppedGradient,
  fiberRibbons,
  fiberRectangles,
  gradientBubbles,
  chromaticLiquids,
  blobmaker,
  subtleRib,
  clipSpace3d,
  voronoi,
  carpet,
  blank,
  hedgehog
  // cells,
  // fog
];

const unfilledGradientWaves = {
  ...gradientWaves,
  thumb: "/thumbs/b18.png",
  initState: {
    size: { width: 1000, height: 1000 },
    config: {
      amplituteX: 300,
      amplituteY: 30,
      crazyness: false,
      fill: false,
      lines: 100,
      palette: ["#ff0099", "#ffe000"],
      smoothness: 13,
      randomValues: []
    }
  }
};

export const allAdaptations = [
  // 0
  {
    ...linearGradient,
    thumb: "/thumbs/18.png",
    initState: {
      size: { width: 1000, height: 1000 },
      config: {
        angle: 200,
        direction: "top",
        palette: ["#081027", "#0d1f52"]
      },
      insertedItems: [
        {
          id: 100,
          type: "object",
          showIframe: true,
          adaptation: gradientWaves,
          width: 1018.9873417721519,
          height: 373.4177215189874,
          position: { left: -4.219409282700422, top: -29.535864978902953 },
          configValues: {
            amplituteX: 200,
            amplituteY: 16,
            fill: false,
            lines: 10,
            palette: ["#402eff", "#5c4dfb"],
            randomValues: [],
            smoothness: 22
          }
        },
        {
          id: 101,
          type: "text",
          config: {
            backgroundColor: { r: 255, g: 255, b: 255, a: 0 },
            borderWidth: 0,
            color: "#ffffff",
            fontFamily: "Prata",
            fontSize: 96,
            isBold: false,
            letterSpacing: 0,
            padding: 10
          },
          text: "Catch the next wave",
          position: { left: 25.31645569620253, top: 388.18565400843886 }
        },
        {
          id: 102,
          type: "object",
          showIframe: true,
          adaptation: gradientWaves,
          width: 1002.1097046413503,
          height: 341.7721518987342,
          position: { left: 3.3783783783783785, top: 652.0270270270271 },
          configValues: {
            amplituteX: 200,
            amplituteY: 16,
            fill: false,
            lines: 10,
            palette: ["#4937ff", "#e4eef0"],
            randomValues: [],
            smoothness: 22
          }
        },
        {
          id: 103,
          type: "text",
          config: {
            backgroundColor: { r: 255, g: 255, b: 255, a: 0 },
            borderWidth: 0,
            color: "#ffffff",
            fontFamily: "Roboto",
            fontSize: 35,
            letterSpacing: 0,
            padding: 10
          },
          text: "learn how to catch an unbroken wave",
          position: { left: 196.20253164556962, top: 529.535864978903 }
        }
      ]
    }
  },
  // 1
  {
    ...linearGradient,
    thumb: "/thumbs/16.png",
    initState: {
      size: { width: 1000, height: 1000 },
      config: {
        palette: ["#0b0a21", "#1e1b57"],
        direction: "custom_angle",
        angle: 200
      },
      insertedItems: [
        {
          id: 100,
          type: "object",
          showIframe: true,
          adaptation: linearGradient,
          width: 943.5483870967741,
          height: 943.5483870967741,
          position: { left: 23.647513440860216, top: 26.965725806451612 },
          configValues: {
            angle: 31,
            direction: "custom_angle",
            palette: ["#a52bf8", "#02d0ea"]
          }
        },
        {
          id: 101,
          type: "object",
          showIframe: true,
          adaptation: gradientWaves,
          width: 885.752688172043,
          height: 888.4408602150538,
          position: { left: 50.676243279569896, top: 57.522681451612904 },
          configValues: {
            amplituteX: 88,
            amplituteY: 10,
            fill: false,
            lines: 67,
            palette: ["#cf91f9", "#02d0ea"],
            randomValues: [0.044420196340127394, 0.22911748347161964],
            smoothness: 12
          }
        },
        {
          id: 103,
          type: "text",
          position: { left: 235.55107526881721, top: 263.3778561827957 },
          config: {
            backgroundColor: { r: 255, g: 255, b: 255, a: 0 },
            borderWidth: 0,
            color: "#ffffff",
            fontFamily: "Monoton",
            fontSize: 150,
            letterSpacing: 0,
            padding: 10
          },
          text: "what\nso\nnot",
          width: 527.1337365591398,
          height: 511.9287634408602
        }
      ]
    }
  },
  // 2
  {
    ...gradientBubbles,
    thumb: "/thumbs/11.png",
    initState: {
      size: { width: 600, height: 600 },
      config: {
        angle: 360,
        itemSize: 10,
        itemType: "circle",
        itemsNumInRow: 16,
        padding: 50,
        palette: ["#dba430", "#921000"],
        randomValues: [],
        rounding: 20
      },
      insertedItems: [
        {
          id: 101,
          width: 650,
          height: 468,
          showIframe: true,
          type: "object",
          position: { left: -97, top: 55 },
          adaptation: blobmaker,
          configValues: {
            angle: 86,
            complexity: 11,
            contrast: 4,
            palette: ["#921000", "#dba430"],
            randomValues: [
              0.3519936882860435,
              0.5840141658750502,
              0.08831844898281593,
              0.9505707548326048,
              0.3508100193181387,
              0.4602954235225203,
              0.9476222836166059,
              0.45153414683098303,
              0.7071476224937401,
              0.2609440704641621
            ]
          }
        },
        {
          config: {
            backgroundColor: { r: 255, g: 255, b: 255, a: 0 },
            borderWidth: 0,
            color: "#d7ff00",
            fontFamily: "Rubik Mono One",
            fontSize: 43,
            letterSpacing: 0,
            padding: 10
          },
          id: 102,
          type: "text",
          position: { left: 68.75, top: 184.375 },
          text: `+
  add
  blobs
  anywhere`
        }
      ]
    }
  },
  // 3
  {
    ...gradientWaves,
    thumb: "/thumbs/9.png",
    initState: {
      size: { width: 700, height: 700 },
      config: {
        amplituteX: 150,
        amplituteY: 30,
        crazyness: false,
        fill: true,
        lines: 70,
        palette: ["#00fb94", "#006b65"],
        smoothness: 98,
        randomValues: []
      },
      insertedItems: [
        {
          id: 100,
          type: "text",
          config: {
            backgroundColor: { r: 255, g: 255, b: 255, a: 0 },
            borderWidth: 1,
            color: "#ffffff",
            fontFamily: "El Messiri",
            fontSize: 87,
            letterSpacing: 0,
            padding: 50
          },
          position: { left: 122, top: 120 },
          text: `We
  should
  all be
  designers`
        }
      ]
    }
  },
  // 4
  {
    ...fiberRibbons,
    thumb: "/thumbs/7.png",
    initState: {
      size: { width: 1000, height: 1000 },
      config: {
        backgroundColor: "#324444",
        palette: ["#A2CCB6", "#FCEEB5", "#fff", "#EE786E"],
        numLines: 94,
        fov: 75
      },
      insertedItems: [
        {
          id: 100,
          type: "text",
          config: {
            backgroundColor: { r: 255, g: 255, b: 255, a: 0 },
            color: "#ffffff",
            fontFamily: "Playfair Display",
            fontSize: 220,
            letterSpacing: 0,
            padding: 10,
            borderWidth: 0
          },
          position: { left: 166.125, top: 132.65625 },
          text: "React\nThree\nFiber",
          width: 600.8125,
          height: 746
        }
      ]
    }
  },
  // 5
  {
    ...linearGradient,
    thumb: "/thumbs/19.png",
    initState: {
      size: { width: 1000, height: 1000 },
      config: {
        palette: ["#f9f9f9", "#ffffff"],
        direction: "left",
        angle: 200
      },
      insertedItems: [
        {
          id: 102,
          type: "object",
          width: 653,
          height: 711,
          showIframe: true,
          adaptation: subtleRib,
          configValues: { color: "#fcd633", mode: "vertical", intensity: 20 },
          position: { left: 345, top: 0 }
        },
        {
          id: 103,
          type: "text",
          config: {
            fontFamily: "Lato",
            fontSize: 34,
            padding: 10,
            letterSpacing: 0,
            color: "#000",
            backgroundColor: { r: 255, g: 255, b: 255, a: 0.5 },
            borderWidth: 1,
            isBold: true
          },
          width: 161.875,
          height: 96,
          position: { left: 120, top: 60 },
          text: "Design\nSystems"
        },
        {
          id: 104,
          type: "text",
          config: {
            fontFamily: "Lato",
            fontSize: 72,
            padding: 10,
            letterSpacing: 0,
            color: "#000",
            backgroundColor: { r: 255, g: 255, b: 255, a: 0 },
            borderWidth: 0,
            isBold: true
          },
          width: 620.234375,
          height: 257,
          position: { left: 121, top: 455 },
          text: "A comprehensive\nguide to\niconography"
        },
        {
          id: 5,
          type: "text",
          config: {
            fontFamily: "Lato",
            fontSize: 28,
            padding: 10,
            letterSpacing: 0,
            color: "#000",
            backgroundColor: { r: 255, g: 255, b: 255, a: 0 },
            borderWidth: 0,
            isBold: false
          },
          width: 205.21875,
          height: 50,
          position: { left: 123, top: 716 },
          text: "featured article"
        },
        {
          id: 6,
          type: "text",
          config: {
            fontFamily: "Lato",
            fontSize: 20,
            padding: 10,
            letterSpacing: 0,
            color: "#000",
            backgroundColor: { r: 255, g: 255, b: 255, a: 0 },
            borderWidth: 0,
            isBold: false
          },
          width: 170.078125,
          height: 42,
          position: { left: 441, top: 922 },
          text: "by Steve Robsky"
        }
      ]
    }
  },
  // 6
  {
    ...linearGradient,
    thumb: "/thumbs/19.png",
    initState: {
      size: { width: 1000, height: 1000 },
      config: {
        palette: ["#f9f9f9", "#ffffff"],
        direction: "left",
        angle: 200
      },
      insertedItems: [
        {
          id: 102,
          type: "object",
          width: 653,
          height: 711,
          showIframe: true,
          adaptation: subtleRib,
          configValues: { color: "#fcd633", mode: "vertical", intensity: 20 },
          position: { left: 345, top: 0 }
        },
        {
          id: 103,
          type: "text",
          config: {
            fontFamily: "Lato",
            fontSize: 34,
            padding: 10,
            letterSpacing: 0,
            color: "#000",
            backgroundColor: { r: 255, g: 255, b: 255, a: 0.5 },
            borderWidth: 1,
            isBold: true
          },
          width: 161.875,
          height: 96,
          position: { left: 120, top: 60 },
          text: "Design\nSystems"
        },
        {
          id: 104,
          type: "text",
          config: {
            fontFamily: "Lato",
            fontSize: 72,
            padding: 10,
            letterSpacing: 0,
            color: "#000",
            backgroundColor: { r: 255, g: 255, b: 255, a: 0 },
            borderWidth: 0,
            isBold: true
          },
          width: 620.234375,
          height: 257,
          position: { left: 121, top: 455 },
          text: "A comprehensive\nguide to\niconography"
        },
        {
          id: 5,
          type: "text",
          config: {
            fontFamily: "Lato",
            fontSize: 28,
            padding: 10,
            letterSpacing: 0,
            color: "#000",
            backgroundColor: { r: 255, g: 255, b: 255, a: 0 },
            borderWidth: 0,
            isBold: false
          },
          width: 205.21875,
          height: 50,
          position: { left: 123, top: 716 },
          text: "featured article"
        },
        {
          id: 6,
          type: "text",
          config: {
            fontFamily: "Lato",
            fontSize: 20,
            padding: 10,
            letterSpacing: 0,
            color: "#000",
            backgroundColor: { r: 255, g: 255, b: 255, a: 0 },
            borderWidth: 0,
            isBold: false
          },
          width: 170.078125,
          height: 42,
          position: { left: 441, top: 922 },
          text: "by Steve Robsky"
        }
      ]
    }
  },
  // 7
  {
    ...strings25,
    thumb: "/thumbs/15.png",
    thumbBackgroundSize: "cover",
    initState: {
      size: { width: 1000, height: 1000 },
      config: {
        palette: ["#d8f1ff", "#000"],
        sizePercent: [25, 39],
        randomValues: [0.39245358845393374]
      },
      insertedItems: [
        {
          id: 100,
          type: "text",
          config: {
            fontFamily: "Poppins",
            backgroundColor: { r: 255, g: 255, b: 255, a: 0 },
            color: "#000",
            fontSize: 50,
            padding: 3,
            borderWidth: 0
          },
          position: { left: 347.4672379032258, top: 386.1097110215054 },
          text: "create",
          width: 170.9719422043011,
          height: 59.72782258064516
        },
        {
          id: 101,
          type: "text",
          config: {
            fontFamily: "Poppins",
            backgroundColor: { r: 255, g: 255, b: 255, a: 0 },
            color: "#000",
            fontSize: 64,
            padding: 3,
            borderWidth: 0
          },
          position: { left: 344.77906586021504, top: 455.68716397849465 },
          text: "something",
          width: 350.44942876344084,
          height: 75.85685483870968
        },
        {
          id: 102,
          type: "text",
          config: {
            fontFamily: "Roboto",
            backgroundColor: { r: 255, g: 255, b: 255, a: 0 },
            color: "#000",
            isBold: true,
            fontSize: 69,
            padding: 3,
            borderWidth: 0
          },
          position: { left: 346.12315188172045, top: 544.0818212365591 },
          text: "unique",
          width: 232.08585349462365,
          height: 81.23319892473118
        }
      ]
    }
  },
  // 8
  {
    ...gradientWaves,
    thumb: "/thumbs/n13.png",
    thumbBackgroundSize: "cover",
    initState: {
      size: { width: 1000, height: 1000 },
      config: {
        palette: ["#ff9855", "#bb045d"],
        lines: 13,
        amplituteX: 148,
        amplituteY: 200,
        smoothness: 6,
        fill: true,
        randomValues: [0.5269907429385214, 0.44993152499044275]
      },
      insertedItems: []
    }
  },
  // 9
  {
    ...postmodern,
    thumb: "/thumbs/14.png",
    thumbBackgroundSize: "cover",
    initState: {
      size: { width: 1000, height: 1000 },
      config: {
        palette: ["#dec7f9", "#693e97", "#2a013e"],
        count: 100,
        lineWidth: 74,
        randomValues: [0.9799188025715417]
      },
      insertedItems: []
    }
  },
  // 10
  unfilledGradientWaves,
  // 11
  {
    ...chromaticLiquids,
    thumb: "/thumbs/b17.png",
    initState: {
      size: { width: 1000, height: 1000 },
      config: {
        palette: [
          "#1eaa89",
          "#60d1a3",
          "#9ef2c4",
          "#ffff76",
          "#7a84a3",
          "#7a84a3"
        ]
      }
    }
  },
  // 12
  {
    ...gradientWaves,
    thumb: "/thumbs/b16.png",
    initState: {
      size: { width: 1000, height: 1000 },
      config: {
        amplituteX: 60,
        amplituteY: 60,
        crazyness: true,
        fill: true,
        lines: 24,
        palette: ["#ad42a5", "#fad18f"],
        smoothness: 1,
        randomValues: [Math.random(), Math.random()]
      }
    }
  },
  // 13
  {
    ...fiberRibbons,
    thumb: "/thumbs/b15.png",
    initState: {
      size: { width: 700, height: 700 },
      config: {
        backgroundColor: "#ffffff",
        fov: 166,
        numLines: 100,
        palette: ["#9b50ed", "#69d5ff", "#ffbd6e", "#ff77bc"]
      }
    }
  },
  // 14
  {
    ...clipSpace3d,
    thumb: "/thumbs/b14.png",
    initState: {
      size: { width: 930, height: 930 },
      config: {
        bumpStrength: 88,
        objectColor: "#050504",
        objectShininess: 200,
        lightColor: "#ffffff",
        backgroundColor: "#ffd1d1",
        envPower: 2,
        envBlur: 0,
        camX: 0,
        camY: 2,
        camZ: -30,
        camZoom: 0
      }
    }
  },
  // 15
  {
    ...linearGradient,
    title: "multiple elements",
    author: "multiple authors",
    thumb: "/thumbs/b13.png",
    initState: {
      size: { width: 600, height: 500 },
      config: {
        angle: 200,
        direction: "custom_angle",
        palette: ["#c95c46", "#511414"]
      },
      insertedItems: [
        {
          id: 100,
          type: "object",
          showIframe: true,
          adaptation: gradientWaves,
          width: 571,
          height: 468,
          position: { left: 15, top: 16 },
          configValues: {
            amplituteX: 60,
            amplituteY: 60,
            fill: false,
            lines: 10,
            palette: ["#e9db6d", "#c95c46"],
            randomValues: [0.1329382981666447, 0.5229732095475299],
            smoothness: 10
          }
        }
      ]
    }
  },
  // 16
  {
    ...mesh,
    thumb: "/thumbs/b28.png",
    initState: {
      size: { width: 1000, height: 1000 },
      config: {
        distanceBetween: 7,
        palette: ["#fff", "#000"]
      }
    }
  },
  // 17
  { ...clipSpace3d, thumb: "/thumbs/b24.png" },
  // 18
  { ...blobmaker, thumb: "/thumbs/b22.png" },
  // 19
  {
    ...subtleRib,
    thumb: "/thumbs/b23.png",
    initState: {
      config: { color: "#c1bbf2" },
      size: { width: 600, height: 500 }
    }
  },
  // 20
  { ...trianglify, thumb: "/thumbs/b29.png" },
  // 21
  { ...particles, thumb: "/thumbs/b25.png" },
  // 22
  { ...gradientWaves, thumb: "/thumbs/b27.png" },
  // 23
  {
    ...gradientBubbles,
    thumb: "/thumbs/b26.png",
    initState: { config: {}, size: { width: 600, height: 500 } }
  },
  // 24
  { ...strings25 },
  // 25
  { ...mesh },
  // 26
  { ...fiberRibbons },
  // 27
  {
    ...steppedGradient,
    initState: { config: {}, size: { width: 600, height: 600 } }
  },
  // 28
  { ...perfectPurple },
  // 29
  {
    ...chromaticLiquids,
    initState: { config: {}, size: { width: 1000, height: 660 } }
  },
  // 30
  {
    ...fiberRectangles,
    initState: { config: {}, size: { width: 700, height: 500 } }
  },
  // 31
  {
    ...generateArt,
    initState: { config: {}, size: { width: 500, height: 500 } }
  },
  // 32
  { ...wallPattern },
  // 33
  {
    ...gradientBubbles,
    thumb: "/thumbs/b21.png",
    initState: {
      size: { width: 800, height: 800 },
      config: {
        palette: ["#1c004e", "#00aaff"],
        itemSize: 31,
        itemsNumInRow: 25,
        padding: 1,
        angle: 146,
        itemType: "circle",
        rounding: 20,
        randomValues: [0.34505942052567407]
      },
      insertedItems: []
    }
  },
  // 34
  {
    ...particles,
    thumb: "/thumbs/b20.png",
    initState: {
      size: { width: 600, height: 600 },
      config: {
        maxParticles: 200,
        palette: ["#f46c94", "#fedf35", "#ffffff"],
        sizeVariations: 24
      }
    }
  },
  // 35
  { ...linearGradient },
  // 36
  { ...postmodern },
  // 37
  {
    ...voronoi,
    initState: { config: {}, size: { width: 1000, height: 1000 } }
  },
  // 38
  {
    ...linearGradient,
    thumb: "/thumbs/38.png",
    initState: {
      size: { width: 1000, height: 1000 },
      config: { palette: ["#00040e", "#470090"], direction: "top", angle: 200 },
      insertedItems: [
        {
          id: 302,
          type: "object",
          showIframe: true,
          adaptation: gradientWaves,
          width: 1002.1029609690444,
          height: 341.7521870794078,
          position: { left: -0.9463324360699865, top: 318.703734858681 },
          configValues: {
            amplituteX: 200,
            amplituteY: 16,
            fill: false,
            lines: 10,
            palette: ["#4937ff", "#4937ff"],
            randomValues: [],
            smoothness: 22
          }
        },
        {
          id: 202,
          type: "object",
          width: 875.9883916554509,
          height: 303.98300807537015,
          showIframe: true,
          adaptation: voronoi,
          configValues: {
            palette: ["#20ff06", "#f9f9f9"],
            filled: true,
            lineWidth: 5,
            minMaxRadius: [2, 6]
          },
          position: { left: 61.67984522207268, top: 335.67462987886944 }
        },
        {
          id: 203,
          type: "text",
          hasCyrillic: false,
          config: {
            fontFamily: "Righteous",
            fontSize: 100,
            padding: 10,
            letterSpacing: 0,
            color: "#ffffff",
            backgroundColor: { r: 255, g: 255, b: 255, a: 0 },
            borderWidth: 0
          },
          width: 587.7145020188425,
          height: 128.9956258411844,
          position: { left: 201.14821668909826, top: 212.90376850605654 },
          text: "I don't know"
        },
        {
          id: 204,
          type: "text",
          hasCyrillic: false,
          config: {
            fontFamily: "Righteous",
            fontSize: 100,
            padding: 10,
            letterSpacing: 0,
            color: "#ffffff",
            backgroundColor: { r: 255, g: 255, b: 255, a: 0 },
            borderWidth: 0
          },
          width: 643.3378196500673,
          height: 128.9956258411844,
          position: { left: 181.33832436069986, top: 634.3581763122477 },
          text: "what this is..."
        }
      ]
    }
  },
  // 39
  {
    ...carpet,
    initState: { config: {}, size: { width: 1000, height: 1000 } }
  },
  // 40
  {
    ...gradientWaves,
    thumb: "/thumbs/40.png",
    initState: {
      size: { width: 1000, height: 1000 },
      config: {
        palette: ["#18faff", "#7b2dd6"],
        lines: 13,
        amplituteX: 58,
        amplituteY: 30,
        smoothness: 100,
        fill: true,
        randomValues: []
      },
      insertedItems: [
        {
          id: 302,
          type: "object",
          width: 994.5652173913043,
          height: 990.9420289855071,
          showIframe: true,
          adaptation: gradientWaves,
          configValues: {
            palette: ["#18faff", "#ffffff"],
            lines: 13,
            amplituteX: 10,
            amplituteY: 10,
            smoothness: 100,
            fill: false,
            randomValues: []
          },
          position: { left: 2.915534420289855, top: 3.87794384057971 }
        }
      ]
    }
  },
  // 41
  {
    ...linearGradient,
    thumb: "/thumbs/41.png",
    initState: {
      size: { width: 1000, height: 1000 },
      config: {
        palette: ["#ef76a7", "#d01200"],
        lines: 13,
        amplituteX: 58,
        amplituteY: 30,
        smoothness: 100,
        fill: true,
        randomValues: []
      },
      insertedItems: [
        {
          id: 302,
          type: "object",
          width: 994.5625,
          height: 994.5625,
          showIframe: true,
          adaptation: gradientWaves,
          configValues: {
            palette: ["#ffffff", "#d01200"],
            lines: 13,
            amplituteX: 36,
            amplituteY: 20,
            smoothness: 100,
            fill: false,
            randomValues: []
          },
          position: { left: 1.28125, top: 2.25 }
        },
        {
          id: 202,
          type: "text",
          hasCyrillic: false,
          config: {
            fontFamily: "Oswald",
            fontSize: 81,
            padding: 10,
            letterSpacing: 0,
            color: "#fefefe",
            backgroundColor: { r: 255, g: 255, b: 255, a: 0 },
            borderWidth: 0,
            hasCyrillic: true
          },
          width: 709.640625,
          height: 376,
          position: { left: 40.03125, top: 587.140625 },
          text:
            "я запускаю\nв проволочный космос\nсвой медный грош, \nувенчанный гербом\n"
        },
        {
          id: 304,
          type: "text",
          hasCyrillic: false,
          config: {
            fontFamily: "Barriecito",
            fontSize: 100,
            padding: 10,
            letterSpacing: 0,
            color: "#fefefe",
            backgroundColor: { r: 255, g: 255, b: 255, a: 0 },
            borderWidth: 0,
            hasCyrillic: true
          },
          width: 220,
          height: 130,
          position: { left: 716.640625, top: 28.21875 },
          text: "1987"
        },
        {
          id: 102,
          type: "text",
          hasCyrillic: false,
          config: {
            fontFamily: "Roboto Condensed",
            fontSize: 49,
            padding: 10,
            letterSpacing: 0,
            color: "#fefefe",
            backgroundColor: { r: 255, g: 255, b: 255, a: 0 },
            borderWidth: 0,
            hasCyrillic: true
          },
          width: 309.921875,
          height: 73,
          position: { left: 29, top: 32 },
          text: "Постскриптум"
        },
        {
          id: 103,
          type: "text",
          hasCyrillic: false,
          config: {
            fontFamily: "Roboto Condensed",
            fontSize: 35,
            padding: 10,
            letterSpacing: 0,
            color: "#fefefe",
            backgroundColor: { r: 255, g: 255, b: 255, a: 0 },
            borderWidth: 0,
            hasCyrillic: true
          },
          width: 236.515625,
          height: 58,
          position: { left: 32, top: 92 },
          text: "И. А. Бродский"
        }
      ]
    }
  },
  // 42
  {
    ...blank,
    thumb: "/thumbs/42.png",
    initState: {
      size: { width: 1000, height: 1000 },
      config: { transparent: false, color: "#ffffff" },
      insertedItems: [
        {
          id: 303,
          type: "object",
          width: 1052.528578528827,
          height: 1220.9865805168986,
          showIframe: true,
          adaptation: mesh,
          configValues: {
            withBackground: false,
            palette: ["#593c2e", "#ffcf2c"],
            color: "#000",
            distanceBetween: 17,
            randomValues: [0.9723743823562034]
          },
          position: { left: 87.66153081510934, top: -118.84940357852882 }
        },
        {
          id: 302,
          type: "object",
          width: 508.94632206759445,
          height: 1009.9403578528827,
          showIframe: true,
          adaptation: linearGradient,
          configValues: {
            palette: ["#fbcd33", "#bb384e"],
            direction: "custom_angle",
            angle: 200
          },
          position: { left: -1.8327534791252484, top: -3.789761431411531 }
        },
        {
          id: 202,
          type: "text",
          hasCyrillic: false,
          config: {
            fontFamily: "Seymour One",
            fontSize: 100,
            padding: 10,
            letterSpacing: 0,
            color: "#6b4a7a",
            backgroundColor: { r: 255, g: 255, b: 255, a: 0 },
            borderWidth: 0,
            hasCyrillic: true,
            isBold: true
          },
          width: 687.0961729622267,
          height: 129.28677932405566,
          position: { left: 122.26640159045725, top: 386.67992047713716 },
          text: "Хаос лиц"
        },
        {
          id: 102,
          type: "text",
          hasCyrillic: false,
          config: {
            fontFamily: "Seymour One",
            fontSize: 57,
            padding: 10,
            letterSpacing: 0,
            color: "#fbcd33",
            backgroundColor: { r: 255, g: 255, b: 255, a: 0 },
            borderWidth: 0,
            hasCyrillic: true,
            isBold: true
          },
          width: 739.5004970178926,
          height: 81.57306163021869,
          position: { left: 58.64811133200795, top: 492.04771371769385 },
          text: "и не видно тропы"
        },
        {
          id: 102,
          type: "text",
          hasCyrillic: false,
          config: {
            fontFamily: "Montserrat",
            fontSize: 33,
            padding: 10,
            letterSpacing: 0,
            color: "#fefefe",
            backgroundColor: { r: 255, g: 255, b: 255, a: 0 },
            borderWidth: 0,
            hasCyrillic: true,
            isBold: true
          },
          width: 266.49420529801324,
          height: 55.753311258278146,
          position: { left: 133.11258278145695, top: 915.8940397350993 },
          text: "И.А. Бродский"
        }
      ]
    }
  },
  // 43
  {
    ...linearGradient,
    thumb: "/thumbs/n43.png",
    initState: {
      size: { width: 1000, height: 1000 },
      config: { palette: ["#fbcac4", "#45618a"], direction: "top", angle: 200 },
      insertedItems: [
        {
          id: 302,
          type: "object",
          width: 994.984375,
          height: 994.984375,
          showIframe: true,
          adaptation: mesh,
          configValues: {
            withBackground: false,
            palette: ["#593c2e", "#ffcf2c"],
            color: "#ffffff",
            distanceBetween: 7,
            randomValues: [0.5307371650983657]
          },
          position: { left: 5.640625, top: 6.625 }
        }
      ]
    }
  },
  // 44
  {
    ...blank,
    thumb: "/thumbs/44.png",
    initState: {
      size: { width: 1080, height: 1080 },
      config: { transparent: false, color: "#ffffff" },
      insertedItems: [
        {
          id: 202,
          type: "object",
          width: 1011,
          height: 1025,
          showIframe: true,
          adaptation: trianglify,
          configValues: {
            palette: ["#ffffff", "#ffffff", "#ffffff", "#00ffc5"],
            cell_size: 72,
            variance: 100
          },
          position: { left: 44, top: 33 }
        },
        {
          id: 203,
          type: "text",
          hasCyrillic: false,
          config: {
            fontFamily: "Old Standard TT",
            fontSize: 67,
            padding: 10,
            letterSpacing: 0,
            color: "#000",
            backgroundColor: { r: 255, g: 255, b: 255, a: 0 },
            borderWidth: 0,
            hasCyrillic: true,
            isBold: true
          },
          width: 824.28125,
          height: 312,
          position: { left: 129, top: 377 },
          text:
            "Улиц недвижность идолья,\nкамни, выдолбы…\nЕсли бы их не видел я —\nчто я видел бы?"
        },
        {
          id: 102,
          type: "text",
          hasCyrillic: false,
          config: {
            fontFamily: "Vollkorn",
            fontSize: 37,
            padding: 10,
            letterSpacing: 0,
            color: "#000",
            backgroundColor: { r: 255, g: 255, b: 255, a: 0 },
            borderWidth: 0,
            hasCyrillic: true,
            isBold: true
          },
          width: 293.25,
          height: 60,
          position: { left: 133, top: 92 },
          text: "Дмитрий Быков"
        }
      ]
    }
  },
  // 45
  {
    ...simpleRipple,
    thumb: "/thumbs/45.png",
    initState: {
      size: { width: 1080, height: 1080 },
      config: {}
    }
  },
  // 46
  {
    ...hedgehog,
    thumb: "/thumbs/46.png",
    initState: {
      size: { width: 1080, height: 1080 },
      config: {}
    }
  },
  // 47
  {
    ...carpet,
    thumb: "/thumbs/47.png",
    initState: {
      size: { width: 1000, height: 1000 },
      config: {
        palette: ["#fff", "#256eb0", "#eca5b3"],
        rotate: 113,
        cellCount: 5,
        innerRectSide: 984
      },
      insertedItems: []
    }
  },
  // 48
  {
    ...blank,
    thumb: "/thumbs/48.png",
    initState: {
      size: { width: 1080, height: 1080 },
      config: { transparent: false, color: "#ffffff" },
      insertedItems: [
        {
          id: 302,
          type: "object",
          width: 1084,
          height: 562,
          showIframe: true,
          adaptation: trianglify,
          configValues: {
            palette: ["#fe0057", "#82003b", "#270b1d"],
            cell_size: 70,
            variance: 100
          },
          position: { left: 2, top: 2 }
        },
        {
          id: 303,
          type: "object",
          width: 1086,
          height: 522,
          showIframe: true,
          adaptation: trianglify,
          configValues: {
            palette: ["#000e1e", "#0316b0", "#001bff"],
            cell_size: 50,
            variance: 100
          },
          position: { left: 1, top: 570 }
        },
        {
          id: 304,
          type: "text",
          hasCyrillic: false,
          config: {
            fontFamily: "Oranienbaum",
            fontSize: 120,
            padding: 10,
            letterSpacing: 0,
            color: "#fefefe",
            backgroundColor: { r: 255, g: 255, b: 255, a: 0 },
            borderWidth: 0,
            isInline: false,
            lineHeight: 12,
            hasCyrillic: true,
            isBold: false
          },
          width: 455,
          height: 164,
          position: { left: 323, top: 156 },
          text: "Alter Ego"
        },
        {
          id: 305,
          type: "text",
          hasCyrillic: false,
          config: {
            fontFamily: "Oranienbaum",
            fontSize: 51,
            padding: 10,
            letterSpacing: 0,
            color: "#f9b7cd",
            backgroundColor: { r: 255, g: 255, b: 255, a: 0 },
            borderWidth: 0,
            isInline: false,
            lineHeight: 12,
            hasCyrillic: true,
            isBold: false
          },
          width: 449.171875,
          height: 81,
          position: { left: 324, top: 319 },
          text: "Men's clothing brand"
        },
        {
          id: 202,
          type: "object",
          width: 1082,
          height: 518,
          showIframe: true,
          adaptation: voronoi,
          configValues: {
            palette: ["#3449f7", "#000849"],
            filled: true,
            lineWidth: 5,
            minMaxRadius: [2, 4]
          },
          position: { left: 2, top: 573 }
        },
        {
          id: 203,
          type: "text",
          hasCyrillic: false,
          config: {
            fontFamily: "Lora",
            fontSize: 120,
            padding: 10,
            letterSpacing: 0,
            color: "#ffffff",
            backgroundColor: { r: 255, g: 255, b: 255, a: 0 },
            borderWidth: 0,
            isInline: false,
            lineHeight: 12
          },
          width: 305.609375,
          height: 164,
          position: { left: 388, top: 654 },
          text: "-70%"
        },
        {
          id: 204,
          type: "text",
          hasCyrillic: false,
          config: {
            fontFamily: "Oranienbaum",
            fontSize: 76,
            padding: 10,
            letterSpacing: 0,
            color: "#ffffff",
            backgroundColor: { r: 255, g: 255, b: 255, a: 0 },
            borderWidth: 0,
            isInline: false,
            lineHeight: 12,
            hasCyrillic: true
          },
          width: 398.109375,
          height: 111,
          position: { left: 353, top: 817 },
          text: "Ликвидация"
        },
        {
          id: 205,
          type: "text",
          hasCyrillic: false,
          config: {
            fontFamily: "Oranienbaum",
            fontSize: 52,
            padding: 10,
            letterSpacing: 0,
            color: "#ffffff",
            backgroundColor: { r: 255, g: 255, b: 255, a: 0 },
            borderWidth: 0,
            isInline: false,
            lineHeight: 12,
            hasCyrillic: true
          },
          width: 554.5625,
          height: 82,
          position: { left: 278, top: 924 },
          text: "Всей мужской коллекции"
        }
      ]
    }
  },
  // 49
  {
    ...hedgehog,
    thumb: "/thumbs/49.png",
    initState: {
      size: { width: 1080, height: 1080 },
      config: {
        withBackground: true,
        backgroundColor: "#105956",
        strokeColor: { r: "66", g: "205", b: "166", a: "0.62" },
        randomValues: [0.3390192027783483]
      },
      insertedItems: [
        {
          id: 202,
          type: "object",
          width: 540,
          height: 540,
          showIframe: true,
          adaptation: simpleRipple,
          configValues: {
            palette: ["#105956", "#105956"],
            itemsNum: 62,
            strokeWidth: 3,
            radius: 100,
            fullyFitInside: true
          },
          position: { left: 92.85726127320955, top: 38.85278514588859 }
        },
        {
          id: 203,
          type: "text",
          hasCyrillic: false,
          config: {
            fontFamily: "Oswald",
            fontSize: 73,
            padding: 10,
            letterSpacing: 0,
            color: "#ffffff",
            backgroundColor: { r: 249, g: 249, b: 249, a: 0 },
            borderWidth: 0,
            isInline: false,
            lineHeight: 12,
            hasCyrillic: true
          },
          width: 649.6875,
          height: 107.33753315649867,
          position: { left: 190.86206896551724, top: 243.85941644562334 },
          text: "Меньше — это больше"
        },
        {
          id: 204,
          type: "text",
          hasCyrillic: false,
          config: {
            fontFamily: "Oswald",
            fontSize: 40,
            padding: 10,
            letterSpacing: 0,
            color: "#ffffff",
            backgroundColor: { r: 249, g: 249, b: 249, a: 0 },
            borderWidth: 0,
            isInline: false,
            lineHeight: 12,
            hasCyrillic: true
          },
          width: 271.1190318302387,
          height: 114.49933687002653,
          position: { left: 199.8590848806366, top: 353.86024535809014 },
          text: "чистота формы\nв виде принципа"
        },
        {
          id: 205,
          type: "text",
          hasCyrillic: false,
          config: {
            fontFamily: "Roboto Condensed",
            fontSize: 27,
            padding: 10,
            letterSpacing: 0,
            color: "#ffffff",
            backgroundColor: { r: 249, g: 249, b: 249, a: 0 },
            borderWidth: 0,
            isInline: false,
            lineHeight: 12,
            hasCyrillic: true
          },
          width: 674.6195291777188,
          height: 51.47546419098143,
          position: { left: 211.09416445623341, top: 976.1762267904509 },
          text: "современные технологии способны загромоздить дизайн"
        }
      ]
    }
  },
  // 50
  {
    ...carpet,
    thumb: "thumbs/50.png",
    initState: {
      size: { width: 1000, height: 1000 },
      config: {
        palette: ["#fff", "#6f86d6", "#48c6ef"],
        rotate: 113,
        cellCount: 5,
        innerRectSide: 1352,
        randomValues: [0.47419615552278005]
      },
      insertedItems: [
        {
          id: 302,
          type: "text",
          hasCyrillic: false,
          config: {
            fontFamily: "Pacifico",
            fontSize: 51,
            padding: 33,
            letterSpacing: 2,
            color: "#3e3c3c",
            backgroundColor: { r: 255, g: 255, b: 255, a: 0 },
            borderWidth: 0,
            hasCyrillic: true,
            isBold: false
          },
          width: 249.54409814323608,
          height: 121.684350132626,
          position: { left: 768.215351458886, top: 883.9522546419098 },
          text: "И.А.Б."
        },
        {
          id: 102,
          type: "text",
          hasCyrillic: false,
          config: {
            fontFamily: "Rubik",
            fontSize: 60,
            padding: 33,
            letterSpacing: 2,
            color: "#3e3c3c",
            backgroundColor: { r: 255, g: 255, b: 255, a: 0.64 },
            borderWidth: 0,
            hasCyrillic: true,
            isBold: false,
            textAlign: "center"
          },
          width: 841.4704907161804,
          height: 260.9416445623342,
          position: { left: 88.85941644562334, top: 354.1114058355438 },
          text:
            "Остановись мгновение!\nТы не столь прекрасно,\nсколько ты неповторимо."
        }
      ]
    }
  },
  // 51
  {
    ...trianglify,
    thumb: "thumbs/n51.png",
    initState: {
      size: { width: 1080, height: 1080 },
      config: {
        palette: ["#ffee00", "#0085c7", "#150f49", "#070d40"],
        cell_size: 80,
        variance: 100
      },
      insertedItems: [
        {
          id: 203,
          type: "object",
          width: 1074,
          height: 1076,
          showIframe: true,
          adaptation: voronoi,
          configValues: {
            palette: ["#ffee00", "#0085c7", "#9cbaed"],
            filled: true,
            lineWidth: 5,
            minMaxRadius: [2, 3]
          },
          position: { left: 4, top: 0 }
        }
      ]
    }
  },
  // 52
  {
    ...linearGradient,
    thumb: "thumbs/52.png",
    initState: {
      size: { width: 1000, height: 1000 },
      config: {
        palette: ["#6d107e", "#f03358"],
        direction: "custom_angle",
        angle: 200
      },
      insertedItems: [
        {
          id: 301,
          type: "object",
          width: 1000,
          height: 1000,
          showIframe: true,
          adaptation: voronoi,
          configValues: {
            palette: ["#ffee00", "#f03358", "#cee1ff"],
            filled: true,
            lineWidth: 5,
            minMaxRadius: [9, 25]
          },
          position: { left: 3.3222591362126246, top: 3.3222591362126246 }
        },
        {
          id: 102,
          type: "object",
          width: 885.3820598006645,
          height: 784.0531561461794,
          showIframe: true,
          adaptation: simpleRipple,
          configValues: {
            palette: ["#ffffff", "#ffffff"],
            itemsNum: 32,
            strokeWidth: 3,
            radius: 100,
            fullyFitInside: true
          },
          position: { left: 61.461794019933556, top: 144.51827242524917 }
        },
        {
          id: 302,
          type: "text",
          hasCyrillic: false,
          config: {
            fontFamily: "Yanone Kaffeesatz",
            fontSize: 67,
            padding: 130,
            letterSpacing: 0,
            color: "#000",
            backgroundColor: "#ffffff",
            borderWidth: 0,
            borderRadius: 300,
            isInline: false,
            lineHeight: 12,
            hasCyrillic: true,
            textAlign: "center"
          },
          width: 599.9792358803987,
          height: 578.9036544850499,
          position: { left: 207.38164451827242, top: 243.64098837209303 },
          text: "Обе стороны \nмоей натуры \nобладали \nобщей памятью"
        }
      ]
    }
  },
  // 53
  {
    ...tatters,
    thumb: "thumbs/53.png",
    initState: {
      size: { width: 1000, height: 1000 },
      config: {}
    }
  },
  // 54
  {
    ...linearGradient,
    thumb: "thumbs/54.png",
    initState: {
      size: { width: 1000, height: 1000 },
      config: {
        palette: ["#ff9a8b", "#6148aa"],
        direction: "custom_angle",
        angle: 200
      },
      insertedItems: [
        {
          id: 502,
          type: "object",
          width: 994.5494186046512,
          height: 994.5494186046512,
          showIframe: true,
          adaptation: gradientWaves,
          configValues: {
            palette: ["#f6d365", "#fda085"],
            lines: 38,
            amplituteX: 36,
            amplituteY: 20,
            smoothness: 100,
            fill: false,
            randomValues: []
          },
          position: { left: 6.592607973421927, top: 7.552948504983389 }
        },
        {
          id: 102,
          type: "object",
          width: 1898.671096345515,
          height: 378.7375415282392,
          showIframe: true,
          adaptation: svgs[3],
          configValues: { palette: ["#F1EAB9", "#FF8C8C"] },
          position: { left: -611.295681063123, top: 823.9202657807309 }
        },
        {
          id: 103,
          type: "object",
          width: 1724.2524916943523,
          height: 343.8538205980067,
          showIframe: true,
          adaptation: svgs[3],
          configValues: { palette: ["#F1EAB9", "#FF8C8C"] },
          position: { left: -511.6279069767442, top: -124.58471760797343 }
        }
      ]
    }
  },
  // 55
  {
    ...trianglify,
    thumb: "thumbs/55.png",
    initState: {
      size: { width: 1000, height: 1000 },
      config: {
        palette: ["#453ff4", "#49b8e9", "#ffffff", "#fe96fc"],
        cell_size: 80,
        variance: 0
      },
      insertedItems: []
    }
  },
  // 56
  {
    ...clipSpace3d,
    thumb: "thumbs/56.png",
    initState: {
      size: { width: 1000, height: 1000 },
      config: {
        bumpStrength: 200,
        objectColor: "#3b2001",
        objectShininess: 29,
        lightColor: "#ff0000",
        backgroundColor: "#b7b7b7",
        envPower: 7,
        envBlur: 0,
        camX: 10,
        camY: 39,
        camZ: -15,
        camZoom: 7
      },
      insertedItems: []
    }
  },
  // 57
  {
    ...particles,
    thumb: "/thumbs/57.png",
    initState: {
      size: { width: 1000, height: 1000 },
      config: {
        maxParticles: 163,
        palette: ["#572949", "#fbda2b", "#ff8804"],
        sizeVariations: 18
      }
    }
  },
  // 58
  {
    ...linearGradient,
    thumb: "/thumbs/58.png",
    initState: {
      size: { width: 1000, height: 1000 },
      config: {
        palette: ["#7be4da", "#cefbee"],
        direction: "custom_angle",
        angle: 200
      },
      insertedItems: [
        {
          id: 204,
          type: "object",
          width: 995.9877938517178,
          height: 991.9755877034357,
          showIframe: true,
          adaptation: simpleRipple,
          configValues: {
            palette: ["#7be4da", "#015079"],
            itemsNum: 47,
            strokeWidth: 1,
            radius: 100,
            fullyFitInside: true
          },
          position: { left: 4.605560578661844, top: 5.594484629294755 }
        },
        {
          id: 202,
          type: "object",
          width: 981.9168173598553,
          height: 987.3417721518987,
          showIframe: true,
          adaptation: simpleRipple,
          configValues: {
            palette: ["#7be4da", "#fbfdff"],
            itemsNum: 2,
            strokeWidth: 21,
            radius: 100,
            fullyFitInside: true
          },
          position: { left: 11.415009041591318, top: 7.826627486437612 }
        }
      ]
    }
  },
  // 59
  {
    ...clipSpace3d,
    thumb: "/thumbs/59.png",
    initState: {
      size: { width: 1000, height: 1000 },
      config: {
        bumpStrength: 200,
        objectColor: "#ebc4c4",
        objectShininess: 12,
        lightColor: "#ee754e",
        backgroundColor: "#ffcece",
        envPower: 2,
        envBlur: 0,
        camX: -15,
        camY: 0,
        camZ: -50,
        camZoom: 3
      },
      insertedItems: []
    }
  },
  // 60
  {
    ...chromaticLiquids,
    thumb: "/thumbs/60.png",
    initState: {
      size: { width: 1080, height: 607 },
      config: {
        palette: [
          "#e87a7a",
          "#8c4f7f",
          "#8c75a5",
          "#babfd6",
          "#8c75a5",
          "#babfd6"
        ]
      },
      insertedItems: [
        {
          id: 102,
          type: "text",
          hasCyrillic: false,
          config: {
            fontFamily: "Roboto Condensed",
            fontSize: 72,
            padding: 10,
            letterSpacing: 0,
            color: "#591f4d",
            backgroundColor: { r: 255, g: 255, b: 255, a: 0 },
            borderWidth: 0,
            isInline: false,
            lineHeight: 10,
            hasCyrillic: true,
            textAlign: "right",
            isBold: true,
            isItalic: true
          },
          width: 390.875,
          height: 164,
          position: { left: 584, top: 263.5 },
          text: "конструктор\nдизайна"
        },
        {
          id: 104,
          type: "text",
          hasCyrillic: false,
          config: {
            fontFamily: "Roboto Condensed",
            fontSize: 64,
            padding: 10,
            letterSpacing: 0,
            color: "#ffffff",
            backgroundColor: { r: 255, g: 255, b: 255, a: 0 },
            borderWidth: 0,
            isInline: false,
            lineHeight: 10,
            hasCyrillic: true,
            textAlign: "left",
            isBold: true,
            isItalic: true
          },
          width: 477.78125,
          height: 148,
          position: { left: 94, top: 139.5 },
          text: "легкий\nв использовании"
        }
      ]
    }
  },
  // 61
  {
    ...linearGradient,
    title: "multiple elements",
    author: "multiple authors",
    thumb: "/thumbs/61.png",
    initState: {
      size: { width: 1000, height: 1000 },
      config: {
        palette: ["#7be4da", "#094a6f"],
        direction: "custom_angle",
        angle: 200
      },
      insertedItems: [
        {
          id: 104,
          type: "object",
          width: 996,
          height: 992,
          showIframe: true,
          adaptation: simpleRipple,
          configValues: {
            palette: ["#7be4da", "#094a6f"],
            itemsNum: 47,
            strokeWidth: 1,
            radius: 100,
            fullyFitInside: true
          },
          position: { left: 6.089743589743589, top: 7.091346153846153 }
        },
        {
          id: 202,
          type: "object",
          width: 548.9983974358975,
          height: 562.9807692307692,
          showIframe: true,
          adaptation: simpleRipple,
          configValues: {
            palette: ["#1bfbe8", "#005482"],
            itemsNum: 8,
            strokeWidth: 4,
            radius: 100,
            fullyFitInside: true
          },
          position: { left: 228.125, top: 219.1105769230769 }
        },
        {
          id: 103,
          type: "object",
          width: 725.6410256410256,
          height: 725.6410256410256,
          showIframe: true,
          adaptation: svgs[1],
          configValues: {
            palette: [{ r: 255, g: 150, b: 101, a: 0 }, "#f90005"]
          },
          position: { left: 135.89743589743588, top: 158.97435897435898 }
        },
        {
          id: 102,
          type: "object",
          width: 500,
          height: 500,
          showIframe: true,
          adaptation: svgs[0],
          configValues: {
            palette: [{ r: 255, g: 150, b: 101, a: 0 }, "#ff0003"]
          },
          position: { left: 35.8974358974359, top: 264.1025641025641 }
        }
      ]
    }
  },
  // 62
  {
    ...gradientWaves,
    thumb: "/thumbs/62.png",
    initState: {
      size: { width: 700, height: 700 },
      config: {
        amplituteX: 150,
        amplituteY: 30,
        crazyness: false,
        fill: true,
        lines: 70,
        palette: ["#fde8c8", "#ff7f92"],
        smoothness: 98,
        randomValues: []
      },
      insertedItems: []
    }
  },
  // 63
  {
    ...fiberRibbons,
    thumb: "/thumbs/7.png",
    initState: {
      size: { width: 1000, height: 1000 },
      config: {
        backgroundColor: "#324444",
        palette: ["#A2CCB6", "#FCEEB5", "#fff", "#EE786E"],
        numLines: 94,
        fov: 75
      },
      insertedItems: [
        {
          id: 100,
          type: "text",
          config: {
            backgroundColor: { r: 255, g: 255, b: 255, a: 0 },
            color: "#ffffff",
            fontFamily: "Playfair Display",
            fontSize: 220,
            letterSpacing: 0,
            padding: 10,
            borderWidth: 0
          },
          position: { left: 166.125, top: 132.65625 },
          text: "React\nThree\nFiber",
          width: 600.8125,
          height: 746
        }
      ]
    }
  },
  // 64
  {
    ...strings25,
    thumb: "/thumbs/15.png",
    thumbBackgroundSize: "cover",
    initState: {
      size: { width: 1000, height: 1000 },
      config: {
        palette: ["#d8f1ff", "#000"],
        sizePercent: [25, 39],
        randomValues: [0.39245358845393374]
      },
      insertedItems: [
        {
          id: 100,
          type: "text",
          config: {
            fontFamily: "Poppins",
            backgroundColor: { r: 255, g: 255, b: 255, a: 0 },
            color: "#000",
            fontSize: 50,
            padding: 3,
            borderWidth: 0
          },
          position: { left: 347.4672379032258, top: 386.1097110215054 },
          text: "create",
          width: 170.9719422043011,
          height: 59.72782258064516
        },
        {
          id: 101,
          type: "text",
          config: {
            fontFamily: "Poppins",
            backgroundColor: { r: 255, g: 255, b: 255, a: 0 },
            color: "#000",
            fontSize: 64,
            padding: 3,
            borderWidth: 0
          },
          position: { left: 344.77906586021504, top: 455.68716397849465 },
          text: "something",
          width: 350.44942876344084,
          height: 75.85685483870968
        },
        {
          id: 102,
          type: "text",
          config: {
            fontFamily: "Roboto",
            backgroundColor: { r: 255, g: 255, b: 255, a: 0 },
            color: "#000",
            isBold: true,
            fontSize: 69,
            padding: 3,
            borderWidth: 0
          },
          position: { left: 346.12315188172045, top: 544.0818212365591 },
          text: "unique",
          width: 232.08585349462365,
          height: 81.23319892473118
        }
      ]
    }
  },
  // 65
  {
    ...linearGradient,
    thumb: "/thumbs/65.png",
    initState: {
      size: { width: 1000, height: 1000 },
      config: {
        palette: ["#ffffff", "#fdf9ce"],
        direction: "custom_angle",
        angle: 200
      },
      insertedItems: [
        {
          id: 200,
          type: "object",
          showIframe: true,
          adaptation: linearGradient,
          width: 943.9421338155514,
          height: 943.9421338155514,
          position: { left: 27.2377938517179, top: 30.571880650994572 },
          configValues: {
            angle: 31,
            direction: "custom_angle",
            palette: ["#ffd2be", "#fdf9ce"]
          }
        },
        {
          id: 201,
          type: "object",
          showIframe: true,
          adaptation: gradientWaves,
          width: 885.7368896925858,
          height: 888.4211121157323,
          position: { left: 54.277802893309214, top: 61.11550632911392 },
          configValues: {
            amplituteX: 150,
            amplituteY: 111,
            fill: false,
            lines: 21,
            palette: ["#cf91f9", "#fb8ea8"],
            randomValues: [0.3417302595458822, 0.08588410509903688],
            smoothness: 67
          }
        },
        {
          type: "object",
          width: 238.69801084990956,
          height: 254.97287522603978,
          showIframe: true,
          adaptation: voronoi,
          configValues: {
            palette: ["#fb8ea8", "#fdf9ce"],
            filled: true,
            lineWidth: 5,
            minMaxRadius: [1, 114]
          },
          id: 102,
          position: { left: 31.645569620253163, top: 288.4267631103074 }
        },
        {
          type: "object",
          width: 356.2386980108499,
          height: 365.2802893309222,
          showIframe: true,
          adaptation: voronoi,
          configValues: {
            palette: ["#fb8ea8", "#fdf9ce"],
            filled: true,
            lineWidth: 5,
            minMaxRadius: [1, 114]
          },
          id: 103,
          position: { left: 348.1012658227848, top: 348.1012658227848 }
        },
        {
          type: "object",
          width: 254.97287522603978,
          height: 247.7396021699819,
          showIframe: true,
          adaptation: voronoi,
          configValues: {
            palette: ["#fb8ea8", "#fdf9ce"],
            filled: true,
            lineWidth: 5,
            minMaxRadius: [1, 114]
          },
          id: 104,
          position: { left: 707.9566003616636, top: 715.1898734177215 }
        }
      ]
    }
  },
  // 66
  {
    ...mesh,
    thumb: "/thumbs/66.png",
    initState: {
      size: { width: 1000, height: 1000 },
      config: {
        withBackground: true,
        palette: ["#496519", "#ffcf2c"],
        color: "#ffffff",
        distanceBetween: 10,
        randomValues: [0.6312924668231186]
      },
      insertedItems: [
        {
          id: 503,
          type: "object",
          width: 1052.49773960217,
          height: 1220.9821428571427,
          showIframe: true,
          adaptation: mesh,
          configValues: {
            withBackground: false,
            palette: ["#593c2e", "#ffcf2c"],
            color: "#ffffff",
            distanceBetween: 17,
            randomValues: [0.9723743823562034]
          },
          position: { left: 93.26966546112115, top: -113.21767631103073 }
        },
        {
          id: 502,
          type: "object",
          width: 508.9285714285714,
          height: 1009.9174954792043,
          showIframe: true,
          adaptation: linearGradient,
          configValues: {
            palette: ["#fbcd33", "#fe002c"],
            direction: "custom_angle",
            angle: 200
          },
          position: { left: -3.4753616636528024, top: -1.8083182640144664 }
        },
        {
          type: "object",
          width: 408.9907323688969,
          height: 408.9907323688969,
          showIframe: true,
          adaptation: svgs[2],
          configValues: { palette: ["#ffffff", "#fbcd33"] },
          id: 202,
          position: { left: 309.67450271247736, top: 288.79407775768533 }
        },
        {
          type: "object",
          width: 262.997287522604,
          height: 262.997287522604,
          showIframe: true,
          adaptation: svgs[2],
          configValues: {
            palette: ["#ffffff", { r: 251, g: 205, b: 51, a: 0 }]
          },
          id: 203,
          position: { left: 588.2120253164557, top: 183.5160488245931 }
        },
        {
          type: "object",
          width: 234.99660940325495,
          height: 234.99660940325495,
          showIframe: true,
          adaptation: svgs[2],
          configValues: { palette: ["#ffffff", "#fbcd33"] },
          id: 204,
          position: { left: 211.5167269439421, top: 578.0402350813742 }
        }
      ]
    }
  },
  // 67
  {
    ...linearGradient,
    thumb: "/thumbs/67.png",
    title: "multiple elements",
    author: "multiple authors",
    initState: {
      size: { width: 1080, height: 1080 },
      config: {
        palette: ["#ffffff", "#e0e0e0"],
        direction: "custom_angle",
        angle: 163
      },
      insertedItems: [
        {
          type: "object",
          width: 1074.2451154529308,
          height: 796.0923623445826,
          showIframe: true,
          adaptation: svgs[8],
          configValues: { color: "#000" },
          id: 102,
          position: { left: 0.9591474245115453, top: 144.83126110124334 }
        }
      ]
    }
  },
  // 68
  {
    ...gradientBubbles,
    thumb: "/thumbs/68.png",
    initState: {
      size: { width: 600, height: 600 },
      config: {
        palette: ["#eeb1a9", "#feedcf"],
        itemSize: 10,
        itemsNumInRow: 16,
        padding: 50,
        angle: 360,
        itemType: "circle",
        rounding: 20,
        randomValues: []
      },
      insertedItems: [
        {
          type: "object",
          width: 511.54529307282417,
          height: 495.5595026642984,
          showIframe: true,
          adaptation: simpleRipple,
          configValues: {
            palette: ["#eeb1a9", "#eeb1a9"],
            itemsNum: 10,
            strokeWidth: 3,
            radius: 100
          },
          id: 202,
          position: { left: 47.42451154529307, top: 204.08525754884548 }
        },
        {
          id: 301,
          width: 650.088809946714,
          height: 467.8507992895204,
          showIframe: true,
          type: "object",
          position: { left: -71.43650088809946, top: 192.46225577264653 },
          adaptation: blobmaker,
          configValues: {
            angle: 86,
            complexity: 11,
            contrast: 4,
            palette: ["#feedcf", "#eeb1a9"],
            randomValues: [
              0.687925776574627,
              0.5375583491513425,
              0.5988404307482571,
              0.704912023920562,
              0.7946503042888042,
              0.3338446814701215,
              0.4742463712765448,
              0.7740826505264262,
              0.8045870599949538,
              0.21409252151702107
            ]
          }
        },
        {
          config: {
            backgroundColor: { r: 255, g: 255, b: 255, a: 0 },
            borderWidth: 0,
            color: "#dbff18",
            fontFamily: "Rubik Mono One",
            fontSize: 34,
            letterSpacing: 0,
            padding: 10,
            hasCyrillic: true,
            lineHeight: 15
          },
          id: 302,
          type: "text",
          position: { left: 81.52753108348135, top: 360.2131438721137 },
          text: "когда \nвыдуманный \nмир богаче\n",
          width: 337.8496891651865,
          height: 170.24866785079928
        },
        {
          type: "object",
          width: 300,
          height: 407.98734458259327,
          showIframe: true,
          adaptation: svgs[6],
          configValues: { palette: ["#feedcf", "#eeb1a9"] },
          id: 203,
          position: { left: 3.730017761989343, top: -225.39964476021314 }
        },
        {
          type: "object",
          width: 300,
          height: 407.98734458259327,
          showIframe: true,
          adaptation: svgs[6],
          configValues: { palette: ["#feedcf", "#eeb1a9"] },
          id: 204,
          position: { left: 302.13143872113676, top: -227.5310834813499 }
        },
        {
          type: "text",
          hasCyrillic: false,
          config: {
            fontFamily: "Faster One",
            fontSize: 39,
            padding: 10,
            letterSpacing: 0,
            color: "#feedcf",
            backgroundColor: { r: 255, g: 255, b: 255, a: 0 },
            borderWidth: 0,
            isInline: false,
            lineHeight: 12,
            isBold: false
          },
          id: 205,
          width: 327.4589253996447,
          height: 65.80817051509769,
          position: { left: 141.20781527531082, top: -23.97868561278863 },
          text: "adaptiff.com"
        },
        {
          config: {
            backgroundColor: { r: 255, g: 255, b: 255, a: 0 },
            borderWidth: 0,
            color: "#dbff18",
            fontFamily: "Rubik Mono One",
            fontSize: 34,
            letterSpacing: 4,
            padding: 10,
            hasCyrillic: false,
            lineHeight: 13
          },
          id: 102,
          type: "text",
          position: { left: 78.3303730017762, top: 515.8081705150977 },
          text: "реального",
          width: 316.0690497335701,
          height: 63.676731793960926
        }
      ]
    }
  },
  // 69
  {
    ...linearGradient,
    thumb: "/thumbs/69.png",
    initState: {
      size: { width: 1080, height: 1080 },
      config: {
        palette: ["#fddabe", "#fda6f0"],
        direction: "custom_angle",
        angle: 200
      },
      insertedItems: [
        {
          type: "object",
          width: 636.8738898756661,
          height: 713.6056838365897,
          showIframe: true,
          adaptation: linearGradient,
          configValues: {
            palette: ["#ffffff", "#d7e4fb"],
            direction: "custom_angle",
            angle: 191
          },
          id: 102,
          position: { left: 185.11545293072825, top: 169.76909413854352 }
        },
        {
          type: "object",
          width: 113.17939609236235,
          height: 224.44049733570162,
          showIframe: true,
          adaptation: svgs[9],
          configValues: { palette: ["#ffbef4", "#ffbef4"] },
          id: 103,
          position: { left: 269.52042628774427, top: 68.09946714031972 }
        },
        {
          type: "object",
          width: 63.30373001776199,
          height: 176.48312611012435,
          showIframe: true,
          adaptation: linearGradient,
          configValues: {
            palette: ["#fedbbd", "#fedbbd"],
            direction: "custom_angle",
            angle: 200
          },
          id: 104,
          position: { left: 267.60213143872113, top: 795.133214920071 }
        },
        {
          type: "text",
          hasCyrillic: false,
          config: {
            fontFamily: "Open Sans",
            fontSize: 40,
            padding: 10,
            letterSpacing: 0,
            color: "#000",
            backgroundColor: { r: 255, g: 255, b: 255, a: 0 },
            borderWidth: 0,
            isInline: false,
            lineHeight: 12,
            isUnderlined: true
          },
          id: 105,
          width: 319.27619893428067,
          height: 67.9196269982238,
          position: { left: 378.8632326820604, top: 915.9857904085259 },
          text: "Neō Wax Bloom"
        },
        {
          type: "object",
          width: 46.03907637655418,
          height: 281.98934280639435,
          showIframe: true,
          adaptation: linearGradient,
          configValues: {
            palette: ["#ffb9c9", "#ffb9c9"],
            direction: "custom_angle",
            angle: 200
          },
          id: 106,
          position: { left: 866.1101243339255, top: -39.32504440497336 }
        }
      ]
    }
  },
  // 70
  {
    ...linearGradient,
    title: "painted shapes",
    thumb: "/thumbs/70.png",
    initState: {
      size: { width: 1080, height: 1080 },
      config: {
        palette: ["#ffffff", "#eee9d6"],
        direction: "custom_angle",
        angle: 201
      },
      insertedItems: [
        {
          type: "object",
          width: 621.1764705882354,
          height: 407.64705882352945,
          showIframe: true,
          adaptation: svgs[41],
          configValues: { color: "#f8c6c5" },
          position: { left: 709.4117647058823, top: 88.23529411764706 },
          id: 302,
          rotation: -368
        },
        {
          type: "object",
          width: 875.2941176470589,
          height: 490.5882352941177,
          showIframe: true,
          adaptation: svgs[46],
          configValues: { color: "#c5dda9" },
          position: { left: 289.4117647058824, top: -217.05882352941177 },
          id: 303,
          rotation: 179
        },
        {
          type: "object",
          width: 291.1764705882353,
          height: 171.1764705882353,
          showIframe: true,
          adaptation: svgs[45],
          configValues: { color: "#ffffff" },
          position: { left: 571.7647058823529, top: -104.11764705882354 },
          id: 304,
          rotation: 26
        },
        {
          type: "text",
          hasCyrillic: false,
          config: {
            fontFamily: "Oswald",
            fontSize: 60,
            padding: 34,
            letterSpacing: 0,
            color: "#1d1d1d",
            backgroundColor: { r: 238, g: 233, b: 214, a: 0 },
            borderWidth: 0,
            isInline: false,
            lineHeight: 12,
            hasCyrillic: true
          },
          id: 202,
          width: 928.1801470588235,
          height: 138.58455882352942,
          position: { left: 88.86948529411765, top: 841.40625 },
          text: "Design your every day with art you love."
        },
        {
          type: "object",
          width: 483.5294117647059,
          height: 317.6470588235294,
          showIframe: true,
          adaptation: svgs[46],
          configValues: { color: "#ffffff" },
          position: { left: -158.8235294117647, top: 305.29411764705884 },
          id: 305,
          rotation: -323
        },
        {
          type: "object",
          width: 578.8235294117648,
          height: 660,
          showIframe: true,
          adaptation: svgs[42],
          configValues: { color: "#fccf3d" },
          position: { left: -236.47058823529412, top: -208.23529411764707 },
          id: 402,
          rotation: 0
        },
        {
          type: "object",
          width: 245.29411764705884,
          height: 540,
          showIframe: true,
          adaptation: svgs[48],
          configValues: { color: "#398368" },
          position: { left: -151.76470588235296, top: -100.58823529411765 },
          id: 306,
          rotation: 0
        },
        {
          type: "object",
          width: 35.294117647058826,
          height: 30,
          showIframe: true,
          adaptation: svgs[50],
          configValues: { color: "#398368" },
          position: { left: 215.29411764705884, top: 552.3529411764706 },
          id: 307,
          rotation: 0
        },
        {
          type: "object",
          width: 14.117647058823529,
          height: 14.117647058823529,
          showIframe: true,
          adaptation: svgs[51],
          configValues: { color: "#398368" },
          position: { left: 199.41176470588235, top: 592.9411764705883 },
          id: 308,
          rotation: 0
        },
        {
          type: "text",
          hasCyrillic: false,
          config: {
            fontFamily: "Oswald",
            fontSize: 39,
            padding: 20,
            letterSpacing: 0,
            color: "#000000",
            backgroundColor: { r: 238, g: 233, b: 214, a: 0 },
            borderWidth: 0,
            isInline: false,
            lineHeight: 12,
            hasCyrillic: true
          },
          id: 204,
          width: 195.52389705882354,
          height: 85.86397058823529,
          position: { left: 466.81985294117646, top: 345.88235294117646 },
          text: "Inspired by"
        },
        {
          type: "text",
          hasCyrillic: false,
          config: {
            fontFamily: "Fira Sans Extra Condensed",
            fontSize: 100,
            padding: 20,
            letterSpacing: 0,
            color: "#127e56",
            backgroundColor: { r: 238, g: 233, b: 214, a: 0 },
            borderWidth: 0,
            isInline: false,
            lineHeight: 12,
            hasCyrillic: true,
            isItalic: true,
            isBold: true
          },
          id: 102,
          width: 354.1544117647059,
          height: 158.21691176470588,
          position: { left: 381.1764705882353, top: 492.3529411764706 },
          text: "society6"
        },
        {
          type: "object",
          width: 245.29411764705884,
          height: 540,
          showIframe: true,
          adaptation: svgs[48],
          configValues: { color: "#ffffff" },
          position: { left: 933.5294117647059, top: 155.29411764705884 },
          id: 103,
          rotation: 0
        },
        {
          type: "object",
          width: 564.7058823529412,
          height: 3.5294117647058822,
          showIframe: true,
          adaptation: svgs[53],
          configValues: {
            palette: [
              { r: 6, g: 6, b: 6, a: 0 },
              { r: 64, g: 64, b: 64, a: 0.64 }
            ],
            angle: 0
          },
          position: { left: 277.05882352941177, top: 776.4705882352941 },
          id: 104,
          rotation: 0
        }
      ]
    }
  },
  // 71
  {
    ...linearGradient,
    thumb: "/thumbs/71.png",
    initState: {
      size: { width: 1080, height: 1080 },
      config: {
        palette: ["#6148aa", "#ff9a8b"],
        direction: "custom_angle",
        angle: 200
      },
      insertedItems: [
        {
          type: "object",
          width: 1088.8235294117646,
          height: 1083.5294117647059,
          showIframe: true,
          adaptation: "gradient_waves",
          configValues: {
            palette: ["#ff0099", "#ffe000"],
            lines: 11,
            amplituteX: 46,
            amplituteY: 60,
            smoothness: 4,
            fill: false,
            randomValues: []
          },
          position: { left: -5.294117647058823, top: -1.7647058823529411 },
          id: 102,
          rotation: 0
        },
        {
          type: "object",
          width: 1849.4117647058824,
          height: 587.6470588235294,
          showIframe: true,
          adaptation: svgs[3],
          configValues: { palette: ["#6148aa", "#e7a044"], angle: 0 },
          position: { left: -635.2941176470588, top: -206.47058823529412 },
          id: 103,
          rotation: 0
        },
        {
          type: "object",
          width: 540,
          height: 540,
          showIframe: true,
          adaptation: svgs[1],
          configValues: {
            palette: [{ r: "187", g: "239", b: "209", a: "0.16" }, "#e7a044"],
            angle: 0
          },
          position: { left: -266.47058823529414, top: 321.1764705882353 },
          id: 107,
          rotation: 0
        },
        {
          type: "object",
          width: 254.11764705882354,
          height: 254.11764705882354,
          showIframe: true,
          adaptation: svgs[1],
          configValues: {
            palette: [{ r: "187", g: "239", b: "209", a: "0.16" }, "#e7a044"],
            angle: 0
          },
          position: { left: 977.6470588235294, top: 188.82352941176472 },
          id: 108,
          rotation: 0
        },
        {
          type: "object",
          width: 243.52941176470588,
          height: 236.47058823529412,
          showIframe: true,
          adaptation: svgs[1],
          configValues: {
            palette: [{ r: "187", g: "239", b: "209", a: "0.16" }, "#e7a044"],
            angle: 0
          },
          position: { left: 324.70588235294116, top: 670.5882352941177 },
          id: 109,
          rotation: 0
        },
        {
          type: "object",
          width: 1849.4117647058824,
          height: 587.6470588235294,
          showIframe: true,
          adaptation: svgs[3],
          configValues: { palette: ["#6148aa", "#e7a044"], angle: 0 },
          position: { left: -12.352941176470589, top: 566.4705882352941 },
          id: 104,
          rotation: 0
        },
        {
          type: "object",
          width: 305.29411764705884,
          height: 305.29411764705884,
          showIframe: true,
          adaptation: svgs[1],
          configValues: {
            palette: [{ r: 187, g: 239, b: 209, a: 0 }, "#e7a044"],
            angle: 0
          },
          position: { left: 760.5882352941177, top: 335.29411764705884 },
          id: 110,
          rotation: -157
        }
      ]
    }
  }
  // { ...cells },
  // { ...fog },
];

// adaptation: svgs[(.*)],
// adaptation: svgs[$1],
