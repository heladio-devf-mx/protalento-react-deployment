export default function ToDoItem({ description, handleDeleteToDo, style }) {
  return (
    <li style={{ ...style, listStyle: 'none' }}>
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
