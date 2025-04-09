import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import { useMemo } from 'react';
import { Task } from '../../types/types';
import CardSection from '../ui/cards';

function TaskContainer({task,firstRender}: {task:Task,firstRender:boolean}) {
  const memoizedTask = useMemo(() => task, [task.id]);

  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isDragging,
  } = useSortable({ id: task.id, data: { type: 'Task', task: memoizedTask  } });

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
        <CardSection data={task} firstRender={firstRender}/>
      </div>
    );
  }

  return (
    <div ref={setNodeRef} style={style} {...attributes} {...listeners}>
      <CardSection data={task} firstRender={firstRender}/>
    </div>
  );
}

export default TaskContainer;
