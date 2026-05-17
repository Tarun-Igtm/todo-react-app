function TodoForm({
  task,
  setTask,
  addTask,
}) {
  return (
    <div className="input-section">
      <input
        type="text"
        placeholder="Enter task..."
        value={task}
        onChange={(e) =>
          setTask(e.target.value)
        }
      />

      <button onClick={addTask}>
        Add
      </button>
    </div>
  );
}

export default TodoForm;