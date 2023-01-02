import {
  Button,
  Input,
  Select,
  Text,
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
} from "@chakra-ui/react";
import { useRef } from "react";

export const DrawerAddFinance = ({
  isOpen,
  onClose,
  onConfirm,
  title,
  accounts,
  categories,
}) => {
  const accountRef = useRef();
  const amountRef = useRef();
  const categoryRef = useRef();

  const handleConfirm = () => {
    const account = accountRef.current.value;
    const category = categoryRef?.current?.value
      ? categoryRef.current.value
      : "";
    const amount = parseFloat(amountRef.current.value);
    if (account !== "" && category !== "" && amount > 0) {
      const newExpense = {
        accountTitle: account,
        categoryTitle: category,
        amount,
      };
      onConfirm(newExpense);
    }
  };

  return (
    <>
      <Drawer placement="bottom" onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay backdropFilter="blur(5px)" />
        <DrawerContent>
          <DrawerHeader>Add {title}</DrawerHeader>
          <DrawerBody>
            <label>
              <Text fontWeight="bold">Account</Text>
              <Select ref={accountRef} mt="1" mb="2">
                {accounts.map((acc) => (
                  <option key={acc.title} value={acc.title}>
                    {acc.title}
                  </option>
                ))}
              </Select>
            </label>
            {categories && (
              <label>
                <Text fontWeight="bold">Category</Text>
                <Select ref={categoryRef} mt="1" mb="2">
                  {categories.map((c) => (
                    <option key={c.title} value={c.title}>
                      {c.title}
                    </option>
                  ))}
                </Select>
              </label>
            )}
            <label>
              <Text fontWeight="bold">Amount</Text>
              <Input
                mt="1"
                placeholder="0.00"
                type="number"
                rounded="3"
                ref={amountRef}
              />
            </label>
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
