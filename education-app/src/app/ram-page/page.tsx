// app/home.tsx
import Link from "next/link"

export default function HomePage() {
    return (<main>
      <p className="text-center">Hello, World! This is the //LEGIT NA TALAGA HAHA// Home Page!</p>
      <br></br>
      <div>
        <h1 className="text-center">Hello! We are Educational-Youth.</h1>
      <p className="text-center">Insert Project Description here. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla non interdum nisl. Vivamus posuere, dui quis efficitur condimentum, est ligula porta sem, ut molestie lorem ipsum quis justo. Mauris sollicitudin ante nunc, non ornare enim tristique vitae. Curabitur iaculis urna quis commodo porta. Suspendisse ligula leo, gravida a suscipit id, viverra id turpis. Vestibulum ultricies laoreet orci nec molestie. Sed vitae nisi sed sem auctor consectetur.</p>  
      <br></br>

      <h1 className="text-center">Meet the Team!</h1> <br></br>
      <div className="text-center">Ram Balatibat (insert contact deets here as well)</div>
      <div className="text-center">Steph Encarnacion (insert contact deets here)</div>
      <div className="text-center">Ysaac Villamil (insert contact deets here)</div>
      </div>
      <br></br>

      <div>
        <h1>
          What's the Situation?
        </h1>
        <h2>
          Research Question
        </h2>
        <h2>Hypotheses
        </h2>
        <h2>
          Action Plan
        </h2>
      </div>

      <div>
        <h1>
          How Did We Collect Our Data?
        </h1>
        <h2>
          
        </h2>
      </div>
      
      <div>
        <h1>
          What Did We Do With the Given Data?
        </h1>
        <h2>
          
        </h2>
      </div>
      
      <div>
        <h1>
          What Did We Find Out?
        </h1>
        <h2>
          
        </h2>
      </div>
      
      <div>
        <h1>
          What Now?
        </h1>
        <h2>
          
        </h2>
      </div>

      <div className="text-center"><Link href="/">Back</Link></div>
      </main>);
  }