import Image from "next/image";
import Bar from './images/bar graph.png';
import Choropleth from './images/choropleth.png';
import Matrix from './images/correlation matrix.png';

export default function DataAnalysis() {
    return (
        <>
            <div className="mt-10 px-0 md:px-18 lg:px-36 text-left">
                <h1 className="font-bold text-4xl italic m-1">
                    What Did We Find Out?
                </h1>
                <p className="text-justify text-black text-m mt-2 text-2xl">
                    <i><span className="text-sky-500 font-bold">What regional differences are present in Filipinos' access to education?</span></i><br />
                    <span className="text-justify text-black text-m mt-2 text-xl">To acquire an answer to this research question, we utilized a bar graph and a choropleth map in order to visualize the results.</span>
                </p>

                <div className="flex mt-2">
                    <div className="relative flex-2" style={{ height: '500px', width: '50%', borderRadius: '15px', overflow: 'hidden', border: '2px solid black' }}>
                        <Image src={Bar} alt="Bar Graph" layout="fill" objectFit="contain" />
                    </div>
                    <div className="relative flex-1 ml-4" style={{ height: '500px', borderRadius: '15px', overflow: 'hidden', border: '2px solid black' }}>
                        <Image src={Choropleth} alt="Choropleth Map" layout="fill" objectFit="contain" />
                    </div>
                </div>
                <p className="text-justify text-black text-m mt-2 text-xl">
                    We can see that there is indeed a disparity in access to education across the different regions in the Philippines. The region with the highest access is <b>NCR</b>, while the region with the least is <b>BARMM</b>.
                </p>

                <br /><br />
                <p className="text-justify text-black text-m mt-2 text-2xl">
                    <i><span className="text-sky-500 font-bold">What are the main factors that influence education access levels?</span></i><br />
                    <span className="text-justify text-black text-m mt-2 text-xl">As for our second research question, we utilized a correlation matrix to see which among our features correlate with <b>ACCESS</b> to education.</span>
                </p>

                <div className="flex mt-2">
                    <div className="relative w-full" style={{ flex: '1 1 60%', height: '510px', borderRadius: '15px', overflow: 'hidden', border: '2px solid black' }}>
                        <Image src={Matrix} alt="Correlation Matrix" layout="fill" objectFit="contain" />
                    </div>

                    <div className="ml-4" style={{ flex: '1 1 40%' }}>
                        <p className="text-justify text-black text-m mt-2 text-xl">
                            If our criteria is selecting the top 3 features/factors that correlate with ACCESS to Education, we have:
                        </p>
                        <ul className="list-disc ml-5 mt-2 text-xl">
                            <li>Having Basic Literacy</li>
                            <li>Having High Literacy Levels</li>
                            <li>Being Functionally Literate</li>
                        </ul>
                        <p className="text-justify text-black text-m mt-4 text-xl">
                            But it is worthy to note that while these three have the highest absolute correlation values, they are still labeled as <b>low correlation</b>, regardless if positive or negative correlation.
                      
                            Other factors such as Urbanity, Number of Total Members in their Household, Familiarity and Willingness to study in Online Distance Learning, and Sex have "very low" correlation (regardless if positive or negative).
                        </p>
                    </div>
                </div>

                <br style={{ clear: 'both' }} />

                <p className="text-justify text-black text-m mt-2 text-2xl">
                    <i><span className="text-sky-500 font-bold">Statistical Test</span></i><br />
                    <span className="text-justify text-black text-m mt-2 text-xl">The study used <b>chi-square test</b> for association/independence since we want to know the regional differences of education access which are both considered as categorical data. We assumed a confidence level of 95% (alpha = 0.05). Here's what we obtained:</span>
                </p>

                <div className="flex mt-5">
                    <div className="text-center w-1/2 border border-black rounded-lg p-4 hover:bg-gray-300 transition duration-300">
                        <h1 className="font-bold text-xl">CHI-SQUARED STATISTIC</h1>
                        <p className="mt-2">446.80</p>
                    </div>
                    <div className="text-center w-1/2 border border-black rounded-lg p-4 ml-4 hover:bg-gray-300 transition duration-300">
                        <h1 className="font-bold text-xl">P-VALUE</h1>
                        <p className="mt-2">5.42 &times; 10<sup>-85</sup></p>
                    </div>
                </div>

                <p className="text-justify text-black text-m mt-2 text-xl">
                    The p-value is less than a = 0.05 (95 % confidence level). Therefore the null hypothesis is rejected, showing that there are regional differences present in access to education.
                    <br /><br />
                    Results show that education access is associated with the region, which implies that education access is significantly different across the regions in the Philippines.
                </p>
            </div>
        </>
    );
}
