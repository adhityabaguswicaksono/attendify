import {
	IonAccordion,
	IonAccordionGroup,
	IonBackButton,
	IonButtons,
	IonContent,
	IonHeader,
	IonItem,
	IonItemDivider,
	IonLabel,
	IonPage,
	IonText,
	IonTitle,
	IonToolbar,
} from '@ionic/react';
import { useState } from 'react';
import { auth, db } from '../utils/firebase';
import { useHistory } from 'react-router-dom';
import { getDoc, doc, getDocs, collection, query } from 'firebase/firestore';

export const Summary: React.FC = () => {
	const history = useHistory();
	const [profile, setProfile] = useState<any>('');
	const [dataKehadiran, setDataKehadiran] = useState<any>(null);

	const getData = async () => {
		const allKehadiran = await getDocs(
			query(
				collection(
					db,
					JSON.parse(String(localStorage.getItem('profile'))).perusahaan,
					'User',
					'User',
					JSON.parse(String(localStorage.getItem('profile'))).surel,
					'Kehadiran'
					// 'Kehadiran'
					// getLocalCalendar().toLocaleDateString('id', {
					// 	year: 'numeric',
					// 	month: 'long',
					// })
					// getLocalCalendar().toLocaleDateString('id', {
					// 	year: 'numeric',
					// 	month: 'long',
					// }),
					// getLocalCalendar().toLocaleDateString('id', { day: 'numeric' })
				)
			)
		);

		const filteredData = allKehadiran.docs.map((doc) => ({
			...doc.data(),
			id: doc.id,
		}));

		console.info(filteredData);

		setDataKehadiran(filteredData);
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

	useState(() => {
		const authentication = auth.onAuthStateChanged(async (user) => {
			if (user) {
				setProfile(JSON.parse(String(localStorage.getItem('profile'))));

				getData();
			} else {
				history.push('/login');
			}
		});

		return authentication;
	}, []);

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
					<IonTitle>Ringkasan</IonTitle>
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
						Mau Lihat Berapa Kali Nggak Masuk ya?
					</h1>
					<p>Yuk! Tinjau di sini. Jangan sampe kebanyakan ngilang ya...</p>
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
