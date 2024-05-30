import {
	IonPage,
	IonHeader,
	IonToolbar,
	IonButtons,
	IonBackButton,
	IonTitle,
	IonContent,
	IonText,
	IonCard,
	IonCardContent,
	IonBadge,
	IonAlert,
	IonButton,
	IonChip,
	IonRouterLink,
} from '@ionic/react';
import React, { useState } from 'react';

export const RecapPermitAdmin: React.FC = () => {
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
					<IonTitle>Rekap Perizinan</IonTitle>
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
						Ada yang Izin nih...
					</h1>
					<p>Yuk, tinjau perizinan dari setiap karyawannya!</p>
				</IonText>

				{['Disetujui', 'Ditolak', 'Sedang Ditinjau'].map((value) => (
					<IonCard key={value}>
						<IonCardContent>
							<IonChip
								color={
									value === 'Disetujui'
										? 'success'
										: value === 'Ditolak'
										? 'danger'
										: 'warning'
								}>
								{value}
							</IonChip>

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

						<div style={{ display: 'flex', justifyContent: 'end' }}>
							<IonRouterLink routerLink={`/recap-permit/${value}`}>
								<IonButton color="attendify">Lanjut Baca</IonButton>
							</IonRouterLink>
						</div>
					</IonCard>
				))}
			</IonContent>
		</IonPage>
	);
};
