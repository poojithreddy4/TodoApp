import styles from "./todoitem.module.css";
export default function Todoitem({ item, todos, setTodos }) {
  function handleDelete() {
    console.log("Button Clicked", item);
    setTodos(todos.filter((todo) => todo !== item));
  }
  function handleClick(name) {
    setTodos(
      todos.map((todo) =>
        todo.name === name ? { ...todo, done: !todo.done } : todo
      )
    );
  }
  const reddy = item.done ? styles.completed : "";
  return (
    <div className={styles.item}>
      <div className={styles.itemName}>
        <span className={reddy} onClick={() => handleClick(item.name)}>
          {item.name}
        </span>
        <span>
          <button onClick={handleDelete} className={styles.deleteButton}>
            x
          </button>
        </span>
      </div>
      <hr className={styles.line}></hr>
    </div>
  );
}
