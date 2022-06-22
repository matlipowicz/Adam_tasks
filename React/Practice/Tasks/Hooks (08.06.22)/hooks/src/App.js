// import logo from "./logo.svg";
import "./App.css";
// import Fruit from "./Components/Training/Training";
// import Przyklad from "./Components/Train/Train";
// import State from "./Components/Hook-state/State";
// import Show from "./Components/Show-data/Show";
// import { UserProvider } from "./Context/UserContext";
// import Example from "./Components/Examples/Examples";
// import ExampleRef from "./Components/Tasks/Task-1";
// import ShowData from "./Components/Tasks/Task-1";
// import Posts from "./Components/Tasks/Task-1";
// import Post from "./Components/Tasks-subcomponent/Post";
// import Table from "./Components/Tasks/Task-1";
// import UseClickOutside from "./Components/Tasks/Custom";
import { FormExample } from "./Components/Examples/FormExample";

const data = [
    {
        id: 1,
        name: "Leanne Graham",
        username: "Bret",
        email: "Sincere@april.biz",
        address: {
            street: "Kulas Light",
            suite: "Apt. 556",
            city: "Gwenborough",
            zipcode: "92998-3874",
            geo: {
                lat: "-37.3159",
                lng: "81.1496",
            },
        },
        phone: "1-770-736-8031 x56442",
        website: "hildegard.org",
        company: {
            name: "Romaguera-Crona",
            catchPhrase: "Multi-layered client-server neural-net",
            bs: "harness real-time e-markets",
        },
    },
];

function App() {
    return (
        <div className="App">
            {/* <Fruit></Fruit> */}
            {/* <Przyklad></Przyklad> */}
            {/* <State></State> */}
            {/* <UserProvider>
                <Show></Show>
            </UserProvider> */}
            {/* <Example></Example> */}

            {/* <ExampleRef></ExampleRef> */}
            {/* <ShowData></ShowData> */}
            {/* <Posts></Posts> */}
            {/* <Table data={data}></Table> */}
            {/* <UseClickOutside></UseClickOutside> */}
            <FormExample></FormExample>
        </div>
    );
}

export default App;
