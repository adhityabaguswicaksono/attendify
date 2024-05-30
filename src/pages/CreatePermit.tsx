import {
	IonBackButton,
	IonButton,
	IonButtons,
	IonCard,
	IonCardContent,
	IonContent,
	IonHeader,
	IonIcon,
	IonInput,
	IonItem,
	IonList,
	IonPage,
	IonSelect,
	IonSelectOption,
	IonText,
	IonTextarea,
	IonTitle,
	IonToolbar,
} from '@ionic/react';
import { send } from 'ionicons/icons';

export const CreatePermit: React.FC = () => {
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
					<IonTitle>Buat Izin</IonTitle>
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
						Mau Buat Izin?
					</h1>
					<p>Isi yang benar ya biar bisa disetujuin sama penyelia kamu...</p>
				</IonText>

				<IonCard>
					<IonCardContent>
						<IonList>
							<IonItem>
								<IonInput
									color="attendify"
									type="text"
									label="Nama Lengkap"
									labelPlacement="stacked"
									placeholder="John Doe"></IonInput>
							</IonItem>
							<IonItem>
								<IonInput
									color="attendify"
									type="text"
									label="Divisi"
									labelPlacement="stacked"
									placeholder="Information Technology"></IonInput>
							</IonItem>
							<IonItem>
								<IonInput
									color="attendify"
									type="text"
									label="Posisi"
									labelPlacement="stacked"
									placeholder="Front End Website Developer"></IonInput>
							</IonItem>
							<IonItem>
								<IonInput
									color="attendify"
									type="date"
									label="Tanggal Mulai Izin"
									labelPlacement="stacked"></IonInput>
							</IonItem>
							<IonItem>
								<IonInput
									color="attendify"
									type="date"
									label="Tanggal Selesai Izin"
									labelPlacement="stacked"></IonInput>
							</IonItem>
							<IonItem>
								<IonSelect
									color="attendify"
									label="Alasan Izin"
									placeholder="Izin, Sakit, dan lain-lain"
									labelPlacement="stacked">
									<IonSelectOption
										color="attendify"
										value="apple">
										Apple
									</IonSelectOption>
									<IonSelectOption
										color="attendify"
										value="banana">
										Banana
									</IonSelectOption>
									<IonSelectOption
										color="attendify"
										value="orange">
										Orange
									</IonSelectOption>
								</IonSelect>
							</IonItem>
							<IonItem>
								<IonInput
									color="attendify"
									type="file"
									label="Lampiran"
									labelPlacement="stacked"></IonInput>
							</IonItem>
							<IonItem>
								<IonTextarea
									color="attendify"
									label="Keterangan"
									labelPlacement="stacked"></IonTextarea>
							</IonItem>
						</IonList>
					</IonCardContent>
				</IonCard>

				<IonButton
					color="attendify"
					className="ion-text-center"
					style={{
						width: '100%',
					}}>
					<IonIcon
						icon={send}
						style={{
							marginRight: '0.5rem',
						}}
					/>
					Kirim
				</IonButton>
			</IonContent>
		</IonPage>
	);
};
