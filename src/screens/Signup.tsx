import { FC, useState } from 'react';
import { View, Text, StyleSheet, TextInput, Button } from 'react-native';
import { User, useUser } from '../context/User';

interface SignupProps {}

const Signup: FC<SignupProps> = () => {
  const [email, setEmail] = useState<string>('');
  const [message, setMessage] = useState<string>('');
  const { setUser } = useUser();

  const Login = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const data: User[] = await res.json();
    const user = data.find((u) => u.email === email);
    if (!user) {
      setMessage('adresse email incorrect');
      return;
    }
    setMessage('connexion success');
    setTimeout(() => setUser({ ...user }), 3000);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Signup</Text>
      <View style={{ marginHorizontal: 24 }}>
        <Text style={styles.fieldTitle}> Email</Text>
        <TextInput
          style={styles.textInput}
          value={email}
          onChangeText={(v) => setEmail(v)}
        />
        <Text style={{ color: 'red' }}>{message}</Text>
        <Button title="Connexion" onPress={() => Login()} />
      </View>
    </View>
  );
};

export default Signup;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    color: '#feabed',
    fontSize: 24,
  },
  fieldTitle: {},
  textInput: {
    height: 48,
    borderBottomWidth: 2,
    borderBottomColor: '#aefafd',
    marginBottom: 30,
  },
});
