import {
	IonCard,
	IonCardContent,
	IonContent,
	IonIcon,
	IonImg,
	IonPage,
	IonRouterLink,
	IonText,
} from '@ionic/react';
import {
	logInOutline,
	logOutOutline,
	documentTextOutline,
	airplaneOutline,
	personOutline,
	listOutline,
	peopleOutline,
	handRightOutline,
} from 'ionicons/icons';
import React from 'react';

export const DashboardAdmin: React.FC = () => {
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
									John Doe
								</h1>
							</IonText>
							<IonText>
								<p>Front End Website Developer</p>
							</IonText>
							<IonText>
								<p>Universitas Multimedia Nusantara</p>
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
							<IonRouterLink routerLink="/recap-present">
								<IonCardContent className="ion-text-center">
									<IonText>
										<p style={{ fontSize: '6rem', color: '#158aa3' }}>
											<IonIcon icon={handRightOutline}></IonIcon>
										</p>
									</IonText>
									<IonText>
										<p
											style={{
												marginTop: '-2rem',
												fontSize: '1rem',
												color: '#1EC2E6',
											}}>
											Rekap Kehadiran
										</p>
									</IonText>
								</IonCardContent>
							</IonRouterLink>
						</IonCard>

						<IonCard
							style={{
								flexGrow: 1,
							}}>
							<IonRouterLink routerLink="/recap-permit">
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
											Rekap Perizinan
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
											<IonIcon icon={peopleOutline}></IonIcon>
										</p>
									</IonText>
									<IonText>
										<p
											style={{
												marginTop: '-2rem',
												fontSize: '1rem',
												color: '#1EC2E6',
											}}>
											Rekap Profil Akun
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
											Profil Akun
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
