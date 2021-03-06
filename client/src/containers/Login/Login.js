import React, { useState } from 'react'
import { Flex, Input, Box, Text, ChakraProvider, Button, Stack } from '@chakra-ui/react'
import { useHistory } from 'react-router-dom'
import { ReactComponent as RightImg } from '../../assets/img/undraw_my_feed_inj0.svg'
import axios from 'axios'

import './Login.css'

function Login() {


    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    let history = useHistory();

    const handleRegisterClick = () => history.push('/register')

    const validateLogin = (username,password) => {
        axios.post('http://localhost:5000/auth/login',{
            username: username,
            password: password
        }, {
            withCredentials: true
        })
        .then(data => {
            data.status === 200 && console.log("LOGIN OK")
            console.log(data)
        })
        .catch(err => {
            console.log(err)
        })
    }

    return (
        <ChakraProvider>
            <Flex justify="space-between" align="center" h="100vh" backgroundColor="blue.100">
                <Box w="70%" h="100%" d="flex" flexDirection="column" alignItems="center">
                    <RightImg />
                    <Text padding="2%" color="blackAlpha.700" fontSize="6xl">Create your website easily</Text>
                </Box>
                <Stack backgroundColor="white" w="30%" h="100%" padding="2%" d="flex" justifyContent="center"
                flexDirection="column" spacing={3}>

                    <Input placeholder="Username" type="text" size="lg"
                    onChange={(e) => setUsername(e.target.value)} />
                    
                    <Input placeholder="Password" type="password" size="lg"
                    onChange={(e) => setPassword(e.target.value)} />

                    <Button colorScheme="blue" onClick={() => validateLogin(username,password)}>
                        Log in
                    </Button>

                    <Button colorScheme="teal" onClick={() => handleRegisterClick()}>
                        Register
                    </Button>
                    
                </Stack>
            </Flex>
        </ChakraProvider>

    );
}

export default Login;
