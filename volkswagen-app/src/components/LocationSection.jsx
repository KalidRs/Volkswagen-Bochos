import React from "react";
import { Box, Flex, Heading, Text } from "@chakra-ui/react";

const LocationSection = () => (
  <Box py={16} px={{ base: 4, md: 16 }}>
    <Flex
      align="center"
      direction={{ base: "column", md: "row" }}
      gap={8}
    >
      <Box
        as="iframe"
        src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d24887.994054102466!2d-98.0605712!3d20.17980855!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjDCsDExJzA1LjMiTiA5OMKwMDMnMzkuMCJX!5e1!3m2!1ses-419!2smx!4v1747777536077!5m2!1ses-419!2smx"
        w={{ base: "100%", md: "420px" }}
        h={{ base: "220px", md: "260px" }}
        border="0"
        borderRadius="30px"
        boxShadow="lg"
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Ubicación"
      />
      <Box flex={1} ml={{ md: 8 }}>
        <Heading as="h2" size="xl" mb={6} fontWeight="bold">
          Localízanos
        </Heading>
        <Text fontSize="lg">
          Calle Netzahualcoyotl #123, Col. Centro, Puebla, Pue. <br />
          <b>Horario:</b> Lun a Vie 9:00 a 18:00<br />
          <b>Tel:</b> (222) 123-4567<br />
          ¡Visítanos y encuentra tu bocho ideal!
        </Text>
      </Box>
    </Flex>
  </Box>
);

export default LocationSection;
