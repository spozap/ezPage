import React, { useState } from 'react'
import { Flex, Input, Box, Text, ChakraProvider } from '@chakra-ui/react'
import {ReactComponent as RightImg} from '../assets/img/undraw_my_feed_inj0.svg'
import './Login.css'

function App() {

  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  return (
    <ChakraProvider>
        <Flex justify="space-between" align="center" h="100vh" backgroundColor="blue.100">
            <Box w="70%" h="100%" d="flex" flexDirection="column" alignItems="center">
                <RightImg />
                <Text padding="2%" color="blackAlpha.700" fontSize="6xl">Create your website easily</Text>
            </Box>
            <Box backgroundColor="white" w="30%" h="100%" padding="2%" d="flex" justifyContent="center"
            flexDirection="column">

                <Input placeholder="Username" size="lg" marginTop="0.5rem"
                onChange={(e) => setUsername(e.target.value)} />
                
                <Input placeholder="Password" size="lg" marginTop="0.5rem"
                onChange={(e) => setPassword(e.target.value)} />

                <Box as="button" lineHeight="2" backgroundColor="blue.100" marginTop="0.5rem"
                borderRadius="lg"><Text fontSize="xl" color="gray.500" as="samp">Log in</Text></Box>

            </Box>
        </Flex>
    </ChakraProvider>

  );
}

export default App;
