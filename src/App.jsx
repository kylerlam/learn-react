import { useState } from 'react'
import Task1_1_JSX from './1.1.1 JSX'
import Task1_1_Play from './1.1.2 Play'
import Task1_1_DataStore from './1.1.3 DataStore'
import Task1_1_ChangeColor from './1.1.4 ChangeColor'
import Task1_1_Addition from './1.1.5 Addition'
import WelcomeCard from './2.1.1 WelcomeCard'
import TodoApp from './TodoApp'
import TodoAppDnD from './TodoAppDnD'

function App() {
    const [name, setName] = useState("小美");
    const [place, setPlace] = useState("Taipei");
    const [number, setNumber] = useState("12312312");

    return (
        <div className="App">
            <Task1_1_JSX />
            <Task1_1_Play />
            <Task1_1_DataStore />
            <Task1_1_ChangeColor />
            <Task1_1_Addition />
            <WelcomeCard
                name={name}
                place={place}
                number={number}
                onNameChange={setName}
                onPlaceChange={setPlace}
                onNumberChange={setNumber}
            />
            <TodoApp />
            <hr />
            <TodoAppDnD />
        </div>
    )
}

export default App
