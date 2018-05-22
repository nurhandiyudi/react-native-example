import React from 'react';
import { Button, Text, FormLabel, FormInput, FormValidationMessage, Header, Card, Tile, Icon, ListItem } from 'react-native-elements';
import { StyleSheet, View, Image, TextInput } from 'react-native';
import {  createStackNavigator } from 'react-navigation';

class SigninScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {email: '', password: ''};
  }
  
  render() {
    let pic = {
      uri: 'https://user-images.githubusercontent.com/5962998/37248835-ce3dad4a-24b1-11e8-9c4b-b058c5a5e1e9.png'
    };
    return (
      <View style={styles.container}>
       <Image source={pic} style={{width: 220, height: 50, marginBottom: 100, marginRight: 75,  marginLeft: 75,}}/>
        <FormLabel>Email</FormLabel>
        <FormInput/>
        <FormLabel>Password</FormLabel>
        <FormInput/>
        <Button 
          medium
          title='Login'
          onPress={() => this.props.navigation.navigate('Home')} /> 
        <Text h6 style={{marginTop: 50, marginRight: 90,  marginLeft: 90 ,}}>Belum Punya akun? <Text h6 onPress={() => this.props.navigation.navigate('Signup')} style={{color: 'red',}}>Daftar Disini</Text></Text>
      </View>
    );
  }
}
class SignupScreen extends React.Component {
  render() {
    let pic = {
      uri: 'https://user-images.githubusercontent.com/5962998/37248835-ce3dad4a-24b1-11e8-9c4b-b058c5a5e1e9.png'
    };
    return (
      <View style={styles.container}>
       <Image source={pic} style={{width: 220, height: 50, marginBottom: 25, marginRight: 75,  marginLeft: 75,}}/>
        <FormLabel>Nama Lengkap</FormLabel>
        <FormInput/>
        <FormLabel>Email</FormLabel>
        <FormInput/>
        <FormLabel>Nomor HP</FormLabel>
        <FormInput/>
        <FormLabel>Password</FormLabel>
        <FormInput/>
        <FormLabel>Ulangi Password</FormLabel>
        <FormInput/>
        <Button 
          medium
          title='Sign Up' /> 
      </View>
    );
  }
}

class LogoTitle extends React.Component {
  render() {
    return (
      <Image
        source={require('./assets/splash.png')}
        style={{ width: 150, height: 35}}
      />
    );
  }
}

class HomeScreen extends React.Component {
  static navigationOptions = {
    headerTitle: <LogoTitle />,
  }
  render() {
    return (
      <View style={styles.dashboard}>
        <ListItem
          title='John Doe'
          subtitle='Rp. 70.000'
        />
        <View>
          <Image
            style={{width: 576, height: 200, marginTop: 0, marginBottom: 0}}
            source={{uri: 'https://user-images.githubusercontent.com/5962998/37248835-ce3dad4a-24b1-11e8-9c4b-b058c5a5e1e9.png'}}
          />
        </View>
        <View>
          {
            list.map((item, i) => (
              <ListItem
                key={i}
                title={item.name}
                leftAvatar={{ source: { uri: item.avatar_url } }}
              />
            ))
          }
        </View>
      </View>
    );
  }
}

const userdata = [
  {
    name: 'John Doe',
    saldo: 'Rp. 70.000',
  }
]
const list = [
  {
    name: 'Isi Pulsa',
    avatar_url: './assets/logobpjs.jpg'
  },
  {
    name: 'Paket Data',
    avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg'
  },
  {
    name: 'Token PLN',
    avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg'
  },
  {
    name: 'Tagihan PLN',
    avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg'
  },
  {
    name: 'BPJS',
    avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg'
  },
  {
    name: 'History',
    avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg'
  },
]

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    paddingTop: 50,
    flex: 1,
  },
  dashboard: {
    backgroundColor: '#fff',
    paddingTop: 0,
    paddingBottom: 0,
  },
   inputPassword: {
     marginTop: 20,
      height: 30,
      width : 300,
      borderColor: 'gray',
      borderWidth: 1
   }
});

const RootStack = createStackNavigator(
  {
    Home: {
      screen: HomeScreen,
    },
    Signin: {
      screen: SigninScreen,
    },
    Signup: {
      screen: SignupScreen,
    },
  },
  {
    initialRouteName: 'Home',
  }
);

export default class App extends React.Component {
  render() {
    return <RootStack />;
  }
}