import { Button } from 'react-bootstrap';
import TopColumn from './topColumn';
import CardSection from '../ui/cards';
import {
  SortableContext,
  verticalListSortingStrategy,
} from '@dnd-kit/sortable';
import SortableItem from '../dnd/sortable';

function Columns({
  tasks,
  title,
  sleepTime,
}: {
  tasks: { title: string; id: number }[];
  title: string;
  sleepTime: any;
}) {
  return (
    <div className={`bg-secondary-50 rounded-10`}>
      <div className="p-1">
        <TopColumn title={title} sleepTime={sleepTime} />
        <SortableContext items={tasks} strategy={verticalListSortingStrategy}>
          {tasks.map((item) => (
            <SortableItem id={item.id}>
              <CardSection
                key={item.id}
                data={!sleepTime ? item : { title: '', id: 0 }}
              />
            </SortableItem>
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

export default Columns;
