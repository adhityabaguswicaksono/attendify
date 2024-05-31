import {
	IonButton,
	IonCard,
	IonCardContent,
	IonCardHeader,
	IonCardSubtitle,
	IonCardTitle,
	IonContent,
	IonHeader,
	IonImg,
	IonInput,
	IonInputPasswordToggle,
	IonItem,
	IonItemGroup,
	IonPage,
	IonSelect,
	IonSelectOption,
} from '@ionic/react';
import { Auth, signInWithEmailAndPassword } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { auth, db } from '../utils/firebase';
import { collection, doc, getDoc, getDocs } from 'firebase/firestore';
import { useHistory } from 'react-router';

const Login: React.FC = () => {
	const history = useHistory();
	const [surel, setSurel] = useState('');
	const [sandi, setSandi] = useState('');
	const [perusahaan, setPerusahaan] = useState('');
	const [listCompany, setListCompany] = useState<any>([]);
	const user = auth.currentUser;

	const login = async (email: string, password: string, company: string) => {
		if (email && password && company) {
			const querySnapshot = await getDoc(
				doc(db, company, 'User', 'User', email)
			);

			console.info(querySnapshot.exists());

			if (querySnapshot.exists()) {
				signInWithEmailAndPassword(auth, email, password)
					.then(async (userCredential) => {
						// Signed in
						const user = userCredential.user;
						console.info(user);

						const querySnapshot = await getDoc(
							doc(
								db,
								'Universitas Multimedia Nusantara',
								'User',
								'User',
								String(user.email)
							)
						);

						localStorage.setItem(
							'profile',
							JSON.stringify(querySnapshot.data())
						);

						console.info(querySnapshot.data().role);

						if (querySnapshot.data().role === 'User') {
							history.push('/dashboard');
						} else if (querySnapshot.data().role === 'Admin') {
							history.push('/admin-dashboard');
						}
					})
					.catch((error) => {
						const errorCode = error.code;
						const errorMessage = error.message;
						console.info(errorMessage);
					});
			} else {
				throw Error('Ada yang salah');
			}
		} else {
			throw Error('Isi dulu...');
		}
	};

	const getCompany = async () => {
		const querySnapshot = await getDocs(collection(db, 'Perusahaan'));
		const filteredData = querySnapshot.docs.map((doc) => ({
			...doc.data(),
			id: doc.id,
		}));

		setListCompany(filteredData);
	};

	useEffect(() => {
		const authentication = auth.onAuthStateChanged((user) => {
			if (user) {
				if (
					JSON.parse(String(localStorage.getItem('profile'))).role === 'user'
				) {
					history.push('/dashboard');
				} else if (
					JSON.parse(String(localStorage.getItem('profile'))).role === 'admin'
				) {
					history.push('/admin-dashboard');
				}
			} else {
			}
		});

		getCompany();
		return authentication;
	}, []);

	return (
		<IonPage>
			<IonContent fullscreen>
				<IonCard
					style={{
						position: 'absolute',
						left: 0,
						right: 0,
						top: '50%',
						transform: 'translateY(-50%)',
						margin: '0 auto',
						maxWidth: '500px',
					}}>
					<IonCardContent
						style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
						<IonImg
							src="/assets/images/attendify-logo-color.png"
							alt="The Wisconsin State Capitol building in Madison, WI at night"
							style={{
								maxWidth: '350px',
								margin: '0 auto',
							}}
							class="ion-padding"></IonImg>

						<IonItemGroup>
							<IonItem>
								<IonInput
									color="attendify"
									label="Alamat Surel"
									labelPlacement="stacked"
									type="email"
									placeholder="john.doe@mail.com"
									onIonInput={(e: any) => {
										setSurel(e.target.value);
									}}></IonInput>
							</IonItem>
							<IonItem>
								<IonInput
									color="attendify"
									label="Kata Sandi"
									labelPlacement="stacked"
									type="password"
									placeholder="••••••••••"
									onIonInput={(e: any) => {
										setSandi(e.target.value);
									}}>
									<IonInputPasswordToggle
										slot="end"
										color="attendify"></IonInputPasswordToggle>
								</IonInput>
							</IonItem>
							<IonItem>
								<IonSelect
									color="attendify"
									label="Nama Perusahaan"
									labelPlacement="stacked"
									defaultValue="Pilih Perusahaan"
									onIonChange={(e: any) => {
										setPerusahaan(e.target.value);
									}}>
									{listCompany.map((value: any, index: any) => (
										<IonSelectOption
											key={'Perusahaan' + index}
											value={value.id}>
											{value.id}
										</IonSelectOption>
									))}
									{/* <IonSelectOption value="apple">Apple</IonSelectOption>
									<IonSelectOption value="banana">Banana</IonSelectOption>
									<IonSelectOption value="orange">Orange</IonSelectOption> */}
								</IonSelect>
							</IonItem>
						</IonItemGroup>

						<IonButton
							color="attendify"
							onClick={() => {
								login(surel, sandi, perusahaan);
							}}>
							Masuk
						</IonButton>
					</IonCardContent>
				</IonCard>
			</IonContent>
		</IonPage>
	);
};

export default Login;
function onAuthStateChanged(auth: Auth, arg1: (user: any) => void) {
	throw new Error('Function not implemented.');
}
