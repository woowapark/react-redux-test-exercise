import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { useSelector } from 'react-redux';

import TodoInput from "./components/TodoInput";
import TodoList from './components/TodoList';
import DoneList from './components/DoneList';

function App() {
  // global state w/redux
  const completedTodos = useSelector(state => state.todos.filter(todo => todo.completed === true));
  const remainedTodos = useSelector(state => state.todos.filter(todo => todo.completed === false));

  return (
    <Router>
      <div>
        <TodoInput />
        <nav>
          <ul>
            <li>
              <Link to="/">남은 할 일</Link>
            </li>
            <li>
              <Link to="/done">완료한 일</Link>
            </li>
          </ul>
        </nav>

        <Switch>
          <Route path="/done">
            <DoneList completedTodos={completedTodos} />
          </Route>
          <Route path="/">
            <TodoList remainedTodos={remainedTodos} />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
