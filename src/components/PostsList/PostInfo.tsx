import { Flex, Text, Icon } from '@chakra-ui/react';
import { IconType } from 'react-icons';

type PostInfoProps = {
  icon: IconType;
  content: string;
};

export function PostInfo({ icon, content }: PostInfoProps) {
  return (
    <Flex align="center">
      <Icon as={icon} />
      <Text ml="2" color="gray.400" fontSize="sm">
        {content}
      </Text>
    </Flex>
  );
}
