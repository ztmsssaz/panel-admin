import Skeleton from 'react-loading-skeleton';

function TopColumn({
  title,
  sleepTime,
  ...others
}: {
  title: string;
  sleepTime: boolean;
}) {
  function whatColorIs(text: string) {
    switch (text) {
      case 'To Do':
        return 'bg-secondary-300';
      case 'In Progress':
        return 'bg-info-500';
      case 'Review':
        return 'bg-warning-500';
      case 'Completed':
        return 'bg-primary-500';
      default:
        break;
    }
  }

  const NumberBadge = (value: number) => {
    return (
      <span
        className="bg-white rounded-7 fw-bold fs-12 border border-secondary-100 text-center"
        style={{ width: '20px', height: '20px' }}
      >
        {value}
      </span>
    );
  };

  return (
    <div {...others} className="d-flex align-items-center ms-3">
      <span
        className={`d-inline-block rounded-circle ${whatColorIs(title)}`}
        style={{ width: '10px', height: '10px' }}
      ></span>
      <h5 className="text-center fw-bold fs-16 py-3 px-2">{title}</h5>
      {!sleepTime ? (
        NumberBadge(4)
      ) : (
        <Skeleton
          height={20}
          width={20}
          containerClassName="d-flex align-items-center"
        />
      )}
    </div>
  );
}

export default TopColumn;
