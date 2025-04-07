import { useDroppable } from '@dnd-kit/core';
import { SortableContext } from '@dnd-kit/sortable';
import DraggableCard from './draggableCart';

export default function DroppableColumn({ column, items }: any) {
  const { setNodeRef } = useDroppable({
    id: column,
    data: { column },
  });

  return (
    <div ref={setNodeRef} className="column">
      <h3>{column}</h3>
      <SortableContext items={items}>
        {items.map((item: any) => (
          <DraggableCard key={item} id={item} column={column} />
        ))}
      </SortableContext>
    </div>
  );
}
