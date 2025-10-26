import React from "react";
import Hero from "@/components/Home/Hero";
import Work from "@/components/Home/work";
import TimeLine from "@/components/Home/timeline";
import Platform from "@/components/Home/platform";
import Portfolio from "@/components/Home/portfolio";
import AboutUs from "@/components/Home/about";
import WhyUs from "@/components/Home/whyus";
import Services from "@/components/Home/services";
import Roadmap from "@/components/Home/roadmap";
import FAQ from "@/components/Home/faq";
import Upgrade from "@/components/Home/upgrade";
import Perks from "@/components/Home/perks";
import { Metadata } from "next";
export const metadata: Metadata = {
  title: "CrypGo",
};

export default function Home() {
  return (
    <main>
      <Hero />
      <AboutUs />
      <Work />
      <WhyUs />
      <TimeLine />
      <Platform />
      <Services />
      <Roadmap />
      <Portfolio />
      <Upgrade />
      <FAQ />
      <Perks />
    </main>
  );
}
