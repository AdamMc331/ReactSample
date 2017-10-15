import React, { Component } from 'react';
import { StyleSheet, Text, TextInput, Button, Alert, View, Image, Platform, TouchableHighlight, TouchableOpacity, TouchableNativeFeedback, TouchableWithoutFeedback } from 'react-native';

//TODO: Default HelloWorld
// export default class App extends React.Component {
//   render() {
//     return (
//       <View style={styles.container}>
//         <Text>Hello, world!</Text>
//         <Text>Your friendly neighborhood stubborn Android dev here.</Text>
//       </View>
//     );
//   }
// }

//TODO: Image
// export default class App extends React.Component {
//   render() {
//     let pic = {
//       uri: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg'
//     };

//     return (
//       <Image source={pic} style={{width: 193, height: 110}}/>
//     );
//   }
// }

//TODO: Greeting
// class Greeting extends React.Component {
//   render() {
//     return (
//       <Text> Hello {this.props.name}!</Text>
//     );
//   }
// }

// export default class App extends React.Component {
//   render() {
//     return (
//       <View style={{alignItems: 'center'}}>
//         <Greeting name="Prince"/>
//         <Greeting name="Mark"/>
//         <Greeting name="Zade"/>
//         <Greeting name="React Bois"/>
//       </View>
//     );
//   }
// }

//TODO: Blink
// class Blink extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {showText: true};

//     // Toggle the state every second
//     setInterval(() => {
//       this.setState(previousState => {
//         return {showText: !previousState.showText };
//       });
//     }, 1000);
//   }

//   render() {
//     let display = this.state.showText ? this.props.text : " ";
//     return (
//       <Text>{display}</Text>
//     );
//   }
// }

// export default class App extends React.Component {
//   render() {
//     return (
//       <View>
//         <Blink text="I love to blink."/>
//         <Blink text="Yes blinking is so great."/>
//         <Blink text="Why did they ever take this out of HTML?"/>
//         <Blink text="Look at me, look at me, look at me!"/>
//       </View>
//     );
//   }
// }

//TODO: Styles
// export default class App extends React.Component {
//   render() {
//     return (
//       <View>
//         <Text style={styles.red}>just red</Text>
//         <Text style={styles.bigblue}>just bigblue</Text>
//         <Text style={[styles.bigblue, styles.red]}>bigblue, then red</Text>
//         <Text style={[styles.red, styles.bigblue]}>red, then bigblue</Text>
//       </View>
//     );
//   }
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   bigblue: {
//     color: 'blue',
//     fontWeight: 'bold',
//     fontSize: 30
//   },
//   red: {
//     color: 'red'
//   }
// });

//TODO: Height And Width
// export default class App extends React.Component {
//   render() {
//     return (
//       <View>
//         <View style={{width: 50, height: 50, backgroundColor: 'powderblue'}} />
//         <View style={{width: 100, height: 100, backgroundColor: 'skyblue'}} />
//         <View style={{width: 150, height: 150, backgroundColor: 'steelblue'}} />
//       </View>
//     );
//   }
// }

//TODO: Flex
// export default class App extends React.Component {
//   render() {
//     return (
//       <View style={{
//           flex: 1, 
//           flexDirection: 'column', 
//           justifyContent: "center",
//           alignItems: 'center'
//       }}>
//         <View style={{width: 50, height: 50, backgroundColor: 'powderblue'}} />
//         <View style={{width: 50, height: 50, backgroundColor: 'skyblue'}} />
//         <View style={{width: 50, height: 50, backgroundColor: 'steelblue'}} />
//       </View>
//     );
//   }
// }

//TODO: Text Input/Pizza Translator
// export default class App extends React.Component {
//   constructor(props) {
//     super(props)
//     this.state = {text: ''};
//   }

//   render() {
//     return (
//       <View style={{padding: 10}}>
//         <TextInput
//           style={{height: 40}}
//           placeholder="Type here to translate!"
//           onChangeText={(text) => this.setState({text})}
//         />
//         <Text style={{padding: 10, fontSize: 42}}>
//           {this.state.text.split(' ').map((word) => word && '🍕').join(' ')}
//         </Text>
//       </View>
//     );
//   }
// }

//TODO: Button Simple
// export default class App extends React.Component {
//   _onPressButton() {
//     Alert.alert("You tapped the button!")
//   }

//   render() {
//     return (
//       <View sytle={styles.container}>
//         <View style={styles.buttonContainer}>
//           <Button
//             onPress={this._onPressButton}
//             title="Press Me"
//           />
//         </View>
//         <View style={styles.buttonContainer}>
//           <Button
//             onPress={this._onPressButton}
//             title="Press Me"
//             color="#841584"
//           />
//         </View>
//         <View style={styles.alternativeLayoutButtonContainer}>
//           <Button
//             onPress={this._onPressButton}
//             title="This looks great!"
//           />
//           <Button
//             onPress={this._onPressButton}
//             title="OK!"
//             color="#841584"
//           />
//         </View>
//       </View>
//     );
//   }
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center'
//   },
//   buttonContainer: {
//     margin: 20
//   },
//   alternativeLayoutButtonContainer: {
//     margin: 20,
//     flexDirection: 'row',
//     justifyContent: 'space-between'
//   }
// })

//TODO: Custom Button
export default class App extends Component {
  _onPressButton() {
    Alert.alert("You tapped the button!")
  }

  _onLongPressButton() {
    Alert.alert("You long-pressed the button.")
  }

  render() {
    return (
      <View style={styles.container}>
        <TouchableHighlight onPress={this._onPressButton} underlayColor="white">
          <View style={styles.button}>
            <Text style={styles.buttonText}>TouchableHighlight</Text>
          </View>
        </TouchableHighlight>
        <TouchableOpacity onPress={this._onPressButton}>
          <View style={styles.button}>
            <Text style={styles.buttonText}>TouchableOpacity</Text>
          </View>
        </TouchableOpacity>
        <TouchableNativeFeedback 
            onPress={this._onPressButton}
            backgroundColor={Platform.OS === 'android' ? TouchableNativeFeedback.SelectableBackground() : ''}>
          <View style={styles.button}>
            <Text style={styles.buttonText}>TouchableNativeFeedback</Text>
          </View>
        </TouchableNativeFeedback>
        <TouchableWithoutFeedback
            onPress={this._onPressButton}>
          <View style={styles.button}>
            <Text style={styles.buttonText}>TouchableWithoutFeedback</Text>
          </View>
        </TouchableWithoutFeedback>
        <TouchableHighlight
            onPress={this._onPressButton}
            onLongPress={this._onLongPressButton}
            underlayColor="white">
          <View style={styles.button}>
            <Text style={styles.buttonText}>Touchable With Long Press</Text>
          </View>
        </TouchableHighlight>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  contianer: {
    paddingTop: 60,
    alignItems: 'center'
  },
  button: {
    marginBottom: 30,
    width: 260,
    alignItems: 'center',
    backgroundColor: '#2196F3'
  },
  buttonText: {
    padding: 20,
    color: 'white'
  }
})
