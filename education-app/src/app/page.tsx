import Image from "next/image";
import Link from "next/link";
import Introduction from "./section-1/intro";
import Background from "./section-2/background";
import DataCollection from "./section-3/data_collection";
import DataProcessing from "./section-4/data_processing";
import DataAnalysis from "./section-5/data_analysis";
import WhatNow from "./section-6/what_now";
// Tailwind CSS classnames reference for easier CSS-ing: https://tailwind.build/classes
// Templates for Next.JS pages: https://vercel.com/templates?framework=next.js
// Deployment thru Vercel

export default function Home() {
  return ( 
    <main className="flex-col items-center text-center p-24">
      {/* <Home /> */}
      <Introduction />

      <Background />

      <DataCollection />

      

      
    </main>
  );
}
