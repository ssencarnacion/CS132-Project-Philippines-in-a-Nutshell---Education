import Link from "next/link";
import Button from "../components/navigation/navbar/Button";
export default function DataCollection() {
    return (
    <>
        <div className="text-center ">
        <p className="text-center text-black text-m w-3/5 m-auto mt-2.5">
            <h1 className="text-sky-500 font-bold text-3xl italic m-1">
                How Did We Collect Our Data?
            </h1>
            <p className="mt-2">
                Our data was acquired through the Philippine Statistics Authority’s Microdata Catalog on their FLEMMS 2019 Survey. Utilizing proportional stratified random sampling by region, we were able to trim down the entries to 10% of the population, all while keeping a proportional representation of the whole.
            </p><br></br>
            <p className="mt-2">
                We’ve also selectively kept certain features that are relevant to the study, given that the original dataset contains over 130 features.
            </p>
            <p className="text-center mt-6 font-bold">
                Check out our data! 
                <br></br>
                <Button_1 label="FLEMMS Dataset" link="https://docs.google.com/spreadsheets/d/1SZxePOWx7izLJPfivlq0bnJCWGnRPBXhocDAE-m7UqY/edit?usp=sharing" />
                <br></br><br></br>
                Data Sampling:
                <br></br> 
                <Button_1 link="https://docs.google.com/document/d/1PHHBmDV-3PND5Hadw0EOlzy3_J7m5sKc3mBT6vxEaP0/edit?usp=sharing" label="Sampling Method Documentation" />
            </p>
            <br></br>
            </p>
        </div> 
    </>
    );
}

const Button_1 = ({ label, link }: { label: string, link: string }) => {
    return (
      <Link href={link}>
        <button
          className="p-2 w-1/2 bg-blue-700 text-white rounded cursor-pointer mx-1 text-sm hover:bg-indigo-800"
          // onClick={onClick}
        >
          {label}
        </button>
      </Link>
    );
  };
  