import { ReactNode } from 'react';
import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';

export default function SortableItem({
  id,
  children,
  type,
  value,
}: {
  id: number | string;
  children: ReactNode;
  type: string;
  value: any;
}) {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isDragging,
  } = useSortable({ id, data: { type, value } });
  // Within your component that receives `transform` from `useDraggable`:
  const style = {
    transform: CSS.Transform.toString(transform),
    transition: transition,
    boxShadow: isDragging ? '0 4px 12px rgba(0,0,0,0.15)' : 'none',
  };

  return (
    <div
      id={`z${id}`}
      ref={setNodeRef}
      style={style}
      {...attributes}
      {...listeners}
    >
      {children}
    </div>
  );
}
