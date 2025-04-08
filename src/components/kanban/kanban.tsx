import {
  DndContext,
  DragEndEvent,
  DragOverlay,
  DragStartEvent,
  PointerSensor,
  useSensor,
  useSensors,
} from '@dnd-kit/core';
import { arrayMove, SortableContext } from '@dnd-kit/sortable';
import { useEffect, useMemo, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { createPortal } from 'react-dom';
import { Column, Task } from '../../types/types';
import ColumnContainer from './columnContainer';
import TaskContainer from './taskContainer';

function Kanban() {
  const columnsData = [
    {
      id: 1,
      title: 'Create wireframes',
      columnId: 'ToDo',
      level: 1,
      progress: 15,
    },
    { id: 2, title: 'Write specs', columnId: 'ToDo', level: 3, progress: 10 },
    { id: 3, title: 'Set up repo', columnId: 'ToDo', level: 1, progress: 25 },
    {
      id: 4,
      title: 'Team sync meeting',
      columnId: 'ToDo',
      level: 2,
      progress: 45,
    },

    {
      id: 5,
      title: 'Design homepage',
      columnId: 'InProgress',
      level: 3,
      progress: 100,
    },
    {
      id: 6,
      title: 'API integration',
      columnId: 'InProgress',
      level: 2,
      progress: 5,
    },
    {
      id: 7,
      title: 'Unit testing',
      columnId: 'InProgress',
      level: 1,
      progress: 80,
    },
    {
      id: 8,
      title: 'Mobile layout',
      columnId: 'InProgress',
      level: 2,
      progress: 25,
    },

    {
      id: 9,
      title: 'Review login flow',
      columnId: 'Review',
      level: 3,
      progress: 25,
    },
    {
      id: 10,
      title: 'QA test results',
      columnId: 'Review',
      level: 1,
      progress: 26,
    },
    {
      id: 11,
      title: 'Style guide check',
      columnId: 'Review',
      level: 3,
      progress: 85,
    },
    {
      id: 12,
      title: 'Accessibility check',
      columnId: 'Review',
      level: 2,
      progress: 25,
    },

    {
      id: 13,
      title: 'Project kickoff',
      columnId: 'Completed',
      level: 2,
      progress: 68,
    },
    {
      id: 14,
      title: 'Set up CI/CD',
      columnId: 'Completed',
      level: 1,
      progress: 23,
    },
    {
      id: 15,
      title: 'Create database schema',
      columnId: 'Completed',
      level: 3,
      progress: 3,
    },
    {
      id: 16,
      title: 'Deploy to staging',
      columnId: 'Completed',
      level: 1,
      progress: 43,
    },
  ];
  const [tasks, setTasks] = useState<Task[]>(columnsData);

  const [columns, setColumns] = useState([
    { id: 'ToDo', title: 'To Do' },
    { id: 'InProgress', title: 'In Progress' },
    { id: 'Review', title: 'Review' },
    { id: 'Completed', title: 'Completed' },
  ]);
  const columnsId = useMemo(() => columns.map((col) => col.id), [columns]);
  const [activeColumn, setActiveColumn] = useState<Column | null>(null);
  const [activeTask, setActiveTask] = useState<Task | null>(null);

  const [sleepTime, setSleepTime] = useState<boolean>(true);

  useEffect(() => {
    setTimeout(() => {
      setSleepTime(false);
    }, 3000);
  }, []);

  const getColumnPosition = (columnId: string) => {
    return columns.findIndex((column) => column.id === columnId);
  };

  const handleDragStart = (event: DragStartEvent) => {
    setActiveColumn(null);
    setActiveTask(null);
    const { active } = event;
    if (active.data.current?.type == 'Column') {
      setActiveColumn(active.data.current.column);
    }
    if (active.data.current?.type == 'Task') {
      setActiveTask(active.data.current.task);
    }
  };

  const handleOverDrag = (event: any) => {
    const { over, active } = event;
    if (!over) return;
    const activeId = active.id;
    const overId = over.id;
    if (activeId === overId) return;
    const isActiveTask = active.data.current?.type === 'Task';
    const isOverTask = over.data.current?.type === 'Task';
    if (isActiveTask && isOverTask) {
      setTasks((tasks) => {
        const activeIndex = tasks.findIndex((t) => t.id === activeId);
        const overIndex = tasks.findIndex((t) => t.id === overId);
        if (tasks[activeIndex].columnId !== tasks[overIndex].columnId) {
          tasks[activeIndex].columnId = tasks[overIndex].columnId;
        }
        return arrayMove(tasks, activeIndex, overIndex);
      });
    }
  };

  function handleDragEnd(event: DragEndEvent) {
    const { active, over } = event;
    if (!over) return;

    const activeColumnId = active.id;
    const overColumnId = over.id;

    if (activeColumnId === overColumnId) return;

    const currentPosition = getColumnPosition(activeColumnId as string);
    const newPosition = getColumnPosition(overColumnId as string);

    console.log(currentPosition, newPosition);
    setColumns((oldState) => {
      return arrayMove(oldState, currentPosition, newPosition);
    });
  }

  const sensors = useSensors(
    useSensor(PointerSensor, {
      activationConstraint: {
        distance: 10,
      },
    }),
  );

  return (
    <DndContext
      sensors={sensors}
      onDragOver={handleOverDrag}
      onDragEnd={handleDragEnd}
      onDragStart={handleDragStart}
    >
      <Container fluid>
        <Row className="flex-nowrap gap-1 overflow-x-scroll">
          <SortableContext items={columnsId}>
            {columns.map((column) => (
              <Col
                key={column.id}
                xs={7}
                md={3}
                className="p-0"
                style={{ minHeight: '250px' }}
              >
                <ColumnContainer
                  tasks={tasks.filter((task) => task.columnId === column.id)}
                  column={column}
                  sleepTime={sleepTime}
                />
              </Col>
            ))}
          </SortableContext>
        </Row>
      </Container>
      {createPortal(
        <DragOverlay>
          {activeTask ? (
            <TaskContainer task={activeTask} />
          ) : (
            activeColumn && (
              <ColumnContainer
                column={activeColumn}
                sleepTime={sleepTime}
                tasks={tasks.filter(
                  (task) => task.columnId === activeColumn.title,
                )}
              />
            )
          )}
        </DragOverlay>,
        document.body,
      )}
    </DndContext>
  );
}

export default Kanban;
