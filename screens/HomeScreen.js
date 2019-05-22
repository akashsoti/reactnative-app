import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { WebBrowser } from 'expo';
import { MonoText } from '../components/StyledText';

export default class HomeScreen extends React.Component {
  static navigationOptions = {
    title: 'Home',
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.containerCol}>
          <Image source={require('../assets/images/logo.png')} style={styles.logo} />
          <Text style={styles.header}>
            Loyalty Program
          </Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  containerCol: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    justifyContent: 'center', 
    alignItems: 'center',
    paddingTop: 20,
    paddingBottom: 20,
  },
  container: {
    height: 10,
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    fontSize: 24,
    paddingLeft: 20,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  loyaltyPoint: {
    fontSize: 16,
  },
  logo: {
    width: 50,
    height: 50,
  }
});
