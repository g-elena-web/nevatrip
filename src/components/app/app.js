import React from "react";
import Trip from "../trip/trip";

import trips from '../../trips.js';

function App() {
    return (
        <div className="app">
            {trips.map(trip => <Trip {...trip} key={trip.title} /> )}
        </div>
    );
}

export default App;