import { useState, useEffect } from "react"


function TodoApp() {
    const [todos, setTodos] = useState(() => {
        const saved = localStorage.getItem("todos")
        return saved ? JSON.parse(saved) : []
    }) // 需要傳入一個函式，但這個函式只用一次，不值得特地取名字。
    const [inputValue, setInputValue] = useState("") // 三元運算子（Ternary Operator），是 if/else 的簡化版
    // saved ? JSON.parse(saved) : []
    //    ↑          ↑              ↑
    //   條件      true 時回傳    false 時回傳
    useEffect(() => {
        localStorage.setItem("todos", JSON.stringify(todos))
    }, [todos])

    function handleAddTodo() {
        if (inputValue.trim() === "") return
        setTodos([...todos, inputValue]) // 後面的新項目加入前面的舊項目
        setInputValue("")
    }
    function handleDeleteTodo(index) {
        setTodos(todos.filter((_, i) => i !== index)) // 💡 filter 把「編號不等於 index」的項目留下來，等於移除了那一項
    }
    return (
        <div>
            <h1>我的待辦事項：</h1>

            {
                todos.map((todo, index) => (
                    <li key={index}>
                        {todo}
                        <button onClick={() => handleDeleteTodo(index)}> ✗ </button>
                    </li>
                ))
            }
            <br></br>
            <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder="輸入新的待辦事項"
            /><br></br>
            <button onClick={handleAddTodo}>新增&#160;</button>

        </div>
    )
}
export default TodoApp


// const [todos, setTodos] = useState(["買牛奶", "倒垃圾"])
//         ↑        ↑
//       讀數據    寫數據
