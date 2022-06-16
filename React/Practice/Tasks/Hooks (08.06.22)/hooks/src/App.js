// import logo from "./logo.svg";
import "./App.css";
// import Fruit from "./Components/Training/Training";
// import Przyklad from "./Components/Train/Train";
// import State from "./Components/Hook-state/State";
import Show from "./Components/Show-data/Show";
import { UserProvider } from "./Context/UserContext";
function App() {
    return (
        <div className="App">
            {/* <Fruit></Fruit> */}
            {/* <Przyklad></Przyklad> */}
            {/* <State></State> */}
            <UserProvider>
                <Show></Show>
            </UserProvider>
        </div>
    );
}

export default App;
