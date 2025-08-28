/*import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}*/
/*import { useState } from "react";

export default function App() {
  const [count, setCount] = useState(0);

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Counter: {count}</h1>
      <button onClick={() => setCount(count + 1)}>➕ Increment</button>
      <button onClick={() => setCount(count - 1)}>➖ Decrement</button>
      <button onClick={() => setCount(0)}>🔄 Reset</button>
    </div>
  );
}*/
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpenses/NewExpense";
const App = () => {
  let expenses = [
    {
      id: "e1",
      title: "School Fee",
      amount: 250,
      date: new Date(2021, 5, 22),
    },
    {
      id: "e2",
      title: "Books",
      amount: 230,
      date: new Date(2021, 2, 22),
    },
    {
      id: "e3",
      title: "House rent",
      amount: 700,
      date: new Date(2021, 4, 2),
    },
    {
      id: "e4",
      title: "Foods",
      amount: 540,
      date: new Date(2021, 5, 5),
    },
  ];
  const addExpenseHandler = (expense) => {
    console.log(expense);
  };
  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses item={expenses} />
    </div>
  );
};
export default App;
