// ** React native import
import { Text, View, StyleSheet, Button, FlatList } from 'react-native';

// ** React imports
import { FC, useEffect, useState } from 'react';
import { User, useUser } from '../context/User';
import UserCard from '../components/UserCard';

interface HomeScreenProps {}

const HomeScreen: FC<HomeScreenProps> = () => {
  const { disconnect } = useUser();
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((res) => res.json())
      .then((data: User[]) => setUsers(data))
      .catch((e: Error) => console.error(e));
  }, []);

  const deleteUser = (id: number) => {
    setUsers((old) => old.filter((u) => u.id !== id));
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        Welcome admin{' '}
        <Button title="deconnexion" onPress={() => disconnect()} />
      </Text>
      <FlatList
        data={users}
        renderItem={({ item }) => (
          <UserCard user={item} deleteUser={deleteUser} />
        )}
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
  text: {
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 24,
    fontWeight: 'bold',
  },
});
