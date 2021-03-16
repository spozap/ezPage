import React from 'react'
import { useForm } from 'react-hook-form'
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    Input,
    ModalBody,
    ModalCloseButton,
    FormControl,
    FormErrorMessage,
    Button,
    Stack,
    useDisclosure
  } from "@chakra-ui/react"

const MediaComponentModal = () => {

    const { isOpen, onOpen, onClose } = useDisclosure()
    const { register,handleSubmit,errors } = useForm()

    const onSubmit = (data) => {
        console.log(data)
    }

    return(
        <>
            <Button onClick={onOpen}>Open modal</Button>

            <Modal isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader> Insert Image </ModalHeader>
                    <ModalCloseButton />
                    <ModalBody pb={6}>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <Stack spacing={2}>
                                <FormControl isInvalid={errors.img}>
                                    <Input type="file" 
                                    accept="image/x-png,image/jpeg,image/jpg"
                                    name="image" ref={ register(
                                        {
                                            required: true
                                        }
                                    ) } />
                                    <FormErrorMessage>
                                        { errors.img  && "No se ha especificado ninguna imagen" }
                                    </FormErrorMessage>
                                </FormControl>

                                <Button type="submit">
                                    Create component
                                </Button>
                            </Stack>

                        </form> 
                    </ModalBody>
                </ModalContent>
            </Modal>
        </>
    )

}

export default MediaComponentModal; 