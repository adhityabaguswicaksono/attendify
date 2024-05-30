import { auth } from "../config/firebase"; // Mengimpor objek 'auth' dari konfigurasi Firebase
import { IonButton, IonInput } from "@ionic/react"; // Mengimpor komponen-komponen yang diperlukan dari Ionic
import { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth"; // Mengimpor FirebaseError
import { FormEvent } from "react";

const Tab4: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState<string | null>(null);

  const onLogin = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
      console.log(user);
    } catch (error: any) {
      const errorMessage = error.message || 'An unknown error occurred';
      console.error('Error:', errorMessage);
      setError(errorMessage);
    }
  };

  return (
    <form onSubmit={onLogin}>
      <IonInput
        type="email"
        placeholder="Email"
        value={email}
        onIonChange={e => setEmail(e.detail.value!)}
        required
      />
      <IonInput
        type="password"
        placeholder="Password"
        value={password}
        onIonChange={e => setPassword(e.detail.value!)}
        required
      />
      <IonButton type="submit">Sign In</IonButton>
      {error && <p style={{color: 'red'}}>{error}</p>}
    </form>
  );
};

export default Tab4;
