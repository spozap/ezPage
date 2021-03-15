import React, { useState } from 'react'
import { Box, Stack } from '@chakra-ui/react'
import './StylesSidebar.css'

const StylesSidebar = () => {

    const [selected, setSelected] = useState()

    const index = ["Insert", "Pages", "Themes"]

    const handleSelected = (current) => setSelected(current)

    return (
        <Box backgroundColor="gray.100" position="absolute" padding={2} height="100vh" style={
            {
                borderRight: "1px solid black"
            }
        }>
            <Stack direction="row" spacing={10}>
                {
                    index.map((currentValue) => {
                        return(
                            <Box
                            as="button"
                            fontSize="1rem"
                            fontWeight="semibold"
                            width=""
                            padding={2}
                            key={currentValue}
                            style={
                                { borderBottom: (selected === currentValue) ? "2px solid blue" : "none"  }
                            }
                            onClick={() => handleSelected(currentValue)}
                            _hover={{ bg: "#ebedf0" }}
                            >
                                {  currentValue }
                            </Box>                            
                        )
                    })
                    
                }
                
            </Stack>
        </Box>
    )

}

export default StylesSidebar;