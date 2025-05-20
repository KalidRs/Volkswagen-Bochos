import { Box, Text, Heading } from "@chakra-ui/react";

const DudasSection = () => (
  <Box id="contacto" 
    maxW="900px"
    mx="auto"
    mt={12}
    mb={8}
    px={{ base: 4, md: 16 }}
    py={10}
    bg="#c9c7e7"
    borderRadius="60px"
    textAlign="center"
    boxShadow="md"
  >
    <Heading as="h3" size="lg" mb={4}>
      ¿Tienes dudas?
    </Heading>
    <Text fontSize="lg" maxW="600px" mx="auto">
      Si tienes cualquier pregunta sobre nuestros Bochos, restauraciones, piezas o servicios, no dudes en contactarnos. Estamos para ayudarte a que tu experiencia Volkswagen sea la mejor. <br />
      Escríbenos a <b>kalid@bochosmx.com</b> o llámanos al <b>(222) 123-4567</b>.
    </Text>
  </Box>
);

export default DudasSection;
