import { useState } from "react"
import {
    DndContext,
    closestCenter,
    PointerSensor,
    useSensor,
    useSensors,
} from "@dnd-kit/core"
import {
    SortableContext,
    verticalListSortingStrategy,
    useSortable,
    arrayMove,
} from "@dnd-kit/sortable"
import { CSS } from "@dnd-kit/utilities"

// 每個可拖拉的 Todo 項目
function SortableTodo({ id, todo, onDelete }) {
    const {
        attributes,   // 無障礙屬性
        listeners,    // 拖拉事件監聽
        setNodeRef,   // 綁定 DOM 節點
        transform,    // 拖拉時的位移
        transition,   // 放開時的動畫
        isDragging,   // 是否正在拖拉
    } = useSortable({ id })

    const style = {
        transform: CSS.Transform.toString(transform),
        transition,
        opacity: isDragging ? 0.4 : 1,
        display: "flex",
        alignItems: "center",
        gap: "8px",
        padding: "8px 12px",
        margin: "6px 0",
        background: "#fff",
        border: "1px solid #ddd",
        borderRadius: "8px",
        listStyle: "none",
        cursor: "grab",
        userSelect: "none",
    }

    return (
        <li ref={setNodeRef} style={style} {...attributes} {...listeners}>
            <span>☰</span>  {/* 拖拉把手提示 */}
            <span style={{ flex: 1 }}>{todo}</span>
            <button
                onClick={onDelete}
                // 防止刪除按鈕觸發拖拉
                onPointerDown={(e) => e.stopPropagation()}
                style={{ cursor: "pointer" }}
            >
                ✗
            </button>
        </li>
    )
}

function TodoAppDnD() {
    const [todos, setTodos] = useState([
        { id: "1", text: "買牛奶" },
        { id: "2", text: "倒垃圾" },
    ])
    const [inputValue, setInputValue] = useState("")

    // 設定拖拉感應器（需要移動 5px 才觸發，防止誤觸點擊）
    const sensors = useSensors(
        useSensor(PointerSensor, { activationConstraint: { distance: 5 } })
    )

    function handleAddTodo() {
        if (inputValue.trim() === "") return
        const newTodo = {
            id: Date.now().toString(), // 用時間戳作為唯一 id
            text: inputValue,
        }
        setTodos([...todos, newTodo])
        setInputValue("")
    }

    function handleDeleteTodo(id) {
        setTodos(todos.filter((todo) => todo.id !== id))
    }

    // 拖拉結束時重新排序
    function handleDragEnd(event) {
        const { active, over } = event
        if (!over || active.id === over.id) return

        const oldIndex = todos.findIndex((t) => t.id === active.id)
        const newIndex = todos.findIndex((t) => t.id === over.id)
        setTodos(arrayMove(todos, oldIndex, newIndex)) // dnd-kit 提供的排序工具
    }

    return (
        <div style={{ maxWidth: "400px", margin: "40px auto", fontFamily: "sans-serif" }}>
            <h1>📝 我的待辦事項（可拖拉排序）</h1>

            <DndContext
                sensors={sensors}
                collisionDetection={closestCenter}
                onDragEnd={handleDragEnd}
            >
                <SortableContext
                    items={todos.map((t) => t.id)}
                    strategy={verticalListSortingStrategy}
                >
                    <ul style={{ padding: 0 }}>
                        {todos.map((todo) => (
                            <SortableTodo
                                key={todo.id}
                                id={todo.id}
                                todo={todo.text}
                                onDelete={() => handleDeleteTodo(todo.id)}
                            />
                        ))}
                    </ul>
                </SortableContext>
            </DndContext>

            <div style={{ marginTop: "16px", display: "flex", gap: "8px" }}>
                <input
                    type="text"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    onKeyDown={(e) => e.key === "Enter" && handleAddTodo()}
                    placeholder="輸入新的待辦事項"
                    style={{ flex: 1, padding: "8px", borderRadius: "6px", border: "1px solid #ccc" }}
                />
                <button
                    onClick={handleAddTodo}
                    style={{ padding: "8px 16px", borderRadius: "6px", cursor: "pointer" }}
                >
                    新增
                </button>
            </div>
        </div>
    )
}

export default TodoAppDnD
