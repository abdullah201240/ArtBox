import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, StatusBar, TextStyle, Image } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import MaskedView from '@react-native-masked-view/masked-view';

type GradientTextProps = {
    text: string;
    style?: TextStyle;
};

const GradientText: React.FC<GradientTextProps> = ({ text, style }) => (
    <MaskedView
        maskElement={
            <Text style={[style, { backgroundColor: 'transparent' }]}>{text}</Text>
        }
    >
        <LinearGradient
            colors={['#608cfb', 'white']}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
        >
            <Text style={[style, { opacity: 0 }]}>{text}</Text>
        </LinearGradient>
    </MaskedView>
);

const Middle = (props: any) => {
    return (
        <View style={styles.container}>
            <StatusBar barStyle="light-content" />
            <LinearGradient
                colors={['black', '#302b63', '#302b63', 'black', 'black', 'black']}
                style={StyleSheet.absoluteFill}
                start={{ x: 0.5, y: 0 }}
                end={{ x: 0.5, y: 1 }}
            />
            
            <GradientText
                text={`Create an \naccount`}
                style={styles.title}
            />
            <Image
                source={require('../../assets/logo.png')}
                style={styles.logo}

                
            />
            <TouchableOpacity style={styles.button} onPress={() => { props.navigation.navigate('Signup') }}>
                <Text style={styles.buttonText}>Sign up with email</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button1} onPress={() => { props.navigation.navigate('Signin') }}>
                <Text style={styles.buttonText1}>Sign in</Text>
            </TouchableOpacity>
            
        </View>
    );
};

export default Middle;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#000',
        justifyContent: 'center',
        alignItems: 'center',
    },
   
    title: {
        fontSize: 40,
        fontWeight: 'bold',
        color: '#fff',
        marginTop: '10%',
        marginRight: '40%',
    },
    button: {
        height: 70,
        borderRadius: 50,
        backgroundColor: 'transparent',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 20,
        borderColor: '#888',
        borderWidth: 1,
        width: "100%",
    },
    button1: {
        height: 70,
        width: "100%",
        borderRadius: 50,
        backgroundColor: '#262733',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 20,
        
    },
    buttonText: {
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center',
        color: 'white',
        backgroundColor: 'transparent',
    },
    buttonText1: {
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center',
        color: 'white',
        backgroundColor: 'transparent',
    },
    footerText: {
        fontSize: 14,
        textAlign: 'center',
        color: '#fff',
    },
    logo:{
        width: '60%', 
    height: '50%',
    }
});
