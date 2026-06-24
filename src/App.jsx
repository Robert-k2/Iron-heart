
import './App.css';
import Userprofile from "./Userprofile";
import Workoutlist from "./Workoutlist";
import CounterWithInit from "./CounterWithInit";


const DumbbellIcon = () => (
  <svg
    className="dumbbell-icon"
    width="52"
    height="52"
    viewBox="0 0 52 52"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
  >
    {/* Left plate group */}
    <rect x="4" y="18" width="7" height="16" rx="3" fill="#7c3aed" />
    <rect x="9" y="15" width="5" height="22" rx="2.5" fill="#5b21b6" />
 
    {/* Bar */}
    <rect x="14" y="23" width="24" height="6" rx="3" fill="#7c3aed" />
 
    {/* Right plate group */}
    <rect x="38" y="15" width="5" height="22" rx="2.5" fill="#5b21b6" />
    <rect x="41" y="18" width="7" height="16" rx="3" fill="#7c3aed" />
 
    {/* Center highlight on bar */}
    <rect x="22" y="24.5" width="8" height="3" rx="1.5" fill="#ede9fe" opacity="0.6" />
  </svg>
);



function App(){

    const qoute = "Nature doesnt care, get stronger ";

    return (
        <div className="app-wrapper">
            <header className="app-header">
                <DumbbellIcon />
                <div className="header-text">
                    <h2> The Daily Hundrend  </h2>
                    <p> Track your workouts </p>
                      <p> {qoute} </p>
                </div>
            </header>
            <Userprofile/>
            <Workoutlist/>
            <CounterWithInit/>
        </div>
   );
};

export default App;
















