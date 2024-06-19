import Link from "next/link";
import Image from "next/image";
import classImage from './images/class.png';

export default function Introduction() {
  return (
    <>
      <div className="mt-10 px-0 md:px-18 lg:px-36">



        <p className="text-black font-bold italic mix-blend-darken text-3xl sm:text-4xl md:text-5xl">This is</p>

        <p className="text-black font-bold italic m-1 text-center text-6xl sm:text-7xl md:text-8xl">ACCESS GRANTED</p>

        <p className="text-center text-black text-lg sm:text-xl md:text-2xl m-auto mt-2.5 mix-blend-darken">
          A data science endeavor aiming to explore the educational landscape of the Philippines. With the learnings from our data science course at our disposal, we aim to obtain a deeper understanding of the things that play a key role in the education access of Filipinos.
        </p>

        <div className="flex justify-center mt-6 mix-blend-darken">
          <Image
            src={classImage}
            alt="Example Image"
            className="w-full max-w-5xl rounded-3xl"
          />
        </div>
      </div>
    </>
  );
}
