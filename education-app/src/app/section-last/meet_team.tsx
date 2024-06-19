import Image from "next/image";
import Steph from './images/steph.png';
import Ysaac from './images/ysaac.jpg';
import Ram from './images/ram.jpg';


export default function MeetTeam() {
    return (
        <div className="mt-10 pl-36 pr-36">
        <h1 className="font-bold text-left text-4xl italic m-1 mt-10">
          Meet the Team!
        </h1>
        <div className="flex justify-center mt-5 space-x-4">
          <div className="w-1/3 border border-black rounded-lg p-4 hover:bg-gray-300 transition duration-300 flex flex-col items-center">
            <Image
              src={Ram}
              alt="Ram Balatibat"
              width={100}
              height={100}
              className="rounded-full mb-4"
            />
            <h2 className="font-bold text-xl">Ram Balatibat</h2>
            <p className="text-justify text-xs mt-2">Hello-hello! The name's Ram! At the time of writing this, I am a senior computer science student. I am an avid video game and game development enjoyer who also loves web development and has taken to heart software engineering. Outside academics, I love cooking, exercising, singing, learning how to play the guitar, dancing, and I am someone who absolutely loves learning about everything that can help me make sense of the world and myself!</p>
          </div>
          <div className="w-1/3 border border-black rounded-lg p-4 hover:bg-gray-300 transition duration-300 flex flex-col items-center">
            <Image
              src={Steph}
              alt="Steph Encarnacion"
              width={100}
              height={100}
              className="rounded-full mb-4"
            />
            <h2 className="font-bold text-xl">Stephen Encarnacion</h2>
            <p className="text-justify text-xs mt-2">Yo! I'm Steph, a senior student from UP Diliman. As an aspiring web developer, I aim to use my knowledge in programming and graphic designing to create visually appealing pages. Outside of academics, I love to immerse myself in the mundaneness of life.  </p>
          </div>
          <div className="w-1/3 border border-black rounded-lg p-4 hover:bg-gray-300 transition duration-300 flex flex-col items-center">
            <Image
              src={Ysaac}
              alt="Ysaac Villamil"
              width={100}
              height={100}
              className="rounded-full mb-4"
            />
            <h2 className="font-bold text-xl">Ysaac Villamil</h2>
            <p className="text-justify text-xs mt-2">Hi, I am Ysaac, a sophomore computer science student. I am currently in the phase of learning and exploring computer science domains to find one that will interest me and be passionate about the most. Outside academics, I like video games, movies, sports, and food, and I am a person who loves to learn something new.</p>
          </div>
        </div>
      </div>
    );
  }