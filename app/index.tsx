import { router, useRouter } from 'expo-router'
import React, { useState } from 'react'
import { View, Text, TextInput, Button, Alert, StyleSheet } from 'react-native'
import { loginUser } from '../app/services/authService';


export default function LoginScreen() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const router = useRouter(); 
    const handleLogin = async() => {
        console.log("llega a handled")
        const result = await loginUser(email, password);
        console.log(result);

        if(result.success) {
            router.replace('/home');
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

