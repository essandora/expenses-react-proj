import './App.css';
import Expenses from './components/Expenses/Expenses';

const App = () => {

  return (
    <div className="expenses">
      <Expenses expenses={Expenses}
      />
    </div>
  )
}

export default App
