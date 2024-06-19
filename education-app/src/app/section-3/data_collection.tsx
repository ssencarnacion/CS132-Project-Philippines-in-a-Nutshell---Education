import Link from "next/link";
import Button from "../components/navigation/navbar/Button";

export default function DataCollection() {
  return (
    <>
      <div className="mt-10 px-0 md:px-18 lg:px-36">
        <h1 className="text-left font-bold text-4xl italic m-1">
          How Did We Work With Our Data?
        </h1>
        <div className="mt-6 flex-column justify">
          <Button_1 link="https://docs.google.com/spreadsheets/d/1SZxePOWx7izLJPfivlq0bnJCWGnRPBXhocDAE-m7UqY/edit?usp=sharing"  label="FLEMMS Dataset" />
          <Button_1 link="https://docs.google.com/document/d/1PHHBmDV-3PND5Hadw0EOlzy3_J7m5sKc3mBT6vxEaP0/edit?usp=sharing" label="Sampling Method" />
          <Button_2 link="https://colab.research.google.com/drive/1MsBPA2REvD_MQbSKrXNkVlpgwO0iu7Rb" label="Exploratory Data Analysis" />
        </div>
        <p className="text-justify text-black text-m mt-2 text-xl">
          Our data was acquired through the Philippine Statistics Authority’s Microdata Catalog on their FLEMMS 2019 Survey. Utilizing <b><i>proportional stratified random sampling</i></b> by region, we were able to trim down the entries to 10% of the population, all while keeping a proportional representation of the whole. We’ve also selectively kept certain features that are relevant to the study, given that the original dataset contains over 130 features.
        </p>

      </div>
    </>
  );
}

const Button_1 = ({ label, link }: { label: string, link: string }) => {
  return (
    <Link href={link}>
      <button
        className="p-2 bg-blue-700 text-white rounded cursor-pointer m-1 text-sm hover:bg-indigo-800 w-full md:w-36 h-10 text-sm" // Adjusted width and height
      >
        {label}
      </button>
    </Link>
  );
};

const Button_2 = ({ label, link }: { label: string, link: string }) => {
  return (
    <Link href={link}>
      <button
        className="p-2 bg-blue-700 text-white rounded cursor-pointer m-1 text-sm hover:bg-indigo-800 w-full md:w-64 h-10 text-sm" // Adjusted width and height
      >
        {label}
      </button>
    </Link>
  );
};
