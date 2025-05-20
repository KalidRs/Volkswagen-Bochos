import { Box, Flex, Heading, Button, Stack, Image } from '@chakra-ui/react';

const HeroSection = () => (
  <Box id="home"
    bg="#c9c7e7"
    w="100%"
    minH="200px"
    pt="100px"
    pb={10}
    px={{ base: 10, md: 40 }}

  >
    <Flex
      maxW="1800px"
      mx="auto"
      align="center"
      justify="space-between"
      direction={{ base: 'column', md: 'row' }}
      gap={20}
    >
      <Stack spacing={6} align="flex-start" flex={1}>
        <Heading
          as="h1"
          fontSize={{ base: '3xl', md: '4xl' }}
          color="white"
          fontStyle="italic"
          fontWeight="extrabold"
          letterSpacing="wider"
        >
          volkswagen
        </Heading>
        <Stack direction="row" spacing={4}>
          <Button variant="outline" color="white" borderColor="white" _hover={{ bg: "whiteAlpha.300" }}>
            Learn More
          </Button>
          <Button colorScheme="blackAlpha" bg="black" color="white" _hover={{ bg: "gray.700" }}>
            View Models
          </Button>
        </Stack>
      </Stack>
      <Image
        src="/src/images/bocho.png"
        alt="Volkswagen Car"
        w={{ base: "350px", md: "450px" }}   // ancho
        h={{ base: "250px", md: "350px" }}  // alto
        objectFit="cover"
      />
    </Flex>
  </Box>
);

export default HeroSection;
