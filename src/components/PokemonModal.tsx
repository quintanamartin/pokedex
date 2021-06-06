import * as React from 'react';
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    useDisclosure,
    Button,
    Image,
    Box,
    Center,
    Fade,
    Heading,
} from '@chakra-ui/react';

const PokemonModal = ({ onClose, selectedPokemon }: any) => {
    const { id, name, types } = selectedPokemon;
    return (
        <>
            <Modal isOpen onClose={onClose}>
                <ModalOverlay />
                <ModalContent>
                    <ModalBody backgroundColor={types[0].type.name} borderRadius={4}>
                        <Center>
                            <Image
                                alignSelf='center'
                                height={128}
                                src={`https://pokeres.bastionbot.org/images/pokemon/${id}.png`}
                                width={128}
                                zIndex={1}
                            />
                        </Center>
                        <Box backgroundColor='white'>
                            <Heading>{name.toUpperCase()}</Heading>
                        </Box>
                    </ModalBody>
                </ModalContent>
            </Modal>
        </>
    );
};

export default PokemonModal;
