import { useState } from "react";

function Addition() {
    const [display, setDisplay] = useState("")
    const [num1, setNum1] = useState("")
    const [num2, setNum2] = useState("")

    return (
        <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-xl shadow-lg border border-gray-100 font-sans">
            <h1 className="text-2xl font-bold text-gray-800 mb-6 text-center">Task 1.1.5 Addition</h1>

            <div className="flex flex-col gap-4">
                <div className="flex gap-2">
                    <input
                        type="text"
                        placeholder="Number 1"
                        className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                        value={num1}
                        onChange={(e) => setNum1(e.target.value)}
                    />
                    <input
                        type="text"
                        placeholder="Number 2"
                        className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                        value={num2}
                        onChange={(e) => setNum2(e.target.value)}
                    />
                </div>

                <div className="flex gap-3">
                    <button
                        onClick={() => setDisplay(Number(num1) + Number(num2))}
                        className="flex-1 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded-lg shadow-md hover:shadow-lg transition-all active:scale-95"
                    >
                        Add
                    </button>
                    <button
                        onClick={() => setDisplay("")}
                        className="flex-1 bg-gray-200 hover:bg-gray-300 text-gray-700 font-semibold py-2 rounded-lg transition-all active:scale-95"
                    >
                        Clear
                    </button>
                </div>

                <div className="mt-6 p-4 bg-gray-50 rounded-lg border-2 border-dashed border-gray-200 text-center">
                    <span className="text-sm text-gray-500 block mb-1">Result:</span>
                    <p className="text-3xl font-mono font-bold text-blue-600">
                        {display || "0"}
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Addition

// e (event)：代表「發生了什麼事」（使用者打了字）。
// e.target：代表「發生在哪裡」（就是這個輸入框）。
// e.target.value：代表「現在輸入框裡面最新的文字是什麼」。
// setNum1(...)：把最新拿到的文字，存回 num1 狀態中。