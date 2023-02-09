// ** React native import
import { Text, View, StyleSheet } from 'react-native';

// ** React imports
import { FC } from 'react';

interface LandingScreen {}

const LandingScreen: FC<LandingScreen> = () => {
  return (
    <View style={styles.container}>
      <Text>this is a LandingScreen</Text>
    </View>
  );
};

export default LandingScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  navigation: {
    flex: 2,
  },
  body: {
    flex: 9,
    justifyContent: 'center',
    alignItems: 'center',
  },
  footer: {
    flex: 1,
    backgroundColor: 'cyan',
  },
});
