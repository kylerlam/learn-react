import { useState } from "react"


function TodoApp() {
    const [todos, setTodos] = useState(["買牛奶", "倒垃圾"])
    return (
        <div>
            <h1>我的待辦事項</h1>
            {
                todos.map((todo, index) => (
                    <li key={index}>{todo}</li>
                ))
            }
        </div>
    )
}
export default TodoApp