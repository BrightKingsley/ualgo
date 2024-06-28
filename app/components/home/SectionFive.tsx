"use client";
import React, { useRef } from "react";

import { motion, useInView, useScroll, useTransform } from "framer-motion";

export default function SectionFive() {
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
      data-w-id="bd75ed20-5286-70a7-6238-ba54827d9295"
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
            <h2 className="greenify">Full Backtesting Suite</h2>
            <p className="paragraph specs-1">
              We created a fully integrated back-tester that allows traders to
              build custom strategies that fits their personal trading style
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
                  Full customization to fit your style and goals{" "}
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
                  See real results in TradingView Strategy Window
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
                  Unlimited combinations and potential
                </div>
              </div>
            </div>
          </motion.div>
          <motion.img
            ref={imageRef}
            src="images/65d7fbfed7472ab5f4230283_stratify_home_01_08.png"
            alt=""
            sizes="(max-width: 479px) 93vw, (max-width: 767px) 94vw, (max-width: 991px) 95vw, (max-width: 1439px) 84vw, 1054.234375px"
            srcSet="images/65d7fbfed7472ab5f4230283_stratify_home_01_08-p-500.png 500w, images/65d7fbfed7472ab5f4230283_stratify_home_01_08-p-800.png 800w, images/65d7fbfed7472ab5f4230283_stratify_home_01_08-p-1080.png 1080w, images/65d7fbfed7472ab5f4230283_stratify_home_01_08-p-1600.png 1600w, images/65d7fbfed7472ab5f4230283_stratify_home_01_08-p-2000.png 2000w, images/65d7fbfed7472ab5f4230283_stratify_home_01_08.png 2322w"
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
