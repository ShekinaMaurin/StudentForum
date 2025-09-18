import { StyleSheet, Text, Pressable, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useRouter } from 'expo-router';

export default function LandingPage() {
  const router = useRouter();

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.logo}>StudentForums</Text>
      <Text style={styles.tagline}>
        Connect, share, and learn with fellow students
      </Text>

      <Pressable style={styles.button} onPress={() => router.push('/signup')}>
        <Text style={styles.buttonText}>Get Started</Text>
      </Pressable>

      <Pressable onPress={() => router.push('/login')}>
        <Text style={styles.linkText}>
          Already have an account? <Text style={styles.highlight}>Log In</Text>
        </Text>
      </Pressable>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    justifyContent: 'center', 
    alignItems: 'center', 
    backgroundColor: '#f9f9f9' // plain background
  },
  logo: { 
    fontSize: 42, 
    fontWeight: '900', 
    color: '#333', 
    marginBottom: 10, 
    textAlign: 'center', 
    letterSpacing: 2 
  },
  tagline: { 
    fontSize: 16, 
    color: '#555', 
    marginBottom: 40, 
    textAlign: 'center' 
  },
  button: { 
    backgroundColor: '#21cc8d', 
    paddingVertical: 14, 
    paddingHorizontal: 50, 
    borderRadius: 30, 
    marginBottom: 20 
  },
  buttonText: { 
    color: '#fff', 
    fontWeight: '700', 
    fontSize: 18 
  },
  linkText: { 
    color: '#333', 
    textAlign: 'center', 
    fontSize: 14 
  },
  highlight: { 
    color: '#21cc8d', 
    fontWeight: '700' 
  },
});
