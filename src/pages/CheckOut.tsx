import {
	IonAlert,
	IonBackButton,
	IonButton,
	IonButtons,
	IonCard,
	IonCardContent,
	IonCardHeader,
	IonContent,
	IonHeader,
	IonIcon,
	IonImg,
	IonPage,
	IonText,
	IonTitle,
	IonToolbar,
} from '@ionic/react';
import { setDoc, doc, updateDoc } from 'firebase/firestore';
import {
	airplaneOutline,
	camera,
	cameraOutline,
	documentTextOutline,
	logInOutline,
	logOutOutline,
	personOutline,
	send,
} from 'ionicons/icons';
import React, { useEffect, useState } from 'react';
import { auth, db } from '../utils/firebase';
import { useHistory } from 'react-router-dom';

export const CheckOut: React.FC = () => {
	const history = useHistory();
	const [profile, setProfile] = useState<any>('');
	const [lokasiKeluar, setLokasiKeluar] = useState<any>('');
	const [ctime, setTime] = useState<string>();

	const getOut = async () => {
		await updateDoc(
			doc(
				db,
				JSON.parse(String(localStorage.getItem('profile'))).perusahaan,
				'User',
				'User',
				JSON.parse(String(localStorage.getItem('profile'))).surel,
				'Kehadiran',
				'Kehadiran',
				getLocalCalendar().toLocaleDateString('id', {
					year: 'numeric',
					month: 'long',
				}),
				// getLocalCalendar().toLocaleDateString('id', {
				// 	year: 'numeric',
				// 	month: 'long',
				// }),
				getLocalCalendar().toLocaleDateString('id', { day: 'numeric' })
			),
			{ jamKeluar: ctime, lokasiKeluar: lokasiKeluar }
		);
	};

	const getLocalCalendar = () => {
		// Step 1:
		const utcDateString = new Date().toISOString();
		const utcDateWithoutMillis = utcDateString.slice(0, -5) + 'Z';
		const utcDate = new Date(utcDateWithoutMillis);
		// console.log('UTC Date:', utcDate.toISOString());

		return utcDate;
	};

	const UpdateTime = () => {
		const utcDateString = new Date().toISOString();
		const utcDateWithoutMillis = utcDateString.slice(0, -5) + 'Z';
		const utcDate = new Date(utcDateWithoutMillis);
		// console.info(utcDate.toUTCString());
		setTime(
			// `${utcDate.getHours()}:${utcDate.getMinutes()}:${utcDate.getSeconds()}`
			utcDate.toLocaleTimeString()
		);
	};

	setInterval(UpdateTime, 1000);

	useState(() => {
		const authentication = auth.onAuthStateChanged(async (user) => {
			if (user) {
				setProfile(JSON.parse(String(localStorage.getItem('profile'))));
				navigator.geolocation.getCurrentPosition((c) => {
					setLokasiKeluar({ lat: c.coords.latitude, long: c.coords.longitude });
				});
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
					<IonTitle>Jam Keluar</IonTitle>
				</IonToolbar>
			</IonHeader>
			<IonContent className="ion-padding">
				<IonText color="attendify">
					<h1
						style={{
							fontSize: '48px',
							fontWeight: '700',
							marginBottom: '-0.5rem',
						}}>
						Ciee...
					</h1>
					<p
						style={
							{
								// marginBottom: '-0.5rem',
							}
						}>
						Ada yang udah mau pulang aja nih!
					</p>
					{/* <p>Ambil foto dulu yuk. Jangan lupa nyalain GPSnya...</p> */}
				</IonText>

				<IonCard
					color="attendify"
					className="ion-text-center"
					style={{
						color: 'white',
					}}>
					<IonCardHeader>
						<IonText>
							<p>Pukul</p>
						</IonText>
					</IonCardHeader>
					<IonCardContent>
						<IonText>
							<p
								style={{
									fontSize: '2.5rem',
									fontWeight: '700',
									marginTop: '-2rem',
									fontVariantNumeric: 'tabular-nums',
								}}>
								{ctime}
							</p>
						</IonText>
					</IonCardContent>
				</IonCard>

				{/* <IonCard>
					<IonCardContent className="ion-text-center">
						<IonImg
							src="https://i.pinimg.com/736x/1d/d8/1e/1dd81e7616e52ae56a56b3974b952172.jpg"
							style={{
								maxWidth: '12rem',
								margin: '0 auto',
							}}></IonImg>
						<IonButton
							color="attendify"
							size="large"
							className="ion-padding">
							
							<IonIcon
								slot="icon-only"
								icon={camera}></IonIcon>
						</IonButton>
					</IonCardContent>
				</IonCard> */}

				<IonButton
					id="present-alert"
					color="attendify"
					className="ion-text-center"
					style={{
						width: '100%',
					}}>
					<IonIcon
						icon={send}
						style={{
							marginRight: '1rem',
						}}
					/>
					Kirim
				</IonButton>

				<IonAlert
					header="Tunggu!!!"
					trigger="present-alert"
					// subHeader="A Sub Header Is Optional"
					message="Yakin mau kirim Jam Kepulangan Kamu?"
					buttons={[
						{
							text: 'Batal',
							role: 'cancel',
							cssClass: 'alert-button-cancel',
						},
						{
							text: 'Kirim',
							role: 'confirm',
							cssClass: 'alert-button-confirm',
							id: 'loading-alert',
							handler: () => {
								// console.log('Alert confirmed');
								getOut();
							},
						},
					]}></IonAlert>

				<IonAlert
					header="Yeay"
					trigger="loading-alert"
					// subHeader="A Sub Header Is Optional"
					message="Jam Kepulangan Kamu sudah di data. Terima kasih atas kerja kerasnya, Kawan!!!"
					buttons={[
						{
							text: 'Selesai',
							role: 'confirm',
							cssClass: 'alert-button-confirm',
							handler: () => {
								// console.log('Alert confirmed');
								// getOut();
								history.goBack();
							},
						},
					]}></IonAlert>
			</IonContent>
		</IonPage>
	);
};
