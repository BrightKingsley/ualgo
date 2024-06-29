"use client";
import clsx from "clsx";
import Link from "next/link";
import React, { useState } from "react";
import AnimateInOut from "./AnimateInOut";

export default function Header() {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <>
      <AnimateInOut
        show={true}
        initial={{ scale: 0.98, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.7, type: "keyframes" }}
        data-collapse="medium"
        data-animation="over-right"
        data-duration="600"
        data-easing="ease-out-expo"
        data-easing2="ease-out-expo"
        data-w-id="58db7844-5919-d71b-dd74-2323ed8dffe9"
        role="banner"
        className="header w-nav hidden lg:block">
        <div className="container-header">
          <div
            data-w-id="24f3b6a9-0e52-5423-w--open5a8f-426121254c7d"
            className="split-content header-left">
            <Link
              href="./"
              aria-current="page"
              className="brand w-nav-brand w--current">
              <img
                src="images/main.svg"
                alt=""
                className="header-logo"
                width="80px"
              />
            </Link>
            <div className="divider header"></div>
            <nav
              role="navigation"
              className="nav-menu w-nav-menu"
              data-nav-menu>
              <ul role="list" className="header-navigation">
                <li className="nav-item-wrapper">
                  <Link
                    href="./"
                    aria-current="page"
                    className="nav-link w--current">
                    Premium
                  </Link>
                </li>
                <li className="nav-item-wrapper">
                  <Link href="pricing" className="nav-link">
                    PRICING
                  </Link>
                </li>

                <li className="nav-item-wrapper">
                  <Link href="about" className="nav-link">
                    About
                  </Link>
                </li>
                <li className="nav-item-wrapper">
                  <Link
                    href="https://discord.gg/"
                    target="_blank"
                    className="nav-link">
                    discord
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
          <div
            data-w-id="e4e11b47-c85c-d5aa-e8d9-e188d8e54135"
            className="split-content header-right">
            <Link
              href="pricing"
              className="button-primary header-button w-button">
              get started risk free
            </Link>
            {/* <div
              onClick={() => setShowMenu(prev => !prev)}
              className="menu-button w-nav-button w--open">
              <div className="menu-button-wrapper">
                <div className="menu-button-icon">
                  <div className="menu-line-top"></div>
                  <div className="menu-line-middle"></div>
                  <div className="menu-line-bottom"></div>
                </div>
              </div>
            </div> */}
            <button
              className="relative group hidden sm:block md:hidden"
              onClick={() => setShowMenu(prev => !prev)}>
              <div
                className={`relative flex overflow-hidden items-center justify-center rounded-full w-[30px] h-[30px] transform transition-all duration-200`}>
                <div
                  className={`flex flex-col justify-between w-[20px] h-[20px] transform transition-all duration-300 origin-center overflow-hidden`}>
                  <div
                    className={`bg-white h-[3px] w-7 transform transition-all duration-300 origin-left ${
                      showMenu ? "group-focus:translate-x-10" : ""
                    }`}></div>
                  <div
                    className={`bg-white h-[3px] w-7 rounded transform transition-all duration-300 ${
                      showMenu ? "group-focus:translate-x-10" : ""
                    } delay-75`}></div>
                  <div
                    className={`bg-white h-[3px] w-7 transform transition-all duration-300 origin-left ${
                      showMenu ? "group-focus:translate-x-10" : ""
                    } delay-150`}></div>

                  <div
                    className={`absolute items-center justify-between transform transition-all duration-500 top-2.5 -translate-x-10 ${
                      showMenu ? "group-focus:translate-x-0" : ""
                    } flex w-0 ${showMenu ? "group-focus:w-12" : ""}`}>
                    <div
                      className={`absolute bg-white h-[3px] w-5 transform transition-all duration-500 rotate-0 delay-300 ${
                        showMenu ? "group-focus:rotate-45" : ""
                      }`}></div>
                    <div
                      className={`absolute bg-white h-[3px] w-5 transform transition-all duration-500 -rotate-0 delay-300 ${
                        showMenu ? "group-focus:-rotate-45" : ""
                      }`}></div>
                  </div>
                </div>
              </div>
            </button>
          </div>
        </div>
      </AnimateInOut>

      <AnimateInOut
        show={true}
        initial={{ scale: 0.98, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.7, type: "keyframes" }}
        data-collapse="medium"
        data-animation="over-right"
        data-duration="600"
        data-easing="ease-out-expo"
        data-easing2="ease-out-expo"
        data-w-id="58db7844-5919-d71b-dd74-2323ed8dffe9"
        role="banner"
        className="header w-nav block lg:hidden">
        <div className="container-header">
          <div
            data-w-id="24f3b6a9-0e52-5423-5a8f-426121254c7d"
            className="split-content header-left">
            <Link
              href="./"
              aria-current="page"
              className="brand w-nav-brand w--current">
              <img
                src="images/main.svg"
                alt=""
                className="header-logo"
                width="80px"
              />
            </Link>
            <div className="divider header"></div>
          </div>
          <div
            data-w-id="e4e11b47-c85c-d5aa-e8d9-e188d8e54135"
            className="split-content header-right"
            style={{ opacity: 1 }}>
            <Link
              href="/pricing"
              className="button-primary header-button w-button">
              get started risk free
            </Link>
            <div
              onClick={() => setShowMenu(prev => !prev)}
              className={clsx(
                "menu-button w-nav-button",
                showMenu && "w--open",
              )}
              aria-label="menu"
              role="button"
              tabIndex={0}
              aria-controls="w-nav-overlay-0"
              aria-haspopup="menu"
              aria-expanded="true">
              <div className="menu-button-wrapper">
                <div className="menu-button-icon">
                  <div
                    className="menu-line-top"
                    style={{
                      transform: showMenu
                        ? "translate3d(0px, 9px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(130deg) skew(0deg, 0deg)"
                        : "",
                      transformStyle: "preserve-3d",
                    }}></div>
                  <div
                    className="menu-line-middle"
                    style={{ opacity: showMenu ? 0 : 1 }}></div>
                  <div
                    className="menu-line-bottom"
                    style={{
                      transform: showMenu
                        ? "translate3d(0px, -9px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(45deg) skew(0deg, 0deg)"
                        : "",
                      transformStyle: "preserve-3d",
                    }}></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* NOTE */}

        <AnimateInOut
          show={showMenu}
          initial={{ translateX: "100%" }}
          animate={{ translateX: "0%" }}
          exit={{ translateX: "100%" }}
          transition={{ duration: 0.6, type: "spring" }}
          className="w-nav-overlay"
          data-wf-ignore=""
          id="w-nav-overlay-0"
          style={{
            height: "2862.01px",
            display: "block",
            width: "100%",
          }}>
          <nav
            role="navigation"
            className={clsx(
              "nav-menu w-nav-menu data-nav-menu-open",
              // showMenu && "data-nav-menu-open",
            )}
            style={
              {
                // transform: `translateX(${
                //   showMenu ? "0px" : "100%"
                // }) scale:1,              height: "2862.01px",
                // transition: "transform 600ms cubic-bezier(0.19, 1, 0.22, 1) 0s",
              }
            }>
            <ul
              role="list"
              className="header-navigation"
              style={{
                transform:
                  "translate3d(0%, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
                transformStyle: "preserve-3d",
              }}>
              <li className="nav-item-wrapper">
                <Link href="/" className="nav-link">
                  Premium
                </Link>
              </li>
              <li className="nav-item-wrapper">
                <Link href="/pricing" className="nav-link">
                  PRICING
                </Link>
              </li>
              <li className="nav-item-wrapper last"></li>
              <li className="nav-item-wrapper">
                <Link
                  href="/about"
                  aria-current="page"
                  className="nav-link w--current">
                  About
                </Link>
              </li>
              <li className="nav-item-wrapper">
                <Link
                  href="https://discord.gg"
                  target="_blank"
                  className="nav-link">
                  discord
                </Link>
              </li>
            </ul>
          </nav>
        </AnimateInOut>
      </AnimateInOut>
    </>
  );
}
