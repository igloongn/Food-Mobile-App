import { StatusBar as ESB } from 'expo-status-bar';
import { StyleSheet, Text, View, StatusBar } from 'react-native';
import { FoodApp } from './src/Pages/FoodApp';


console.log(StatusBar.currentHeight);
export default function App() {
  return (
    <>
    <View style={styles.container}>
      <FoodApp />
    </View>
    {/* <StatusBar style='auto' /> */}
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: StatusBar.currentHeight,
    flex: 1,
    backgroundColor: '#190b20',
    // backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
