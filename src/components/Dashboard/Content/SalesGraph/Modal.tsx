import React from "react";

const Modal = <T, K>(dataWindow: T, setDataWindow: K): any => {
  const handleClose = (): void => {
    setDataWindow(false);
  };
  if (dataWindow) {
    return (
      <>
        <div className="modal">
          <div className="modal-content">
            <h4 className="modal-header">Choose date</h4>
          </div>
        </div>
        <div className="modal-content">Content</div>
        <div className="modal-footer">
          <button>Done</button>
          <button onClick={handleClose}>Cancel</button>
        </div>
      </>
    );
  }
  return null;
};

export { Modal };
