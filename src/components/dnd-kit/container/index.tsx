import {
  DndContext,
  closestCenter,
  KeyboardSensor,
  PointerSensor,
  useSensor,
  useSensors,
  DragEndEvent,
} from "@dnd-kit/core";
import {
  SortableContext,
  sortableKeyboardCoordinates,
  verticalListSortingStrategy,
  arrayMove,
} from "@dnd-kit/sortable";
import { useCallback } from "react";

interface SortableContainerProps {
  items: string[];
  onDragEnd: (items: string[]) => void;
}
export const SortableContainer: React.FC<SortableContainerProps> = (props) => {
  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    })
  );

  const handleDragEnd = useCallback(
    (event: DragEndEvent) => {
      const { active, over } = event;

      if (!over) return;
      if (active.id !== over.id) {
        const oldIndex = props.items.indexOf(active.id);
        const newIndex = props.items.indexOf(over.id);
        const updatedItems = arrayMove(props.items, oldIndex, newIndex);
        props.onDragEnd(updatedItems);
      }
    },
    [props]
  );

  return (
    <DndContext
      sensors={sensors}
      collisionDetection={closestCenter}
      onDragEnd={handleDragEnd}
    >
      <SortableContext
        items={props.items}
        strategy={verticalListSortingStrategy}
      >
        {props.children}
      </SortableContext>
    </DndContext>
  );
};
