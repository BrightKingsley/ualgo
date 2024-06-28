// "use client";
// import Link from "next/link";
// import React, { useEffect, useRef } from "react";

// export default function Flyer() {
//   return (
//     <div
//       data-w-id="6c848a54-fca6-0008-67e5-d4d81cea669e"
//       className="section cta-v1">
//       <div className="bg cta-v1">
//         <div className="container-default w-container">
//           <div className="cta-v1-wrapper">
//             <div
//               data-w-id="6c848a54-fca6-0008-67e5-d4d81cea66a2"
//               className="split-content cta-v1">
//               <h2 className="heading-2">Join our FREE Discord</h2>
//               <p className="paragraph cta-v1">
//                 <strong>‍</strong>
//                 Join our diverse community of traders, share alpha, collaborate
//                 with coders, post your trades, and elevate your trading journey
//               </p>
//               <div className="animation-div">
//                 <Link
//                   href="https://discord.gg/"
//                   target="_blank"
//                   className="button-primary white w-button">
//                   Join Discord
//                 </Link>
//               </div>
//             </div>
//             <div className="images-wrapper cta-v1">
//               <img
//                 src="images/mobile1.png"
//                 alt=""
//                 sizes="(max-width: 767px) 45vw, (max-width: 991px) 362.82122802734375px, (max-width: 1439px) 37vw, 362.8212890625px"
//                 srcSet="images/mobile1.png 500w, images/mobile1.png"
//                 className="image cta-v1-1"
//               />
//               <img
//                 src="images/mobile3.png"
//                 alt=""
//                 sizes="(max-width: 767px) 50vw, (max-width: 991px) 430.6658935546875px, (max-width: 1439px) 430.66595458984375px, 30vw"
//                 srcSet="images/mobile3.png 500w, images/mobile3.png 679w"
//                 className="image cta-v1-2"
//               />
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

"use client";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import Link from "next/link";
import React, { useRef } from "react";

export default function Flyer() {
  const imageContainerRef = useRef(null);
  const imageRef1 = useRef(null);
  const imageRef2 = useRef(null);

  const { scrollYProgress } = useScroll({
    target: imageRef1,
    offset: ["start end", "end start"],
  });

  const rotate1 = useTransform(scrollYProgress, [0, 1], [0, -2]);
  const rotate2 = useTransform(scrollYProgress, [0, 1], [0, 10]);
  const rawTranslateY = useTransform(scrollYProgress, [0, 1], [100, 0]);
  const translateY = useSpring(rawTranslateY, { stiffness: 100, damping: 20 });

  return (
    <div
      data-w-id="6c848a54-fca6-0008-67e5-d4d81cea669e"
      className="section cta-v1">
      <div className="bg cta-v1">
        <div className="container-default w-container">
          <div className="cta-v1-wrapper">
            <div
              data-w-id="6c848a54-fca6-0008-67e5-d4d81cea66a2"
              className="split-content cta-v1">
              <h2 className="heading-2">Join our FREE Discord</h2>
              <p className="paragraph cta-v1">
                <strong>‍</strong>
                Join our diverse community of traders, share alpha, collaborate
                with coders, post your trades, and elevate your trading journey
              </p>
              <div className="animation-div">
                <Link
                  href="https://discord.gg/"
                  target="_blank"
                  className="button-primary white w-button">
                  Join Discord
                </Link>
              </div>
            </div>
            <motion.div
              ref={imageContainerRef}
              style={{
                willChange: "transform",
                translateY,
              }}
              className="images-wrapper cta-v1">
              <motion.img
                ref={imageRef1}
                src="images/mobile1.png"
                alt=""
                sizes="(max-width: 767px) 45vw, (max-width: 991px) 362.82122802734375px, (max-width: 1439px) 37vw, 362.8212890625px"
                srcSet="images/mobile1.png 500w, images/mobile1.png"
                className="image cta-v1-1"
                style={{
                  willChange: "transform",
                  rotate: rotate1,
                }}
              />
              <motion.img
                ref={imageRef2}
                src="images/mobile3.png"
                alt=""
                sizes="(max-width: 767px) 50vw, (max-width: 991px) 430.6658935546875px, (max-width: 1439px) 430.66595458984375px, 30vw"
                srcSet="images/mobile3.png 500w, images/mobile3.png 679w"
                className="image cta-v1-2"
                style={{
                  willChange: "transform",
                  rotate: rotate2,
                }}
              />
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
