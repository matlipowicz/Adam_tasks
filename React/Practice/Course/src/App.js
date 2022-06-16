import { Pierwszy } from "./components/Pierwszy/Pierwszy";
import { Drugi } from "./components/Drugi/Drugi";
import { Trzeci } from "./components/Trzeci/Trzeci";

function App() {
    const array = [1, 2, 3, 4, 5];

    return (
        <div className="App">
            <Trzeci>
                <Pierwszy />
                {true ? <Pierwszy text="Adam" /> : null}
                <Pierwszy text="Mateusz" />
                <Pierwszy text="3" />
                <Drugi liczba={1} />
            </Trzeci>
        </div>
    );
}

export default App;
