import "./Modal.css";

function Modal({ title }) {
  function buttonPressed(title) {
    console.log("buttonPressed()", title);
  }

  return (
    <div>
      <div className="modal">
        <p className="modal__title">{title}</p>
        <div className="modal__buttons">
          <button className="btn btn__cancel" onClick={() => console.log('cancel')}>
            Cancel
          </button>
          <button className="btn" onClick={() => console.log('confirm')}>
            Confirm
          </button>
        </div>
      </div>
      <div className="backdrop" />
    </div>
  );
}

export default Modal;
