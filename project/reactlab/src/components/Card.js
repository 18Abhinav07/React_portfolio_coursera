import { Heading, HStack, Image, Text, VStack } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";

const Card = ({ title, description, imageSrc }) => {
  // Implement the UI for the Card component according to the instructions.
  // You should be able to implement the component with the elements imported above.
  // Feel free to import other UI components from Chakra UI if you wish to.
 
  return (
    <VStack bg="white" borderRadius="10px" m={0.5} align="initial">
    <Image src={imageSrc} alt={title} />
    <Heading as="h5" color="black" size='sm' my={0.5} padding="3px">{title}</Heading>
    <Text color="black" padding="3px">{description}</Text>
    <HStack>
      <Text fontSize="xs" color="black" padding="3px">Read more  <FontAwesomeIcon icon={faArrowRight} size="1x" /></Text>
     
    </HStack>
  </VStack>
  )
};

export default Card;
