"use client";
import Link from "next/link";
import React from "react";
import NavLink from "./NavLink";
import clsx from "clsx";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container-default w-container"></div>
      <div
        data-w-id="c5d4cb34-a68b-d3ef-a1f2-07a37c968552"
        className="container-default w-container">
        <div className="top-content footer-top-content">
          <Link href="./" className="footer-logo-container w-inline-block">
            <img src="images/main.svg" alt="" className="footer-logo" />
          </Link>
          <div className="w-layout-grid footer-social-media-grid">
            <Link
              href="https://twitter.com/"
              target="_blank"
              className="footer-social-media-link w-inline-block">
              <div></div>
            </Link>
            <Link
              href="https://www.instagram.com/"
              target="_blank"
              className="footer-social-media-link w-inline-block">
              <div></div>
            </Link>
            <Link
              href="https://www.youtube.com/"
              target="_blank"
              className="footer-social-media-link small w-inline-block">
              <div></div>
            </Link>
          </div>
        </div>
        <div className="footer-content">
          <div className="footer-links-block">
            <div className="links-block">
              <div className="footer-mobile-title">
                <h2 className="title-small-uppercase footer-tilte-links">
                  Menu
                </h2>
              </div>
              <div className="footer-mobile-content">
                <div className="footer-content-links">
                  <ul role="list" className="list-footer w-list-unstyled">
                    <li className="footer-list-item">
                      <NavLink
                        className="footer-link"
                        href="./"
                        aria-current="page">
                        {({ isActive }) => (
                          <p
                            className={clsx(
                              "footer-link",
                              isActive && "w--current",
                            )}>
                            PREMIUM
                          </p>
                        )}
                      </NavLink>
                    </li>
                    <li className="footer-list-item">
                      <NavLink className="footer-link" href="pricing">
                        {({ isActive }) => (
                          <p
                            className={clsx(
                              "footer-link",
                              isActive && "w--current",
                            )}>
                            Pricing
                          </p>
                        )}
                      </NavLink>
                    </li>
                    <li className="footer-list-item">
                      <NavLink className="footer-link" href="about">
                        {({ isActive }) => (
                          <p
                            className={clsx(
                              "footer-link",
                              isActive && "w--current",
                            )}>
                            About
                          </p>
                        )}
                      </NavLink>
                    </li>
                    <li className="footer-list-item last">
                      <Link
                        className="footer-link"
                        href="https://discord.gg/"
                        target="_blank">
                        <p className={clsx("footer-link")}>Discord</p>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="newsletter-wrapper">
            <h2 className="title newsletter">
              Subscribe for new indicators and updates
            </h2>
            <div className="split-content newsletter-right">
              <div className="newsletter-form-block w-form">
                <form method="get" className="newsletter-form">
                  <input
                    className="input newsletter w-input"
                    maxLength={256}
                    name="email-2"
                    data-name="Email 2"
                    placeholder="Enter email address"
                    type="email"
                    id="email-2"
                    required={true}
                  />
                  <input
                    type="submit"
                    data-wait="Please wait..."
                    className="button-primary newsletter w-button"
                    value="Subscribe"
                  />
                </form>
                <div className="success-message newsletter w-form-done">
                  <div>Thanks for joining our newsletter.</div>
                </div>
                <div className="error-message w-form-fail">
                  <div>Oops! Something went wrong.</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="divider footer-divider"></div>
        <div className="small-print-wrapper">
          <div className="text-block-2">
            Copyright © UALGO<Link href="./" target="_blank"></Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
