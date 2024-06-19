import Image from "next/image";
import Link from "next/link";
import Introduction from "./section-1/intro";
import Background from "./section-2/background";
import DataCollection from "./section-3/data_collection";
import DataProcessing from "./section-4/data_processing";
import DataAnalysis from "./section-5/data_analysis";
import WhatNow from "./section-6/what_now";
import MeetTeam from './section-last/meet_team';
// Tailwind CSS classnames reference for easier CSS-ing: https://tailwind.build/classes
// Templates for Next.JS pages: https://vercel.com/templates?framework=next.js
// Deployment thru Vercel

export default function Home() {
  return ( 
    <>
    <head>
      <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
    </head>
    <main className="flex-col items-center text-center bg-white p-10 md:p-12">
      {/* <Home /> */}
      <Introduction />

      <Background />

      <DataCollection />

      <DataProcessing />

      <DataAnalysis />
      
      <MeetTeam />
      
      
      
    </main>
    </>
  );
}
