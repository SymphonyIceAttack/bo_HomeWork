import { useState } from "react";
import Container from "./container";


function App() {
    const [count, setCount] = useState(0);

    return (
        <div className="App">
            <Container />
        </div>
    );
}

export default App;
