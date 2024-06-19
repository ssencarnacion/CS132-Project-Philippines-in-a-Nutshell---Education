import Link from "next/link";

export default function DataCollection() {
  return (
    <>
      <div className="mt-10 px-0 md:px-18 lg:px-36">
        <h1 className="text-left font-bold text-4xl italic m-1">
          How Did We Work With Our Data? <br></br>
        </h1>

        <div className="mt-6 flex">
          <div className="w-3/5 flex justify-center items-center">
            <h1 className="text-4xl font-bold text-center">
              <a 
                href="https://docs.google.com/spreadsheets/d/1SZxePOWx7izLJPfivlq0bnJCWGnRPBXhocDAE-m7UqY/edit?usp=sharing" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-sky-500 underline"
              >
                Data Collection
              </a>
            </h1>
          </div>
          <div className="w-full">
            <p className="text-justify text-black text-m mt-2 text-xl">
              Our data was acquired through the Philippine Statistics Authority’s Microdata Catalog on their <b>FLEMMS 2019 Survey.</b>
            </p>
          </div>
        </div>
        <hr className="my-6 border-gray-400" /> 
        <div className="mt-6 flex">
          <div className="w-3/5 flex justify-center items-center">
            <h1 className="text-4xl font-bold text-center">
              <a 
                href="https://docs.google.com/document/d/1PHHBmDV-3PND5Hadw0EOlzy3_J7m5sKc3mBT6vxEaP0/edit?usp=sharing" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-sky-500 underline"
              >
                Sampling Method
              </a>
            </h1>
          </div>
          <div className="w-full">
            <p className="text-justify text-black text-m mt-2 text-xl">
              Utilizing <b><i>proportional stratified random sampling</i></b> by region, we were able to trim down the entries to 10% (~16,900) of the population, all while keeping a proportional representation of the whole. We’ve also <b>selectively kept certain features</b> that are relevant to the study, given that the original dataset contains over 130 features.
            </p>
          </div>
        </div>
        <hr className="my-6 border-gray-400" /> 
        <div className="mt-6 flex">
          <div className="w-3/5 flex justify-center items-center">
            <h1 className="text-4xl font-bold text-center">
              <a 
                href="https://colab.research.google.com/drive/1MsBPA2REvD_MQbSKrXNkVlpgwO0iu7Rb?usp=sharing" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-sky-500 underline"
              >
                Preprocessing
              </a>
            </h1>
          </div>
          <div className="w-full">
            <p className="text-justify text-black text-m mt-2 text-xl">
              In our Python notebook, particularly in the earlier parts, we've <b>modified column/feature names</b> for easier readability, <b>cleaned the data</b> and <b>replaced invalid or null entries</b> with an appropriate numerical entry (in this case, zeroes).
            </p>
          </div>
        </div>
        <hr className="my-6 border-gray-400" /> 
      </div>
    </>
  );
}
