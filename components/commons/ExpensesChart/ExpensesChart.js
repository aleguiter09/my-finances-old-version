import { Flex, Box, Text, Button, Input } from "@chakra-ui/react";
import { useState } from "react";
import { ChevronLeftIcon, ChevronRightIcon, AddIcon } from "@chakra-ui/icons";

export const ExpensesChart = ({ categories, total, handleAddCategory }) => {
  const [currentYear, setCurrentYear] = useState(2023);
  const [currentMonth, setCurrentMonth] = useState(0);
  const [addCategory, setAddCategory] = useState(false);
  const [newCategoryTitle, setNewCategoryTitle] = useState("");

  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const onLeftClick = () => {
    if (currentMonth === 0) {
      setCurrentYear(currentYear - 1);
      setCurrentMonth(11);
    } else {
      setCurrentMonth(currentMonth - 1);
    }
  };
  const onRightClick = () => {
    if (currentMonth === 11) {
      setCurrentYear(currentYear + 1);
      setCurrentMonth(0);
    } else {
      setCurrentMonth(currentMonth + 1);
    }
  };

  const onClickAddCategory = () => {
    if (addCategory) {
      const newCategory = {
        title: newCategoryTitle,
        amount: 0,
      };
      handleAddCategory(newCategory);
      setNewCategoryTitle("");
    }
    setAddCategory(!addCategory);
  };

  return (
    <Flex
      direction="column"
      w="100%"
      maxW="350px"
      background="gray.700"
      p="4"
      rounded="15"
    >
      <Flex justify="space-around" mb="3">
        <ChevronLeftIcon fontSize="2xl" onClick={onLeftClick} />
        <Text fontSize="md">
          {months[currentMonth] + " " + currentYear.toString()}
        </Text>
        <ChevronRightIcon fontSize="2xl" onClick={onRightClick} />
      </Flex>
      {categories.map((c) => (
        <Flex mb="2">
          <Box
            ps="2"
            w={`${(c.amount * 100) / total}%`}
            h="25"
            bg={c.color ? c.color : "blue.400"}
          >
            <Text w="fit-content" whiteSpace="nowrap">
              {c.title} - ${c.amount}
            </Text>
          </Box>
        </Flex>
      ))}
      {addCategory && (
        <Flex mb="2">
          <Input
            ps="2"
            h="25"
            bg="blue.500"
            rounded="0"
            onChange={(c) => setNewCategoryTitle(c.target.value)}
          />
        </Flex>
      )}
      <Flex>
        <Button
          size="sm"
          colorScheme={addCategory ? "green" : "blue"}
          my="2"
          onClick={onClickAddCategory}
        >
          <AddIcon me="3" fontSize="xs" />
          <Text fontSize="sm">Add category</Text>
        </Button>
      </Flex>
      <Flex justifyContent="space-between">
        <Text size="sm" mt="2">
          Expenses: ${total.toFixed(1)}
        </Text>
        <Flex bg="gray.500" rounded="25" p="2" cursor="pointer">
          <Text fontSize="xs" ps="1">
            Details
          </Text>
          <ChevronRightIcon ms="1" pt="1" />
        </Flex>
      </Flex>
    </Flex>
  );
};
