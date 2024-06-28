"use client";
import React, { useRef } from "react";

import { motion, useInView, useScroll, useTransform } from "framer-motion";

export default function SectionThree() {
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
      data-w-id="549f89ee-5929-9a07-e406-384e1319a059"
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
            <h2 className="greenify">Advanced Market Structure</h2>
            <p className="paragraph specs-1">
              Simplifies trend, breakout, and reversal detection. Time precise
              entries and exits with real-time market structure analysis
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
                  Snipe entries with SFP Detection
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
                  Simplifies complex trends
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
                  Identifies Support / Resistance + Breakers
                </div>
              </div>
            </div>
          </motion.div>

          <motion.img
            ref={imageRef}
            src="images/65b6d2177db264a75d261ba3_stratify_home_01_03.png"
            alt=""
            sizes="(max-width: 479px) 93vw, (max-width: 767px) 94vw, (max-width: 991px) 95vw, (max-width: 1439px) 84vw, 1054.234375px"
            srcSet="images/65b6d2177db264a75d261ba3_stratify_home_01_03-p-500.png 500w, images/65b6d2177db264a75d261ba3_stratify_home_01_03-p-800.png 800w, images/65b6d2177db264a75d261ba3_stratify_home_01_03-p-1080.png 1080w, images/65b6d2177db264a75d261ba3_stratify_home_01_03-p-1600.png 1600w, images/65b6d2177db264a75d261ba3_stratify_home_01_03-p-2000.png 2000w, images/65b6d2177db264a75d261ba3_stratify_home_01_03.png 2322w"
            style={{
              willChange: "transform",
              translateY,
              opacity,
              scale,
            }}
            className="image specs-2"
          />
        </div>
      </div>
    </div>
  );
}
