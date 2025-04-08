import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import { Task } from '../../types/types';
import CardSection from '../ui/cards';

type Props = {
  task: Task;
};
function TaskContainer(props: Props) {
  const { task } = props;

  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isDragging,
  } = useSortable({ id: task.id, data: { type: 'Task', task } });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition: transition,
    boxShadow: isDragging ? '0 4px 12px rgba(0,0,0,0.15)' : 'none',
  };

  if (isDragging) {
    return (
      <div
        className="opacity-50"
        ref={setNodeRef}
        style={style}
        {...attributes}
        {...listeners}
      >
        <CardSection data={task} />
      </div>
    );
  }

  return (
    <div ref={setNodeRef} style={style} {...attributes} {...listeners}>
      <CardSection data={task} />
    </div>
  );
}

export default TaskContainer;
