import {
  DragDropContext,
  Droppable,
  DroppableProvided,
  DropResult,
} from "react-beautiful-dnd";

interface DroppableContainerProps {
  onDragEnd: (result: DropResult) => void;
}
export const DroppableContainer: React.FC<DroppableContainerProps> = (
  props
) => {
  return (
    <DragDropContext onDragEnd={props.onDragEnd}>
      <Droppable droppableId="items">
        {(provided: DroppableProvided) => (
          <div {...provided.droppableProps} ref={provided.innerRef}>
            {props.children}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </DragDropContext>
  );
};
