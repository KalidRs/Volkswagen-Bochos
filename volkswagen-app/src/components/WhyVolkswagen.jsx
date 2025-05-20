import React from "react";
import {
    Box,
    Flex,
    Heading,
    UnorderedList,
    ListItem,
    Circle,
    Image,
} from "@chakra-ui/react";
import bocho from "/src/images/behindVolks.png"; // Si usas import de imagen

const WhyVolkswagen = () => (
    <Box py={16} px={{ base: 4, md: 16 }}>
        <Flex
            align="center"
            justify="space-between"
            direction={{ base: "column", md: "row" }}
            gap={8}
            position="relative"
            minH="260px"
        >
            {/* Izquierda: Texto y lista */}
            <Box flex={1} mb={{ base: 8, md: 0 }}>
                <Heading as="h2" size="xl" mb={6} fontWeight="bold">
                    ¿Por qué tener un Volkswagen?
                </Heading>
                <UnorderedList
                    spacing={3}
                    fontSize="lg"
                    styleType="disc"
                    pl={6}
                >
                    <ListItem>
                        Extremadamente fácil de reparar y mantener.
                    </ListItem>
                    <ListItem>
                        Pieza icónica de la cultura automovilística mexicana.
                    </ListItem>
                    <ListItem>
                        Bajo consumo de gasolina y refacciones económicas.
                    </ListItem>
                </UnorderedList>
            </Box>

            <Box flex={1} position="relative" minH="250px" display="flex" flexDirection="column" alignItems="center">
                <Image
                    src={bocho}
                    alt="Volkswagen Car"
                    w={{ base: "200px", md: "230px" }}
                    h={{ base: "200px", md: "230px" }}
                    objectFit="contain"
                    ml={16}
                    mt={2}
                    zIndex={2}
                />
                <Circle
                    size="250px"
                    bg="#c9c7e7"
                    position="absolute"
                    left={{ base: "50%", md: "280px" }}
                    transform="translateX(-50%)"
                    zIndex={1}
                />
            </Box>
        </Flex>
    </Box>
);

export default WhyVolkswagen;
