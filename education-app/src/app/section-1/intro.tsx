import Link from "next/link";
import Image from "next/image";
import classImage from './images/class.png';

export default function Introduction() {
  return (
    <>
      <div className="mt-10 px-36">
        <h1 className="text-black text-9xl font-bold italic m-0 text-center">E-YOUTH</h1>
        {/* TO-DO: Add text transition/transformation turning E-Youth to Education of the Youth*/}
        <p className="text-sky-500 font-bold text-3xl italic m-1 text-center">EDUCATION OF THE YOUTH</p>
        <br />

        <p className="text-center text-black text-xl max-w-5xl m-auto mt-2.5">
          Hi! We are E-Youth: Education of the Youth
          <p><br /> This is <b>ACCESS GRANTED,</b> a data science endeavor aiming to explore the educational landscape of the Philippines. With the learnings from our data science course at our disposal, we aim to obtain a deeper understanding of the things that play a key role in the education access of Filipinos.</p>
        </p>
        
        <div className="flex justify-center mt-6 ">
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
