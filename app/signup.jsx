import { useState } from 'react'
import { 
  StyleSheet, 
  Text, 
  TextInput, 
  Pressable, 
  Keyboard, 
  View, 
  Alert 
} from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useRouter } from 'expo-router'
import { createUserWithEmailAndPassword } from "firebase/auth"
import { auth } from "../FirebaseConfig"

const Signup = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const router = useRouter()

  const handleSignup = async () => {
    Keyboard.dismiss()
    if (password !== confirmPassword) {
      Alert.alert('Error', 'Passwords do not match!')
      return
    }

    try {
      await createUserWithEmailAndPassword(auth, email, password)
      Alert.alert("Success", "Account created successfully! Please log in.")
      router.push('/login')
    } catch (error) {
      console.log(error.message)
      Alert.alert('Signup Failed', error.message)
    }
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.title}>Sign Up</Text>

        <TextInput
          style={styles.input}
          placeholder="your.email@university.edu"
          placeholderTextColor="#999"
          value={email}
          onChangeText={setEmail}
          autoCapitalize="none"
          keyboardType="email-address"
        />

        <TextInput
          style={styles.input}
          placeholder="Password"
          placeholderTextColor="#999"
          secureTextEntry
          value={password}
          onChangeText={setPassword}
        />

        <TextInput
          style={styles.input}
          placeholder="Confirm Password"
          placeholderTextColor="#999"
          secureTextEntry
          value={confirmPassword}
          onChangeText={setConfirmPassword}
        />

        <Pressable onPress={handleSignup} style={styles.button}>
          <Text style={styles.buttonText}>Sign Up</Text>
        </Pressable>

        <Pressable onPress={() => router.push('/login')}>
          <Text style={styles.footerText}>
            Already have an account? <Text style={styles.link}>Log In</Text>
          </Text>
        </Pressable>
      </View>
    </SafeAreaView>
  )
}

export default Signup

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f9fafb', // light neutral background
    padding: 16,
  },
  card: {
    width: '100%',
    maxWidth: 400,
    padding: 24,
    borderRadius: 10,
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 6,
    shadowOffset: { width: 0, height: 3 },
    elevation: 4,
  },
  title: {
    fontSize: 22,
    fontWeight: '700',
    marginBottom: 20,
    textAlign: 'center',
    color: '#222',
  },
  input: {
    width: '100%',
    backgroundColor: '#fff',
    color: '#000',
    padding: 12,
    borderRadius: 6,
    marginVertical: 8,
    borderWidth: 1,
    borderColor: '#ccc',
    fontSize: 14,
  },
  button: {
    marginTop: 20,
    paddingVertical: 14,
    backgroundColor: '#007bff',
    borderRadius: 6,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontWeight: '600',
    fontSize: 15,
  },
  footerText: {
    marginTop: 15,
    textAlign: 'center',
    fontSize: 13,
    color: '#444',
  },
  link: {
    color: '#007bff',
    fontWeight: '600',
  },
})
