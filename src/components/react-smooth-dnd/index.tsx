import React, { useCallback, useState } from "react";
import { DraggableContainer } from "./container";
import { DraggableItem } from "./item";

/**
 * [使い方]
 * DraggableContainerでDraggableItemでラップする
 *
 * [メリット]
 * - 実装が用意
 *
 * [デメリット]
 * - マイナー
 */
export const ReactSmoothDnd: React.FC = (props) => {
  const [items, setItems] = useState([
    { id: "item-1", label: "item-1" },
    { id: "item-2", label: "item-2" },
    { id: "item-3", label: "item-3" },
  ]);

  const handleChange = useCallback((items: { id: string; label: string }[]) => {
    setItems(items);
  }, []);

  return (
    <DraggableContainer items={items} onChange={handleChange}>
      {items.map((item) => (
        <DraggableItem key={item.id}>{item.label}</DraggableItem>
      ))}
    </DraggableContainer>
  );
};
