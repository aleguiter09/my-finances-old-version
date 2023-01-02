import { Box } from "@chakra-ui/react";

export const ExpenseBar = ({ total, amount }) => {
  return <Box mb="2" w={`${(amount * 100) / total}px`} h="25" bg="red.500" />;
};
