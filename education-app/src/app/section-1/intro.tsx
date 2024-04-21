// import React from 'react';
import Link from "next/link";

export default function Introduction() {
  return (
    <>
      <div>
        <h1 className="text-center text-black text-9xl font-bold italic m-0">E-YOUTH</h1>
        {/* TO-DO: Add text transition/transformation turning E-Youth to Education of the Youth*/}
        <p className="text-sky-500 font-bold text-3xl italic m-1 text-center">EDUCATION OF THE YOUTH</p>
        <p className="text-center text-black text-m w-3/5 m-auto mt-2.5">Hi! We are E-Youth: Education of the Youth

        <p className="text-center mt-3">This is ACCESS GRANTED, a data science endeavor aiming to explore the educational landscape of the Philippines. With the learnings from our data science course at our disposal, we aim to obtain a deeper understanding of the things that play a key role in the education access of Filipinos.</p>  
        </p>
        

        <h1 className="text-center mt-5 font-bold">Meet the Team!</h1>
        <div className="text-center">Ram Balatibat</div>
        <div className="text-center">Steph Encarnacion</div>
        <div className="text-center">Ysaac Villamil</div>
        </div>
    </>
  );
}


