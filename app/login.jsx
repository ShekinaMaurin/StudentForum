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
import { signInWithEmailAndPassword } from 'firebase/auth'
import { auth } from '../FirebaseConfig'

const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [rememberMe, setRememberMe] = useState(false)
  const router = useRouter()

  const handleLogin = async () => {
    Keyboard.dismiss()
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password)
      console.log("User logged in:", userCredential.user)
      router.push('/home')
    } catch (error) {
      console.error(error)
      Alert.alert('Login Failed', error.message)
    }
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.title}>Sign In</Text>

        <TextInput
          style={styles.input}
          placeholder="your.email@university.edu"
          placeholderTextColor="#888"
          value={email}
          onChangeText={setEmail}
          autoCapitalize="none"
          keyboardType="email-address"
        />

        <TextInput
          style={styles.input}
          placeholder="Password"
          placeholderTextColor="#888"
          secureTextEntry
          value={password}
          onChangeText={setPassword}
        />

        <View style={styles.row}>
          <Pressable onPress={() => setRememberMe(!rememberMe)} style={styles.checkboxRow}>
            <View style={[styles.checkbox, rememberMe && styles.checked]} />
            <Text style={styles.checkboxLabel}>Remember me</Text>
          </Pressable>

          <Pressable onPress={() => Alert.alert("Forgot Password", "Reset flow goes here")}>
            <Text style={styles.forgot}>Forgot password?</Text>
          </Pressable>
        </View>

        <Pressable onPress={handleLogin} style={styles.button}>
          <Text style={styles.buttonText}>Sign In</Text>
        </Pressable>

        <Pressable onPress={() => router.push('/signup')}>
          <Text style={styles.footerText}>
            Don’t have an account? <Text style={styles.link}>Sign up</Text>
          </Text>
        </Pressable>
      </View>
    </SafeAreaView>
  )
}

export default Login

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f6f7',
  },
  card: {
    width: '90%',
    maxWidth: 400,
    padding: 20,
    borderRadius: 12,
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 5 },
    elevation: 5,
  },
  title: {
    fontSize: 20,
    fontWeight: '700',
    marginBottom: 20,
    textAlign: 'center',
    color: '#333',
  },
  input: {
    width: '100%',
    backgroundColor: '#fff',
    color: '#000',
    padding: 12,
    borderRadius: 6,
    marginVertical: 8,
    borderWidth: 1,
    borderColor: '#ddd',
    fontSize: 14,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 10,
  },
  checkboxRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  checkbox: {
    width: 18,
    height: 18,
    borderRadius: 4,
    borderWidth: 1,
    borderColor: '#888',
    marginRight: 6,
  },
  checked: {
    backgroundColor: '#007bff',
    borderColor: '#007bff',
  },
  checkboxLabel: {
    fontSize: 13,
    color: '#333',
  },
  forgot: {
    fontSize: 13,
    color: '#007bff',
  },
  button: {
    marginTop: 15,
    paddingVertical: 12,
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
    color: '#333',
  },
  link: {
    color: '#007bff',
    fontWeight: '600',
  },
})
