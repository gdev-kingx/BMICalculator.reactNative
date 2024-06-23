import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import Constants from 'expo-constants'

const BMICalc = () => {
    const [weight, setWeight] = useState('')
    const [height, setHeight] = useState('')
    const [bmi, setBmi] = useState('')
    const [description, setDescription] = useState('')

    const calculateBMI = () => {
        const Bmi = weight / ((height / 100) * (height / 100))
        setBmi(Bmi)

        if (Bmi < 18.5) {
            setDescription('Underweight, Eat More!!!')
        } else if (Bmi >= 18.5 && Bmi <= 24.9) {
            setDescription('Normal, keep it up!!!')
        } else if (Bmi >= 25 && Bmi <= 29.9) {
            setDescription('OverWeight, Start working out..!')
        }
        else if (Bmi > 30) {
            setDescription('Obese, Hit the Gym.!')
        }
    }

    return (
        <View style={styles.container}>
            <View style={styles.title}>
                <Text style={styles.titleText}>BMI Calculator</Text>
            </View>
            <TextInput 
                style={styles.input}
                value={weight}
                onChangeText={(text) => setWeight(text)}
                placeholder='Weight in kg'
                keyboardType='numeric'
            />
            <TextInput 
                style={styles.input}
                value={height}
                onChangeText={(text) => setHeight(text)}
                placeholder='Height in cm'
                keyboardType='numeric'
            />
            <TouchableOpacity
                style={styles.button}
                onPress={calculateBMI}
            >
                <Text style={styles.buttonText}>Calculate</Text>
            </TouchableOpacity>
            <View style={styles.resultView}>
                <Text style={styles.result}>{bmi}</Text>
                <Text style={styles.result}>{description}</Text>
            </View>
        </View>
    )
}

export default BMICalc

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: Constants.statusBarHeight,
        backgroundColor: '#e0ecde'
    },
    title: {
        backgroundColor: '#2c6975',
        height: 80,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 10,
    },
    titleText: {
        fontSize: 30,
        color: '#fff',
        fontWeight: 'bold'
    },
    input: {
        height: 55,
        margin: 15,
        borderWidth: 1/2,
        padding: 10,
        borderRadius: 5,
        backgroundColor: '#cde0c9',
        fontSize: 18
    },
    button: {
        height: 55,
        margin: 15,
        borderWidth: 1/2,
        padding: 10,
        borderRadius: 5,
        backgroundColor: '#68b2a0',
        justifyContent: 'center',
        alignItems: 'center'
    },
    buttonText: {
        fontSize: 20,
        color: '#fff',
        fontWeight: 'bold',
    },
    resultView: {
        margin: 15,
    },
    result: {
        fontSize: 30,
        color: '#2c6975',
        fontWeight: 'bold'
    }
});