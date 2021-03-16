import React from "react"
import { useForm } from 'react-hook-form'
import {
    FormErrorMessage,FormControl,Button,FormLabel,Stack,
    NumberInput,NumberInputField,NumberIncrementStepper,NumberDecrementStepper, NumberInputStepper,
    Textarea,Input, Box
} from '@chakra-ui/react'
import { useHistory } from "react-router-dom"


const StyleForm = () => {

    const { register,handleSubmit,errors } = useForm()
    const history = useHistory()

    const onSubmit = (data) => {
        console.log(data)
        history.push('/result',{...data})
    }

    return (
        <Box maxW="sm" borderWidth="1px" borderRadius="lg" p={5}>
            <form onSubmit={handleSubmit(onSubmit)}>
                <Stack>
                    <FormControl isInvalid={errors.color}>
                        <FormLabel>Color de fondo</FormLabel>
                        <FormErrorMessage>
                            {errors.color && errors.color.message}
                        </FormErrorMessage>
                        <Stack direction="row">
                            <Input type="color" name="color" maxW="125px" ref={register}/> 
                        </Stack>
                    </FormControl>
                    <FormLabel>Tamaño de la letra (px)</FormLabel>
                    <NumberInput name="fontSize" allowMouseWheel maxW="125px" defaultValue={20} 
                    min={0} max={50}>
                        <NumberInputField ref={register} />
                        <NumberInputStepper>
                            <NumberIncrementStepper />
                            <NumberDecrementStepper />
                        </NumberInputStepper>
                    </NumberInput>
                    <FormControl isInvalid={errors.text}>
                        <FormLabel>Texto del contenedor</FormLabel>
                        <FormErrorMessage>
                            {errors.text && errors.text.message}
                        </FormErrorMessage>
                        <Textarea name="text" ref={register} />
                    </FormControl>
                </Stack>
                
                <Button mt={4} colorScheme="teal" type="submit">
                    Enviar
                </Button>
            </form>
        </Box>
    )

}

export default StyleForm;