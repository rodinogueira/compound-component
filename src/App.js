import React, { useState } from "react";
import { Modal } from "./components/Modal";

const App = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClose = () => setIsOpen(false);

  return (
    <div>
      <button onClick={() => setIsOpen(true)}>Open Modal</button>
      <Modal.Root isOpen={isOpen}>
        <Modal.Content>
          <Modal.CloseButton onClose={handleClose} />
          <Modal.Title>Modal Title</Modal.Title>
          <p>Here is the content of the modal.</p>
          <Modal.Actions>
            <Modal.Action onClick={handleClose}>Cancel</Modal.Action>
            <Modal.Action onClick={() => alert("Confirmed!")}>
              Confirm
            </Modal.Action>
          </Modal.Actions>
        </Modal.Content>
      </Modal.Root>
    </div>
  );
};

export default App;
