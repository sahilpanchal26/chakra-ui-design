import { Container, Heading, Stack, Image , HStack , Avatar , Text ,
    AccordionButton, Box , AccordionPanel,AccordionItem, Accordion, AccordionIcon } from '@chakra-ui/react'
import React from 'react'

function PostPage() {
  return (
   <Container maxW="container.xl">
     <Stack spacing={4} mt={8}>
        <Heading fontSize="2xl" textTransform="capitalize">Subscribe to my channel</Heading>
        <Image objectFit="cover" boxSize="500px" src="/post.jpg"></Image>
        <HStack>
            <Avatar name='JD' size="lg"/>
            <Text fontWeight="600">John Doe</Text>
            <Text fontSize="xs">1 min ago</Text>
        </HStack>
        <Text>
            We offer comprehensive web design and development services that are tailored to meet the unique needs of your business. 
            Our team of experienced designers and developers work closely with you to create a website that not only looks great but also functions seamlessly. 
            We focus on creating a user-friendly experience for your visitors, ensuring that your website is easy to navigate and optimized for conversions.At BrandCurb, we take a collaborative approach to every project,
            ensuring that we fully understand your business and your goals before we begin. Whether you're looking to launch a new website or redesign an existing one, we are here to help you achieve your online objectives. 
            Contact us today to learn more about our web design and development services and how we can help your business succeed online.
         </Text>
         <Accordion>
  <AccordionItem>
    <h2>
      <AccordionButton>
        <Box as="span" flex='1' textAlign='left'>
          Section 1 title
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel pb={4}>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat.
    </AccordionPanel>
  </AccordionItem>

  <AccordionItem>
    <h2>
      <AccordionButton>
        <Box as="span" flex='1' textAlign='left'>
          Section 2 title
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel pb={4}>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat.
    </AccordionPanel>
  </AccordionItem>
</Accordion>
    </Stack>
   </Container>
  )
}

export default PostPage