import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';

export default function DraggableCard({ id, column }: any) {
  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({
      id,
      data: { column },
    });

  return (
    <div
      ref={setNodeRef}
      style={{
        transform: CSS.Transform.toString(transform),
        transition,
      }}
      {...listeners}
      {...attributes}
      className="card"
    >
      salam
    </div>
  );
}
