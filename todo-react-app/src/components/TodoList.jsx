import { FaTrash } from "react-icons/fa";
function TodoList({
  filteredTasks,
  toggleComplete,
  deleteTask,
}) {
  return (
    <ul>
      {filteredTasks.length === 0 ? (
        <div className="empty-state">
          <h2>🚀 No tasks yet</h2>

          <p>
            Start adding your goals!
          </p>
        </div>
      ) : (
        filteredTasks.map((t, index) => (
          <li key={index}>
            <span
              className={
                t.completed
                  ? "completed"
                  : ""
              }
              onClick={() =>
                toggleComplete(index)
              }
            >
              {t.text}
            </span>

            <button
              onClick={() =>
                deleteTask(index)
              }
            >
            <FaTrash />
            </button>
          </li>
        ))
      )}
    </ul>
  );
}

export default TodoList;