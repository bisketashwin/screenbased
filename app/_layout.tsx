import { StyleSheet, Text, View, Button } from 'react-native'
import React from 'react'
import { Stack, useRouter } from 'expo-router'

const _layout = () => {
    const router = useRouter();
    return (
        <Stack >
            <Stack.Screen name='index' options={{ headerTitle: 'Log In', headerShown: false }} />
            <Stack.Screen name='register' options={{
                headerTitle: 'Creat Account',
                headerRight: () => <Button title='Open'
                    onPress={() => { router.push('modal') }} />

            }} />
            {/* modal is not having animation as expect need to check it later https://docs.expo.dev/router/advanced/modals/*/}
            <Stack.Screen name='modal' options={{presentation:'modal'}}/>
            <Stack.Screen name='(tabs)' options={{headerShown:false}}/>
        </Stack>
    )
}

export default _layout

const styles = StyleSheet.create({})