import React from "react";
import { DndProvider } from "react-dnd";
import { Container } from "./container";
import { HTML5Backend } from "react-dnd-html5-backend";

/**
 * [使い方]
 *
 * [メリット]
 *
 * [デメリット]
 * - イベント周りの可読性が悪い
 * - ちゃんと使うには、まずソースをちゃんと理解する必要がありそう
 * - サードパーティライブラリを他に複数インストールする必要がある
 */
export const ReactDnd: React.FC = () => {
  return (
    <DndProvider backend={HTML5Backend}>
      <Container />
    </DndProvider>
  );
};
