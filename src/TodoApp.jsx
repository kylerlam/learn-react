import { useState } from "react"


function TodoApp() {
    const [todos, setTodos] = useState([])
    const [inputValue, setInputValue] = useState("")

    function handleAddTodo() {
        if (inputValue.trim() === "") return
        setTodos([...todos, inputValue]) // 後面的新項目加入前面的舊項目
        setInputValue("")
    }
    function handleDeleteTodo(index) {
        setTodos(todos.filter((_, i) => i !== index))
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
