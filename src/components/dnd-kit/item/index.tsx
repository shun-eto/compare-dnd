import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";

interface SortableItemProps {
  id: string;
}
export const SortableItem: React.FC<SortableItemProps> = (props) => {
  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({ id: props.id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
    border: "solid 1px grey",
  };

  return (
    <div ref={setNodeRef} style={style} {...attributes} {...listeners}>
      {props.children}
    </div>
  );
};
