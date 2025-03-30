import {Form} from 'react-bootstrap'
import styled from 'styled-components'
import {colors} from '../../layout/theme/colors'
import {InfoButton} from '../ui/buttons'
const Style = styled.div`
  input {
    padding: 12px 20px 12px 36px;
    &::placeholder {
      font-size: 14px;
      color: ${colors.secondary_400};
    }
  }
`
function Search() {
  return (
    <Style className='d-flex justify-contant-center align-items-center pt-md-4 pb-1'>
      <Form className='d-flex'>
        <Form.Group className='position-relative mb-3' controlId='search'>
          <Form.Control type='text' className='rounded-10 py-2' placeholder='Search here' />
          <div className='inputIcons'>
            <svg
              width='20'
              height='20'
              viewBox='0 0 20 20'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                d='M9.58366 17.4993C13.9559 17.4993 17.5003 13.9549 17.5003 9.58268C17.5003 5.21043 13.9559 1.66602 9.58366 1.66602C5.2114 1.66602 1.66699 5.21043 1.66699 9.58268C1.66699 13.9549 5.2114 17.4993 9.58366 17.4993Z'
                stroke='#161618'
                strokeWidth='1.4'
                strokeLinecap='round'
                strokeLinejoin='round'
              />
              <path
                d='M18.3337 18.3327L16.667 16.666'
                stroke='#161618'
                strokeWidth='1.5'
                strokeLinecap='round'
                strokeLinejoin='round'
              />
            </svg>
          </div>
        </Form.Group>
        <InfoButton classes='d-flex align-items-center ms-2'>
          <svg
            width='12'
            height='12'
            viewBox='0 0 12 12'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              fillRule='evenodd'
              clipRule='evenodd'
              d='M6 0C6.41421 0 6.75 0.335786 6.75 0.75V11.25C6.75 11.6642 6.41421 12 6 12C5.58579 12 5.25 11.6642 5.25 11.25V0.75C5.25 0.335786 5.58579 0 6 0Z'
              fill='white'
            />
            <path
              fillRule='evenodd'
              clipRule='evenodd'
              d='M0 6C0 5.58579 0.335786 5.25 0.75 5.25H11.25C11.6642 5.25 12 5.58579 12 6C12 6.41421 11.6642 6.75 11.25 6.75H0.75C0.335786 6.75 0 6.41421 0 6Z'
              fill='white'
            />
          </svg>
          <span className='px-2'>New</span>
        </InfoButton>
      </Form>
    </Style>
  )
}

export default Search
