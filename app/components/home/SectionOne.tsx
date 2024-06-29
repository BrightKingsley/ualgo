// "use client";
// import {
//   motion,
//   useScroll,
//   useTransform,
//   useMotionValue,
//   useSpring,
//   useInView,
// } from "framer-motion";
// import Link from "next/link";
// import React, { useEffect, useRef } from "react";

// export default function SectionOne() {
//   const ref = useRef(null);
//   const { scrollYProgress } = useScroll({
//     target: ref,
//     offset: ["end end", "start start"],
//   });

//   const rawTranslateY = useTransform(scrollYProgress, [0, 1], [0, 50]);
//   const translateY = useSpring(rawTranslateY, { stiffness: 100, damping: 20 });
//   const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

//   const paragraphRef = useRef(null);
//   const linkRef = useRef(null);
//   const paragraphInView = useInView(paragraphRef, { once: true });
//   const linkInView = useInView(linkRef, { once: true });

//   useEffect(() => {
//     console.log({ scrollYProgress });
//   }, [scrollYProgress]);

//   return (
//     <div
//       ref={ref}
//       data-w-id="221002a3-673f-e3ef-09b7-3bcc2d293989"
//       className="section home-hero">
//       <div className="container-default w-container">
//         <div className="home-hero-wrapper">
//           <div className="home-hero-content">
//             <motion.h1
//               data-w-id="221002a3-673f-e3ef-09b7-3bcc2d29398d"
//               className="title home-hero"
//               initial={{ opacity: 0, y: 50 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 1 }}>
//               Proven Strategies Proven Results{" "}
//             </motion.h1>
//             <motion.img
//               src="images/65db4384123a8a171af8c4a7_stratify_home_01_09.png"
//               sizes="(max-width: 479px) 100vw, (max-width: 991px) 94vw, 816px"
//               alt=""
//               className="image home-hero-1"
//               style={{
//                 willChange: "transform",
//                 translateY,
//               }}
//             />
//             <motion.p
//               ref={paragraphRef}
//               data-w-id="221002a3-673f-e3ef-09b7-3bcc2d29398f"
//               className="paragraph home-hero"
//               initial={{ opacity: 0, y: 50 }}
//               animate={{
//                 opacity: paragraphInView ? 1 : 0,
//                 y: paragraphInView ? 0 : 50,
//               }}
//               transition={{ duration: 0.3, delay: 0.3 }}>
//               Say goodbye to ambiguous indicators and vague signals{" "}
//             </motion.p>
//             <motion.div
//               ref={linkRef}
//               className="_2-buttons-wrapper"
//               initial={{ opacity: 0, y: 50 }}
//               animate={{ opacity: linkInView ? 1 : 0, y: linkInView ? 0 : 50 }}
//               transition={{ duration: 0.3, delay: 0.6 }}>
//               <Link
//                 href="#pricing"
//                 data-w-id="221002a3-673f-e3ef-09b7-3bcc2d293992"
//                 className="button-primary w-button">
//                 Get Started risk free
//               </Link>
//               <div className="space _2-buttons"></div>
//             </motion.div>
//           </div>
//           <img
//             src="images/65341429a81b86c024c73be0_bg-home-hero-2-crypto-template.svg"
//             alt=""
//             className="bg home-hero-2"
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

"use client";
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  useInView,
} from "framer-motion";
import Link from "next/link";
import React, { useEffect, useRef } from "react";

export default function SectionOne() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });

  const rawTranslateY = useTransform(scrollYProgress, [0, 1], [0, 50]);
  const translateY = useSpring(rawTranslateY, { stiffness: 100, damping: 20 });
  // const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

  const paragraphRef = useRef(null);
  const linkRef = useRef(null);
  const paragraphInView = useInView(paragraphRef, {
    once: true,
    amount: "all",
  });
  const linkInView = useInView(linkRef, {
    once: true,
    amount: "all",
  });

  // const containerVariants = {
  //   hidden: { opacity: 0 },
  //   show: {
  //     opacity: 1,
  //     transition: {
  //       staggerChildren: 0.3,
  //     },
  //   },
  // };

  // const itemVariants = {
  //   hidden: { opacity: 0, y: 50 },
  //   show: { opacity: 1, y: 0 },
  // };

  return (
    <div
      data-w-id="221002a3-673f-e3ef-09b7-3bcc2d293989"
      className="section home-hero">
      <div ref={ref} className="container-default w-container">
        <div className="home-hero-wrapper">
          <div className="home-hero-content">
            <motion.div
              // variants={containerVariants}
              initial="hidden"
              animate="show"
              className="home-hero-animations">
              <motion.h1
                data-w-id="221002a3-673f-e3ef-09b7-3bcc2d29398d"
                className="title home-hero"
                // variants={itemVariants}
                transition={{ duration: 1 }}>
                Proven Strategies Proven Results{" "}
              </motion.h1>
              <motion.img
                src="images/65db4384123a8a171af8c4a7_stratify_home_01_09.png"
                sizes="(max-width: 479px) 100vw, (max-width: 991px) 94vw, 816px"
                alt=""
                className="image home-hero-1"
                style={{
                  willChange: "transform",
                  translateY,
                }}
                // variants={itemVariants}
                transition={{ duration: 1 }}
              />
              <motion.p
                ref={paragraphRef}
                data-w-id="221002a3-673f-e3ef-09b7-3bcc2d29398f"
                className="paragraph mt-12 home-hero text-center mx-auto"
                // variants={itemVariants}
                animate={{
                  opacity: paragraphInView ? 1 : 0,
                  y: paragraphInView ? 0 : 100,
                }}
                transition={{ duration: 1, delay: 0.5 }}>
                Say goodbye to ambiguous indicators and vague signals{" "}
              </motion.p>
              <motion.div
                ref={linkRef}
                className="_2-buttons-wrapper"
                // variants={itemVariants}
                animate={{
                  opacity: linkInView ? 1 : 0,
                  y: linkInView ? 0 : 100,
                }}
                transition={{ duration: 1, delay: 1 }}>
                <Link
                  href="#pricing"
                  data-w-id="221002a3-673f-e3ef-09b7-3bcc2d293992"
                  className="button-primary w-button text-center">
                  Get Started risk free
                </Link>
                {/* <div className="space_ _2-buttons_"></div> */}
              </motion.div>
            </motion.div>
          </div>
          <img
            src="images/65341429a81b86c024c73be0_bg-home-hero-2-crypto-template.svg"
            alt=""
            className="bg home-hero-2"
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
