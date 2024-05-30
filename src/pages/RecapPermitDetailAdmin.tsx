import {
	IonPage,
	IonHeader,
	IonToolbar,
	IonButtons,
	IonBackButton,
	IonTitle,
	IonContent,
	IonText,
	IonButton,
	IonRouterLink,
	IonCard,
	IonCardContent,
	IonItemGroup,
	IonItem,
} from '@ionic/react';

export const RecapPermitDetailAdmin: React.FC = () => {
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
					<IonTitle>Detail Rekap Perizinan</IonTitle>
				</IonToolbar>
			</IonHeader>
			<IonContent className="ion-padding">
				<IonText
					color="attendify"
					className="ion-text-center">
					<h1
						style={{
							fontSize: '2rem',
							fontWeight: '700',
							marginBottom: '-0.5rem',
						}}>
						John Doe
					</h1>
					<p>
						Profesi <br /> Divisi
					</p>
				</IonText>

				<IonCard>
					<IonCardContent>
						<IonItemGroup>
							<IonItem>
								<IonText>
									<p style={{ fontWeight: 700 }}>Divisi Pekerjaan</p>
									<p>Information Technology</p>
								</IonText>
							</IonItem>
							<IonItem>
								<IonText>
									<p style={{ fontWeight: 700 }}>Posisi Pekerjaan</p>
									<p>Front End Website Developer</p>
								</IonText>
							</IonItem>
							<IonItem>
								<IonText>
									<p style={{ fontWeight: 700 }}>Alamat Surel</p>
									<p>john.doe@mail.com</p>
								</IonText>
							</IonItem>
							<IonItem>
								<IonText>
									<p style={{ fontWeight: 700 }}>Nomor Telepon</p>
									<p>+6201234567890</p>
								</IonText>
							</IonItem>
							<IonItem>
								<IonText>
									<p style={{ fontWeight: 700 }}>Alamat Rumah</p>
									<p>
										Jalan Scientia Boulevard Gading, Curug Sangereng, Serpong,
										Kabupaten Tangerang, Banten 15810
									</p>
								</IonText>
							</IonItem>
						</IonItemGroup>
					</IonCardContent>
				</IonCard>

				<div
					style={{
						display: 'flex',
						justifyContent: 'center',
						flexWrap: 'wrap',
					}}>
					<IonRouterLink routerLink={`/recap-permit`}>
						<IonButton
							fill="outline"
							color="danger">
							Batal
						</IonButton>
					</IonRouterLink>
					<IonRouterLink routerLink={`/recap-permit`}>
						<IonButton color="attendify">Kirim</IonButton>
					</IonRouterLink>
				</div>
			</IonContent>
		</IonPage>
	);
};
