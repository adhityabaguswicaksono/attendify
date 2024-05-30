import {
	IonBackButton,
	IonButtons,
	IonCard,
	IonCardContent,
	IonContent,
	IonHeader,
	IonIcon,
	IonPage,
	IonRouterLink,
	IonText,
	IonTitle,
	IonToolbar,
} from '@ionic/react';
import {
	checkmarkDone,
	documentTextOutline,
	logInOutline,
} from 'ionicons/icons';

export const Permit: React.FC = () => {
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
					<IonTitle>Perizinan</IonTitle>
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
						Mau Izin atau Mau Lihat Status Izinnya?
					</h1>
					<p>Pilih menunya dulu ya...</p>
				</IonText>

				{/* <IonCard>
					<IonCardContent
						style={{
							display: 'flex',
							flexWrap: 'wrap',
							flexDirection: 'row',
							justifyContent: 'center',
						}}> */}
				<div
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
						<IonRouterLink routerLink="/permit/create-permit">
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
										Buat Izin
									</p>
								</IonText>
							</IonCardContent>
						</IonRouterLink>
					</IonCard>
					<IonCard
						style={{
							flexGrow: 1,
						}}>
						<IonRouterLink routerLink="/permit/permit-state">
							<IonCardContent className="ion-text-center">
								<IonText>
									<p style={{ fontSize: '6rem', color: '#158aa3' }}>
										<IonIcon icon={checkmarkDone}></IonIcon>
									</p>
								</IonText>
								<IonText>
									<p
										style={{
											marginTop: '-2rem',
											fontSize: '1rem',
											color: '#1EC2E6',
										}}>
										Status Izin
									</p>
								</IonText>
							</IonCardContent>
						</IonRouterLink>
					</IonCard>
				</div>
				{/* </IonCardContent> */}
				{/* </IonCard> */}
			</IonContent>
		</IonPage>
	);
};
