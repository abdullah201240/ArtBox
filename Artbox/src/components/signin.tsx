import { View, Text, TextInput, TouchableOpacity, StyleSheet, StatusBar, TextStyle, Platform, KeyboardAvoidingView, TouchableWithoutFeedback, Keyboard } from 'react-native';
import React, { useState, useRef, useEffect } from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import MaskedView from '@react-native-masked-view/masked-view';
import { Text as RNText } from 'react-native';

type GradientTextProps = {
    text: string;
    style?: TextStyle;
};
const GradientText: React.FC<GradientTextProps> = ({ text, style }) => (
    <MaskedView
        maskElement={
            <RNText style={[style, { backgroundColor: 'transparent' }]}>{text}</RNText>
        }
    >
        <LinearGradient
            colors={['#608cfb', 'white']}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
        >
            <RNText style={[style, { opacity: 0 }]}>{text}</RNText>
        </LinearGradient>
    </MaskedView>
);


const Signin = (props: any) => {



    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);

    const toggleShowPassword = () => {
        setShowPassword(!showPassword);
    };

  

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
                text={`Log in with \nemail`}
                style={styles.title}
            />



            <GradientText
                text="Enter your email and password"
                style={styles.subtitle}
            />
            <KeyboardAvoidingView
                behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
                <TouchableWithoutFeedback onPress={Keyboard.dismiss}>

                    <View>
                        
                        <View style={styles.inputContainer}>

                            <TextInput
                                style={styles.input}
                                placeholder="Email address"
                                placeholderTextColor="#888"
                                keyboardType="email-address"
                                value={email}

                                onChangeText={setEmail}
                            />

                        </View>

                        <View style={styles.inputContainer}>

                            <TextInput
                                style={styles.input}
                                placeholder="Password"
                                placeholderTextColor="#888"
                                secureTextEntry={!showPassword}
                                value={password}
                                onChangeText={setPassword}
                            />
                            <MaterialCommunityIcons
                                name={showPassword ? 'eye-off' : 'eye'}
                                size={24}
                                color="#aaa"
                                style={styles.icon}
                                onPress={toggleShowPassword}
                            />
                        </View>

                        
                            
                    </View>
                </TouchableWithoutFeedback>
            </KeyboardAvoidingView>

            <TouchableOpacity style={styles.button} onPress={() => {props.navigation.navigate('Home') }}>
                <RNText style={styles.buttonText}>Sign in</RNText>
            </TouchableOpacity>
            

            <GradientText
                text="By creating an account or signing in you agree to our Terms and Conditions"
                style={styles.footerText}
            />
        </View>
    );
};

export default Signin;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#000',
        justifyContent: 'center',
        

    },
    background: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        height: '100%',
    },
    backButton: {
        position: 'absolute',
        top: 40,
        left: 20,
    },
    backButtonText: {
        fontSize: 24,
        color: '#fff',
    },
    title: {
        fontSize: 40,
        fontWeight: 'bold',
        color: '#fff',
        marginTop: '80%'


    },
    subtitle: {
        fontSize: 16,
        marginTop: 20,
        marginBottom: 20,
    },
    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        borderColor: '#888',
        borderWidth: 1,
        borderRadius: 50,
        marginBottom: 20,
        backgroundColor: 'transparent',

    },
    input: {
        flex: 1,
        height: 70,
        paddingHorizontal: 10,
        color: 'white',

    },
    icon: {
        marginRight: 10,
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
    },
    buttonText: {
        fontSize: 18,
        textAlign: 'center',
        color: '#888',
        backgroundColor: 'transparent',
    },
    footerText: {
        fontSize: 14,
        textAlign: 'center',
    },
    link: {
        color: '#fff',
        textDecorationLine: 'underline',
    },
});
