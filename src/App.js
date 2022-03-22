import './App.css';
import Login from './components/Login';
import Gallery from './components/Gallery';
import Applepie from './components/Applepie';
import UserTable from './components/UserTable';

const dataSetA = {
  labels: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
    datasets: [
      {
        data: [2, 5, 6, 7, 3],
        backgroundColor: ["blue", "green", "yellow", "pink", "orange"],
      }
    ]
}

const dataSetB = {
  labels: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
    datasets: [
      {
        data: [1, 6, 4, 5, 2],
        backgroundColor: ["red", "blue", "brown", "beige", "orange"],
      }
    ]
}

function App() {
  return (
    <div className="App">
      <div className="Widget">
        <h1>React Training Portal</h1>
      </div>
      <div className="Widget">
        <Login />
      </div>
      <div className="Widget">
        <Applepie name="Avg. Hours Spent on Reddit by Week Day" data={dataSetA}/>
        <br ></br>
        <Applepie name="Avg. Hours Spent on Reddit by Week Day" data={dataSetB}/>
      </div>
      <div className="Widget">
        <UserTable />
      </div>
      <div className="Widget">
        <Gallery />
      </div>
    </div>
  );
}

export default App;
