import axios from 'axios';

const url = 'https://jsonplaceholder.typicode.com/todos/1';

interface Todo {
  id: number;
  title: string;
  completed: boolean;
}

type logTodoType = (id: number, title: string, completed: boolean) => void;

const logTodo: logTodoType = (id, title, completed) => {
  console.log(id, title, completed);
};

axios.get(url).then((response) => {
  const todo = response.data as Todo;
  const { id, title, completed } = todo;
  logTodo(id, title, completed);
});
