function InviteMember() {
  return (
    <div className="border border-secondary-100 rounded-10 d-flex align-items-center px-2 py-1 cursor-pointer">
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
      <span className="mx-2">Invite</span>
    </div>
  );
}

export default InviteMember;
