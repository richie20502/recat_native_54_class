import { useRouter } from 'expo-router'
import React, { useState } from 'react'
import { View, Text, TextInput, Button, Alert } from 'react-native'

export default function LoginScreen() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = () => {
        if (email == 'hola@test.com' && password == '123456') {
            // hacer algo
        } else {
            /// hacer algo
        }
    }

    return (
        <View>
            <TextInput 
                placeholder='Correo' 
                value={email} 
                onChangeText={setEmail} 
                keyboardType='email-address' />

            <TextInput
                placeholder='Password' 
                value={password} 
                onChangeText={setPassword}
                secureTextEntry
            />

            <Button title='INGRESAR' onPress={handleLogin} />
        </View>
    )
}

