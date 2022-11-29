import { useState } from "react";
import { useRouter } from "next/router";
import { Flex, Heading, Input, Button, Spacer, Text } from "@chakra-ui/react";
import { PasswordInput } from "../components/PasswordInput";

const Home = () => {
  const router = useRouter();
  const [email, setEmail] = useState("");

  const handleClick = () => {
    if (email !== "") {
      router.push(`/home/${email}`);
    }
  };

  return (
    <>
      <Flex justifyContent="center" align="center" height="100vh">
        <Flex height="80vh" direction="column" background="gray.700" p="5">
          <Flex direction="column" m="3">
            <Heading fontWeight="bold">HELLO</Heading>
            <Text mb="6">Please... sign in</Text>
          </Flex>
          <Spacer />
          <Flex direction="column" p="4">
            <Input
              placeholder="Email"
              mb="3"
              type="email"
              rounded="3"
              onChange={(e) => setEmail(e.target.value)}
            />
            <PasswordInput />
            <Button mb="3" onClick={handleClick} rounded="25">
              Sign In
            </Button>
            <Button colorScheme="blue" onClick={handleClick} rounded="25">
              Sign Up
            </Button>
          </Flex>
        </Flex>
      </Flex>
    </>
  );
};

export default Home;
