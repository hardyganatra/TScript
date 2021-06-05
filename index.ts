import axios from 'axios';

const url = "https://jsonplaceholder.typicode.com/todos/1"

interface Todo  {
  id: number
}
axios.get(url).then((res) => {
  const todo = res.data  as Todo;
  const ID = todo.id
  ConsoleTodo(ID);
})


const ConsoleTodo = (id : number) => {
  console.log(id)
}