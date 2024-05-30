import {
	IonPage,
	IonHeader,
	IonToolbar,
	IonButtons,
	IonBackButton,
	IonTitle,
	IonContent,
	IonText,
	IonIcon,
	IonItem,
	IonItemGroup,
	IonLabel,
	IonRouterLink,
	IonButton,
} from '@ionic/react';
import {
	arrowUpRightBoxOutline,
	pencilOutline,
	trashBinOutline,
} from 'ionicons/icons';

export const RecapAccountAdmin: React.FC = () => {
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
					<IonTitle>Rekap Akun</IonTitle>
				</IonToolbar>
			</IonHeader>
			<IonContent className="ion-padding">
				<div
					style={{
						display: 'flex',
						flexWrap: 'wrap',
						justifyContent: 'space-between',
						alignItems: 'center',
					}}>
					<IonText color="attendify">
						<h1
							style={{
								fontSize: '2rem',
								fontWeight: '700',
								marginBottom: '-0.5rem',
							}}>
							Mau Atur Akun Karyawan?
						</h1>
						<p>Yuk, atur setiap akun karyawanmu biar rapi!</p>
					</IonText>

					<IonRouterLink routerLink={`/recap-account/create-account`}>
						<IonButton color="success">Buat Akun Baru</IonButton>
					</IonRouterLink>
				</div>

				<IonItemGroup>
					{Array.from(Array(10).keys()).map((value) => (
						<IonItem key={value}>
							<IonLabel class="ion-text-wrap">
								<span style={{ fontWeight: 700 }}>John Doe</span>
								<br />
								Divisi - Posisi
							</IonLabel>
							{/* <IonIcon icon={arrowUpRightBoxOutline} /> */}
							<div>
								<IonButton color="danger">
									<IonIcon icon={trashBinOutline} />
								</IonButton>
								<IonRouterLink
									routerLink={`recap-account/update-account/${value}`}>
									<IonButton>
										<IonIcon icon={pencilOutline} />
									</IonButton>
								</IonRouterLink>
							</div>
						</IonItem>
					))}
				</IonItemGroup>
			</IonContent>
		</IonPage>
	);
};
