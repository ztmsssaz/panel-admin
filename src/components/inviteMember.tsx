function InviteMember() {
  return (
    <div
      style={{ minWidth: '32px', minHeight: '32px' }}
      className="d-flex align-items-center justify-content-center border border-secoundery-100s rounded-10 
      d-flex align-items-center cursor-pointer ms-md-2"
    >
      <svg
        width="18"
        height="18"
        viewBox="0 0 18 18"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M4.5 9H13.5"
          stroke="#161618"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M9 13.5V4.5"
          stroke="#161618"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
      <span className="ms-md-2 d-none d-md-block">Invite</span>
    </div>
  );
}

export default InviteMember;
