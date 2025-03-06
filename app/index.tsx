import { router, useRouter } from 'expo-router'
import React, { useState } from 'react'
import { View, Text, TextInput, Button, Alert, StyleSheet } from 'react-native'

export default function LoginScreen() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = () => {
        console.log("llega a handled")
        if (email == 'hola@test.com' && password == '123456') {
            router.replace('/(tabs)');
        } else {
            console.log("ELSSSSSSSSSSSSSSSSSSSSSS");
            Alert.alert('Error', 'Credenciales inválidas');
        }
    }

    return (
        <View>
            <TextInput 
                placeholder='Correo' 
                value={email} 
                onChangeText={setEmail} 
                keyboardType='email-address'
                style={styles.input}/>

            <TextInput
                placeholder='Password' 
                value={password} 
                onChangeText={setPassword}
                secureTextEntry
                style={styles.input}
            />

            <Button title='INGRESAR' onPress={handleLogin} />
        </View>
    )
}

const styles = StyleSheet.create({
    input: { borderWidth: 1, padding: 10, marginBottom: 10, borderRadius: 5 }
});

