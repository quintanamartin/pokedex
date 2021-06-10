import * as React from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalBody,
  ModalCloseButton,
  Image,
  Stack,
} from "@chakra-ui/react";

import PokemonData from "./PokemonData";

const PokemonModal = ({onClose, selectedPokemon}: any) => {
  const {id, types} = selectedPokemon;

  return (
    <>
      <Modal isOpen trapFocus={false} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalCloseButton />
          <ModalBody backgroundColor={types[0].type.name} borderRadius={4}>
            <Stack>
              <Image
                alignSelf="center"
                height={128}
                marginBottom={-2}
                src={`https://pokeres.bastionbot.org/images/pokemon/${id}.png`}
                width={128}
                zIndex={1}
              />
            </Stack>
            <Stack
              backgroundColor="white"
              borderRadius={12}
              marginTop={-12}
              padding={8}
              paddingTop={16}
            >
              <PokemonData selectedPokemon={selectedPokemon} />
            </Stack>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

export default PokemonModal;
