// app/home.tsx
import Link from "next/link"

export default function Background() {
    return (
    <>
      <div className="text-center mt-10">
        <h1 className="text-sky-500 font-bold text-3xl italic m-1">
          What's the Situation?
        </h1>
        <p>Education is a right, not a privilege.</p>
        <br></br>
        <p>
          However, as true as it may be, this is not always the case. And despite having a steady increase in the number of students (source: "1 million more students enrolled this year – DepEd | Philstar.com"), many of our fellow countrymen still face challenges regarding access to quality education.
        </p>
        <br></br>
        <p>
        Every 5 to 6 years, the Philippine Statistics Authority conducts a nationwide survey known as the Functional Literacy, Education, and Mass Media Survey (FLEMMS). This periodical study delves into each household’s demographic background that could provide us with an insight about each one’s educational circumstances, socio-economic characteristics, and mass media exposure.
        </p>
        <h2 className="text-sky-500 font-bold text-xl italic mt-4">
          Research Question
        </h2>
        <p>
        Our team wants to explore the situation through the following questions:
        </p>
        <ol className="text-center">
          <li className="mt-2 font-bold">
            What regional differences are present in Filipinos' access to education?
          </li>
          <li className="mt-2 font-bold">
            What are the Main Factors that Influence Education Access Levels?
          </li>
        </ol>
        
        <h2 className="text-sky-500 font-bold text-xl italic mt-4">
          Hypotheses
        </h2>
        <>
          <p>
            Given the study, our team formulated the following hypotheses:
          </p>
          <div className="item-center ">
            <p className="mt-2">
            <b>Null hypothesis:</b> There are no regional differences present in access to education.
            </p>
            <p className="mt-2">
            <b>Alternative Hypothesis:</b> There are regional differences present in access to education.
            </p>
          </div>
        </>
        <h2 className="text-sky-500 font-bold text-xl italic mt-4">
          Action Plan
        </h2>
        <p>
          With the learnings that will bear fruit from this study, we hope to provide educators, researchers, and policymakers with insights that can guide them to formulate evidence-based policies and opportunities that aim to improve the overall educational landscape of the country.
        </p>
        <br></br>
      </div>

    </>);
  }