import { useRouter } from "next/router";
import { Flex, Button } from "@chakra-ui/react";
import Balance from "../../components/balance/Balance";
import Credit from "../../components/credit/Credit";

const Home = () => {
  const router = useRouter();

  const handleBack = (e) => {
    e.preventDefault();
    router.push("/");
  };

  return (
    <Flex direction="column" pt="4">
      <Balance />
      <Credit />
      <Button onClick={handleBack} mx="2">
        Go back
      </Button>
    </Flex>
  );
};

export default Home;
