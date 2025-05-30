import {
  DndContext,
  DragEndEvent,
  DragOverEvent,
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
import styled from 'styled-components';

const Style = styled.div`
  @media (min-width: 1992px) {
    .column-lg {
      min-width: 275px;
      max-width: 275px;
    }
  }
`;

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

  const [firstRender, setFirstRender] = useState<boolean>(true);

  useEffect(() => {
    setTimeout(() => {
      setFirstRender(false);
    }, 1000);
  }, []);

  const getColumnPosition = (columnId: string) => {
    return columns.findIndex((column) => column.id === columnId);
  };
  const getTaskPosition = (taskId: number) => {
    return tasks.findIndex((task) => task.id === taskId);
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
  //on over Dragging
  const handleOverDrag = (event: DragOverEvent) => {
    const { over, active } = event;
    if (!over) return;
    const activeId: number | string = active?.id;
    const overId: number | string = over?.id;
    if (activeId === overId) return;
    const isActiveTask = active.data.current?.type === 'Task';
    const isOverTask = over.data.current?.type === 'Task';

    if (!isActiveTask) return;
    //  over a Task
    if (isActiveTask && isOverTask) {
      const activeIndex = getTaskPosition(activeId as number);
      const overIndex = getTaskPosition(overId as number);
      setTasks((tasks) => {
        if (tasks[activeIndex].columnId !== tasks[overIndex].columnId) {
          tasks[activeIndex].columnId = tasks[overIndex].columnId;
        }
        return arrayMove(tasks, activeIndex, overIndex);
      });
    }

    // Drag over a column
    const isOverAColumn = over.data.current?.type === 'Column';

    if (isActiveTask && isOverAColumn) {
      setTasks((tasks) => {
        const activeIndex = tasks.findIndex((t) => t.id === activeId);
        tasks[activeIndex].columnId = overId as string;
        return arrayMove(tasks, activeIndex, activeIndex);
      });
    }
  };
  //on End Dragging
  function handleDragEnd(event: DragEndEvent) {
    const { active, over } = event;
    if (!over) return;
    const activeColumnId = active.id;
    const overColumnId = over.id;

    if (
      active.data.current?.type == 'Task' &&
      over.data.current?.type == 'Task'
    ) {
      const currentTaskPosition = getTaskPosition(active.id as number);
      const newTaskPosition = getTaskPosition(over.id as number);
      setTasks((oldState) => {
        return arrayMove(oldState, currentTaskPosition, newTaskPosition);
      });
    }

    if (activeColumnId === overColumnId && active.data.current?.type !== 'Task')
      return;
    const currentPosition = getColumnPosition(activeColumnId as string);
    const newPosition = getColumnPosition(overColumnId as string);

    setColumns((oldState) => {
      return arrayMove(oldState, currentPosition, newPosition);
    });
  }

  const sensors = useSensors(
    useSensor(PointerSensor, {
      activationConstraint: {
        distance: 1,
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
      <Style>
        <Container fluid>
          <Row className="flex-nowrap overflow-x-scroll">
            <SortableContext items={columnsId}>
              {columns.map((column, index) => (
                <Col key={column.id} xs={8} md={3} className="column-lg p-0">
                  <div
                    className={`${index === 0 ? 'me-2' : index + 1 === columns.length ? 'ms-2' : 'mx-2'}`}
                  >
                    <ColumnContainer
                      firstRender={firstRender}
                      column={column}
                      tasks={tasks.filter(
                        (task) => task.columnId === column.id,
                      )}
                    />
                  </div>
                </Col>
              ))}
            </SortableContext>
          </Row>
        </Container>
      </Style>
      {createPortal(
        <DragOverlay>
          {activeTask ? (
            <TaskContainer task={activeTask} firstRender={firstRender} />
          ) : (
            activeColumn && (
              <Col className="p-0">
                <ColumnContainer
                  grabbing={activeColumn ? true : false}
                  firstRender={firstRender}
                  column={activeColumn}
                  tasks={tasks.filter(
                    (task) => task.columnId === activeColumn.id,
                  )}
                />
              </Col>
            )
          )}
        </DragOverlay>,
        document.body,
      )}
    </DndContext>
  );
}

export default Kanban;
