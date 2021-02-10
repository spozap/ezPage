import React, { useState } from 'react'
import { Flex, Input, Box, Text, ChakraProvider } from '@chakra-ui/react'
import {ReactComponent as RightImg} from '../assets/img/undraw_my_feed_inj0.svg'
import './Login.css'

function App() {

  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  return (
    <ChakraProvider>
        <Flex justify="center" align="center" h="100vh" backgroundColor="blue.100">
            <Box borderWidth="5px" fontSize="35px" borderRadius="lg" w="80%" h="70%"
            d="flex" flexDirection="row">
                <Box backgroundColor="white" w="50%" padding="2%" d="flex" justifyContent="center"
                flexDirection="column">
                    <Text color="gray.500" as="samp">Log in</Text>

                    <Input placeholder="Ususario" size="lg" marginTop="0.5rem"
                    onChange={(e) => setUsername(e.target.value)} />
                    
                    <Input placeholder="Contraseña" size="lg" marginTop="0.5rem"
                    onChange={(e) => setPassword(e.target.value)} />
                </Box>
           
                <Box w="50%" d="flex" flexDirection="column">
                    <RightImg />
                    <>
                        <Text padding="2%">Create a simple page easily</Text>
                    </>
                </Box>
            </Box>
        </Flex>
    </ChakraProvider>

  );
}

export default App;
