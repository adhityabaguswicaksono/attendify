import {
	IonAccordion,
	IonAccordionGroup,
	IonBackButton,
	IonButton,
	IonButtons,
	IonContent,
	IonHeader,
	IonItem,
	IonItemDivider,
	IonLabel,
	IonPage,
	IonRouterLink,
	IonText,
	IonTitle,
	IonToolbar,
} from '@ionic/react';
import { useParams } from 'react-router';

export const RecapPresentSummaryAdmin: React.FC = () => {
	let { id } = useParams<{ id: string }>();

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

				<IonAccordionGroup>
					{['Mei', 'April', 'Maret'].map((value) => (
						<IonAccordion
							key={value}
							value={value}>
							<IonItem
								slot="header"
								color="attendify">
								<IonLabel
									style={{
										color: 'white',
									}}>
									Bulan {value + ' ' + new Date().getFullYear()}
								</IonLabel>
							</IonItem>
							<div
								className="ion-padding"
								slot="content">
								<div
									style={{
										display: 'flex',
										gap: '1rem',
										flexDirection: 'row',
										flexWrap: 'wrap',
										justifyContent: 'space-between',
									}}>
									<IonText>
										<p style={{ fontWeight: 700 }}>Jam Kerja</p>
										<p>250 Jam</p>
									</IonText>
									<IonText>
										<p style={{ fontWeight: 700 }}>Hari Hadir</p>
										<p>26 Hari</p>
									</IonText>
									<IonText>
										<p style={{ fontWeight: 700 }}>Hari Tidak Hadir</p>
										<p>4 Hari</p>
									</IonText>
								</div>

								<IonItemDivider
									style={{
										marginTop: '-1rem',
									}}
								/>

								{Array.from(Array(10).keys())
									.map((value) => (
										<div
											key={value}
											style={{
												margin: '-0.75rem 0',
												display: 'flex',
												gap: '1rem',
												flexDirection: 'row',
												flexWrap: 'wrap',
												// justifyContent: 'space-between',
											}}>
											<IonText>
												<p
													style={{
														fontSize: '2rem',
														fontWeight: 700,
														lineHeight: 0,
													}}>
													{String(value + 1).length === 1
														? `0${value + 1}`
														: value + 1}
												</p>
											</IonText>
											<div>
												<p style={{ fontWeight: 700, marginBottom: '-1rem' }}>
													Hadir
												</p>
												<p>08:00:00 - 17:00:00</p>
											</div>
										</div>
									))
									.reverse()}
							</div>
						</IonAccordion>
					))}
				</IonAccordionGroup>
			</IonContent>
		</IonPage>
	);
};
