import React from 'react'
import {
    Box,
    Text
} from '@chakra-ui/react'

const StylesResult = (props) => {

    const { color, fontSize, text } = props.location.state

    return (
        <Box bgColor={color}>
            <Text fontSize={fontSize+"px" || "7xl"}>
                {text || "No text available"}
            </Text>
        </Box>
    )
}

export default StylesResult;