import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/router";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import {
  Flex,
  Heading,
  Input,
  Button,
  InputGroup,
  InputRightElement,
} from "@chakra-ui/react";

function PasswordInput() {
  const [show, setShow] = useState(false);
  const handleClick = () => setShow(!show);

  return (
    <InputGroup size="md" mb={6}>
      <Input
        pr="4.5rem"
        type={show ? "text" : "password"}
        placeholder="Password"
        rounded={3}
      />
      <InputRightElement width="3.2rem">
        <Button h="1.75rem" size="sm" onClick={handleClick}>
          {show ? (
            <ViewOffIcon color="gray.300" ml={0} />
          ) : (
            <ViewIcon color="gray.300" />
          )}
        </Button>
      </InputRightElement>
    </InputGroup>
  );
}

const Home = () => {
  const router = useRouter();

  const handleClick = () => {
    router.push("/posts/first-post");
  };
  return (
    <>
      <h1 className="title">
        Learn <Link href="/posts/first-post">Next.js!</Link>
      </h1>
      <Flex height="100vh" align="center" justifyContent="center">
        <Flex
          direction="column"
          background="gray.700"
          p={10}
          mx={10}
          rounded={3}
        >
          <Heading mb={6}>Log in</Heading>
          <Input placeholder="Email" mb={3} type="email" rounded={3} />
          {PasswordInput()}
          <Button colorScheme="teal" onClick={handleClick}>
            Log in
          </Button>
        </Flex>
      </Flex>
    </>
  );
};

export default Home;
