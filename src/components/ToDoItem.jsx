export default function ToDoItem({ description, handleDeleteToDo }) {
  return (
    <li>
      {description}
      <button
        className='delete-button'
        onClick={handleDeleteToDo}
      >
        Eliminar
      </button>
    </li>
  );
}
