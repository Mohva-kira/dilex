import React from 'react'
import { Stack } from 'expo-router'


const Layout = () => {
  return (
    <Stack>
      <Stack.Screen name="(tabs)" options={{headerShown: false}}  />
      <Stack.Screen name="(product)/[id]" options={{headerShown: false}}  />
      <Stack.Screen name="profile" options={{headerShown: false}}  />
    </Stack>
  )
}

export default Layout