import React from "react";
import { VStack,Checkbox,FormControl, FormLabel, GridItem,Input, Select, SimpleGrid, Textarea,Heading,Text,Button } from "@chakra-ui/react";

function Details() {
  return (
    <VStack w="full" h="full" p={10} spacing={10} alignItems="flex-start">
      <VStack spacing={2} alignItems="flex-start">
        <Heading>Your Details</Heading>
        <Text>If you already have an account, click here to login.</Text>
      </VStack>
      <SimpleGrid column={2} columnGap={3} rowGap={4}>
        <GridItem colSpan={1}>
          <FormControl>
            <FormLabel>First Name:</FormLabel>
            <Input placeholder="Enter first name"></Input>
          </FormControl>
        </GridItem>
        <GridItem colSpan={1}>
          <FormControl>
            <FormLabel>Last Name:</FormLabel>
            <Input placeholder="Enter last name"></Input>
          </FormControl>
        </GridItem>
        <GridItem colSpan={2}>
          <FormControl>
            <FormLabel>Address:</FormLabel>
            <Textarea placeholder="Enter your address"></Textarea>
          </FormControl>
        </GridItem>
        <GridItem colSpan={1}>
          <FormControl>
            <FormLabel>City</FormLabel>
            <Input placeholder="Enter your city"></Input>
          </FormControl>
        </GridItem>
        <GridItem colSpan={1}>
          <FormControl>
            <FormLabel>Country</FormLabel>
            <Select placeholder="select country">
              <option value="india">India</option>
              <option value="Austrailia">Austrailia</option>
              <option value="America">America</option>
              <option value="Canada">Canada</option>
            </Select>
          </FormControl>
        </GridItem>
        <GridItem colSpan={2}>
          <FormControl>
            <Checkbox>Ship to the billing address.</Checkbox>
          </FormControl>
        </GridItem>
        <GridItem colSpan={2}>
          <Button variant="primary" width="full" size="lg">
            Place Order
          </Button>
        </GridItem>
      </SimpleGrid>
    </VStack>
  );
}

export default Details;
