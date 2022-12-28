import { Flex, Button, Heading, useDisclosure } from "@chakra-ui/react";
import { AddIcon, MinusIcon } from "@chakra-ui/icons";
import { CardComponent, CardButtonComponent } from "../commons/CardComponent";
import { ModalAddAccount } from "./ModalAddAccount";
import { DrawerAddFinance } from "./DrawerAddFinance";
import { useEffect, useState } from "react";
import dynamic from "next/dynamic";
const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });

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

  const categoriesDefault = ["Food", "House", "Cat"];
  const categoriesDefaultWithValues = [
    { title: "Food", amount: 30000 },
    { title: "House Pago", amount: 12000 },
    { title: "Cat", amount: 0 },
  ];

  const [total, setTotal] = useState(0);
  const [accounts, setAccounts] = useState(accountsDefault);

  useEffect(() => {
    let sum = 0;
    accounts.forEach((acc) => (sum += acc.amount));
    setTotal(sum);
  }, [accounts]);

  const handleAddAccount = (newAccount = {}) => {
    if (newAccount.title && newAccount.title !== "") {
      setAccounts([...accounts, newAccount]);
      onAddAccountClose();
    }
  };

  const handleAddExpense = (updatedAccount = {}) => {
    accounts.map((acc) => {
      if (acc.title === updatedAccount.title) {
        acc.amount -= updatedAccount.amount;
      }
    });
    setAccounts([...accounts]);
    onAddExpenseClose();
  };

  const handleAddIncome = (updatedAccount = {}) => {
    accounts.map((acc) => {
      if (acc.title === updatedAccount.title) {
        acc.amount += updatedAccount.amount;
      }
    });
    setAccounts([...accounts]);
    onAddIncomeClose();
  };

  const handleDelete = (title) => {
    setAccounts(accounts.filter((a) => a.title !== title));
  };

  const options = {
    series: [44, 55, 30],
    labels: categoriesDefault,
    chart: {
      width: 380,
      type: "pie",
    },
    dataLabels: {
      enabled: true,
    },
    legend: {
      position: "bottom",
      height: 50,
    },
    dropShadow: {
      enabled: true,
    },
    plotOptions: {
      pie: {
        expandOnClick: false,
      },
    },
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
        categories={categoriesDefault}
      />
      <DrawerAddFinance
        isOpen={isAddIncomeOpen}
        onClose={onAddIncomeClose}
        onConfirm={handleAddIncome}
        title={"Income"}
        accounts={accounts}
        categories={categoriesDefault}
      />
      <Heading size="lg" ms="2">
        Balance: ${total.toFixed(1)}
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
        <Chart
          options={options}
          series={options.series}
          type="pie"
          width="400"
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
