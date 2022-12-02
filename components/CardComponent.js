import {
  Card,
  CardBody,
  Stat,
  StatLabel,
  StatNumber,
  Button,
  Flex,
  useDisclosure,
} from "@chakra-ui/react";
import { AddIcon, DeleteIcon } from "@chakra-ui/icons";
import { AlertComponent } from "./AlertComponent";

export const CardComponent = ({ title, amount, handleDelete }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const onClickDelete = () => {
    handleDelete(title);
    onClose();
  };

  return (
    <>
      <AlertComponent
        isOpen={isOpen}
        onClose={onClose}
        onClickDelete={onClickDelete}
      />
      <Card minWidth="150" mx="2">
        <Flex justifyContent="end">
          <DeleteIcon
            fontSize="xs"
            mt="2"
            me="2"
            cursor="pointer"
            onClick={onOpen}
          />
        </Flex>
        <CardBody pt="0">
          <Stat>
            <StatLabel>{title}</StatLabel>
            <StatNumber fontSize="xl">$ {amount.toFixed(1)}</StatNumber>
          </Stat>
        </CardBody>
      </Card>
    </>
  );
};

export const CardButtonComponent = ({ handleClick }) => {
  return (
    <Card minWidth="120" mx="2">
      <CardBody align="center" mt="1">
        <Button onClick={handleClick} rounded="25">
          <AddIcon />
        </Button>
      </CardBody>
    </Card>
  );
};
