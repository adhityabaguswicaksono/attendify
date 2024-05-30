import {
	IonPage,
	IonHeader,
	IonToolbar,
	IonButtons,
	IonBackButton,
	IonTitle,
	IonContent,
	IonText,
	IonItem,
	IonItemDivider,
	IonItemGroup,
	IonLabel,
	IonRouterLink,
	IonIcon,
	IonButton,
} from '@ionic/react';
import { arrowUpRightBoxOutline, linkOutline } from 'ionicons/icons';

export const RecapPresentAdmin: React.FC = () => {
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
					<IonTitle>Rekap Kehadiran</IonTitle>
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
						Mau Lihat Kinerja Karyawan?
					</h1>
					<p>Yuk! Tinjau dari sini aja...</p>
				</IonText>

				<IonItemGroup>
					{Array.from(Array(10).keys()).map((value) => (
						<IonRouterLink
							key={value}
							routerLink={`recap-present/${value}`}>
							<IonItem>
								<IonLabel class="ion-text-wrap">
									<span style={{ fontWeight: 700 }}>John Doe</span>
									<br />
									Divisi - Posisi
								</IonLabel>
								<IonIcon icon={arrowUpRightBoxOutline} />
							</IonItem>
						</IonRouterLink>
					))}
				</IonItemGroup>
			</IonContent>
		</IonPage>
	);
};
