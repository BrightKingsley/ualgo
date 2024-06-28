"use client";
import React from "react";
import { Disclosure, Menu } from "@headlessui/react";
import AnimateInOut from "../AnimateInOut";
import { clsx } from "clsx";

export default function Accordion({
  content,
  heading,
}: {
  heading: string;
  content: string;
}) {
  return (
    <Disclosure>
      {({ open }) => (
        <div className="faq-wrapper faq-spacing">
          <Disclosure.Button className="w-full h-full">
            <div className="faq-top-content w-full">
              <h3 className="title faq">{heading}</h3>
              <div
                className={clsx(
                  "faq-icon-wrapper transition-all duration-200",
                  open && "rotate-45",
                )}>
                <div className="faq-icon-line-1"></div>
                <div className="faq-icon-line-2"></div>
              </div>
            </div>

            <AnimateInOut
              show={open}
              initial={{ height: 0 }}
              animate={{ height: "auto" }}
              exit={{ height: 0 }}
              transition={{ type: "keyframes" }}
              className="faq-content overflow-clip">
              <div className="space faq"></div>
              <p className="paragraph faq text-left">{content}</p>
            </AnimateInOut>
          </Disclosure.Button>
        </div>
      )}
    </Disclosure>
  );
}
