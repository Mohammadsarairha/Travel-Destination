import Home from "./components/home/Home";
import data from './data/db.json';
function App() {
    return (
        <div>
            <Home data = {data}/>
        </div>
    )
}
export default App;