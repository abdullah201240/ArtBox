import React from 'react';
import { View, Text, TextInput, Button, StyleSheet, TouchableOpacity, Image, TextStyle } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
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
const Home = (props: any) => {
  return (
    <View style={styles.container}>
      <LinearGradient
                colors={['black','black', 'black', 'black', '#302b63', '#302b63']}
                style={StyleSheet.absoluteFill}
                start={{ x: 0.5, y: 0 }}
                end={{ x: 0.5, y: 1 }}
            />
      <View style={styles.header}>
        <Image source={require('../../assets/logo.png')} style={styles.logo} />
        <Text style={styles.headerText}>ArtBox</Text>
        <TouchableOpacity style={styles.upgradeButton} onPress={() => {props.navigation.navigate('Opening') }}>
        <GradientText
                text={`Upgrade`}
                style={styles.upgradeButtonText}
            />
        </TouchableOpacity>
      </View>
      <View style={styles.promptContainer}>
        <Text  style={styles.input1}>Enter Prompt</Text>
        <TextInput
          style={styles.input}
          placeholder="Type here a detailed description of what  you want to see in your artwork"
          placeholderTextColor="#888"
        />
       
      </View>
      <View style={styles.optionsContainer}>


        <TouchableOpacity style={styles.optionButton}>

          <Text style={styles.optionText}>Advance</Text>
          <Icon name="add-circle-outline" size={20} color="#fff" style={styles.optionIcon} />

        </TouchableOpacity>
      </View>
      <View style={styles.createButtonContainer}>
      <TouchableOpacity style={styles.createButton}>
        <GradientText
                text={`Create`}
                style={styles.buttonText}
            />
        </TouchableOpacity>
      </View>
      <View style={styles.bottomNav}>
        <TouchableOpacity style={styles.navButton}>
          <Icon name="add-circle-outline" size={30} color="#fff" />
          <Text style={styles.navText}>Create Art</Text>
        </TouchableOpacity>
       
        <TouchableOpacity style={styles.navButton}>
          <Icon name="person-outline" size={30} color="#fff" />
          <Text style={styles.navText}>Profile</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    padding: 16,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between', 
    marginBottom: 20,
    marginTop: '20%',
  },

  headerText: {
    color: '#fff',
    fontSize: 20,
    marginLeft: 10,  
  },
  promptContainer: {
    padding: 16,
    borderRadius: 30,
    marginBottom: 20,
    borderWidth: 1,
    borderColor: '#608cfb',
    height:'26%'
  },
  input: {
    color: '#fff',
    fontSize: 16,
  },
  input1: {
    color: '#fff',
    fontSize: 20,
  },
  
  optionsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 50,
    marginTop:"20%"

  },
  optionButton: {
    flex: 1,
    backgroundColor: '#333',
    padding: 15,
    margin: 5,
    borderRadius: 20,
    alignItems: 'center',
    flexDirection: 'row',
    marginBottom: 50,

  },
  optionText: {
    color: '#fff',
    fontSize: 25,
    marginLeft: '30%',

  },
  optionIcon: {
    height:'100%',
    marginLeft: 10,
    marginTop: 10,

  },
  createButtonContainer: {
    marginBottom: 20,
  },
  createButton:{
    backgroundColor: 'blue',
    padding: 15,
    borderRadius: 25,
    alignItems: 'center',
    width: '100%',
    marginVertical: 25,

  },
  buttonText: {
    fontSize: 30,
    color: 'white',
    fontWeight: 'bold',
    
  },
  bottomNav: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#222',
    paddingVertical: 15,
    borderRadius: 50,
    position: 'absolute',
    bottom: 30,
    width: '100%',
    marginLeft:'5%'
  },
  navButton: {
    alignItems: 'center',
  },
  navText: {
    color: '#fff',
    marginTop: 5,
  },
  logo: {
    width: 40,   
    height: 40,  
    resizeMode: 'contain', 
  },
  upgradeButton: {
    borderWidth: 1,
    borderColor: '#608cfb',
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 50,
  },
  upgradeButtonText: {
    color: 'white',
    fontSize: 16,
  },
});

export default Home;



