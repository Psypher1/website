// sivu page container

import { Box, BoxProps } from '@chakra-ui/react'
import React from 'react'

export const Container = (props: BoxProps) => (
  <Box
    w='full'
    pb='12'
    pt='3'
    maxW={{ base: 'xl', md: '7xl' }}
    mx='auto'
    px={{ base: '6', md: '8' }}
    {...props}
  />
)

export default Container
