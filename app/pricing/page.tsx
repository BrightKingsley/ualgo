"use client";

import Link from "next/link";
import FAQs from "../components/FAQs";
import Pricing from "../components/Pricing";
import Flyer from "../components/Flyer";
import Footer from "../components/Footer";
import Header from "../components/Header";

export default function PricingPage() {
  return (
    <main className="bg-neutral-1000">
      <div className="page-wrapper overflow-hidden">
        <Header />
        <Pricing />
        <FAQs />
        <Flyer />
        <Footer />
      </div>
    </main>
  );
}
