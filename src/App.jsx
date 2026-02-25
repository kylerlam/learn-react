import Task1_1_JSX from './1.1.1 JSX'
import Task1_1_Play from './1.1.2 Play'
import Task1_1_DataStore from './1.1.3 DataStore'
import Task1_1_ChangeColor from './1.1.4 ChangeColor'
import Task1_1_Addition from './1.1.5 Addition'
import WelcomeCard from './2.1.1 WelcomeCard'

function App() {
    return (
        <div className="App">
            <Task1_1_JSX />
            <Task1_1_Play />
            <Task1_1_DataStore />
            <Task1_1_ChangeColor />
            <Task1_1_Addition />
            <WelcomeCard name="小美" place="Taipei" number="12312312" />
            <WelcomeCard name="小明" place="Hong Kong" />
            <WelcomeCard name="小華" place="Shanghai" />
        </div>
    )
}

export default App
