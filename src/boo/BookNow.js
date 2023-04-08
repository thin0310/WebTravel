
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

function BookNow({modal,toggle}) {
  

  return (
    <div>
        <Button color="danger" onClick={toggle}>
            Click Me
        </Button>
      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>Modal title</ModalHeader>
        <ModalBody>
          
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={toggle}>
            Do Something
          </Button>{' '}
          <Button color="secondary" onClick={toggle}>
            Cancel
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
}

export default BookNow;