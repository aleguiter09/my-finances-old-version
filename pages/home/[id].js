import { useRouter } from "next/router";
import { Flex, Button, Heading } from "@chakra-ui/react";
import { CardComponent } from "../../components/CardComponent";
import { AddIcon } from "@chakra-ui/icons";
import { useEffect, useState } from "react";

const Home = () => {
  const router = useRouter();

  const accountsDefault = [
    { title: "Santander", amount: 30000 },
    { title: "Mercado Pago", amount: 12000 },
    { title: "Lemon", amount: 0 },
    { title: "Belo", amount: 0 },
  ];

  const [total, setTotal] = useState(0);
  const [accounts, setAccounts] = useState(accountsDefault);

  useEffect(() => {
    let sum = 0;
    accounts.forEach((acc) => (sum += acc.amount));
    setTotal(sum);
  }, [accounts]);

  const handleBack = (e) => {
    e.preventDefault();
    router.push("/");
  };

  const handleClick = (e) => {
    e.preventDefault();
  };

  return (
    <Flex direction="column" height="100vh" mt="4">
      <Heading size="lg" alignSelf="self-start" ms="2">
        Total: $ {total.toFixed(1)}
      </Heading>
      <Flex my="4" maxWidth="100%" overflowX="auto">
        {accounts.map((acc) => (
          <CardComponent title={acc.title} amount={acc.amount} />
        ))}
      </Flex>
      <Flex direction="column" align="center">
        <Button mb="3" onClick={handleClick} rounded="25">
          <AddIcon me="3" /> Add account
        </Button>
        <Button onClick={handleBack}>Go back</Button>
      </Flex>
    </Flex>
  );
};

export default Home;
