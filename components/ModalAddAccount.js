import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  Button,
  Input,
} from "@chakra-ui/react";
import { useRef } from "react";

export const ModalAddAccount = ({ isOpen, onClose, onConfirm }) => {
  const titleRef = useRef();
  const amountRef = useRef();

  const handleConfirm = () => {
    const title = titleRef.current.value;
    const amount = parseFloat(amountRef.current.value);
    if (title !== "") {
      const newAccount = {
        title,
        amount,
      };
      onConfirm(newAccount);
    }
  };

  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay bg="blackAlpha.300" backdropFilter="blur(10px)" />
        <ModalContent w="90%">
          <ModalHeader>Add Account</ModalHeader>
          <ModalBody>
            <Input placeholder="Title" mb="3" rounded="3" ref={titleRef} />
            <Input
              placeholder="Amount"
              type="number"
              rounded="3"
              ref={amountRef}
            />
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr="3" onClick={onClose}>
              Close
            </Button>
            <Button onClick={handleConfirm}>Confirm</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};
