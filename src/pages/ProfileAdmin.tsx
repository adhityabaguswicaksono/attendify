import {
	IonBackButton,
	IonButton,
	IonButtons,
	IonContent,
	IonHeader,
	IonImg,
	IonItem,
	IonPage,
	IonText,
	IonTitle,
	IonToolbar,
} from '@ionic/react';
import { signOut } from 'firebase/auth';
import React, { useState } from 'react';
import { auth } from '../utils/firebase';
import { useHistory } from 'react-router-dom';

export const ProfileAdmin: React.FC = () => {
	const history = useHistory();

	useState(() => {
		const authentication = auth.onAuthStateChanged(async (user) => {
			if (user) {
				// User is signed in, see docs for a list of available properties
				// https://firebase.google.com/docs/reference/js/auth.user
				// const uid = user.uid;
				// // console.info(user);
				// const querySnapshot = await getDoc(
				// 	doc(
				// 		db,
				// 		'Universitas Multimedia Nusantara',
				// 		'User',
				// 		'User',
				// 		String(user.email)
				// 	)
				// );
				// setProfile(querySnapshot.data());
				// ...
			} else {
				history.push('/login');

				// User is signed out
				// ...
			}
		});
		return authentication;
	}, []);

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
					<IonTitle>Profil Akun</IonTitle>
				</IonToolbar>
			</IonHeader>
			<IonContent>
				<div
					style={{
						display: 'flex',
						flexDirection: 'column',
						justifyContent: 'center',
						width: '100%',
					}}>
					<div
						style={{
							width: '100dvw',
							backgroundColor: '#1EC2E6',
							borderRadius: '0 0 12px 12px',
							boxShadow:
								'rgba(0, 0, 0, 0.2) 0px 3px 1px -2px, rgba(0, 0, 0, 0.14) 0px 2px 2px 0px, rgba(0, 0, 0, 0.12) 0px 1px 5px 0px',
						}}>
						<div
							className="ion-padding-horizontal ion-padding-top"
							style={{
								display: 'flex',
								flexDirection: 'row',
								justifyContent: 'center',
								width: '100%',
							}}>
							<div
								style={{
									aspectRatio: '1/1',
									width: '10rem',
									backgroundImage:
										"url('https://i.pinimg.com/736x/1d/d8/1e/1dd81e7616e52ae56a56b3974b952172.jpg')",
									backgroundPosition: 'center',
									backgroundSize: 'cover',
									borderRadius: '100%',
								}}></div>
						</div>

						<IonText
							style={{
								textAlign: 'center',
								fontSize: '2rem',
								color: 'white',
							}}>
							<p style={{ fontWeight: 700, marginTop: '0rem' }}>John Doe</p>
						</IonText>
					</div>
				</div>

				<IonButton
					style={{ marginTop: '1.5rem', width: '100%' }}
					color="danger"
					onClick={() => {
						localStorage.removeItem('profile');
						signOut(auth);
					}}>
					Keluar Akun
				</IonButton>
			</IonContent>
		</IonPage>
	);
};
