import * as React from "react";
import {
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  Stack,
  Text,
  Heading,
  ListItem,
  ListIcon,
  List,
  Progress,
  Box,
} from "@chakra-ui/react";
import {StarIcon} from "@chakra-ui/icons";

import {Pokemon} from "../pokeTypes";
type Props = {
  selectedPokemon: Pokemon;
};
const PokemonData: React.FC<Props> = ({selectedPokemon}: Props) => {
  const {name, id, height, weight, abilities, types, stats} = selectedPokemon;
  const capitalizedName = name.charAt(0).toUpperCase() + name.slice(1);

  const changeColorScheme = (color: string) => {
    const colorNumber = parseInt(color);

    if (colorNumber < 30) {
      return "red";
    }
    if (colorNumber > 30 && colorNumber < 70) {
      return "orange";
    }

    return "green";
  };

  return (
    <Tabs variant="soft-rounded">
      <TabList>
        <Tab>Info</Tab>
        <Tab>Stats</Tab>
      </TabList>

      <TabPanels>
        <TabPanel>
          <Stack spacing={3}>
            <table>
              <tbody>
                <tr>
                  <Text as="td" color="gray.500" width={32}>
                    Name
                  </Text>
                  <td>{capitalizedName}</td>
                </tr>
                <tr>
                  <Text as="td" color="gray.500" width={32}>
                    ID
                  </Text>
                  <td>#{id}</td>
                </tr>
                <tr>
                  <Text as="td" color="gray.500" width={32}>
                    Height
                  </Text>
                  <td>{height}</td>
                </tr>
                <tr>
                  <Text as="td" color="gray.500" width={32}>
                    Weight
                  </Text>
                  <td>{weight}</td>
                </tr>
              </tbody>
            </table>
            <Heading fontSize="md">Abilities</Heading>
            <List spacing={3}>
              {abilities.map((abilityList) => {
                const {ability} = abilityList;
                const abilityCapitalized =
                  ability.name.charAt(0).toUpperCase() + ability.name.slice(1);

                return (
                  <ListItem key={ability.name}>
                    <ListIcon as={StarIcon} color={types[0].type.name} />
                    {abilityCapitalized}
                  </ListItem>
                );
              })}
            </List>
          </Stack>
        </TabPanel>
        <TabPanel>
          <Box as="table">
            <tbody>
              {Object.entries(stats).map(([title, value]: any) => {
                return (
                  <tr key={title}>
                    <Text as="td" paddingY={1} width="15%">
                      {value.stat.name}
                    </Text>
                    <Box as="td" paddingY={1} width="45%">
                      <Progress
                        colorScheme={changeColorScheme(value.base_stat)}
                        size="xs"
                        value={value.base_stat}
                      />
                    </Box>
                  </tr>
                );
              })}
            </tbody>
          </Box>
        </TabPanel>
      </TabPanels>
    </Tabs>
  );
};

export default PokemonData;
