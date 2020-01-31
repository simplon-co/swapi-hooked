import React from 'react';
import { Box, Flex, Image, Heading } from 'rebass';

function AppCard({ data, loaded }) {
  const { name, title, img_src } = data;
  return (
    <Box variant="card">
      {loaded ? (
        <Flex>
          <Box width={1 / 4} mr={2} height={80} overflow="hidden" alignSelf="center">
            <Image src={img_src} />
          </Box>
          <Heading width={3 / 4} fontSize={[2, 2, 3]} height={80}>
            {title === undefined ? name : title}
          </Heading>
        </Flex>
      ) : (
        <Flex>
          <Box width={1 / 4} mr={2} backgroundColor="shade2" />
          <Box width={3 / 4} height={80} backgroundColor="shade2" />
        </Flex>
      )}
    </Box>
  );
}

export default AppCard;