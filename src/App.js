import { TodoCounter } from './TodoCounter';
import { TodoSearch } from './TodoSearch';
import { TodoList } from './TodoList';
import { TodoItem } from './TodoItem';
import { TodoButton } from './TodoButton';
import './App.css';

function App() {
  return (
    <div className="App">

      <TodoCounter/>
      <TodoSearch/>

    <TodoList>
      <TodoItem/>
      <TodoItem/>
      <TodoItem/>
    </TodoList>

    {/*<CreateTodoButton />*/}

    <TodoButton/>

      
    </div>
  );
}

// function TodoCounter() {
//   return (
//    <h1>
//       has completado 3 de 5 TODOS
//    </h1>
//   );
// }


export default App;
