import React from 'react'
import { Stack , Image, HStack , Text, Avatar, VStack, Heading, Flex, Button } from '@chakra-ui/react'
import { Link } from 'react-router-dom'

function PostCart() {
  return (
    <Flex justify="center" align="center">
        <Stack w="320px" borderRadius="xl" boxShadow="md">
        <Image src='/post.jpg' alt='image'></Image>
        <Stack p="3">
        <HStack>
            <Avatar size="sm"/>
            <Text fontWeight="600">John Doe</Text>
            <Text fontSize="xs">1 min ago</Text>
        </HStack>
        <VStack align="flex-start">
            <Heading fontSize="lg">Subscribe to my channel</Heading>
            <Text fontSize="sm">Our web design and development process is tailored to meet the unique needs of each client. We start by creating a detailed plan that outlines the scope of 
            the project, the timeline, and the budget. Then, our talented designers will work to create a 
            visually stunning website that is consistent with your brand identity and appeals to your target audience.
            Our developers will then bring the design to life, ensuring that the website is optimized for speed, security, and mobile responsiveness.</Text>
            <Button alignSelf="flex-end" size="sm" as={Link} to="/post">View Post</Button>
        </VStack>
        </Stack>
    </Stack>
    </Flex>
  )
}

export default PostCart