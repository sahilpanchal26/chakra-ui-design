import React from 'react'
import { AspectRatio,Button,Divider,Heading,HStack,Image,Stack,Text,useColorMode,useColorModeValue,VStack } from '@chakra-ui/react'

function Cart() {
  const {toggleColorMode} = useColorMode();
  const bgColor = useColorModeValue('gray.50','whiteAlpha.50')
  const textColor = useColorModeValue('gray.600','whiteAlpha.600')
  return (
    <VStack bg={bgColor} w="full" h="full" p={10} spacing={10} alignItems="flex-start">
    <VStack alignItems="flex-start" spacing={1}>
      <Heading size="2xl">Your Cart</Heading>
      <Text>if the price is too hard on your eyes.{""}
      <Button onClick={toggleColorMode} variant="outline" colorScheme='black'>try changing the theme</Button>
      </Text>
    </VStack>
    <HStack spacing={6} alignItems="center" w='full'>
    <AspectRatio ratio={1} w={24}>
        <Image src='skateboard.png' alt='skateboard'></Image>
      </AspectRatio>
    <Stack spacing={0} w="full" direction="row" justifyContent="space-between" alignItems="center">
      <VStack w="full" spacing={0} alignItems="flex-start">
        <Heading size="md">Penny Board</Heading>
        <Text color="gray.600">PNYCOMP27541</Text>
      </VStack>
      <Heading size="sm" textAlign="end">$199.00</Heading>
    </Stack>
    </HStack>
    <VStack spacing={4} alignItems="stretch" w="full">
      <HStack justifyContent="space-between">
        <Text color={textColor}>subTotal</Text>
        <Heading size="sm">$199.00</Heading>
      </HStack>
    <HStack justifyContent="space-between">
      <Text color={textColor}>Shipping</Text>
      <Heading size="sm">$29.75.00</Heading>
    </HStack>
    <HStack justifyContent="space-between">
      <Text color={textColor}>Texes (estimated)</Text>
      <Heading size="sm">$18.50</Heading>
    </HStack>
    </VStack>
    <Divider/>
    <HStack justifyContent="space-between" w="full">
    <Text color={textColor}>Total</Text>
      <Heading size="sm">$247.25</Heading>
    </HStack>
  </VStack>
  )
}

export default Cart