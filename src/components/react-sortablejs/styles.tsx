import { ListItem, ListItemIcon, styled } from "@mui/material";

export const StyledListItem = styled(ListItem)(() => ({
  backgroundColor: "grey",
}));

export const StyledListItemIcon = styled(ListItemIcon)(() => ({
  cursor: "grab",
}));

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  StyledListItem,
  StyledListItemIcon,
};
