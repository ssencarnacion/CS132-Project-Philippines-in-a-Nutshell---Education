// app/home.tsx
import Link from "next/link"

export default function Background() {
    return (
    <>
      <div className="text-center mt-10">
        <h1 className="text-sky-500 font-bold text-3xl italic m-1">
          What's the Situation?
        </h1>
        
        <p className="text-center text-black text-m w-3/5 m-auto mt-2.5">
        <p className="font-bold">Education is a right, not a privilege.</p>
        <br></br>
        <p>
        However, as true as it may be, this is not always the case. And despite having a steady increase in the number of students (<a href="https://www.philstar.com/headlines/2021/11/19/2142354/1-million-more-students-enrolled-year-deped" target="_blank" rel="noopener noreferrer" style={{ color: 'blue' }}>source: "1 million more students enrolled this year – DepEd | Philstar.com"</a>), many of our fellow countrymen still face challenges regarding access to quality education.
        
        </p>
        <br></br>
        <p>
        Every 5 to 6 years, the Philippine Statistics Authority conducts a nationwide survey known as the Functional Literacy, Education, and Mass Media Survey (FLEMMS). This periodical study delves into each household’s demographic background that could provide us with an insight about an individual’s various circumstances, such as their educational background, socio-economic characteristics, and mass media exposure. Using the latest iteration (2019) of the survey, the team is determined to provide new insights and inputs regarding the educational landscape of the country.
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
          </li> <br></br>
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
            </p><br></br>
          </div>
        </>
        <h2 className="text-sky-500 font-bold text-xl italic mt-4">
          Action Plan
        </h2>
        <p>
        With the learnings that will be gained from this study, we aim to provide educators, researchers, and policymakers with evidence-based insights that can guide them to formulate policies and opportunities to improve overall educational landscape of the country starting at the grassroots of each region. By indentifying the regional disparities in education access that are in play, we hope to provide a better understanding of the root causes behind it.
        </p>
        </p>
        <br></br>
      </div>

    </>);
  }