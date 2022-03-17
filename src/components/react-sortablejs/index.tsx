import React, { useEffect, useState } from "react";
import { ReactSortable } from "react-sortablejs";
import { ListItemText } from "@mui/material";
import { ArrowRight } from "@mui/icons-material";
import styles from "./styles";

export const ReactSortableJS: React.FC = (props) => {
  const [listItems, setListItems] = useState<{ id: number; name: string }[]>([
    { id: 1, name: "item-1" },
    { id: 2, name: "item-2" },
    { id: 3, name: "item-3" },
    { id: 4, name: "item-4" },
    { id: 5, name: "item-5" },
  ]);

  useEffect(() => {
    console.log("sorted >> ", listItems);
  }, [listItems]);

  return (
    <ReactSortable
      list={listItems}
      setList={setListItems}
      easing="cubic-bezier(1, 0, 0, 1)"
      handle=".test"
      group="groupName"
      animation={200}
      delay={2}
    >
      {listItems.map((listItem) => (
        <ListItem key={listItem.id}>{listItem.name} </ListItem>
      ))}
    </ReactSortable>
  );
};

const ListItem: React.FC = (props) => {
  const { StyledListItem, StyledListItemIcon } = styles;

  return (
    <StyledListItem>
      <StyledListItemIcon>
        <ArrowRight className="test" />
      </StyledListItemIcon>
      <ListItemText>{props.children}</ListItemText>
    </StyledListItem>
  );
};
