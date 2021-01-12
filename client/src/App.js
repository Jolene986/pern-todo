
import './App.css';
import AllTodos from './components/allTodos';
import InputTodo from './components/inputTodo';

function App() {
  return (
    <div className="container">
    <InputTodo/>
    <AllTodos/>
    </div>
  );
}

export default App;
