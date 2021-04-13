import { Box, Image, ImageProps as ChakraImageProps } from '@chakra-ui/react';

export function PostBanner({ ...props }: ChakraImageProps) {
  return (
    <Box>
      <Image objectFit="cover" w="100vw" maxH={400} {...props} />
    </Box>
  );
}
