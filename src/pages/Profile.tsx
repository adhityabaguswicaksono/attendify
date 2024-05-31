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
import { onAuthStateChanged, signOut } from 'firebase/auth';
import React, { useState } from 'react';
import { auth, db } from '../utils/firebase';
import { getDoc, doc } from 'firebase/firestore';
import { useHistory } from 'react-router-dom';

export const Profile: React.FC = () => {
	const history = useHistory();
	const [profile, setProfile] = useState<any>('');

	useState(() => {
		const authentication = auth.onAuthStateChanged(async (user) => {
			if (user) {
				setProfile(JSON.parse(String(localStorage.getItem('profile'))));
			} else {
				history.push('/login');
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
							<p style={{ fontWeight: 700, marginTop: '0rem' }}>
								{profile.nama}
							</p>
						</IonText>
					</div>

					<div className="ion-padding">
						<IonText>
							<p style={{ fontWeight: 700, marginBottom: '-1rem' }}>
								Divisi Pekerjaan
							</p>
							<p>{profile.divisi}</p>
						</IonText>
						<IonText>
							<p style={{ fontWeight: 700, marginBottom: '-1rem' }}>
								Posisi Pekerjaan
							</p>
							<p>{profile.posisi}</p>
						</IonText>
						<IonText>
							<p style={{ fontWeight: 700, marginBottom: '-1rem' }}>
								Alamat Surel
							</p>
							<p>{profile.surel}</p>
						</IonText>
						<IonText>
							<p style={{ fontWeight: 700, marginBottom: '-1rem' }}>
								Nomor Telepon
							</p>
							<p>{profile.telepon}</p>
						</IonText>
						<IonText>
							<p style={{ fontWeight: 700, marginBottom: '-1rem' }}>
								Alamat Rumah
							</p>
							<p>{profile.alamat}</p>
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
