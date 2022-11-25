import Head from "next/head";
import Link from "next/link";
import {
  Flex,
  Heading,
  Input,
  Button,
  useColorMode,
  useColorModeValue,
} from "@chakra-ui/react";

const Home = () => {
  const { toggleColorMode } = useColorMode();
  const formBackground = useColorModeValue("gray.100", "gray.700");
  return (
    <>
      <h1 className="title">
        Learn <Link href="/posts/first-post">Next.js!</Link>
      </h1>
      <Flex height="100vh" align="center" justifyContent="center">
        <Flex direction="column" background={formBackground} p={12} rounded={6}>
          <Heading mb={6}>Log in</Heading>
          <Input
            placeholder="email@email.com"
            variant="filled"
            mb={3}
            type="email"
          />
          <Input
            placeholder="********"
            variant="filled"
            mb={6}
            type="password"
          />
          <Button colorScheme="teal" mb={6}>
            Log in
          </Button>
          <Button onClick={toggleColorMode}>Toggle</Button>
        </Flex>
      </Flex>
    </>
  );
};

export default Home;
