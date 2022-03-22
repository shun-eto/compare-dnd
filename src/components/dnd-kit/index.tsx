import { useCallback, useState } from "react";
import { SortableItem } from "./item";
import { SortableContainer } from "./container";

/**
 * [使い方]
 * SortableContainerでSortableItemをラップしてあげて、
 * onDragEndイベントから変更後の配列を受け取る
 *
 * [メリット]
 * - UXが綺麗
 * - 実装が容易そう
 *
 * [デメリット]
 * - 他のライブラリと比べてマイナー
 */
export const DndKit: React.FC = () => {
  const [items, setItems] = useState(["1", "2", "3"]);

  const handleDragEnd = useCallback((items: string[]) => {
    setItems(items);
  }, []);

  return (
    <SortableContainer items={items} onDragEnd={handleDragEnd}>
      {items.map((item, index) => (
        <SortableItem key={index} id={item}>
          {item}
        </SortableItem>
      ))}
    </SortableContainer>
  );
};
