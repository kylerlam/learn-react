// 1.1 JSX — 在 JS 裡寫 HTML
// 本文件示範 JSX 的核心邏輯與語法規則

function Task1_1_JSX() {
    // --- JavaScript 邏輯區 ---
    const name = "Kyler";
    const status = "學習中";
    const tasks = ["語法閉合", "根元素規則", "大括號插值"];
    const showBonus = true;

    // --- JSX (UI) 渲染區 ---
    return (
        // 規則 1: 只能有一個根元素（或使用 <> Fragment）
        <div style={{ padding: '20px', fontFamily: 'sans-serif' }}>

            {/* 規則 2: class 屬性要寫成 className */}
            <h1 className="title">你好, {name}！</h1>

            {/* 規則 3: 使用 { } 嵌入 JavaScript 表達式 */}
            <p>目前狀態：<strong>{status}</strong></p>
            <p>計算結果：1 + 1 = {1 + 1}</p>

            {/* 規則 4: 條件渲染 (三元運算子) */}
            <div className="alert">
                {showBonus ? "🎉 你已解鎖 JSX 基礎！" : "繼續加油！"}
            </div>

            {/* 規則 5: 列表渲染 (使用 .map) */}
            <h3>今日學習重點：</h3>
            <ul>
                {tasks.map((task, index) => (
                    <li key={index}>{index + 1}. {task}</li>
                ))}
            </ul>

            {/* 規則 6: 自閉合標籤必須加上斜線 */}
            <hr />
            <input type="text" placeholder="試著在這裡輸入..." />

        </div>
    );
}

export default Task1_1_JSX;
