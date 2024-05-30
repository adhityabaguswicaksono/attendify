import {
	IonBackButton,
	IonBadge,
	IonButtons,
	IonCard,
	IonCardContent,
	IonCardHeader,
	IonContent,
	IonHeader,
	IonIcon,
	IonPage,
	IonText,
	IonTitle,
	IonToolbar,
} from '@ionic/react';
import { documentText, documentTextOutline } from 'ionicons/icons';
import React from 'react';

export const PermitState: React.FC = () => {
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
					<IonTitle>Status Izin</IonTitle>
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
						Mau Lihat Status Izin Kamu?
					</h1>
					<p>Yuk, lihat dulu status kamu udah disetujuin atau belum!</p>
				</IonText>

				{['Disetujui', 'Ditolak', 'Sedang Ditinjau'].map((value) => (
					<IonCard key={value}>
						<IonCardContent>
							<IonBadge
								color={
									value === 'Disetujui'
										? 'success'
										: value === 'Ditolak'
										? 'danger'
										: 'warning'
								}>
								{value}
							</IonBadge>

							<IonText color="attendify">
								<p
									style={{
										fontWeight: '700',
										fontSize: '1.25rem',
									}}>
									Izin Sakit
								</p>
							</IonText>
							<IonText>
								<p>20/05/2024 - 25/05/2024</p>
							</IonText>
							<IonText>
								<p>
									<span
										style={{
											fontWeight: '700',
										}}>
										Keterangan
									</span>
									<span>: {value}</span>
								</p>
							</IonText>
						</IonCardContent>
					</IonCard>
				))}
			</IonContent>
		</IonPage>
	);
};
