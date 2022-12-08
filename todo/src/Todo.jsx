import { useState } from "react";
import { Button } from "react-bootstrap";
import { UserAuth } from "./Firebase/AuthContextProvider";
import { Signout } from "./Signout";
import { TodoForm } from "./TodoForm";

export const Todo = () => {
  const { user } = UserAuth();
  const [todos, setTodos] = useState([]);

  const changeCompletedStatus = (index) => {
   const clonedItem = {...todos[index]};
   clonedItem.isCompleted = !clonedItem.isCompleted
   const clonedState = [...todos];
   clonedState[index] = clonedItem;
   setTodos(clonedState);
  }
   
   const con = () => {
    console.log('userCon', user);
   }

    return (
      <div className="App" style={{display: 'flex', flexDirection: 'column'}} data-testid='app'>
        <div className="App-header">
          <Signout />
          <span className='header' style={{marginBottom: '200'}}>Todo</span>
        </div>
          <div className='todo' style={{justifyContent: 'center', backgroundColor: 'teal' }}>
            <TodoForm todos={todos} setTodo={setTodos} />
            <div className='todos-list' style={{minHeight: '200px'}}>
              {todos.map((item, index) => {
              return (
                <div key={item.name} style={{margin: '30px'}}  >
                  <span onClick={() => changeCompletedStatus(item, index)}>{item.name}</span>
                  <div data-testid='completed-span'>
                    <span style={{color: 'red'}} >Completed{item.isCompleted ? ':  yes' : ':  no'}</span>
                  </div>
                </div>
              );
              })}
            </div>
          </div>
          <Button onClick={con}>con</Button>
      </div>
    )
}