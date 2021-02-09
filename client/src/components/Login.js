import React, { useState } from 'react'
import { Flex, Input, Box, Text } from '@chakra-ui/react'

function App() {

  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  return (
    <Flex justify="center" align="center">
      <Box borderWidth="5px" padding={10} fontSize="35px" borderRadius="lg">
        <Text color="gray.500">ezPage</Text>

        <Input placeholder="Ususario" size="lg" marginTop="0.5rem"
        onChange={(e) => setUsername(e.target.value)} />
        
        <Input placeholder="Contraseña" size="lg" marginTop="0.5rem"
         onChange={(e) => setPassword(e.target.value)} />
      
      </Box>
    </Flex>
  );
}

export default App;
