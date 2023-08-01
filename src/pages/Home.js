import { Container, Grid } from '@chakra-ui/react'
import React from 'react'
import PostCart from '../Components/PostCart'

function Home() {
  return (
    <>
    <Container my="4" maxWidth="container.xl">
       <Grid gap={4} gridTemplateColumns="repeat(auto-fit,minmax(320px,1fr))">
         <PostCart/>
         <PostCart/>
         <PostCart/>
         <PostCart/>
       </Grid>
    </Container>
    </>
  )
}

export default Home