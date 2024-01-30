import './App.css';
import Expenses from './components/Expenses';

function App() {

  return (
    <div className="expenses">
      <Expenses expenses={Expenses}
      />
    </div>
  )
}

export default App
