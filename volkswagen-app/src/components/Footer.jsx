import { Box, Text, Link, Flex } from "@chakra-ui/react";

const Footer = () => (
  <Box bg="gray.200" py={5} mt={8}>
    <Flex
      align="center"
      justify="center"
      direction={{ base: "column", md: "row" }}
      gap={2}
    >
      <Text fontSize="md" color="gray.600">
        &copy; {new Date().getFullYear()} BochosMX | Desarrollado por <Link href="https://github.com/KalidRs" isExternal color="blue.500">Kalid</Link>
      </Text>
    </Flex>
  </Box>
);

export default Footer;
