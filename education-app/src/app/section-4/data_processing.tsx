export default function DataProcessing() {
    return (
        <>
            <div className="mt-10 px-0 md:px-18 lg:px-36 text-left">
                <p className="text-justify text-black text-m mt-2 text-xl">
                    In our <a href="https://colab.research.google.com/drive/1MsBPA2REvD_MQbSKrXNkVlpgwO0iu7Rb?usp=sharing" target="_blank" rel="noopener noreferrer" style={{ color: 'blue' }}>Python notebook,</a> particularly in the earlier parts, we've modified column/feature names for easier readability, cleaned the data and replaced invalid or null entries with an appropriate numerical entry (in this case, zeroes), and added a new feature called "ACCESS" which indicates if the respondent has access to education. Note that the criteria for determining which entry has access to education was settled by the researchers based on the notion that:
                </p>
                <br></br>
                <p className="text-justify text-black text-m mt-2 text-xl">
                    <b><i>"Access to education includes: on-schedule enrolment and progression at an appropriate age, regular attendance, learning consistent with national achievement norms, a learning environment that is safe enough to allow learning to take place, and opportunities to learn that are equitably distributed" (Lewin, 2015: 29).</i></b>
                    {/* Lewin, Keith M. 2015. Educational access, equity, and development: planning to make rights realities. Fundamentals of Educational Planning 98. Paris: UNESCO-IIEP. */}
                </p>
                <br></br>
                <p className="text-justify text-black text-m mt-2 text-xl">
                    As such, the particular criteria we settled in determining <b>one's state of having access to education</b> is when the person, during the time of the survey:
                </p>
                
                <div className="flex space-x-4 mt-4">
                    <div className="flex-1 p-4 border border-black rounded-lg">
                        <br></br>
                        <p className="text-xl text-center">is <b><i>currently attending</i></b> school</p>
                    </div>
                    <div className="flex-1 p-4 border border-black rounded-lg">
                        <p className="text-xl text-center">is 17 years or older and has graduated in High School or Senior High School;</p>
                    </div>
                    <div className="flex-1 p-4 border border-black rounded-lg">
                        <p className="text-xl text-center">is 12-17 years old, and has attended Grades 7 to 12;</p>
                    </div>
                </div>

                <p className="text-justify text-black text-m mt-4 text-xl">
                    If the entry fits one of the criteria, their <b>"ACCESS"</b> column is marked with <b>"true"</b>, otherwise it's marked with <b>"false."</b>
                </p>
            </div>
        </>
    );
}
