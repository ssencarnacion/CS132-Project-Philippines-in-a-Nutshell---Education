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

      <DataProcessing />
      
      <DataAnalysis />

      <WhatNow />

      <div className="mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left">
        <a
          href="/"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Sample Button{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            Sample button description/additional info.
          </p>
        </a>
      </div>
    </main>
  );
}
