import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView, ImageBackground} from 'react-native';

export default function App() {
  return (
    <ImageBackground 
      source={require('./assets/bg-image.png')}
      style={{flex: 1}}>

        <View>
        {/* Top Section


        Bottom Section */}

        </View>
      </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
