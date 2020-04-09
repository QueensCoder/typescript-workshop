import axios from 'axios';

const url = 'https://jsonplaceholder.typicode.com/todos/1';

axios.get(url).then((response) => {
  const { ID, Title, finished } = response.data.todo;
  console.log(ID, Title, finished);
});
