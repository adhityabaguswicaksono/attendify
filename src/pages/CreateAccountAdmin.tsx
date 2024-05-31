import {
	IonPage,
	IonHeader,
	IonToolbar,
	IonButtons,
	IonBackButton,
	IonTitle,
	IonContent,
	IonText,
	IonItem,
	IonItemDivider,
	IonItemGroup,
	IonLabel,
	IonRouterLink,
	IonIcon,
	IonButton,
	IonCard,
	IonCardContent,
	IonInput,
	IonList,
	IonSelect,
	IonSelectOption,
	IonTextarea,
} from '@ionic/react';
import {
	createUserWithEmailAndPassword,
	signOut,
	updateProfile,
} from 'firebase/auth';
import { arrowUpRightBoxOutline, linkOutline, send } from 'ionicons/icons';
import { auth, db } from '../utils/firebase';
import { useRef, useState } from 'react';
import { doc, setDoc } from 'firebase/firestore';
import { useHistory } from 'react-router';

export const CreateAccountAdmin: React.FC = () => {
	// const emailRef = useRef<HTMLIonInputElement>(null);
	// const passwordRef = useRef<HTMLIonInputElement>(null);
	const [nama, setNama] = useState('');
	const [divisi, setDivisi] = useState('');
	const [posisi, setPosisi] = useState('');
	const [telepon, setTelepon] = useState('');
	const [surel, setSurel] = useState('');
	const [alamat, setAlamat] = useState('');
	const [role, setRole] = useState('');
	const [sandi, setSandi] = useState(generatePassword());
	const history = useHistory();

	const createUser = async (email: any, password: any) => {
		if (
			nama &&
			divisi &&
			posisi &&
			telepon &&
			surel &&
			alamat &&
			sandi &&
			role
		) {
			await setDoc(
				doc(db, 'Universitas Multimedia Nusantara', 'User', 'User', email),
				{
					nama: nama,
					divisi: divisi,
					posisi: posisi,
					telepon: telepon,
					alamat: alamat,
					role: role,
					surel: surel,
				}
			);

			const user = await createUserWithEmailAndPassword(auth, email, password);
			updateProfile(user.user, { displayName: nama });
			signOut(auth);

			history.goBack();
		} else {
			console.log('Gagal');
			return;
		}
	};

	function generatePassword(): string {
		const lowercase = 'abcdefghijklmnopqrstuvwxyz';
		const uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
		const numbers = '0123456789';
		const specialCharacters = '!@#$%^&*()_+~`|}{[]:;?><,./-=';

		const allCharacters = lowercase + uppercase + numbers + specialCharacters;
		const passwordLength = 12;

		let password = '';

		// Ensure at least one character from each set is included
		password += lowercase[Math.floor(Math.random() * lowercase.length)];
		password += uppercase[Math.floor(Math.random() * uppercase.length)];
		password += numbers[Math.floor(Math.random() * numbers.length)];
		password +=
			specialCharacters[Math.floor(Math.random() * specialCharacters.length)];

		// Fill the rest of the password length
		for (let i = password.length; i < passwordLength; i++) {
			const randomIndex = Math.floor(Math.random() * allCharacters.length);
			password += allCharacters[randomIndex];
		}

		// Shuffle the password to ensure randomness
		password = password
			.split('')
			.sort(() => 0.5 - Math.random())
			.join('');

		return password;
	}

	// Example usage:
	// console.log(generatePassword());

	return (
		<IonPage>
			<IonHeader>
				<IonToolbar
					color="attendify"
					style={{
						color: 'white',
					}}>
					<IonButtons slot="start">
						<IonBackButton></IonBackButton>
					</IonButtons>
					<IonTitle>Buat Akun Baru</IonTitle>
				</IonToolbar>
			</IonHeader>
			<IonContent className="ion-padding">
				<IonText color="attendify">
					<h1
						style={{
							fontSize: '2rem',
							fontWeight: '700',
							marginBottom: '-0.5rem',
						}}>
						Cie... Ada Karyawan Baru, nih!!!
					</h1>
					<p>Yuk, langsung gas aja bikin akunnya...</p>
				</IonText>

				<IonCard>
					<IonCardContent>
						<IonList>
							<IonItem>
								<IonInput
									color="attendify"
									type="text"
									label="Nama Lengkap"
									labelPlacement="stacked"
									placeholder="John Doe"
									onIonInput={(e: any) => {
										setNama(e.target.value);
									}}></IonInput>
							</IonItem>
							<IonItem>
								<IonInput
									color="attendify"
									type="text"
									label="Divisi"
									labelPlacement="stacked"
									placeholder="Information Technology"
									onIonInput={(e: any) => {
										setDivisi(e.target.value);
									}}></IonInput>
							</IonItem>
							<IonItem>
								<IonInput
									color="attendify"
									type="text"
									label="Posisi"
									labelPlacement="stacked"
									placeholder="Front End Website Developer"
									onIonInput={(e: any) => {
										setPosisi(e.target.value);
									}}></IonInput>
							</IonItem>
							<IonItem>
								<IonInput
									color="attendify"
									type="tel"
									label="Nomor Telepon"
									labelPlacement="stacked"
									placeholder="0987654321"
									onIonInput={(e: any) => {
										setTelepon(e.target.value);
									}}></IonInput>
							</IonItem>
							<IonItem>
								<IonInput
									color="attendify"
									type="email"
									label="Alamat Surel"
									labelPlacement="stacked"
									placeholder="john.doe@mail.com"
									onIonInput={(e: any) => {
										setSurel(e.target.value);
									}}></IonInput>
							</IonItem>
							<IonItem>
								<IonInput
									color="attendify"
									type="text"
									label="Kata Sandi"
									labelPlacement="stacked"
									placeholder="••••••••••"
									value={sandi}
									disabled
									// onIonInput={(e: any) => {
									// 	setSandi(generatePassword());
									// }}
								></IonInput>
							</IonItem>
							<IonItem>
								<IonTextarea
									color="attendify"
									label="Alamat"
									labelPlacement="stacked"
									onIonInput={(e: any) => {
										setAlamat(e.target.value);
									}}></IonTextarea>
							</IonItem>
							<IonItem>
								<IonSelect
									color="attendify"
									label="Peran Akun"
									placeholder="Admin / User"
									labelPlacement="stacked"
									onIonChange={(e: any) => {
										setRole(e.target.value);
									}}>
									{['Admin', 'User'].map((value) => (
										<IonSelectOption
											key={value}
											color="attendify"
											value={value}>
											{value}
										</IonSelectOption>
									))}
								</IonSelect>
							</IonItem>
						</IonList>
					</IonCardContent>
				</IonCard>

				<IonButton
					color="attendify"
					className="ion-text-center"
					style={{
						width: '100%',
					}}
					onClick={() => {
						createUser(surel, sandi);
					}}>
					<IonIcon
						icon={send}
						style={{
							marginRight: '0.5rem',
						}}
					/>
					Kirim
				</IonButton>
			</IonContent>
		</IonPage>
	);
};
