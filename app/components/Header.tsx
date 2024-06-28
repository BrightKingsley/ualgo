import Link from "next/link";
import React from "react";

export default function Header() {
  return (
    <div
      data-collapse="medium"
      data-animation="over-right"
      data-duration="600"
      data-easing="ease-out-expo"
      data-easing2="ease-out-expo"
      data-w-id="58db7844-5919-d71b-dd74-2323ed8dffe9"
      role="banner"
      className="header w-nav">
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
          <nav role="navigation" className="nav-menu w-nav-menu">
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
          <div className="menu-button w-nav-button">
            <div className="menu-button-wrapper">
              <div className="menu-button-icon">
                <div className="menu-line-top"></div>
                <div className="menu-line-middle"></div>
                <div className="menu-line-bottom"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
