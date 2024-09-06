import logo from './logo.svg';
import './App.css';
import TodoRowItem from "./components/TodoRowItem";

function App() {

  const todos = [
    {rowNumber: 1, description: "Feed dog", assigned: "Eric"},
    {rowNumber: 2, description: "Eat Food", assigned: "Lebron"},
    {rowNumber: 3, description: "Drink Water", assigned: "Steph"},
  ]

  return (
    <div className="mt-5 container">
      <div className="card">
        <div className="card-header">
          Your todos
        </div>
        <div className="card-body">
          <table className="table table-hover">
            <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Description</th>
              <th scope="col">Assigned</th>
            </tr>
            </thead>
            <tbody>
            <TodoRowItem
              rowNumber={todos[0].rowNumber}
              rowDescription={todos[0].description}
              rowAssigned={todos[0].assigned}
            />
            <TodoRowItem
                rowNumber={todos[1].rowNumber}
                rowDescription={todos[1].description}
                rowAssigned={todos[1].assigned}
            />
            <TodoRowItem
                rowNumber={todos[2].rowNumber}
                rowDescription={todos[2].description}
                rowAssigned={todos[2].assigned}
            />
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default App;
