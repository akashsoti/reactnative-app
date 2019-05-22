import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Button,
  Alert,
} from 'react-native';
import { WebBrowser, BarCodeScanner, Constants, Permissions, } from 'expo';
import { MonoText } from '../components/StyledText';

export default class HomeScreen extends React.Component {
  static navigationOptions = {
    title: 'Home',
  };

  _onPressButton() {
    Alert.alert('You tapped the button!')
  }

  state = {
    hasCameraPermission: null,
    scanned: false,
  };

  async componentDidMount() {
    const { status } = await Permissions.askAsync(Permissions.CAMERA);
    this.setState({ hasCameraPermission: status === 'granted' });
  }

  render() {
    const { hasCameraPermission, scanned } = this.state;

    if (hasCameraPermission === null) {
      return <Text>Requesting for camera permission</Text>;
    }
    if (hasCameraPermission === false) {
      return <Text>No access to camera</Text>;
    }

    return (
      <View style={styles.container}>
        <View style={styles.containerCol}>
          <Image source={require('../assets/images/logo.png')} style={styles.logo} />
          <Text style={styles.header}>
            Loyalty Program
          </Text>
        </View>
        <Button
          onPress={this._onPressButton}
          title="Learn More"
          color="#841584"
          accessibilityLabel="Learn more about this purple button"
        />
        <View style={{flex: 1, justifyContent: 'flex-end',}}>
          <BarCodeScanner onBarCodeScanned={scanned ? undefined : this.handleBarCodeScanned} style={StyleSheet.absoluteFillObject}/>
          {scanned && (<Button title={'Tap to Scan Again'} onPress={() => this.setState({ scanned: false })}/>)}
        </View>
      </View>
      
    );
  }

  handleBarCodeScanned = ({ type, data }) => {
    this.setState({ scanned: true });
    alert(`Bar code with type ${type} and data ${data} has been scanned!`);
  };

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
