import React, { useState } from 'react'
import {
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    Button,
    Box,
    Flex,
    Icon,
    Text
  } from "@chakra-ui/react"

import { AiOutlineCloseCircle } from 'react-icons/ai'
  
const ColorPicker = () => {

    const [color, setColor] = useState(null)

    return(
    <Flex flexDirection="row">
        <Menu>
            <MenuButton as={Button}>
                Selecciona un color
            </MenuButton>
            <MenuList>
                <MenuItem minH="50px"
                onClick={() => setColor({text: "azul" , color: "blue"})}>
                    <Box
                    boxSize="2rem"
                    borderRadius="0.5rem"
                    backgroundColor="blue"
                    mr="12px"/>
                    <span>Azul</span>
                </MenuItem>
                <MenuItem minH="50px"
                onClick={() => setColor({text: "verde" , color: "green"})}>
                    <Box
                    boxSize="2rem"
                    borderRadius="0.5rem"
                    backgroundColor="green"
                    mr="12px"/>
                    <span>Verde</span>
                </MenuItem>
                <MenuItem minH="50px"
                onClick={() => setColor({text: "amarillo" , color: "yellow"})}>
                    <Box
                    boxSize="2rem"
                    borderRadius="0.5rem"
                    backgroundColor="yellow"
                    mr="12px"/>
                    <span>Amarillo</span>
                </MenuItem>
                <MenuItem minH="50px"
                onClick={() => setColor({text: "rojo" , color: "red"})}>
                    <Box
                    boxSize="2rem"
                    borderRadius="0.5rem"
                    backgroundColor="red"
                    mr="12px"/>
                    <span>Rojo</span>
                </MenuItem>
            </MenuList>
        </Menu>
        <Box>
            {
                !color ?
                <Text fontSize="2xl" m={2}>No hay ningun color seleccionado</Text>
                :
                <Flex flexDirection="row" justify="center" align="center" ml={2}>
                    <Box
                    boxSize="2rem"
                    borderRadius="0.5rem"
                    backgroundColor={color.color}
                    mr="12px"/>
                    <Text fontSize="2xl">Seleccionado el color {color.text} </Text>
                    <div style={{marginLeft: 5}}>
                        <Icon as={AiOutlineCloseCircle} size={100}  onClick={() => setColor(null)}/>
                    </div>
                </Flex>
            }
        </Box>
    </Flex>
    )

}

export default ColorPicker;