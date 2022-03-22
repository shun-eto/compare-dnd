import { ListItem } from "@mui/material";
import styled from "styled-components";

const StyledListItem = styled(ListItem)(({ theme }) => ({
  border: "solid 1px grey",
}));

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  StyledListItem,
};
