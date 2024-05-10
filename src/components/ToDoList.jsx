import { useState } from 'react';
import ToDoItem from './ToDoItem';

function ToDoList() {
  const [newToDo, setNewToDo] = useState('');
  const [toDoList, setToDoList] = useState([]);
  // handler para el clic de agregar
  function handleAgregarToDo() {
    const newToDoList = [...toDoList, newToDo];
    setToDoList(newToDoList);
    setNewToDo('');
  }

  // function handleDeleteToDo(toDo) {
  //   deleteToDoItem(toDo);
  // }

  const deleteToDoItem = (toDoPosition) => {
    // Delete for index
    const updatedToDoList = toDoList.filter((toDoItem, index) => index !== toDoPosition);
    setToDoList(updatedToDoList);
  };

  return (
    <>
      <header>
        <h1>ToDo List</h1>
        <input
          type='text'
          placeholder='Ej. estudiar react'
          value={newToDo}
          onChange={(event) => setNewToDo(event.target.value)}
        />
        <button onClick={handleAgregarToDo}>Agregar</button>
      </header>
      <section>
        <ul>
          {/* TO DO list */}
          {toDoList.map((toDo, index) => {
            return (
              <ToDoItem
                key={index}
                description={toDo}
                handleDeleteToDo={() => deleteToDoItem(index)}
              />
            );
          })}
        </ul>
      </section>
    </>
  );
}

export default ToDoList;
