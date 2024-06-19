import Link from "next/link";

export default function Background() {
  return (
    <>
      <div className="mt-10 px-0 md:px-18 lg:px-36">
        <h1 className="text-left font-bold text-4xl italic">
          What's the Situation?
        </h1>
        <p className="text-justify text-black text-m mt-2 text-xl">
          <b>Education is a right, not a privilege.</b> <br /> <br />
          However, as true as it may be, this is not always the case. And despite having a steady increase in the number of students (<a href="https://www.philstar.com/headlines/2021/11/19/2142354/1-million-more-students-enrolled-year-deped" target="_blank" rel="noopener noreferrer" style={{ color: 'blue' }}>source: "1 million more students enrolled this year – DepEd | Philstar.com"</a>), many of our fellow countrymen still face challenges regarding access to quality education. <br /> <br />
          
          Every 5 to 6 years, the Philippine Statistics Authority conducts a nationwide survey known as the Functional Literacy, Education, and Mass Media Survey (FLEMMS). This periodical study delves into each household’s demographic background that could provide us with an insight about an individual’s various circumstances, such as their educational background, socio-economic characteristics, and mass media exposure. Using the latest iteration (2019) of the survey, the team is determined to provide new insights and inputs regarding the educational landscape of the country.
        </p>

        <div className="flex-column md:flex mt-5">
          <div className="mt-5 md:mt-0 md:w-1/3 border border-black rounded-lg p-4 mx-2 hover:bg-gray-300 transition duration-300">
            <h2 className="font-bold text-xl">Research Questions</h2>
            <p className="text-justify mt-2">
              Our team wants to explore the situation through the following questions:<br /><br />
              1. What regional differences are present in Filipinos' access to education?<br /><br />
              2. What are the main factors that influence education access levels?<br />
            </p>
          </div>

          <div className="mt-5 md:mt-0 md:w-1/3 md:w-1/3 border border-black rounded-lg p-4 mx-2 hover:bg-gray-300 transition duration-300">
            <h2 className="font-bold text-xl">Hypotheses</h2>
            <p className="text-justify mt-2">
              Given the study, our team formulated the following hypotheses:<br /><br />
              <span className="text-sky-500 font-bold">Null hypothesis</span>: There are no regional differences present in access to education.<br /><br />
              <span className="text-sky-500 font-bold">Alternative Hypothesis</span>: There are regional differences present in access to education.
            </p>
          </div>

          <div className="mt-5 md:mt-0 md:w-1/3 md:w-1/3 border border-black rounded-lg p-4 mx-2 hover:bg-gray-300 transition duration-300">
            <h2 className="font-bold text-xl">Action Plan</h2>
            <p className="text-justify mt-2">
            Provide educators, researchers, and policymakers with evidence-based insights that can guide them to formulate policies and opportunities to improve the overall educational landscape of the country starting at the grassroots of each region. By identifying the regional disparities in education access that are in play, we hope to provide a better understanding of the root causes behind it.
            </p>
          </div>
        </div>
        
        
      </div>
    </>
  );
}
