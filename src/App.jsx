import AppName from "./assets/component/AppName";
import AddTodo from "./assets/component/AddTodo";
import "./App.css";
import TodoItems from "./assets/component/TodoItems";
import { useState } from "react";
import WelcomeMessage from "./assets/component/WelcomeMessage";

function App() {

  const [todoItems, setTodoItems] = useState([]);
  
  const handleNewItem = (itemName, itemDueDate) => {
    console.log(`New item Added: ${itemName} Date: ${itemDueDate}`);
    const newTodoItems = [
      ...todoItems,
      { name: itemName, dueDate: itemDueDate },
    ];
    setTodoItems(newTodoItems);
  };

  const handleDeleteItem = (todoItemName) => {
    const newTodoItems = todoItems.filter(item => item.name !== todoItemName);
    setTodoItems(newTodoItems);
  };

  return (
    <>
      <center className="todo-container text-center ">
        <AppName></AppName>
        <AddTodo onNewItem={handleNewItem}></AddTodo>
        {todoItems.length === 0 && <WelcomeMessage ></WelcomeMessage>}
        <TodoItems todoItems={todoItems} onDeleteClick={handleDeleteItem}></TodoItems>
      </center>
    </>
  );
}
export default App;
