import React from "react";
import MiniCard from "../MiniCard/MiniCard";
import gradientWaves from "../_adaptationConfigs/gradientWaves";
import mesh from "../_adaptationConfigs/mesh";
import particles from "../_adaptationConfigs/particles";
import chromaticLiquids from "../_adaptationConfigs/chromatic_liquids";
import gradientBubbles from "../_adaptationConfigs/gradient_bubbles";

import s from "./Presets.module.css";

const cards = [
  {
    ...gradientWaves,
    thumbs: ["/preset_thumbs/1.png"],
    thumbWidth: 130,
    initState: {
      size: { width: 500, height: 500 },
      config: {
        amplituteX: 60,
        amplituteY: 60,
        crazyness: true,
        fill: true,
        lines: 24,
        palette: ["#ad42a5", "#fad18f"],
        smoothness: 1
      }
    }
  },
  {
    ...mesh,
    thumbs: ["/preset_thumbs/2.png"],
    thumbWidth: 130,
    initState: {
      size: { width: 2000, height: 2000 },
      config: {
        distanceBetween: 7,
        palette: ["#fff", "#000"]
      }
    }
  },
  {
    ...chromaticLiquids,
    thumbs: ["/preset_thumbs/4.png"],
    thumbWidth: 197,
    initState: {
      size: { width: 1000, height: 660 },
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
  {
    ...gradientWaves,
    thumbs: ["/preset_thumbs/6.png"],
    thumbWidth: 225,
    initState: {
      size: { width: 1040, height: 600 },
      config: {
        amplituteX: 300,
        amplituteY: 30,
        crazyness: false,
        fill: false,
        lines: 100,
        palette: ["#ff0099", "#ffe000"],
        smoothness: 17
      }
    }
  },
  {
    ...particles,
    thumbs: ["/preset_thumbs/3.png"],
    thumbWidth: 65,
    initState: {
      size: { width: 300, height: 600 },
      config: {
        maxParticles: 79,
        palette: ["#f46c94", "#fedf35", "#ffffff"],
        sizeVariations: 24
      }
    }
  },
  {
    ...gradientBubbles,
    thumbs: ["/preset_thumbs/5.png"],
    thumbWidth: 130,
    initState: {
      size: { width: 800, height: 800 },
      config: {
        angle: 146,
        itemSize: 32,
        itemsNumInRow: 25,
        padding: 1,
        palette: ["#6f1fff", "#ffffff"],
        withRandomness: true
      }
    }
  }
];

export default () => {
  return (
    <div className={s["root"]}>
      {cards.map((card, index) => (
        <MiniCard key={index} mode="preset" {...card} />
      ))}
    </div>
  );
};
