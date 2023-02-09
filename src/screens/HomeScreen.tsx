// ** React native import
import { Text, View, StyleSheet, Button } from 'react-native';

// ** React imports
import { FC } from 'react';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RouteParams } from '../navigation/RootNavigator';
import { useUser } from '../context/User';

interface HomeScreenProps {}

const HomeScreen: FC<HomeScreenProps> = () => {
  const { navigate } = useNavigation<NativeStackNavigationProp<RouteParams>>();
  const { disconnect } = useUser();

  return (
    <View>
      <Text>this is a homePageText</Text>
      <Button
        title="Sign Up"
        onPress={() => {
          disconnect();
        }}
      />
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
