import { useState } from 'react';
import './App.css';

function App() {

  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState(0);
  const [date, setDate] = useState(Date);

  const displayData = () => {
    console.log(title + amount + date);
  }

  return (
    <div className="App">
      <h1>Expense Tracker</h1>
      <div className="ExpenseInfo">
        <label>Title:</label> 
        <input type="text" onChange={(event) => {setTitle(event.target.value)}}/>
        <label>Amount Spent:</label> 
        <input type="number" onChange={(event) => {setAmount(event.target.value)}}/>
        <label>Date:</label> 
        <input type="date" onChange={(event) => {setDate(event.target.value)}}/>
        <button onClick = {displayData}> Add Expense</button>
      </div>
    </div>
  );
}

export default App;
