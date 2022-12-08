import { useState } from "react";

export const TodoForm = ({ todos, setTodo }) => {
  const [input, setInput] = useState('')

    const handleChange = (e) => {
        setInput(e.target.value);
      }

      // const createList = () => {

      // }

      const handleSubmit = (e) => {
        e.preventDefault();
        setTodo([...todos, {name: input, isCompleted: false}]);
        setInput('')
      }

    return (
    <div className='form' data-testid='todo-form'>
    <form onSubmit={handleSubmit} >
      <label>Add Todos
        <input type='text' name='todo' value={input} onChange={handleChange}></input>
      </label>
      <input type="submit" value="Submit" />
    </form>
  </div>
)}