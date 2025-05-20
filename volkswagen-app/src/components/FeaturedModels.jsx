import { Box, Heading, SimpleGrid, Text, VStack, Image } from '@chakra-ui/react';

const modelos = [
  {
    nombre: "Vocho Arlequín",
    descripcion: "Representa un símbolo de libertad y diversión con diseño Inovador.",
    src: "/src/images/bettle2.png"
  },
  {
    nombre: "Vocho Firebeetle",
    descripcion: "Dicho modelo destacaba por su enfoque en la potencia y el estilo.",
    src: "/src/images/bettle3.png"
  },
  {
    nombre: "Volkswagen Sedán",
    descripcion: "Este modelo fue creado para celebrar los 40 años de Volkswagen en México",
    src: "/src/images/bettle4.png"
  },
];

const FeaturedModels = () => (
  <Box id="ventas" py={10} px={{ base: 2, md: 8 }}>
    <Heading as="h2" size="xl" mb={8} textAlign="center" fontWeight="bold">
      Modelos Destacados
    </Heading>
    <SimpleGrid columns={{ base: 1, md: 3 }} spacing={8} justifyItems="center">
      {modelos.map((modelo, idx) => (
        <VStack key={idx} spacing={2}>
          <Text fontWeight="bold" fontSize="lg">{modelo.nombre}</Text>
          <Image
            src={modelo.src}
            alt={modelo.nombre}
            w="200px"
            h="200px"
            objectFit="contain"
            borderRadius="24px"
            _hover={{ transform: "scale(1.05)" }}
            transition="all 0.2s"
          />
          <Text textAlign="center" fontSize="sm" color="gray.600">
            {modelo.descripcion}
          </Text>
        </VStack>
      ))}
    </SimpleGrid>
  </Box>
);

export default FeaturedModels;
