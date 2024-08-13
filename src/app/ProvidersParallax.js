'use client'

import { ParallaxProvider } from 'react-scroll-parallax'

import React from 'react'

const ProvidersParallax = ({children}) => {
  return (
    <ParallaxProvider>
        {children}
    </ParallaxProvider>
  )
}

export default ProvidersParallax
