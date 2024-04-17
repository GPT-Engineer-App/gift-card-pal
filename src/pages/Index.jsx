// Complete the Index page component for a gift card buying website
import { Box, Button, Container, Flex, Heading, Image, Input, Select, Stack, Text, useToast } from "@chakra-ui/react";
import { FaGift, FaShoppingCart } from "react-icons/fa";

const Index = () => {
  const toast = useToast();

  const handlePurchase = () => {
    toast({
      title: "Purchase Successful",
      description: "Your gift card will be sent shortly.",
      status: "success",
      duration: 5000,
      isClosable: true,
    });
  };

  return (
    <Container maxW="container.xl" p={4}>
      <Flex direction="column" align="center" justify="center" minH="100vh">
        <Heading mb={6}>Buy a Gift Card</Heading>
        <Image src="https://images.unsplash.com/photo-1549465220-1a8b9238cd48?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxnaWZ0JTIwY2FyZHxlbnwwfHx8fDE3MTMzMjAwMTJ8MA&ixlib=rb-4.0.3&q=80&w=1080" boxSize="150px" objectFit="cover" borderRadius="md" mb={4} />
        <Stack spacing={3} width="100%" maxW="md">
          <Select placeholder="Select card type">
            <option value="amazon">Amazon</option>
            <option value="itunes">iTunes</option>
            <option value="google-play">Google Play</option>
            <option value="steam">Steam</option>
          </Select>
          <Input placeholder="Amount" />
          <Input placeholder="Recipient's Email" />
          <Button leftIcon={<FaGift />} colorScheme="teal" onClick={handlePurchase}>
            Buy Now
          </Button>
        </Stack>
        <Box mt={6}>
          <Text fontSize="lg">
            <FaShoppingCart /> View Cart
          </Text>
        </Box>
      </Flex>
    </Container>
  );
};

export default Index;
