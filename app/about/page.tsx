"use client";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import React, { useRef } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Flyer from "../components/Flyer";

export default function About() {
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
    <>
      <Header />
      <div className="section more-about">
        <div className="container-default w-container">
          <div className="our-story-wrapper">
            <motion.div
              ref={splitContentRef}
              initial={{ opacity: 0, y: 50 }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{ duration: 1 }}
              data-w-id="97998b83-8366-2465-8ecb-23d656afe347"
              className="split-content our-story-left">
              <div className="our-story-block">
                <h2>Who We Are</h2>
                <p>
                  In late 2023, Stratify began as a simple idea: recreate
                  popular TradingView indicators for free and see how far we
                  could go. To our surprise, the response was overwhelming.
                  Thousands of traders worldwide embraced our vision, proving
                  the demand for accessible and effective trading tools. <br />
                  <br />
                  Even as a very small team balancing our day jobs, we &#x27;re
                  outpacing even industry giants in creating some of the most
                  innovative indicators on the market. So we decided to take it
                  one step further and are in the process of making this our
                  full time job
                  <br />
                  <br />
                  Our core mission at Stratify is to equip traders with the
                  highest quality trading tools possible, ensuring you have the
                  edge you need to succeed. As well as building a strong
                  community of like minded traders so we can all level up
                  together.
                  <br />
                  <br />
                </p>
              </div>
            </motion.div>
            <div className="split-content our-story-right">
              <motion.img
                ref={imageRef}
                initial={{ opacity: 0, scale: 0.7 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, type: "keyframes" }}
                src="images/6536ee0c5a976b05edc1ea0f_stratify_graphic_home_04_01.png"
                srcSet="images/6536ee0c5a976b05edc1ea0f_stratify_graphic_home_04_01-p-500.png 500w, images/6536ee0c5a976b05edc1ea0f_stratify_graphic_home_04_01-p-800.png 800w, images/6536ee0c5a976b05edc1ea0f_stratify_graphic_home_04_01-p-1080.png 1080w, images/6536ee0c5a976b05edc1ea0f_stratify_graphic_home_04_01.png 1431w"
                data-w-id="24bb65bf-5616-bb5a-b203-c4aed6bd8069"
                sizes="(max-width: 479px) 93vw, (max-width: 767px) 94vw, 715px"
                alt=""
                className="image about-story"
              />
            </div>
          </div>
        </div>
      </div>
      <Flyer />
      <Footer />
    </>
  );
}
