import { Container } from "@mui/material";
import { ReactBeautifulDnd } from "./components/react-beautiful-dnd";
import { ReactSortableJS } from "./components/react-sortablejs";

function App() {
  return (
    <div>
      <main>
        <div style={{ textAlign: "center" }}>
          Compare React Dra And Drop Lib.
        </div>

        <Container>
          <div>
            <div>npm : react-sortablejs</div>
            <ReactSortableJS />
          </div>

          <div>
            <div>npm : react-beautiful-dnd</div>
            <ReactBeautifulDnd />
          </div>
        </Container>
      </main>
    </div>
  );
}

export default App;
