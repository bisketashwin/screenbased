import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Tabs, useRouter } from 'expo-router'

const _layout = () => {
  return (
    <Tabs>
        <Tabs.Screen name='home' options={{tabBarLabel:'Add Remove'}}></Tabs.Screen>
        <Tabs.Screen name='trading' options={{tabBarLabel:'Trading'}}></Tabs.Screen>
    </Tabs>
  )
}

export default _layout

const styles = StyleSheet.create({})