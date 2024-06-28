"use client";
import React, { useRef } from "react";

import { motion, useInView, useScroll, useTransform } from "framer-motion";

export default function SectionFour() {
  const splitContentRef = useRef(null);
  const imageRef = useRef(null);

  const splitContentInView = useInView(splitContentRef, { once: false });
  const imageInView = useInView(imageRef, { once: false });

  const { scrollYProgress } = useScroll({
    target: imageRef,
    offset: ["start end", "end start"],
  });

  const translateY = useTransform(scrollYProgress, [0, 1], ["30%", "-20%"]);
  const scale = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 1]);

  return (
    <div
      data-w-id="382e9b1c-42b3-dd6e-6096-78ad4da7309b"
      className="section specs-2">
      <div className="container-default w-container">
        <div className="specs-2-wrapper">
          <motion.div
            ref={splitContentRef}
            data-w-id="5a853f01-9e50-3c92-e576-c36e34aa5bd6"
            initial={{ opacity: 0, scale: 0.6 }}
            animate={{
              opacity: splitContentInView ? 1 : 0,
              scale: splitContentInView ? 1 : 0.6,
            }}
            transition={{ duration: 1 }}
            className="split-content specs-1">
            <h2 className="greenify">Volume Order Blocks</h2>
            <p className="paragraph specs-1">
              Our advanced order block analysis pinpoints high-demand zones with
              detailed volume data, revealing potential inflection points in the
              market
            </p>
            <div className="specs-wrapper">
              <div className="spec-wrapper">
                <div className="image-wrapper spec-icon">
                  <img
                    src="images/654f782526999f3fd63410d3_stratify_icon_check_37x37.png"
                    alt=""
                    className="image spec-icon"
                  />
                </div>
                <div className="paragraph-medium specs">
                  Pinpoint high-de
                  <motion.div
                    ref={splitContentRef}
                    data-w-id="5a853f01-9e50-3c92-e576-c36e34aa5bd6"
                    initial={{ opacity: 0, scale: 0.6 }}
                    animate={{
                      opacity: splitContentInView ? 1 : 0,
                      scale: splitContentInView ? 1 : 0.6,
                    }}
                    transition={{ duration: 1 }}
                    className="split-content specs-1"></motion.div>
                  mand zones analysis
                </div>
              </div>
              <div className="spec-wrapper">
                <div className="image-wrapper spec-icon">
                  <img
                    src="images/654f782526999f3fd63410d3_stratify_icon_check_37x37.png"
                    alt=""
                    className="image spec-icon"
                  />
                </div>
                <div className="paragraph-medium specs">
                  Reveal internal bullish &amp;bearish activity
                </div>
              </div>
              <div className="spec-wrapper last">
                <div className="image-wrapper spec-icon">
                  <img
                    src="images/654f782526999f3fd63410d3_stratify_icon_check_37x37.png"
                    alt=""
                    className="image spec-icon"
                  />
                </div>
                <div className="paragraph-medium specs">
                  Predict reactions &amp;reversals by calculating bid/ask zones
                </div>
              </div>
            </div>
          </motion.div>

          <motion.img
            ref={imageRef}
            src="images/65b717d60ee72a952f7ff418_stratify_home_01_04.png"
            alt=""
            sizes="(max-width: 479px) 93vw, (max-width: 767px) 94vw, (max-width: 991px) 95vw, (max-width: 1439px) 84vw, 1054.234375px"
            srcSet="images/65b717d60ee72a952f7ff418_stratify_home_01_04-p-500.png 500w, images/65b717d60ee72a952f7ff418_stratify_home_01_04-p-800.png 800w, images/65b717d60ee72a952f7ff418_stratify_home_01_04-p-1080.png 1080w, images/65b717d60ee72a952f7ff418_stratify_home_01_04-p-1600.png 1600w, images/65b717d60ee72a952f7ff418_stratify_home_01_04-p-2000.png 2000w, images/65b717d60ee72a952f7ff418_stratify_home_01_04.png 2322w"
            style={{
              willChange: "transform",
              translateY,
              opacity,
              scale,
            }}
            className="image specs-2"
          />
          <img
            src="images/65341429a81b86c024c73bdf_bg-home-hero-1-crypto-template.svg"
            alt=""
            className="bg home-hero-1"
          />
        </div>
      </div>
    </div>
  );
}
