import {
	IonButton,
	IonCard,
	IonCardContent,
	IonCardHeader,
	IonContent,
	IonHeader,
	IonIcon,
	IonImg,
	IonPage,
	IonRouterLink,
	IonText,
} from '@ionic/react';
import {
	airplaneOutline,
	documentTextOutline,
	logInOutline,
	logOutOutline,
	personOutline,
} from 'ionicons/icons';
import React, { useState } from 'react';
import { useHistory } from 'react-router';
import { auth, db } from '../utils/firebase';
import { onAuthStateChanged } from 'firebase/auth';
import { getDoc, doc } from 'firebase/firestore';

export const Dashboard: React.FC = () => {
	const history = useHistory();
	const [profile, setProfile] = useState<any>('');
	const [clock, setClock] = useState<any>('');

	const getClock = async () => {
		const clock = await getDoc(
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
			)
		);

		setClock(clock.data());
	};

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

		return utcDate;
	};

	const getTime = () => {
		const utcDateString = new Date().toISOString();
		const utcDateWithoutMillis = utcDateString.slice(0, -5) + 'Z';
		const hour = new Date(utcDateWithoutMillis).getHours();

		if (hour >= 4 && hour <= 10) {
			return 'Pagi';
		} else if (hour >= 10 && hour < 15) {
			return 'Siang';
		} else if (hour >= 15 && hour <= 18) {
			return 'Sore';
		} else {
			return 'Malam';
		}
	};

	useState(() => {
		const authentication = auth.onAuthStateChanged(async (user) => {
			if (user) {
				setProfile(JSON.parse(String(localStorage.getItem('profile'))));
				getLocalCalendar();
				// getClock();
			} else {
				history.push('/login');
			}
		});

		return authentication;
	}, []);

	useState(() => {
		getClock();
	}, [clock]);

	return (
		<IonPage>
			<IonContent>
				<div
					className="ion-padding"
					style={{
						width: '100dvw',
						backgroundImage: 'linear-gradient(#1BB1D1, #1EC2E6)',
						borderRadius: '0 0 12px 12px',
						boxShadow:
							'rgba(0, 0, 0, 0.2) 0px 3px 1px -2px, rgba(0, 0, 0, 0.14) 0px 2px 2px 0px, rgba(0, 0, 0, 0.12) 0px 1px 5px 0px',
					}}>
					<IonImg
						src="/assets/images/attendify-logo-white.png"
						style={{
							maxWidth: '200px',
							margin: '0 auto',
						}}
						class="ion-padding"></IonImg>

					<div
						style={{
							display: 'flex',
							flexDirection: 'row',
							width: '100%',
							justifyContent: 'center',
							gap: '24px',
							alignItems: 'center',
						}}>
						<div
							style={{
								color: 'white',
							}}>
							<IonText>
								<p>Selamat {getTime()}</p>
							</IonText>
							<IonText>
								<h1
									style={{
										fontWeight: '900',
									}}>
									{profile.nama}
								</h1>
							</IonText>
							<IonText>
								<p>{profile.posisi}</p>
							</IonText>
							<IonText>
								<p>{profile.perusahaan}</p>
							</IonText>
						</div>

						<div
							style={{
								aspectRatio: '1/1',
								height: '8rem',
								backgroundImage:
									"url('https://i.pinimg.com/736x/1d/d8/1e/1dd81e7616e52ae56a56b3974b952172.jpg')",
								backgroundPosition: 'center',
								backgroundSize: 'cover',
								borderRadius: '100%',
								border: '5px solid white',
							}}></div>
					</div>
				</div>

				<IonCard
					style={{
						backgroundColor: '#1EC2E6',
					}}>
					<IonCardHeader
						style={{
							color: 'white',
						}}>
						<IonText
							style={{
								fontWeight: '700',
								fontSize: '1.5rem',
							}}
							className="ion-text-center">
							{getLocalCalendar().toLocaleDateString('id', {
								weekday: 'long',
								year: 'numeric',
								month: 'long',
								day: 'numeric',
							})}
						</IonText>
					</IonCardHeader>
					<IonCardContent
						style={{
							width: '100%',
							display: 'flex',
							flexDirection: 'row',
							flexWrap: 'wrap',
						}}>
						<IonCard
							style={{
								flexGrow: 1,
							}}
							className="ion-text-center">
							<IonCardHeader>
								<IonText>Jam Masuk</IonText>
							</IonCardHeader>
							<IonCardContent>
								<IonText>
									<h1>{typeof clock === 'object' && clock.jamMasuk}</h1>
								</IonText>
							</IonCardContent>
						</IonCard>
						<IonCard
							style={{
								flexGrow: 1,
							}}
							className="ion-text-center">
							<IonCardHeader>
								<IonText>Jam Keluar</IonText>
							</IonCardHeader>
							<IonCardContent>
								<IonText>
									<h1>{typeof clock === 'object' && clock.jamKeluar}</h1>
								</IonText>
							</IonCardContent>
						</IonCard>
					</IonCardContent>
				</IonCard>

				<IonCard>
					<IonCardContent
						style={{
							display: 'flex',
							flexWrap: 'wrap',
							flexDirection: 'row',
							justifyContent: 'center',
						}}>
						<IonCard
							style={{
								flexGrow: 1,
							}}>
							<IonRouterLink routerLink="/check-in">
								<IonCardContent className="ion-text-center">
									<IonText>
										<p style={{ fontSize: '6rem', color: '#158aa3' }}>
											<IonIcon icon={logInOutline}></IonIcon>
										</p>
									</IonText>
									<IonText>
										<p
											style={{
												marginTop: '-2rem',
												fontSize: '1rem',
												color: '#1EC2E6',
											}}>
											Jam Masuk
										</p>
									</IonText>
								</IonCardContent>
							</IonRouterLink>
						</IonCard>

						<IonCard
							style={{
								flexGrow: 1,
							}}>
							<IonRouterLink routerLink="/check-out">
								<IonCardContent className="ion-text-center">
									<IonText>
										<p style={{ fontSize: '6rem', color: '#158aa3' }}>
											<IonIcon icon={logOutOutline}></IonIcon>
										</p>
									</IonText>
									<IonText>
										<p
											style={{
												marginTop: '-2rem',
												fontSize: '1rem',
												color: '#1EC2E6',
											}}>
											Jam Keluar
										</p>
									</IonText>
								</IonCardContent>
							</IonRouterLink>
						</IonCard>
						<IonCard
							style={{
								flexGrow: 1,
							}}>
							<IonRouterLink routerLink="/summary">
								<IonCardContent className="ion-text-center">
									<IonText>
										<p style={{ fontSize: '6rem', color: '#158aa3' }}>
											<IonIcon icon={documentTextOutline}></IonIcon>
										</p>
									</IonText>
									<IonText>
										<p
											style={{
												marginTop: '-2rem',
												fontSize: '1rem',
												color: '#1EC2E6',
											}}>
											Ringkasan
										</p>
									</IonText>
								</IonCardContent>
							</IonRouterLink>
						</IonCard>
						<IonCard
							style={{
								flexGrow: 1,
							}}>
							<IonRouterLink routerLink="/permit">
								<IonCardContent className="ion-text-center">
									<IonText>
										<p style={{ fontSize: '6rem', color: '#158aa3' }}>
											<IonIcon icon={airplaneOutline}></IonIcon>
										</p>
									</IonText>
									<IonText>
										<p
											style={{
												marginTop: '-2rem',
												fontSize: '1rem',
												color: '#1EC2E6',
											}}>
											Perizinan
										</p>
									</IonText>
								</IonCardContent>
							</IonRouterLink>
						</IonCard>
						<IonCard
							style={{
								flexGrow: 1,
							}}>
							<IonRouterLink routerLink="/profile">
								<IonCardContent className="ion-text-center">
									<IonText>
										<p style={{ fontSize: '6rem', color: '#158aa3' }}>
											<IonIcon icon={personOutline}></IonIcon>
										</p>
									</IonText>
									<IonText>
										<p
											style={{
												marginTop: '-2rem',
												fontSize: '1rem',
												color: '#1EC2E6',
											}}>
											Akun
										</p>
									</IonText>
								</IonCardContent>
							</IonRouterLink>
						</IonCard>
					</IonCardContent>
				</IonCard>
			</IonContent>
		</IonPage>
	);
};
