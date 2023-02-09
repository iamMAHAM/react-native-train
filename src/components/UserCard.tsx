import { FC } from 'react';
import {
  Image,
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
} from 'react-native';
import { User, useUser } from '../context/User';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

interface UserCardProps {
  user: User;
  deleteUser: (id: number) => void;
}

const UserCard: FC<UserCardProps> = ({ user, deleteUser }) => {
  const { id, name, email } = user;
  const {} = useUser();
  return (
    <View style={styles.card}>
      <Text>
        {name} userId: {id}
      </Text>
      <Text>{email}</Text>
      <Image source={{ uri: 'https://source.unsplash.com' }} />
      <TouchableHighlight
        style={styles.topRight}
        onPress={() => deleteUser(id)}
      >
        <MaterialCommunityIcons
          name="delete"
          color={'red'}
          style={styles.icons}
        />
      </TouchableHighlight>
    </View>
  );
};

export default UserCard;

const styles = StyleSheet.create({
  card: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 200,
    width: '100%',
    borderBottomWidth: 0.5,
    borderColor: 'red',
    position: 'relative',
  },
  button: {
    color: 'red',
  },
  topRight: {
    position: 'absolute',
    top: 0,
    right: 0,
  },
  icons: {
    fontSize: 24,
  },
  image: {
    width: 100,
    height: 100,
  },
});
