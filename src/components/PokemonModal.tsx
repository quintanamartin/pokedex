import * as React from 'react';
import { Modal, ModalOverlay, ModalContent, ModalBody, ModalCloseButton, Image, Stack } from '@chakra-ui/react';
import PokemonData from './PokemonData';

const PokemonModal = ({ onClose, selectedPokemon }: any) => {
    const { id, name, types } = selectedPokemon;
    return (
        <>
            <Modal isOpen onClose={onClose}>
                <ModalOverlay />
                <ModalContent>
                    <ModalCloseButton />
                    <ModalBody backgroundColor={types[0].type.name} borderRadius={4}>
                        <Stack>
                            <Image
                                alignSelf='center'
                                height={128}
                                src={`https://pokeres.bastionbot.org/images/pokemon/${id}.png`}
                                width={128}
                                zIndex={1}
                                marginBottom={-2}
                            />
                        </Stack>
                        <Stack backgroundColor='white' borderRadius={12} marginTop={-12} padding={8} paddingTop={16}>
                            <PokemonData selectedPokemon={selectedPokemon} />
                        </Stack>
                    </ModalBody>
                </ModalContent>
            </Modal>
        </>
    );
};

export default PokemonModal;
