import Image from "next/image";
import Link from "next/link";
import Introduction from "./section-1/intro";
import Background from "./section-2/background";
import DataCollection from "./section-3/data_collection";
import DataProcessing from "./section-4/data_processing";
import DataAnalysis from "./section-5/data_analysis";
import Conclusion from "./section-6/what_now";
import MeetTeam from './section-last/meet_team';

export default function Home() {
  return ( 
    <>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
        <style>
          {`
            /* Sticky navbar styles */
            .sticky {
              position: fixed;
              top: 0;
              width: 100%;
              z-index: 1000; /* Ensure it's above other content */
              background-color: #1a202c; /* Adjust as needed */
              padding: 10px 0; /* Adjust padding as needed */
            }

            /* Style for links in navbar */
            .sticky a {
              color: #fff; /* Text color */
              text-decoration: none;
              padding: 10px 20px; /* Adjust padding as needed */
              margin-right: 15px; /* Adjust spacing between links */
              font-weight: 600; /* Adjust font weight as needed */
              transition: all 0.3s ease; /* Smooth transition on hover */
            }

            .sticky a:hover {
              color: #ffffff; /* Hover color */
              background-color: #4a5568; /* Hover background color */
              border-radius: 5px; /* Rounded corners on hover */
            }
          `}
        </style>
      </head>
      <nav className="sticky">
        <div className="container mx-auto flex justify-between items-center">
          <div className="text-white font-bold text-lg ml-5">
            ACCESS GRANTED
          </div>
          <div className="text-sm md:text-md lg:text-lg lg:space-x-4">
            <a href="#intro" className="hidden md:inline">Introduction</a>
            <a href="#background">Background</a>
            <a href="#data-collection">Methodology</a>
            <a href="#data-analysis">Data Analysis</a>
            <a href="#conclu">Conclusion</a>
            <a href="#meet-team" className="hidden md:inline">Meet the Team</a>
          </div>
        </div>
      </nav>
      <main className="flex-col items-center text-center bg-white p-10 md:p-12">
        <section id="intro">
          <Introduction />
        </section>
        <section id="background">
          <Background />
        </section>
        <section id="data-collection">
          <DataCollection />
        </section>
        <section id="data-processing">
          <DataProcessing />
        </section>
        <section id="data-analysis">
          <DataAnalysis />
        </section>
        <section id="conclu">
          <Conclusion/>
        </section>
        <section id="meet-team">
          <MeetTeam />
        </section>
      </main>
    </>
  );
}
