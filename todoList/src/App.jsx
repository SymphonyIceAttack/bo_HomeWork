import { useState } from "react";
import Container from "./container";
import store from "./store";

function App() {
    return (
        <div className="App">
            <Container store={store} />
        </div>
    );
}

export default App;
