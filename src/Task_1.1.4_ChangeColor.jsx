import { useState } from "react"

function ChangeColor() {
    const [color, setColor] = useState("gray")

    return (
        <div>
            <h1>Task 1.1.4</h1>
            <div style={{ backgroundColor: color, width: "100px", height: "100px" }}></div><br />
            <button onClick={() => setColor("red")}>Red</button>
            <button onClick={() => setColor("yellow")}>Yellow</button>
            <button onClick={() => setColor("blue")}>Blue</button>
        </div >
    )
}

export default ChangeColor