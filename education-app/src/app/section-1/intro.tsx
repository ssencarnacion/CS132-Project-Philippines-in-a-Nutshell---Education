import Link from "next/link";
import Image from "next/image";
import classImage from './images/class.png';
import headlineEffect from './images/headline_text_background_3.gif';

export default function Introduction() {
  return (
    <>
      <div className="mt-10 px-36">
        <p className="text-center text-black text-3xl max-w-5xl m-auto mt-2.5 mix-blend-darken">
          Hi! We are
        </p>
        
        <div className="flex place-content-center">
        <Image
            src={headlineEffect}
            alt="Example Image"
            
            className="w-1/2 absolute mix-blend-lighten"
          />
        </div>
        <h1 className="text-black text-9xl font-bold italic m-0 text-center">E-YOUTH</h1>

        {/* TO-DO: Add text transition/transformation turning E-Youth to Education of the Youth*/}
        <p className="text-sky-500 font-bold text-5xl italic m-1 text-center mix-blend-darken">EDUCATION OF THE YOUTH</p>
        
        <p className="text-center text-black text-xl m-auto mt-2.5 mix-blend-darken">And this is</p>
        <p className="text-black font-bold text-8xl italic m-1 text-center">ACCESS</p> 
        <p className="text-black font-bold text-8xl italic m-1 text-center">GRANTED</p>
        
        <p className="text-center text-black text-xl m-auto mt-2.5 mix-blend-darken"> a data science endeavor aiming to explore the educational landscape of the Philippines. With the learnings from our data science course at our disposal, we aim to obtain a deeper understanding of the things that play a key role in the education access of Filipinos.</p> 
        
        
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
