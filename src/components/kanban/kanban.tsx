import CardSection from '../ui/cards'
import {Row, Col, Button} from 'react-bootstrap'

function Kanban() {
  const columns = ['To Do', 'In Progress', 'Review', 'Completed']

  const NumberBadge = (value: number) => {
    return (
      <span
        className='bg-white rounded-7 fw-bold fs-12 border border-secondary-100 text-center'
        style={{width: '20px', height: '20px'}}
      >
        {value}
      </span>
    )
  }

  function whatColorIs(text: string) {
    switch (text) {
      case 'To Do':
        return 'bg-secondary-300'
      case 'In Progress':
        return 'bg-info-500'
      case 'Review':
        return 'bg-warning-500'
      case 'Completed':
        return 'bg-primary-500'
      default:
        break
    }
  }

  return (
    <Row className='w-100'>
      {columns.map((title) => (
        <Col key={title} md={3}>
          <div className='bg-secondary-50 rounded-10 me-1 p-1'>
            <div className='d-flex align-items-center ms-3'>
              <span
                className={`d-inline-block rounded-circle ${whatColorIs(title)}`}
                style={{width: '10px', height: '10px'}}
              ></span>
              <h5 className='text-center fw-bold fs-16 py-3 px-2'>{title}</h5>
              {NumberBadge(4)}
            </div>
            {[...Array(4)].map((_, index) => (
              <CardSection key={index} title='Card Action' />
            ))}
            <Button variant='outline-primary' className='w-100 mt-2'>
              + ADD New
            </Button>
          </div>
        </Col>
      ))}
    </Row>
  )
}

export default Kanban
