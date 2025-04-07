import { useEffect, useState } from 'react';
import CardSection from '../ui/cards';
import { Row, Col, Button, Container } from 'react-bootstrap';
import Skeleton from 'react-loading-skeleton';

import TopColumn from './topColumn';
import DraggableCard from '../dnd/draggableCart';
import { closestCorners, DndContext } from '@dnd-kit/core';
import { SortableContext } from '@dnd-kit/sortable';
import Columns from './columns';

function Kanban() {
  const tasks: any = [
    { title: 'To DO', id: 1 },
    { title: 'In Progress', id: 2 },
    { title: 'Review', id: 3 },
    { title: 'Completed', id: 4 },
  ];

  const [isDropped, setIsDropped] = useState(false);

  const columns = ['To Do', 'In Progress', 'Review', 'Completed'];

  // const [allColumns, setAllColumns] = useState<any>(initialColumns);

  const [sleepTime, setSleepTime] = useState<boolean>(true);

  useEffect(() => {
    setTimeout(() => {
      setSleepTime(false);
    }, 3000);
  }, []);

  return (
    <DndContext collisionDetection={closestCorners}>
      <Container fluid>
        <Row className="flex-nowrap overflow-x-scroll">
          {columns.map((title) => (
            <Col key={title} xs={7} md={3} className="p-0 ">
              <Columns tasks={tasks} title={title} sleepTime={sleepTime} />
            </Col>
          ))}
        </Row>
      </Container>
    </DndContext>
  );
}

export default Kanban;
