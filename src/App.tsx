import * as React from 'react';
import { ChakraProvider, CSSReset } from '@chakra-ui/react';
import Home from './components/screens/Home';
import theme from './theme';
import myTheme from './theme';

const App: React.FC = () => (
    <ChakraProvider theme={myTheme}>
        <CSSReset />
        <Home />
    </ChakraProvider>
);

export default App;
