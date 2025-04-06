import { useState } from 'react';
import Collapse from 'react-bootstrap/Collapse';
import { Doc } from '../icons';
import { colors } from '../../../layout/theme/colors';

function FavoritesButtons() {
  const [open, setOpen] = useState(true);

  return (
    <>
      <div className="text-secondary-400 d-flex justify-content-between fw-bold fs-14 cursor-pointer mt-4 mb-2">
        <div
          onClick={() => setOpen(!open)}
          aria-controls="fave-buttons"
          aria-expanded={open}
        >
          <svg
            width="14"
            height="15"
            viewBox="0 0 14 15"
            fill="none"
            className={`${open ? 'rotate-180' : ''}`}
          >
            <path
              d="M11.6199 5.9375L7.81655 9.74083C7.36738 10.19 6.63238 10.19 6.18322 9.74083L2.37988 5.9375"
              stroke="#5B5A64"
              strokeWidth="1.5"
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></path>
          </svg>
          <span className="ps-2">Favorites</span>
        </div>
        <span>
          <svg
            width="14"
            height="15"
            viewBox="0 0 14 15"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M3.5 7.21704H10.5"
              stroke="#5B5A64"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M7 10.717V3.71704"
              stroke="#5B5A64"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </span>
      </div>
      <Collapse in={open}>
        <div
          id="fave-buttons"
          style={{ maxHeight: '150px' }}
          className="overflow-y-scroll hideScroll px-2"
        >
          <div className="d-flex align-items-center mb-2 py-1">
            <Doc
              size={22}
              iconSize={14}
              classes="rounded-7"
              bacColor={colors.warning_600}
            />
            <p className="fs-14 text-secondary-500 fw-bold pl-6">
              Primor Project
            </p>
          </div>
          <div className="d-flex align-items-center mb-2 py-1">
            <Doc
              size={22}
              iconSize={14}
              classes="rounded-7"
              bacColor={colors.info_600}
            />
            <p className="fs-14 text-secondary-500 fw-bold pl-6">
              Sulivan Project
            </p>
          </div>
          <div className="d-flex align-items-center mb-2 py-1">
            <Doc
              size={22}
              iconSize={14}
              classes="rounded-7"
              bacColor={colors.primary_600}
            />
            <p className="fs-14 text-secondary-500 fw-bold pl-6">
              Trustworth Project
            </p>
          </div>
        </div>
      </Collapse>
    </>
  );
}

export default FavoritesButtons;
