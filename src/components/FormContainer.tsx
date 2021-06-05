import { Box, Button, Center, HStack, Input, Text } from '@chakra-ui/react';
import * as React from 'react';

const FormContainer: React.FC = () => {
    return (
        <>
            <Center>
                <Text fontWeight={600}> Search your favorite pokemon:</Text>
                <Box>
                    <form>
                        <HStack>
                            <Input ml={4} placeholder='Example: Pikachu' />
                            <Button colorScheme='teal' size='md'>
                                Search
                            </Button>
                        </HStack>
                    </form>
                </Box>
            </Center>
        </>
    );
};

export default FormContainer;
