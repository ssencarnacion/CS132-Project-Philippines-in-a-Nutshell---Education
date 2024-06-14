export default function DataProcessing() {
    return (
    <>
        <div className="mt-10 pl-36 pr-36 text-left">
            <h1 className="text-black font-bold text-3xl italic m-1">
                What Did We Do With the Given Data?
            </h1>

            <p className="text-justify text-black text-m mt-2 text-xl">
                In our Python notebook (link is in the Data Analysis section), particularly in the earlier parts, we've modified column/feature names for easier readability, cleaned the data and replaced invalid or null entries with an appropriate numerical entry (in this case, zeroes), and added a new feature called "ACCESS" which indicates if the respondent/entry has access to education. Note that the criteria for determining which entry has access to education was settled by the researchers based on the notion that:
            </p>

            <p className="text-justify text-black text-m mt-2 text-xl">
                <b>"Access to education includes: on-schedule  enrolment  and  progression  at  an  appropriate  age, regular  attendance,  learning consistent with national achievement norms, a learning environment that is safe enough to allow learning to take place, and opportunities to learn that are equitably distributed" (Lewin, 2015: 29). </b>
                {/* Lewin, Keith M. 2015. Educational access, equity, and development: planning to make rights realities. Fundamentals of Educational Planning 98. Paris: UNESCO-IIEP.  */}
                 
            </p>

            <p className="text-justify text-black text-m mt-2 text-xl">
            As such, the particular criteria we settled in determining one's state of having access to education is when the person, during the time of the survey:
            </p>
                <ul className="list-disc ml-8 text-xl">
                    <li>
                        Is currently attending school; if not,
                    </li>
                    <li>
                        Is 17 years or older and has graduated in High School or Senior High School;
                    </li>
                    <li>
                        Is 12-17 years old, and has attended Grades 7 to 12;
                    </li>
                </ul>

            <p className="text-justify text-black text-m mt-2 text-xl">
                If the entry fits one of the criteria, their <b>"ACCESS" column</b> is marked with <b>"true"</b>, otherwise it's marked with <b>"false."</b>
            </p>
            
            <br></br>
        </div>
    </>
    );
}