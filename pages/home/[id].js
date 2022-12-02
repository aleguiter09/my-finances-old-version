import { useRouter } from "next/router";
import { Flex, Button, Heading, Text, useDisclosure } from "@chakra-ui/react";
import { AddIcon } from "@chakra-ui/icons";
import {
  CardComponent,
  CardButtonComponent,
} from "../../components/CardComponent";
import { ModalAddAccount } from "../../components/ModalAddAccount";
import { ModalAddExpense } from "../../components/ModalAddExpense";
import { useEffect, useState } from "react";

const Home = () => {
  const router = useRouter();
  const {
    isOpen: isAddAccountOpen,
    onOpen: onAddAccountOpen,
    onClose: onAddAccountClose,
  } = useDisclosure();
  const {
    isOpen: isAddExpenseOpen,
    onOpen: onAddExpenseOpen,
    onClose: onAddExpenseClose,
  } = useDisclosure();

  const accountsDefault = [
    { title: "Santander", amount: 30000 },
    { title: "Mercado Pago", amount: 12000 },
    { title: "Lemon", amount: 0 },
    { title: "Belo", amount: 0 },
  ];

  const [total, setTotal] = useState(0);
  const [accounts, setAccounts] = useState(accountsDefault);
  const [newAccount, setNewAccount] = useState({});

  useEffect(() => {
    let sum = 0;
    accounts.forEach((acc) => (sum += acc.amount));
    setTotal(sum);
  }, [accounts]);

  const handleBack = (e) => {
    e.preventDefault();
    router.push("/");
  };

  const handleAddAccount = (newAccount = {}) => {
    if (newAccount.title && newAccount.title !== "") {
      setAccounts([...accounts, newAccount]);
      setNewAccount({});
      onAddAccountClose();
    }
  };

  const handleAddExpense = () => {
    /*if (newAccount.title && newAccount.title !== "") {
      setAccounts([...accounts, newAccount]);
      setNewAccount({});
      
    }*/
    console.log("Hola");
    onAddExpenseClose();
  };

  const handleDelete = (title) => {
    setAccounts(accounts.filter((a) => a.title !== title));
  };

  return (
    <Flex direction="column" height="100vh" mt="4">
      <ModalAddAccount
        isOpen={isAddExpenseOpen}
        onClose={onAddExpenseClose}
        onConfirm={handleAddExpense}
        setNewAccount={null}
      />
      <ModalAddExpense
        isOpen={isAddAccountOpen}
        onClose={onAddAccountClose}
        onConfirm={handleAddAccount}
        setNewAccount={setNewAccount}
      />
      <Heading size="2xl" alignSelf="center" ms="2">
        $ {total.toFixed(1)}
      </Heading>
      <Flex my="4" overflowX="auto">
        {accounts.map((acc) => (
          <CardComponent
            key={acc.title}
            title={acc.title}
            amount={acc.amount}
            handleDelete={handleDelete}
          />
        ))}
        <CardButtonComponent handleClick={onAddAccountOpen} />
      </Flex>
      <Flex direction="column" align="center">
        <Button colorScheme="blue" mb="3" onClick={onAddExpenseOpen}>
          <AddIcon me="2" />
          <Text>Add</Text>
        </Button>
        <Button onClick={handleBack}>Go back</Button>
      </Flex>
    </Flex>
  );
};

export default Home;
