function ChatItem() {
  return (
    <div className="chat-item cursor-pointer d-flex align-items-center pb-3 py-xs-1 text-primary:hover">
      <div>
        <img width="32" src="../../assets/images/jack.png" alt="profile" />
      </div>
      <div className="w-100 ps-2">
        <div className="d-flex justify-content-between align-items-center">
          <h4 className="fw-semibold fs-14 mb-1">Abolfazl Zarei</h4>
          <time className="fs-12 fw-normal text-secondary-400" dateTime="09:00">
            9.00
          </time>
        </div>
        <div className="d-flex justify-content-between align-items-center">
          <p className="fw-normal fs-12 text-secondary-400">
            Can you share the updated design files?
          </p>
          <svg
            width="11"
            height="8"
            viewBox="0 0 11 8"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M3.96837 5.96875L9.26525 0.671875C9.39025 0.546875 9.53608 0.484375 9.70275 0.484375C9.86942 0.484375 10.0152 0.546875 10.1402 0.671875C10.2652 0.796875 10.3277 0.945417 10.3277 1.1175C10.3277 1.28958 10.2652 1.43792 10.1402 1.5625L4.40587 7.3125C4.28087 7.4375 4.13504 7.5 3.96837 7.5C3.80171 7.5 3.65587 7.4375 3.53087 7.3125L0.843374 4.625C0.718374 4.5 0.658374 4.35167 0.663374 4.18C0.668374 4.00833 0.733583 3.85979 0.858999 3.73438C0.984416 3.60896 1.13296 3.54646 1.30462 3.54688C1.47629 3.54729 1.62462 3.60979 1.74962 3.73438L3.96837 5.96875Z"
              fill="#3863C6"
            />
          </svg>
        </div>
      </div>
    </div>
  );
}

export default ChatItem;
