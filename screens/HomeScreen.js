import { StyleSheet, View, Text, Button, ImageBackground } from 'react-native';

export default function HomeScreen({ navigation }) {
  return (
      <View>
    <View style={styles.container}>
      <ImageBackground
        source={require('../assets/img/bannerimg.jpg')}
        resizeMode='cover' style={styles.backgroundImage}>
        <Text style={styles.homeTitle}>A family business dedicated to serving authentic and home-cooked Korean meals</Text>
        <View style={styles.buttonContainer}>
            {/* Calgary button here */}
            <Button 
            title='Order'
            onPress={() => navigation.navigate('Menu')}
            />
        </View>
      </ImageBackground>
      </View>
      
        
    
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
    flexGrow:1,
    width: '100%'
  },

  homeTitle: {
    width: '100vw',
    textAlign: 'center',
  },

  buttonContainer: {
    margin: 15,
  },

  /* background image style to go here */
  
  backgroundImage: {
    justifyContent: "center",
    flex: 1,
  },
});