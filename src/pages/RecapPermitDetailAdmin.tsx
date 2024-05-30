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
