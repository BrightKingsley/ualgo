"use client";
import React, { useRef } from "react";
import Link from "next/link";
import { motion, useInView } from "framer-motion";

export default function Pricing() {
  const cardsRef = useRef(null);
  const baseRef = useRef(null);
  const headingRef = useRef(null);
  const cardsInView = useInView(cardsRef, { once: true });
  const baseInView = useInView(baseRef, { once: true });
  const headingInView = useInView(cardsRef, { once: true });

  return (
    <div id="pricing" className="section pricing">
      <motion.div
        ref={headingRef}
        initial={{ opacity: 0, y: 40 }}
        animate={{
          opacity: headingInView ? 1 : 0.7,
          y: headingInView ? 0 : 40,
        }}
        transition={{ type: "keyframes" }}
        data-w-id="f9a4c0d8-3450-cbc1-924a-514e890a4374"
        className="container-medium-660px pricing">
        <h1 className="title pricing-title">Pricing</h1>
        <p className="paragraph-2">
          All pricing plans come with the same great benefits listed below
        </p>
      </motion.div>
      <div className="w-layout-blockcontainer container-default w-container">
        <motion.div
          ref={cardsRef}
          data-w-id="f9a4c0d8-3450-cbc1-924a-514e890a43e6"
          animate={{
            opacity: cardsInView ? 1 : 0.7,
            scale: cardsInView ? 1 : 0.5,
          }}
          transition={{ duration: 1, type: "keyframes" }}
          className="w-layout-grid pricing-grid">
          <div
            id="w-node-f9a4c0d8-3450-cbc1-924a-514e890a43e7-161f92cd"
            className="card pricing hover:scale-95 transition-transform duration-300">
            <div className="card-pricing-top-content">
              <h1 className="pricing-card-heading">Monthly</h1>
              <div className="div-block-7">
                <div className="card-price">67.99 USD</div>
                <div className="text-block-3">/mo</div>
              </div>
              <div className="card-pricing-excerpt">Full Price</div>
            </div>
            <ul role="list" className="list">
              <li>
                <div>Smart Money Concepts Exclusive Indicator</div>
              </li>
              <li>
                <div>Premium Backtester Suite</div>
              </li>
              <li>
                <div>Exclusive Discord Community</div>
              </li>
              <li>
                <div>Active Indicator Updates</div>
              </li>
              <li>
                <div>24/7 Support</div>
              </li>
            </ul>
            <div className="html-embed w-embed w-script">
              {/* <!-- Embed block for a clickable button inside a card with the id "card" --> */}
              <div id="card">
                <Link
                  href="./"
                  className="custom-button"
                  data-cb-item-0="Monthly-USD-Monthly"
                  data-cb-item-0-quantity="1">
                  Monthly
                </Link>
              </div>
            </div>
            <div className="text-block-4">No Refund</div>
          </div>
          <div
            id="w-node-f9a4c0d8-3450-cbc1-924a-514e890a4405-161f92cd"
            className="card pricing hover:scale-95 transition-transform duration-300">
            <div className="card-pricing-top-content">
              <h1 className="pricing-card-heading">Quarterly</h1>
              <div className="div-block-7">
                <div className="card-price">47.99 USD</div>
                <div className="text-block-3">/mo</div>
              </div>
              <div className="card-pricing-excerpt">
                143.97 USD Paid Quarterly
              </div>
            </div>
            <ul role="list" className="list">
              <li>
                <div>Smart Money Concepts Exclusive Indicator</div>
              </li>
              <li>
                <div>Premium Backtester Suite</div>
              </li>
              <li>
                <div>Exclusive Discord Community</div>
              </li>
              <li>
                <div>Active Indicator Updates</div>
              </li>
              <li>
                <div>24/7 Support</div>
              </li>
            </ul>
            <div className="w-embed w-script">
              {/* <!-- Embed block for a clickable button inside a card with the id "card" --> */}
              <div id="card">
                <Link
                  href="./"
                  className="custom-button"
                  data-cb-item-0="Quarterly-USD-Every-3-months"
                  data-cb-item-0-quantity="1">
                  Quarterly
                </Link>
              </div>
            </div>
            <div className="text-block-4">No Refund</div>
          </div>
          <aside
            id="card"
            className="card pricing hover:scale-95 transition-transform duration-300 w-node-f9a4c0d8-3450-cbc1-924a-514e890a4423-161f92cd">
            <div className="card-pricing-top-content">
              <h1 className="pricing-card-heading">Yearly</h1>
              <div className="div-block-7">
                <div className="card-price">39.99 USD</div>
                <div className="text-block-3">/mo</div>
              </div>
              <div className="card-pricing-excerpt">
                479.88 USD Paid Annually
              </div>
            </div>
            <ul role="list" className="list">
              <li>
                <div>Smart Money Concepts Exclusive Indicator</div>
              </li>
              <li>
                <div>Premium Backtester Suite</div>
              </li>
              <li>
                <div>Exclusive Discord Community</div>
              </li>
              <li>
                <div>Active Indicator Updates</div>
              </li>
              <li>
                <div>24/7 Support</div>
              </li>
            </ul>
            <div className="w-embed w-script">
              {/* <!-- Embed block for a clickable button inside a card with the id "card" --> */}
              <div id="card">
                <Link
                  href="./"
                  className="custom-button"
                  data-cb-item-0="Annual-USD-Yearly"
                  data-cb-item-0-quantity="1">
                  YEARLY
                </Link>
              </div>
            </div>
            <div className="text-block-4">No Refund</div>
          </aside>
        </motion.div>
        <motion.div
          ref={baseRef}
          data-w-id="f9a4c0d8-3450-cbc1-924a-514e890a4441"
          animate={{
            opacity: baseInView ? 1 : 0.7,
            scale: baseInView ? 1 : 0.7,
          }}
          transition={{ duration: 0.6, type: "keyframes" }}
          id="card"
          className="card pricing lifetime">
          <div className="card-pricing-top-content">
            <div className="div-block-20">
              <h1 className="pricing-card-heading html-embed">Lifetime</h1>
              <div className="card-price lifetime-price">999.99 USD</div>
              <div className="card-pricing-excerpt">One Time Payment</div>
            </div>
            <div className="w-embed w-script">
              {/* <!-- Embed block for a clickable button inside a card with the id "card" --> */}
              <div id="card">
                <Link
                  href="./"
                  className="custom-button"
                  data-cb-item-0="Lifetime-USD-Every-15-years"
                  data-cb-item-0-quantity="1">
                  Lifetime
                </Link>
              </div>
            </div>
            <div className="text-block-4">No Refund</div>
          </div>
          <div className="lifetime-section">
            <ul role="list" className="list lifetime-list">
              <li>
                <div className="text-block-20">
                  Access to every premium indicator we will ever release
                </div>
              </li>
              <li>
                <div className="text-block-16">
                  Beta test and preview premium indicators before they launch
                </div>
              </li>
              <li>
                <div className="text-block-18">
                  Everything else included in the packages listed above
                </div>
              </li>
            </ul>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
