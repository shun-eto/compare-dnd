import { Draggable } from "react-smooth-dnd";
import styles from "./styles";

interface DraggableItemProps {}
export const DraggableItem: React.FC<DraggableItemProps> = (props) => {
  const { StyledListItem } = styles;

  return (
    <Draggable>
      <StyledListItem>{props.children}</StyledListItem>
    </Draggable>
  );
};
