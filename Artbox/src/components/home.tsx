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
const Home = () => {
  return (
    <View style={styles.container}>
      <LinearGradient
                colors={['black', '#302b63', '#302b63', 'black', 'black', 'black']}
                style={StyleSheet.absoluteFill}
                start={{ x: 0.5, y: 0 }}
                end={{ x: 0.5, y: 1 }}
            />
      <View style={styles.header}>
        <Image source={require('../../assets/logo.png')} style={styles.logo} />
        <Text style={styles.headerText}>ArtBox</Text>
        <TouchableOpacity style={styles.upgradeButton}>
          <Text style={styles.upgradeButtonText}>Upgrade</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.promptContainer}>
        <TextInput
          style={styles.input}
          placeholder="Type here a detailed description of what you want to see in your artwork"
          placeholderTextColor="#888"
        />
        <TouchableOpacity style={styles.surpriseMeButton}>
          <Text style={styles.surpriseMeText}>Surprise me</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.optionsContainer}>
        <TouchableOpacity style={styles.optionButton}>
          <Text style={styles.optionText}>Style</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.optionButton}>
          <Text style={styles.optionText}>Stable Diff.</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.optionButton}>
          <Text style={styles.optionText}>Advance</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.createButtonContainer}>
        <Button title="Create" onPress={() => {}} />
      </View>
      <View style={styles.bottomNav}>
        <TouchableOpacity style={styles.navButton}>
          <Icon name="add-circle-outline" size={30} color="#fff" />
          <Text style={styles.navText}>Create Art</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navButton}>
          <Icon name="storefront-outline" size={30} color="#fff" />
          <Text style={styles.navText}>AI Store</Text>
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
    backgroundColor: '#111',
    padding: 16,
    borderRadius: 10,
    marginBottom: 20,
  },
  input: {
    color: '#fff',
    fontSize: 16,
  },
  surpriseMeButton: {
    marginTop: 10,
    alignSelf: 'flex-start',
    backgroundColor: '#333',
    padding: 10,
    borderRadius: 5,
  },
  surpriseMeText: {
    color: '#fff',
  },
  optionsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  optionButton: {
    flex: 1,
    backgroundColor: '#333',
    padding: 15,
    margin: 5,
    borderRadius: 10,
    alignItems: 'center',
  },
  optionText: {
    color: '#fff',
  },
  createButtonContainer: {
    marginBottom: 20,
  },
  bottomNav: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#222',
    paddingVertical: 10,
    borderRadius: 10,
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
    borderRadius: 5,
  },
  upgradeButtonText: {
    color: 'white',
    fontSize: 16,
  },
});

export default Home;
