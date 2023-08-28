import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Link, useRouter } from 'expo-router'
import { TouchableOpacity } from 'react-native-gesture-handler'

const logIn = () => {
    const router = useRouter();

    const handleLogIn = () => {
        router.replace('home');

    };
    return (
        <View style={styles.container}>
            <View style={styles.main}>
                <Text style={styles.title}>Hello Ashwin</Text>
                <Text style={styles.subtitle}>This is the first page of your app.</Text>
                <TouchableOpacity style={styles.button1} onPress={handleLogIn}><Text style={styles.button1Text}>Log In</Text></TouchableOpacity>
            </View>
            <Link href={'/register'}>Open register </Link>
        </View>
    )
}

export default logIn

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        padding: 24,
    },
    main: {
        flex: 1,
        justifyContent: "center",
        maxWidth: 960,
        marginHorizontal: "auto",
    },
    title: {
        fontSize: 64,
        fontWeight: "bold",
    },
    subtitle: {
        fontSize: 36,
        color: "#38434D",
    },
    button1: {
        padding: 10,
        backgroundColor: '#303030',
        alignContent: "center",
        justifyContent: 'center',
        marginHorizontal: "auto",
    },
    button1Text: {
        alignContent: "center",
        justifyContent: 'center',
        fontSize: 34,
        fontWeight: "bold",
        color: '#cdcdcd',
    }
});