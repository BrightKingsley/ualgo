"use client";
import React, { useRef } from "react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import Accordion from "./Accordion";

export default function FAQs() {
  const headingRef = useRef(null);
  const faqRef = useRef(null);

  const headingInView = useInView(headingRef, { once: true });
  const faqInView = useInView(faqRef, { once: true });

  const { scrollYProgress } = useScroll({
    target: faqRef,
    offset: ["start end", "end start"],
  });

  const translateY = useTransform(scrollYProgress, [0, 1], ["30%", "-20%"]);
  const scale = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 1]);

  return (
    <div className="section faqs">
      <motion.div
        ref={headingRef}
        animate={{
          translateY: headingInView ? 0 : 200,
        }}
        // style={{
        //   willChange: "transform",
        //   translateY,
        //   opacity,
        //   scale,
        // }}
        transition={{ duration: 0.6, type: "keyframes" }}
        className="container-small-549px faqs">
        <h2 data-w-id="6c6c445c-0816-3e3c-aab5-9abd470b72c8">FAQs</h2>
      </motion.div>
      <div className="container-medium-920px">
        <motion.div
          ref={faqRef}
          animate={{
            translateY: faqInView ? 0 : 200,
          }}
          // style={{
          //   willChange: "transform",
          //   translateY,
          //   opacity,
          //   scale,
          // }}
          transition={{ delay: 0.5, duration: 0.6, type: "keyframes" }}
          data-w-id="6c6c445c-0816-3e3c-aab5-9abd470b72cd"
          className="w-layout-grid faqs-grid">
          <Accordion
            heading="Do we offer a free-trial?"
            content="We currently offer a 7 day money back guarantee."
          />
          <Accordion
            heading="Am I guaranteed to profit?"
            content="There is no system, strategy, or algorithm that 100% guarantees profit. This is a tool that uses deep learning algorithms that generate optimal entry and exit points but it is not 100% accurate. Our system is designed so that even if you take multiple losses in a row, if you keep trading you will eventually have wins that are larger than your losses."
          />
          <Accordion
            heading="What is the typical win rate?"
            content="Ualgo provides strategies across all assets and timeframes supported by TradingView.com. Due to being a strategy provider; we are able to give proven testable data on win rates whereas indicators are not able to do so. A win rate does not necessarily reflect profits and can be higher or slightly lower than the average."
          />
          <Accordion
            heading="Does it automatically buy and sell for me?"
            content="You can set up alerts for buy and sell signals through Tradingview, but the strategy does not buy and sell for you. You must have at least one exchange or crypto wallet to trade from in order to use this strategy."
          />
          <Accordion
            heading="What timeframes does it work on?"
            content="Ualgo Backtester works across all assets and timeframes. In general however, we suggest using this on timeframes over the 5m to avoid frictional costs and overtrading. It does work below however if you are newer to trading these are best to avoid."
          />
        </motion.div>
      </div>
    </div>
  );
}
