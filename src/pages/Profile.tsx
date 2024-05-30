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
import React from 'react';

export const Profile: React.FC = () => {
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
			<IonContent className="ion-padding">
				<div
					style={{
						display: 'flex',
						flexDirection: 'column',
						justifyContent: 'center',
						width: '100%',
					}}>
					<div
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
							marginTop: '-1.5rem',
						}}>
						<p style={{ fontWeight: 700 }}>John Doe</p>
					</IonText>

					<div>
						<IonText>
							<p style={{ fontWeight: 700, marginBottom: '-1rem' }}>
								Divisi Pekerjaan
							</p>
							<p>Information Technology</p>
						</IonText>
						<IonText>
							<p style={{ fontWeight: 700, marginBottom: '-1rem' }}>
								Posisi Pekerjaan
							</p>
							<p>Front End Website Developer</p>
						</IonText>
						<IonText>
							<p style={{ fontWeight: 700, marginBottom: '-1rem' }}>
								Alamat Surel
							</p>
							<p>john.doe@mail.com</p>
						</IonText>
						<IonText>
							<p style={{ fontWeight: 700, marginBottom: '-1rem' }}>
								Nomor Telepon
							</p>
							<p>+6201234567890</p>
						</IonText>
						<IonText>
							<p style={{ fontWeight: 700, marginBottom: '-1rem' }}>
								Alamat Rumah
							</p>
							<p>
								Jalan Scientia Boulevard Gading, Curug Sangereng, Serpong,
								Kabupaten Tangerang, Banten 15810
							</p>
						</IonText>
					</div>
				</div>

				<IonButton
					style={{ marginTop: '1.5rem', width: '100%' }}
					color="danger">
					Keluar Akun
				</IonButton>
			</IonContent>
		</IonPage>
	);
};
