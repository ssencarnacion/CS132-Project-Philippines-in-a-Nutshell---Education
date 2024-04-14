// import React from 'react';
import Link from "next/link";

export default function HomePage() {
  return (
          <div>
              
              <h1 className="text-center text-white text-9xl font-bold italic m-0">E-YOUTH</h1>
              {/* TO-DO: Add text transition/transformation turning E-Youth to Education of the Youth*/}
              <p className="text-sky-500 font-bold text-3xl italic m-1 text-center">EDUCATION OF THE YOUTH</p>
              <p className="text-center text-white text-m w-1/2 m-auto mt-2.5
    margin-top: 10px;">Hello! We are a group of Computer Science students</p>
              
              <div className="text-center mt-5">
                <Button_1 label="Data Set" link="https://docs.google.com/document/d/1PHHBmDV-3PND5Hadw0EOlzy3_J7m5sKc3mBT6vxEaP0/edit" />

                <Button_1 label="Data Collection" link="https://docs.google.com/document/d/1PHHBmDV-3PND5Hadw0EOlzy3_J7m5sKc3mBT6vxEaP0/edit" />
              </div>
          </div>
      
  );
}

const Button_1 = ({ label, link}) => {
  return (
    <Link href={link}>
      <button
        className="p-2 bg-blue-700 text-white rounded cursor-pointer mx-1 text-sm w-36 hover:bg-indigo-800"
        // onClick={onClick}
      >
        {label}
      </button>
    </Link>
  );
};
