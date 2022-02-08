import { StyleSheet, View, Text, Button, ImageBackground } from 'react-native';

export default function Menu({ navigation }) {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('../assets/img/bannerimg.jpg')}
        resizeMode='cover' style={styles.backgroundImage}>
      <Text style={styles.homeTitle}></Text>

      <View style={styles.citySetContainer}>
        <View style={styles.buttonContainer}>
          {/* Calgary button here */}
          <Button 
          title='Order'
          onPress={() => navigation.navigate('Menu')}
          />
        </View>
      </View>
    </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
    flexGrow: 1
  },

  buttonContainer: {
    margin: 15,
  },

  /* background image style to go here */
  
  backgroundImage: {
    flex: 1,
    justifyContent: "center"
  },
});