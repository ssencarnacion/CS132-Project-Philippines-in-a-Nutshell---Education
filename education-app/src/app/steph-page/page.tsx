// import React from 'react';
import Link from "next/link";

export default function HomePage() {
  return (
    <main>
      <div>
          
        <h1 className="text-center text-white text-9xl font-bold italic m-0">E-YOUTH</h1>
        {/* TO-DO: Add text transition/transformation turning E-Youth to Education of the Youth*/}
        <p className="text-sky-500 font-bold text-3xl italic m-1 text-center">EDUCATION OF THE YOUTH</p>
        <p className="text-center text-white text-m w-1/2 m-auto mt-2.5">Hello! We are a group of Computer Science students</p>
        
        <p className="text-center mt-3">Insert Project Description here. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla non interdum nisl. Vivamus posuere, dui quis efficitur condimentum, est ligula porta sem, ut molestie lorem ipsum quis justo. Mauris sollicitudin ante nunc, non ornare enim tristique vitae. Curabitur iaculis urna quis commodo porta. Suspendisse ligula leo, gravida a suscipit id, viverra id turpis. Vestibulum ultricies laoreet orci nec molestie. Sed vitae nisi sed sem auctor consectetur.</p>  
        
        <div className="text-center mt-5">
          <Button_1 label="Data Set" link="https://docs.google.com/document/d/1PHHBmDV-3PND5Hadw0EOlzy3_J7m5sKc3mBT6vxEaP0/edit" />

          <Button_1 label="Data Collection" link="https://docs.google.com/document/d/1PHHBmDV-3PND5Hadw0EOlzy3_J7m5sKc3mBT6vxEaP0/edit" />
        </div>

        <h1 className="text-center mt-5">Meet the Team!</h1> <br></br>
        <div className="text-center">Ram Balatibat (insert contact deets here as well)</div>
        <div className="text-center">Steph Encarnacion (insert contact deets here)</div>
        <div className="text-center">Ysaac Villamil (insert contact deets here)</div>
        </div>

      <div className="text-center">
        <h1 className="text-sky-500 font-bold text-3xl italic m-1 text-center">
          What's the Situation?
        </h1>
        <h2>
          Research Question
        </h2>
        <h2>Hypotheses
        </h2>
        <h2>
          Action Plan
        </h2>
        <br></br>
      </div>

      <div className="text-center">
        <h1 className="text-sky-500 font-bold text-3xl italic m-1 text-center">
          How Did We Collect Our Data?
        </h1>
        <h2>
          
        </h2>
        <br></br>
      </div>
      
      <div className="text-center">
        <h1 className="text-sky-500 font-bold text-3xl italic m-1 text-center">
          What Did We Do With the Given Data?
        </h1>
        <h2>
          
        </h2>
        <br></br>
      </div>
      
      <div className="text-center">
        <h1 className="text-sky-500 font-bold text-3xl italic m-1 text-center">
          What Did We Find Out?
        </h1>
        <h2>
          
        </h2>
        <br></br>
      </div>
      
      <div className="text-center">
        <h1 className="text-sky-500 font-bold text-3xl italic m-1 text-center">
          What Now?
        </h1>
        <h2>
          
        </h2>
        <br></br>
      </div>

      <div className="text-center text-sky-500 font-bold text-3xl italic m-1 text-center"><Link href="/">Back</Link></div>
    </main>
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
