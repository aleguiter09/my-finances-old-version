import { Card, CardBody, Stat, StatLabel, StatNumber } from "@chakra-ui/react";

export const CardComponent = ({ title, amount }) => {
  return (
    <Card minWidth="150" mx="2">
      <CardBody>
        <Stat>
          <StatLabel>{title}</StatLabel>
          <StatNumber fontSize="xl">$ {amount.toFixed(1)}</StatNumber>
        </Stat>
      </CardBody>
    </Card>
  );
};
