import {
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

export const CheckOut: React.FC = () => {
	const [ctime, setTime] = useState<string>();

	const getLocalCalendar = () => {
		// Step 1:
		const utcDateString = new Date().toISOString();
		const utcDateWithoutMillis = utcDateString.slice(0, -5) + 'Z';
		const utcDate = new Date(utcDateWithoutMillis);
		// console.log('UTC Date:', utcDate.toISOString());

		// Step 2:
		const offsetMinutes = utcDate.getTimezoneOffset();
		// console.log('Time Zone Offset (minutes):', offsetMinutes);

		// Step 3:
		const localTime = new Date(utcDate.getTime() - offsetMinutes * 60 * 1000);
		// console.log('Local Time:', localTime.toISOString());

		// return localTime;
		console.info(utcDateWithoutMillis);
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
						style={{
							marginBottom: '-0.5rem',
						}}>
						Ada yang udah mau pulang aja nih!
					</p>
					<p>Ambil foto dulu yuk. Jangan lupa nyalain GPSnya...</p>
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

				<IonCard>
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
							{/* Foto */}
							<IonIcon
								slot="icon-only"
								icon={camera}></IonIcon>
						</IonButton>
					</IonCardContent>
				</IonCard>

				<IonButton
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
			</IonContent>
		</IonPage>
	);
};
