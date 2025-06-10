import React, { useState } from "react"; 

function App(){
    const [count, setCount] = useState(0)
    const handler = () => {
        setCount(count+1);
    }

    return(
        <>
            <button onClick={handler}>Click me</button>
            <p>{count}</p>
        </>
    )
}

export default App
