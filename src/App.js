import './App.css';
import Compass from './Compass';
import CompassRuler from './compassRuler';
import IsoscelesRightTriangle from './isoscelesRightTriangle';
import Compass2 from './Compass2';

function App() {
  return (
      <div className="App">
       <h1>Compass Ruler</h1>
       <CompassRuler />
       <h1>Compass Legs</h1>
       <Compass 
          width={400} 
          height={400}
          scale={1.5} 
          rotation={45}/>
      <Compass2/>
       <h1>Isosceles Right Triangle</h1>
       <IsoscelesRightTriangle 
          width={400} 
          height={200}
          scale={1.5} 
          rotation={45}/>
     </div>
  );
}

export default App;
