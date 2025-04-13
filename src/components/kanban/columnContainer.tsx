import {
  horizontalListSortingStrategy,
  SortableContext,
  useSortable,
} from '@dnd-kit/sortable';
import { Button } from 'react-bootstrap';
import { Column, Task } from '../../types/types';
import TopColumn from './topColumn';
import { CSS } from '@dnd-kit/utilities';
import { useMemo } from 'react';
import TaskContainer from './taskContainer';
import { GripDotsIcon, PlusIcon } from '../ui/icons/svgs';

interface Props {
  column: Column;
  firstRender: boolean;
  tasks: Task[];
  grabbing?: boolean;
}

function ColumnContainer(props: Props) {
  const { column, tasks, firstRender, grabbing = false } = props;

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

  const style: any = {
    transform: CSS.Transform.toString(transform),
    transition: transition,
    boxShadow: isDragging ? '0 4px 12px rgba(0,0,0,0.15)' : 'none',
  };

  if (isDragging) {
    return (
      <div
        ref={setNodeRef}
        style={style}
        className={`bg-secondary-50 rounded-10 opacity-50 w-lg-100 h-100`}
      >
        <div className="p-1">
          <div className="d-flex align-items-center justify-content-between">
            <TopColumn title={column.title} firstRender={firstRender} />
            <span className="d-inline d-lg-none">
              <GripDotsIcon />
            </span>
          </div>
          <div
            className="hideScroll"
            style={{
              maxHeight: '688px',
              minHeight: '688px',
              overflowY: 'auto',
            }}
          >
            {tasks.map((item: Task) => (
              <TaskContainer
                key={item.id}
                task={item}
                firstRender={firstRender}
              />
            ))}
          </div>
          <AddNewTask />
        </div>
      </div>
    );
  }

  function AddNewTask() {
    return (
      <Button className="bg-transparent w-100 text-secondary-400 border-0 fs-14 fw-bold mt-2 d-flex align-items-center">
        <PlusIcon color="#5B5A64" />
        <span className="ps-2">Add New</span>
      </Button>
    );
  }
  // main
  return (
    <div
      ref={setNodeRef}
      style={style}
      className={`bg-secondary-50 rounded-10 w-100`}
    >
      <div className="p-1">
        <div
          {...attributes}
          {...listeners}
          className="d-flex align-items-center justify-content-between"
        >
          <TopColumn title={column.title} firstRender={firstRender} />
          <span
            className={`d-inline d-lg-none no-touch-action cursor-grab ${grabbing ? 'cursor-grabbing' : ''}`}
          >
            <GripDotsIcon />
          </span>
        </div>
        <SortableContext
          strategy={horizontalListSortingStrategy}
          items={taskIds}
        >
          <div
            className="hideScroll"
            style={{
              maxHeight: '688px',
              minHeight: '688px',
              overflowY: 'auto',
            }}
          >
            {tasks.map((item: Task) => (
              <TaskContainer
                key={item.id}
                task={item}
                firstRender={firstRender}
              />
            ))}
          </div>
          <AddNewTask />
        </SortableContext>
      </div>
    </div>
  );
}

export default ColumnContainer;
