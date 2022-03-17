import React from "react";
import { Draggable, DraggableProvided } from "react-beautiful-dnd";

export interface DroppableBaseProps {
  draggableId: string;
  index: number;
}
export const DroppableBase: React.FC<DroppableBaseProps> = (props) => {
  return (
    <Draggable draggableId={props.draggableId} index={props.index}>
      {(provided: DraggableProvided) => (
        <div
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
        >
          {props.children}
        </div>
      )}
    </Draggable>
  );
};
