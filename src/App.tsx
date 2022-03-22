import { Container } from "@mui/material";
import { ReactBeautifulDnd } from "./components/react-beautiful-dnd";
import { ReactDnd } from "./components/react-dnd";
import { ReactSortableJS } from "./components/react-sortablejs";
import { DndKit } from "./components/dnd-kit";
import { ReactSmoothDnd } from "./components/react-smooth-dnd";

function App() {
  return (
    <div>
      <main>
        <div style={{ textAlign: "center" }}>Compare DND Lib.</div>

        <Container
          style={{ display: "flex", flexDirection: "column", gap: 32 }}
        >
          <div>
            <div>npm : react-sortablejs</div>
            <ReactSortableJS />
          </div>

          <div>
            <div>npm : react-beautiful-dnd</div>
            <ReactBeautifulDnd />
          </div>

          <div>
            <div>npm : react-dnd</div>
            <ReactDnd />
          </div>

          <div>
            <div>npm : @dnd-kit/core</div>
            <DndKit />
          </div>

          <div>
            <div>npm : @dnd-kit/core</div>
            <ReactSmoothDnd />
          </div>
        </Container>
      </main>
    </div>
  );
}

export default App;
