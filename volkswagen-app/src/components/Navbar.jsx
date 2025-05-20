import { Flex, HStack, Link } from '@chakra-ui/react';

const Navbar = () => (
  <Flex
    as="nav"
    w="100%"
    bg="white"
    px={10}
    py={4}
    align="center"
    position="fixed"
    top={0}
    left={0}
    zIndex={10}
    boxShadow="sm"
    justify="flex-end"
  >
    <HStack spacing={10}>
      <Link href="#contacto" color="black" fontWeight="bold" fontSize="lg">
        Contacto
      </Link>
      <Link href="#ventas" color="black" fontWeight="bold" fontSize="lg">
        Ventas
      </Link>
      <Link href="#home" color="black" fontWeight="bold" fontSize="lg">
        Home
      </Link>
    </HStack>
  </Flex>
);

export default Navbar;
