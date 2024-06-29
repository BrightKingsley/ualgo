"use client";
// import React from "react";

// export default function SectionTwo() {
//   return (
//     <div
//       data-w-id="5a853f01-9e50-3c92-e576-c36e34aa5bd3"
//       className="section specs-2">
//       <div className="container-default w-container">
//         <div className="specs-2-wrapper">
//           <div
//             data-w-id="5a853f01-9e50-3c92-e576-c36e34aa5bd6"
//             style={{
//               WebkitTransform:
//                 "translate3d(0, 40PX, 0) scale3d(0.9, 0.9, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
//               MozTransform:
//                 "translate3d(0, 40PX, 0) scale3d(0.9, 0.9, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
//               msTransform:
//                 "translate3d(0, 40PX, 0) scale3d(0.9, 0.9, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
//               transform:
//                 "translate3d(0, 40PX, 0) scale3d(0.9, 0.9, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
//               opacity: 1,
//             }}
//             className="split-content specs-1">
//             <h2 className="greenify">Spot Liquidity Sweeps</h2>
//             <p className="paragraph specs-1">
//               Advanced liquidity algorithm aids in spotting hunted stop losses
//               and liquidation zones that show where price had a strong reaction
//             </p>
//             <div className="specs-wrapper">
//               <div className="spec-wrapper">
//                 <div className="image-wrapper spec-icon">
//                   <img
//                     src="images/654f782526999f3fd63410d3_stratify_icon_check_37x37.png"
//                     alt=""
//                     className="image spec-icon"
//                   />
//                 </div>
//                 <div className="paragraph-medium specs">
//                   Highlights high-impact liquidations
//                 </div>
//               </div>
//               <div className="spec-wrapper">
//                 <div className="image-wrapper spec-icon">
//                   <img
//                     src="images/654f782526999f3fd63410d3_stratify_icon_check_37x37.png"
//                     alt=""
//                     className="image spec-icon"
//                   />
//                 </div>
//                 <div className="paragraph-medium specs">
//                   Predict market shifts &amp;strong price reactions
//                 </div>
//               </div>
//               <div className="spec-wrapper last">
//                 <div className="image-wrapper spec-icon">
//                   <img
//                     src="images/654f782526999f3fd63410d3_stratify_icon_check_37x37.png"
//                     alt=""
//                     className="image spec-icon"
//                   />
//                 </div>
//                 <div className="paragraph-medium specs">
//                   Spot hunted stop losses &amp;liquidity zones{" "}
//                 </div>
//               </div>
//             </div>
//           </div>
//           <img
//             src="images/65b71c4abb47859d708e9736_stratify_home_01_07.png"
//             alt=""
//             sizes="(max-width: 479px) 93vw, (max-width: 767px) 94vw, (max-width: 991px) 95vw, (max-width: 1439px) 84vw, 1054.234375px"
//             srcSet="images/65b71c4abb47859d708e9736_stratify_home_01_07-p-500.png 500w, images/65b71c4abb47859d708e9736_stratify_home_01_07-p-800.png 800w, images/65b71c4abb47859d708e9736_stratify_home_01_07-p-1080.png 1080w, images/65b71c4abb47859d708e9736_stratify_home_01_07-p-1600.png 1600w, images/65b71c4abb47859d708e9736_stratify_home_01_07-p-2000.png 2000w, images/65b71c4abb47859d708e9736_stratify_home_01_07.png 2322w"
//             className="image specs-2"
//           />
//           <img
//             src="images/65341429a81b86c024c73bdf_bg-home-hero-1-crypto-template.svg"
//             alt=""
//             className="bg home-hero-1"
//           />
//         </div>
//       </div>
//     </div>
//   );
// }

// "use client";
// import { motion, useInView } from "framer-motion";
// import React, { useRef } from "react";

// export default function SectionTwo() {
//   const splitContentRef = useRef(null);
//   const imageRef = useRef(null);

//   const splitContentInView = useInView(splitContentRef, { once: false });
//   const imageInView = useInView(imageRef, { once: false });

//   const easing = [0.6, -0.05, 0.01, 0.99];

//   return (
//     <div
//       data-w-id="5a853f01-9e50-3c92-e576-c36e34aa5bd3"
//       className="section specs-2">
//       <div className="container-default w-container">
//         <div className="specs-2-wrapper">
//           <motion.div
//             ref={splitContentRef}
//             data-w-id="5a853f01-9e50-3c92-e576-c36e34aa5bd6"
//             initial={{ opacity: 0, y: 50 }}
//             animate={{
//               opacity: splitContentInView ? 1 : 0,
//               y: splitContentInView ? 0 : 50,
//             }}
//             transition={{ duration: 1, ease: easing }}
//             className="split-content specs-1">
//             <motion.h2
//               className="greenify"
//               initial={{ opacity: 0, y: 50 }}
//               animate={{
//                 opacity: splitContentInView ? 1 : 0,
//                 y: splitContentInView ? 0 : 50,
//               }}
//               transition={{
//                 duration: 0.6,
//                 ease: easing,
//                 delay: splitContentInView ? 0.2 : 0,
//               }}>
//               Spot Liquidity Sweeps
//             </motion.h2>
//             <motion.p
//               className="paragraph specs-1"
//               initial={{ opacity: 0, y: 50 }}
//               animate={{
//                 opacity: splitContentInView ? 1 : 0,
//                 y: splitContentInView ? 0 : 50,
//               }}
//               transition={{
//                 duration: 0.6,
//                 ease: easing,
//                 delay: splitContentInView ? 0.4 : 0,
//               }}>
//               Advanced liquidity algorithm aids in spotting hunted stop losses
//               and liquidation zones that show where price had a strong reaction
//             </motion.p>
//             <div className="specs-wrapper">
//               {[...Array(3)].map((_, i) => (
//                 <motion.div
//                   key={i}
//                   className="spec-wrapper"
//                   initial={{ opacity: 0, y: 50 }}
//                   animate={{
//                     opacity: splitContentInView ? 1 : 0,
//                     y: splitContentInView ? 0 : 50,
//                   }}
//                   transition={{
//                     duration: 0.6,
//                     ease: easing,
//                     delay: splitContentInView ? 0.6 + i * 0.2 : 0,
//                   }}>
//                   <div className="image-wrapper spec-icon">
//                     <img
//                       src="images/654f782526999f3fd63410d3_stratify_icon_check_37x37.png"
//                       alt=""
//                       className="image spec-icon"
//                     />
//                   </div>
//                   <div className="paragraph-medium specs">
//                     {i === 0 && "Highlights high-impact liquidations"}
//                     {i === 1 &&
//                       "Predict market shifts & strong price reactions"}
//                     {i === 2 && "Spot hunted stop losses & liquidity zones"}
//                   </div>
//                 </motion.div>
//               ))}
//             </div>
//           </motion.div>
//           <motion.img
//             ref={imageRef}
//             src="images/65b71c4abb47859d708e9736_stratify_home_01_07.png"
//             alt=""
//             sizes="(max-width: 479px) 93vw, (max-width: 767px) 94vw, (max-width: 991px) 95vw, (max-width: 1439px) 84vw, 1054.234375px"
//             srcSet="images/65b71c4abb47859d708e9736_stratify_home_01_07-p-500.png 500w, images/65b71c4abb47859d708e9736_stratify_home_01_07-p-800.png 800w, images/65b71c4abb47859d708e9736_stratify_home_01_07-p-1080.png 1080w, images/65b71c4abb47859d708e9736_stratify_home_01_07-p-1600.png 1600w, images/65b71c4abb47859d708e9736_stratify_home_01_07-p-2000.png 2000w, images/65b71c4abb47859d708e9736_stratify_home_01_07.png 2322w"
//             initial={{ opacity: 0, y: 50 }}
//             animate={{ opacity: imageInView ? 1 : 0, y: imageInView ? 0 : 50 }}
//             transition={{ duration: 1, ease: easing, delay: 0.5 }}
//             className="image specs-2"
//           />
//           <img
//             src="images/65341429a81b86c024c73bdf_bg-home-hero-1-crypto-template.svg"
//             alt=""
//             className="bg home-hero-1"
//           />
//         </div>
//       </div>
//     </div>
//   );
// }

// import { motion, useInView } from "framer-motion";
// import React, { useRef } from "react";

// export default function SectionTwo() {
//   const splitContentRef = useRef(null);
//   const imageRef = useRef(null);

//   const splitContentInView = useInView(splitContentRef, { once: false });
//   const imageInView = useInView(imageRef, { once: false });

//   return (
//     <div
//       data-w-id="5a853f01-9e50-3c92-e576-c36e34aa5bd3"
//       className="section specs-2">
//       <div className="container-default w-container">
//         <div className="specs-2-wrapper">
//           <motion.div
//             ref={splitContentRef}
//             data-w-id="5a853f01-9e50-3c92-e576-c36e34aa5bd6"
//             initial={{ opacity: 0, y: 50 }}
//             animate={{
//               opacity: splitContentInView ? 1 : 0,
//               y: splitContentInView ? 0 : 50,
//             }}
//             transition={{ duration: 1 }}
//             className="split-content specs-1">
//             <h2 className="greenify">Spot Liquidity Sweeps</h2>
//             <p className="paragraph specs-1">
//               Advanced liquidity algorithm aids in spotting hunted stop losses
//               and liquidation zones that show where price had a strong reaction
//             </p>
//             <div className="specs-wrapper">
//               <div className="spec-wrapper">
//                 <div className="image-wrapper spec-icon">
//                   <img
//                     src="images/654f782526999f3fd63410d3_stratify_icon_check_37x37.png"
//                     alt=""
//                     className="image spec-icon"
//                   />
//                 </div>
//                 <div className="paragraph-medium specs">
//                   Highlights high-impact liquidations
//                 </div>
//               </div>
//               <div className="spec-wrapper">
//                 <div className="image-wrapper spec-icon">
//                   <img
//                     src="images/654f782526999f3fd63410d3_stratify_icon_check_37x37.png"
//                     alt=""
//                     className="image spec-icon"
//                   />
//                 </div>
//                 <div className="paragraph-medium specs">
//                   Predict market shifts &amp;strong price reactions
//                 </div>
//               </div>
//               <div className="spec-wrapper last">
//                 <div className="image-wrapper spec-icon">
//                   <img
//                     src="images/654f782526999f3fd63410d3_stratify_icon_check_37x37.png"
//                     alt=""
//                     className="image spec-icon"
//                   />
//                 </div>
//                 <div className="paragraph-medium specs">
//                   Spot hunted stop losses &amp;liquidity zones{" "}
//                 </div>
//               </div>
//             </div>
//           </motion.div>
//           <motion.img
//             ref={imageRef}
//             src="images/65b71c4abb47859d708e9736_stratify_home_01_07.png"
//             alt=""
//             sizes="(max-width: 479px) 93vw, (max-width: 767px) 94vw, (max-width: 991px) 95vw, (max-width: 1439px) 84vw, 1054.234375px"
//             srcSet="images/65b71c4abb47859d708e9736_stratify_home_01_07-p-500.png 500w, images/65b71c4abb47859d708e9736_stratify_home_01_07-p-800.png 800w, images/65b71c4abb47859d708e9736_stratify_home_01_07-p-1080.png 1080w, images/65b71c4abb47859d708e9736_stratify_home_01_07-p-1600.png 1600w, images/65b71c4abb47859d708e9736_stratify_home_01_07-p-2000.png 2000w, images/65b71c4abb47859d708e9736_stratify_home_01_07.png 2322w"
//             initial={{ opacity: 0, y: 50 }}
//             animate={{ opacity: imageInView ? 1 : 0, y: imageInView ? 0 : 50 }}
//             transition={{ duration: 1, delay: 0.5 }}
//             className="image specs-2"
//           />
//           <img
//             src="images/65341429a81b86c024c73bdf_bg-home-hero-1-crypto-template.svg"
//             alt=""
//             className="bg home-hero-1"
//           />
//         </div>
//       </div>
//     </div>
//   );
// }

import { motion, useInView, useScroll, useTransform } from "framer-motion";
import React, { useRef } from "react";

export default function SectionTwo() {
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
      data-w-id="5a853f01-9e50-3c92-e576-c36e34aa5bd3"
      className="section specs-2 bg-neutral-1000">
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
            <h2 className="greenify">Spot Liquidity Sweeps</h2>
            <p className="paragraph specs-1">
              Advanced liquidity algorithm aids in spotting hunted stop losses
              and liquidation zones that show where price had a strong reaction
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
                  Highlights high-impact liquidations
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
                  Predict market shifts &amp;strong price reactions
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
                  Spot hunted stop losses &amp;liquidity zones{" "}
                </div>
              </div>
            </div>
          </motion.div>
          <motion.img
            ref={imageRef}
            src="images/65b71c4abb47859d708e9736_stratify_home_01_07.png"
            alt=""
            sizes="(max-width: 479px) 93vw, (max-width: 767px) 94vw, (max-width: 991px) 95vw, (max-width: 1439px) 84vw, 1054.234375px"
            srcSet="images/65b71c4abb47859d708e9736_stratify_home_01_07-p-500.png 500w, images/65b71c4abb47859d708e9736_stratify_home_01_07-p-800.png 800w, images/65b71c4abb47859d708e9736_stratify_home_01_07-p-1080.png 1080w, images/65b71c4abb47859d708e9736_stratify_home_01_07-p-1600.png 1600w, images/65b71c4abb47859d708e9736_stratify_home_01_07-p-2000.png 2000w, images/65b71c4abb47859d708e9736_stratify_home_01_07.png 2322w"
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
