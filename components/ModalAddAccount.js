import {
  Button,
  Input,
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
} from "@chakra-ui/react";
import { useRef } from "react";

export const ModalAddAccount = ({ isOpen, onClose, onConfirm }) => {
  const titleRef = useRef();
  const amountRef = useRef();

  const handleConfirm = () => {
    const title = titleRef.current.value;
    const amount = parseFloat(
      amountRef.current.value ? amountRef.current.value : 0
    );
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
      <Drawer placement="bottom" isOpen={isOpen} onClose={onClose}>
        <DrawerOverlay backdropFilter="blur(5px)" />
        <DrawerContent>
          <DrawerHeader>Add Account</DrawerHeader>
          <DrawerBody>
            <Input placeholder="Title" mb="3" rounded="3" ref={titleRef} />
            <Input
              placeholder="Amount"
              type="number"
              rounded="3"
              ref={amountRef}
            />
          </DrawerBody>

          <DrawerFooter>
            <Button colorScheme="blue" mr="3" onClick={onClose}>
              Close
            </Button>
            <Button onClick={handleConfirm}>Confirm</Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
};
