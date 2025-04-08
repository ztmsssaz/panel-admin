import { SortableContext, useSortable } from '@dnd-kit/sortable';
import { Button } from 'react-bootstrap';
import TopColumn from './topColumn';

import { Column, Task } from '../../types/types';
// import { useMemo } from 'react';
import { CSS } from '@dnd-kit/utilities';
import { useMemo } from 'react';
import TaskContainer from './taskContainer';

interface Props {
  column: Column;
  sleepTime: boolean;
  tasks: Task[];
}

function ColumnContainer(props: Props) {
  const { column, sleepTime, tasks } = props;

  const taskIds = useMemo(() => {
    return tasks.map((task) => task.id);
  }, [tasks]);

  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isDragging,
  } = useSortable({ id: column.id, data: { type: 'Column', column } });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition: transition,
    boxShadow: isDragging ? '0 4px 12px rgba(0,0,0,0.15)' : 'none',
  };

  if (isDragging) {
    return (
      <div ref={setNodeRef} style={style} className="opacity-50  me-1">
        <div className="p-1">
          <TopColumn title={column.title} sleepTime={sleepTime} />
          <SortableContext items={taskIds}>
            {tasks.map((item: Task) => (
              <TaskContainer key={item.id} task={item} />
            ))}
          </SortableContext>

          <Button className="bg-transparent text-secondary-400 border-0 fs-14 fw-bold mt-2 d-flex align-items-center">
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M5 10H15"
                stroke="#5B5A64"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M10 15V5"
                stroke="#5B5A64"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <span className="ps-2">Add New</span>
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div
      ref={setNodeRef}
      style={style}
      className={`bg-secondary-50 rounded-10  me-1`}
    >
      <div {...attributes} {...listeners} className="p-1">
        <TopColumn title={column.title} sleepTime={sleepTime} />
        <SortableContext items={taskIds}>
          <div
            className="hideScroll"
            style={{ maxHeight: 'calc(100vh - 80px)', overflowY: 'auto' }}
          >
            {tasks.map((item: Task) => (
              <TaskContainer key={item.id} task={item} />
            ))}
          </div>
        </SortableContext>
        <Button className="bg-transparent text-secondary-400 border-0 fs-14 fw-bold mt-2 d-flex align-items-center">
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M5 10H15"
              stroke="#5B5A64"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M10 15V5"
              stroke="#5B5A64"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <span className="ps-2">Add New</span>
        </Button>
      </div>
    </div>
  );
}

export default ColumnContainer;
