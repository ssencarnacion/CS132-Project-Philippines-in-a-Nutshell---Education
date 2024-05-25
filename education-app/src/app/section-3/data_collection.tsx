import Link from "next/link";
import Button from "../components/navigation/navbar/Button";

export default function DataCollection() {
  return (
    <>
      <div className="mt-10 pl-36 pr-36">
        <h1 className="text-left font-bold text-3xl italic m-1">
          How Did We Collect Our Data?
        </h1>
        <p className="text-justify text-black text-m mt-2 text-xl">
          Our data was acquired through the Philippine Statistics Authority’s Microdata Catalog on their FLEMMS 2019 Survey. Utilizing proportional stratified random sampling by region, we were able to trim down the entries to 10% of the population, all while keeping a proportional representation of the whole.
        </p>
        <p className="text-justify text-black text-m mt-2 text-xl">
          We’ve also selectively kept certain features that are relevant to the study, given that the original dataset contains over 130 features.
        </p>
        <div className="mt-6 text-center">
          <div className="flex justify-center">
            <Button_1 label="FLEMMS Dataset" link="https://docs.google.com/spreadsheets/d/1SZxePOWx7izLJPfivlq0bnJCWGnRPBXhocDAE-m7UqY/edit?usp=sharing" />
            <div className="w-10" /> 
            <Button_1 link="https://docs.google.com/document/d/1PHHBmDV-3PND5Hadw0EOlzy3_J7m5sKc3mBT6vxEaP0/edit?usp=sharing" label="Sampling Method Documentation" />
          </div>
        </div>
      </div>
    </>
  );
}

const Button_1 = ({ label, link }: { label: string, link: string }) => {
  return (
    <Link href={link}>
      <button
        className="p-2 px-10 bg-blue-700 text-white rounded cursor-pointer mx-1 text-sm hover:bg-indigo-800 w-45 h-20 text-xl"
      >
        {label}
      </button>
    </Link>
  );
};
