import './App.css';

function App() {
  return (
    <div className="App">
      Expense Tracker
      <div className="ExpenseInfo">
        <label>Category:</label> 
        <input type="text" />
        <label>Amount:</label> 
        <input type="number" />
        <label>Date:</label> 
        <input type="date" />
        <button>Add Expense</button>
      </div>
    </div>
  );
}

export default App;
