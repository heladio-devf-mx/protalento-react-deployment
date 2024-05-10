import { useState } from 'react';
import ToDoItem from './ToDoItem';

const ulStyles = {
  backgroundColor: 'lime',
  padding: '15px'
};

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
        <ul style={ulStyles}>
          {/* TO DO list */}
          {toDoList.map((toDo, index) => {
            return (
              <ToDoItem
                // Operador ternario (expr. logica) ? <verdadero> : <falso>;
                style={(index % 2) === 0 ? { backgroundColor: 'blanchedalmond' } : { backgroundColor: 'crimson' }}
                // style={{ backgroundColor: 'blueviolet' }}
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
