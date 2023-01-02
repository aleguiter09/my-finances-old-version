import { Flex, Button, useDisclosure, Text } from "@chakra-ui/react";
import { AddIcon, MinusIcon, ChevronRightIcon } from "@chakra-ui/icons";
import { CardComponent, CardButtonComponent } from "../commons/CardComponent";
import { ModalAddAccount } from "./ModalAddAccount";
import { DrawerAddFinance } from "./DrawerAddFinance";
import { useEffect, useState } from "react";
import { ExpensesChart } from "../commons/ExpensesChart/ExpensesChart";

const Balance = () => {
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

  const {
    isOpen: isAddIncomeOpen,
    onOpen: onAddIncomeOpen,
    onClose: onAddIncomeClose,
  } = useDisclosure();

  const {
    isOpen: isAddCreditOpen,
    onOpen: onAddCreditOpen,
    onClose: onAddCreditClose,
  } = useDisclosure();

  const accountsDefault = [
    { title: "Santander", amount: 30000 },
    { title: "Mercado Pago", amount: 12000 },
    { title: "Lemon", amount: 0 },
    { title: "Belo", amount: 0 },
  ];

  const categoriesDefault = [
    { title: "Food", amount: 30000, color: "yellow.500" },
    { title: "House", amount: 15000, color: "green.500" },
    { title: "Cat", amount: 91000, color: "red.500" },
    { title: "Market", amount: 10000, color: "blue.500" },
  ];

  const [total, setTotal] = useState(0);
  const [totalExpenses, setTotalExpenses] = useState(0);
  const [accounts, setAccounts] = useState(accountsDefault);
  const [categories, setCategories] = useState(categoriesDefault);

  useEffect(() => {
    let sum = 0;
    accounts.forEach((acc) => (sum += acc.amount));
    setTotal(sum);

    sum = 0;
    categories.forEach((c) => (sum += c.amount));
    setTotalExpenses(sum);
  }, [accounts, categories]);

  const handleAddAccount = (newAccount = {}) => {
    if (newAccount.title && newAccount.title !== "") {
      setAccounts([...accounts, newAccount]);
      onAddAccountClose();
    }
  };

  const handleAddCategory = (newCategory = {}) => {
    if (newCategory.title && newCategory.title !== "") {
      setCategories([...categories, newCategory]);
    }
  };

  const handleAddExpense = (newExpense = {}) => {
    accounts.map((acc) => {
      if (acc.title === newExpense.accountTitle) {
        acc.amount -= newExpense.amount;
      }
    });
    setAccounts([...accounts]);

    categories.map((cat) => {
      if (cat.title === newExpense.categoryTitle) {
        cat.amount += newExpense.amount;
      }
    });
    setCategories([...categories]);
    onAddExpenseClose();
  };

  const handleAddIncome = (updatedAccount = {}) => {
    accounts.map((acc) => {
      if (acc.title === updatedAccount.accountTitle) {
        acc.amount += updatedAccount.amount;
      }
    });
    setAccounts([...accounts]);
    onAddIncomeClose();
  };

  const handleDelete = (title) => {
    setAccounts(accounts.filter((a) => a.title !== title));
  };

  return (
    <>
      <ModalAddAccount
        isOpen={isAddAccountOpen}
        onClose={onAddAccountClose}
        onConfirm={handleAddAccount}
      />
      <DrawerAddFinance
        isOpen={isAddExpenseOpen}
        onClose={onAddExpenseClose}
        onConfirm={handleAddExpense}
        title={"Expense"}
        accounts={accounts}
        categories={categories}
      />
      <DrawerAddFinance
        isOpen={isAddIncomeOpen}
        onClose={onAddIncomeClose}
        onConfirm={handleAddIncome}
        title={"Income"}
        accounts={accounts}
      />
      <Flex justifyContent="space-between" mx="5">
        <Text mt="2" fontSize="lg">
          Balance: ${total.toFixed(1)}
        </Text>
        <Flex bg="gray.500" rounded="25" p="2" cursor="pointer">
          <Text fontSize="sm" ps="1">
            Details
          </Text>
          <ChevronRightIcon ms="1" pt="1" fontSize="lg" />
        </Flex>
      </Flex>
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
        <ExpensesChart
          categories={categories}
          total={totalExpenses}
          handleAddCategory={handleAddCategory}
        />
        <Flex mt="3">
          <Button
            minWidth="160"
            colorScheme="blue"
            mb="3"
            me="3"
            onClick={onAddIncomeOpen}
          >
            <AddIcon me="3" />
            Add Income
          </Button>
          <Button
            minWidth="160"
            colorScheme="red"
            mb="3"
            onClick={onAddExpenseOpen}
          >
            <MinusIcon me="3" />
            Add Expense
          </Button>
        </Flex>
      </Flex>
    </>
  );
};

export default Balance;
