import { useState } from "react"; // 1 導入 useState 狀態功能

function DataStore() {
    // 建立狀態
    const [data, setData] = useState("")
    // 建立事件處理函數
    const [saveData, setSaveData] = useState("")

    return (
        <div>
            <h1>Task 1.1 DataStore</h1>
            {/* 讓span顯示saveData 如果空 → 顯示文字 */}
            <label>data here: <span>{saveData || "I am empty"}</span></label><br></br>

            {/* 綁定輸入框與 data 變量 */}
            <input
                type="text"
                placeholder="Enter anything:"
                value={data} // 顯示什麼
                onChange={(e) => setData(e.target.value)} // 監聽「輸入了什麼」
            />
            <br></br>
            <button onClick={() => setSaveData(data)}>Save</button> {/* 點擊按鈕後，將 data 的值存入 saveData */}
            <button onClick={() => { setData(""); setSaveData(""); }}>Clear</button>
        </div>
    )
}

export default DataStore