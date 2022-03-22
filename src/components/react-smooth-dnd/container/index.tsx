import React, { useCallback } from "react";
import { Container, DropResult } from "react-smooth-dnd";

interface DraggableContainerProps {
  items: { id: string; label: string }[];
  onChange: (items: { id: string; label: string }[]) => void;
}
export const DraggableContainer: React.FC<DraggableContainerProps> = (
  props
) => {
  const handleDrop = useCallback(
    (result: DropResult) => {
      const { removedIndex, addedIndex } = result;
      if (addedIndex === null || removedIndex === null) return;

      const newListItems = [...props.items];

      const [removed] = newListItems.splice(addedIndex, 1);
      newListItems.splice(removedIndex, 0, removed);
      props.onChange(newListItems);
    },
    [props]
  );

  return <Container onDrop={handleDrop}>{props.children}</Container>;
};
