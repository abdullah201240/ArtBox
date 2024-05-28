import React, { useState } from 'react';
import { StyleSheet, Text, View, ImageBackground, TouchableOpacity } from 'react-native';
import { CheckBox } from 'react-native-elements';
import Icon from 'react-native-vector-icons/Ionicons';
const Main = (props : any) => {
  const [selectedPlan, setSelectedPlan] = useState('Basic');

  const handleClose = () => {
    props.navigation.navigate('Signup')
  };

  return (
    <ImageBackground
      source={require('../../assets/main.jpeg')}
      style={styles.background}
      resizeMode="cover"
    >
      <View style={styles.overlay}>
        <TouchableOpacity style={styles.closeButton} onPress={handleClose}>
          <Icon name="close" size={40} color="white" />
        </TouchableOpacity>
        <View style={styles.centerContent}>
          <Text style={styles.title}>ArtBox</Text>
          <Text style={styles.subTitle}>Choose Your Membership Plan</Text>

          <View style={styles.featuresList}>
            <View style={styles.featureItem}>
              <View style={styles.checkmarkContainer}>
                <Text style={styles.checkmark}>✓</Text>
              </View>
              <Text style={styles.featureText}>Few Images, Very Less Storage</Text>
            </View>
            <View style={styles.featureItem}>
              <View style={styles.checkmarkContainer}>
                <Text style={styles.checkmark}>✓</Text>
              </View>
              <Text style={styles.featureText}>Good Images, Good Storage</Text>
            </View>
            <View style={styles.featureItem}>
              <View style={styles.checkmarkContainer}>
                <Text style={styles.checkmark}>✓</Text>
              </View>
              <Text style={styles.featureText}>More Images, More Storage</Text>
            </View>
          </View>

          <View style={styles.pricingContainer}>
            <View style={styles.pricingOption}>
              <CheckBox
                title="Basic - $9.99/month"
                checked={selectedPlan === 'Basic'}
                onPress={() => setSelectedPlan('Basic')}
                checkedColor="blue"
                containerStyle={styles.checkboxContainer}
                textStyle={styles.pricingText}
              />
            </View>
            <View style={styles.pricingOption}>
              <CheckBox
                title="Premium - $39.99/month"
                checked={selectedPlan === 'Premium'}
                onPress={() => setSelectedPlan('Premium')}
                checkedColor="blue"
                containerStyle={styles.checkboxContainer}
                textStyle={styles.pricingText}
              />
            </View>
            <View style={styles.pricingOption}>
              <CheckBox
                title="Pro - $69.99/month"
                checked={selectedPlan === 'Pro'}
                onPress={() => setSelectedPlan('Pro')}
                checkedColor="blue"
                containerStyle={styles.checkboxContainer}
                textStyle={styles.pricingText}
              />
            </View>
          </View>

          
        </View>
        <View style={styles.footer}>
        <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Start Your Free Trial</Text>
          </TouchableOpacity>
          <Text style={styles.footerText}>Terms • Privacy Policy • Restore</Text>
        </View>
      </View>
    </ImageBackground>
  );
}

export default Main;

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  overlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.6)', 
    padding: 20,
    width: '100%', 
  },
  closeButton: {
    position: 'absolute',
    top: 60,
    right: 20,
    zIndex: 1,

  },
  centerContent: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
  },
  title: {
    fontSize: 36,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
    paddingTop: '50%'
  },
  subTitle: {
    fontSize: 18,
    color: 'white',
    marginVertical: 10,
    textAlign: 'center',
  },
  featuresList: {
    marginVertical: 20,
    width: '80%', 
    justifyContent: 'center',
  },
  featureItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 5,
  },
  checkmarkContainer: {
    width: 24,
    height: 24,
    borderRadius: 12,
    backgroundColor: 'blue',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
  },
  checkmark: {
    color: 'white',
    fontSize: 16,
  },
  featureText: {
    fontSize: 16,
    color: 'white',
  },
  pricingContainer: {
    marginVertical: 20,
    width: '96%',
  },
  pricingOption: {
    backgroundColor: 'transparent',
    borderRadius: 30,
    marginVertical: 15,
    padding: 18,
    paddingLeft: 40,
    height: "15%",
    borderColor: 'blue', 
    borderWidth: 3, 
  },
  checkboxContainer: {
    backgroundColor: 'transparent',
    borderWidth: 0,
    margin: 0,
    padding: 0,
  },
  pricingText: {
    fontSize: 16,
    color: 'white',
  },
  button: {
    backgroundColor: 'blue',
    padding: 15,
    borderRadius: 25,
    alignItems: 'center',
    width: '100%',
    marginVertical: 25,
  },
  buttonText: {
    fontSize: 16,
    color: 'white',
    fontWeight: 'bold',
    
  },
  footer: {
    position: 'absolute',
    bottom: 40,
  },
  footerText: {
    fontSize: 14,
    color: 'white',
    textAlign: 'center',
  },
});
