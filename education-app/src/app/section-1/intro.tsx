import Link from "next/link";
import Image from "next/image";
import classImage from './images/class.png';
import headlineEffect from './images/headline_text_background_3.gif';

export default function Introduction() {
  return (
    <>
      <div className="mt-10 px-0 md:px-18 lg:px-36">

        <p className="text-center text-black text-3xl max-w-5xl m-auto mt-2.5 mix-blend-darken">
          Hi! We are
        </p>
        
        <div className="transition-opacity ease-in duration-700">
          <div className="flex place-content-center">
          <Image
              src={headlineEffect}
              alt="Example Image"
              
              className="w-1/2 absolute mix-blend-lighten"
              unoptimized
            />
          </div>
          <p className="text-black font-bold italic m-auto text-center text-6xl sm:text-8xl md:text-9xl">E-YOUTH</p>
        </div>
        {/* TO-DO: Add text transition/transformation turning E-Youth to Education of the Youth*/}
        <p className="text-sky-500 font-bold italic m-1 text-center mix-blend-darken text-xl sm:text-3xl md:text-5xl">EDUCATION OF THE YOUTH</p>
        
        <p className="text-center text-black text-xl m-auto mt-2.5 mix-blend-darken">And this is</p>
        <p className="text-black font-bold italic m-1 text-center text-5xl sm:text-6xl md:text-8xl">ACCESS</p> 
        <p className="text-black font-bold italic m-1 text-center text-5xl sm:text-6xl md:text-8xl">GRANTED</p>
        
        <p className="text-center text-black text-xl m-auto mt-2.5 mix-blend-darken"> A data science endeavor aiming to explore the educational landscape of the Philippines. With the learnings from our data science course at our disposal, we aim to obtain a deeper understanding of the things that play a key role in the education access of Filipinos.</p> 
        
        
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
