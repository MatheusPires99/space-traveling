import { Flex, Text, Icon, HStack } from '@chakra-ui/react';
import { IconType } from 'react-icons';

type Info = {
  text: string;
  icon: IconType;
};

type PostInfoProps = {
  infos: Info[];
};

export function PostInfo({ infos }: PostInfoProps) {
  return (
    <Flex align="center" mt="6">
      <HStack spacing="6">
        {infos.map(info => (
          <Flex key={info.text} align="center">
            <Icon as={info.icon} />
            <Text ml="2" color="gray.400" fontSize="sm">
              {info.text}
            </Text>
          </Flex>
        ))}
      </HStack>
    </Flex>
  );
}
