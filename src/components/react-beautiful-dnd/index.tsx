import { useCallback, useState } from "react";
import { DropResult } from "react-beautiful-dnd";
import { DroppableContainer } from "./droppable-container";
import { DroppableBase, DroppableBaseProps } from "./droppable-base";
import styles from "./styles";
import { ArrowRight } from "@mui/icons-material";
import { ListItemText } from "@mui/material";

export const ReactBeautifulDnd: React.FC = () => {
  const [listItems, setListItems] = useState([
    { id: "1", label: "item 1" },
    { id: "2", label: "item 2" },
    { id: "3", label: "item 3" },
    { id: "4", label: "item 4" },
    { id: "5", label: "item 5" },
  ]);

  const handleDragEnd = useCallback(
    (result: DropResult) => {
      if (!result.destination) return;

      const newListItems = [...listItems];

      const [removed] = newListItems.splice(result.source.index, 1);
      newListItems.splice(result.destination.index, 0, removed);
      setListItems(newListItems);
    },
    [listItems]
  );

  return (
    <DroppableContainer onDragEnd={handleDragEnd}>
      {listItems.map((listItem, index) => (
        <DroppableListItem
          key={listItem.id}
          draggableId={listItem.id}
          index={index}
        >
          {listItem.label}
        </DroppableListItem>
      ))}
    </DroppableContainer>
  );
};

interface DroppableListItemProps extends DroppableBaseProps {}
const DroppableListItem: React.FC<DroppableListItemProps> = (props) => {
  const { StyledListItem, StyledListItemIcon } = styles;

  return (
    // DroppableBaseでラップすることでDND可能なコンポーネントになる
    <DroppableBase draggableId={props.draggableId} index={props.index}>
      <StyledListItem>
        <StyledListItemIcon>
          <ArrowRight className="test" />
        </StyledListItemIcon>
        <ListItemText>{props.children}</ListItemText>
      </StyledListItem>
    </DroppableBase>
  );
};
