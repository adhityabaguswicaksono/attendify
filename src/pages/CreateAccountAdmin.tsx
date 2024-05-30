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
	IonCard,
	IonCardContent,
	IonInput,
	IonList,
	IonSelect,
	IonSelectOption,
	IonTextarea,
} from '@ionic/react';
import { arrowUpRightBoxOutline, linkOutline, send } from 'ionicons/icons';

export const CreateAccountAdmin: React.FC = () => {
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
					<IonTitle>Buat Akun Baru</IonTitle>
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
						Cie... Ada Karyawan Baru, nih!!!
					</h1>
					<p>Yuk, langsung gas aja bikin akunnya...</p>
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
									type="tel"
									label="Nomor Telepon"
									labelPlacement="stacked"
									placeholder="0987654321"></IonInput>
							</IonItem>
							<IonItem>
								<IonInput
									color="attendify"
									type="email"
									label="Alamat Surel"
									labelPlacement="stacked"
									placeholder="john.doe@mail.com"></IonInput>
							</IonItem>
							<IonItem>
								<IonInput
									color="attendify"
									type="text"
									label="Kata Sandi"
									labelPlacement="stacked"
									placeholder="••••••••••"></IonInput>
							</IonItem>
							<IonItem>
								<IonTextarea
									color="attendify"
									label="Alamat"
									labelPlacement="stacked"></IonTextarea>
							</IonItem>
							<IonItem>
								<IonSelect
									color="attendify"
									label="Peran Akun"
									placeholder="Admin / User"
									labelPlacement="stacked">
									{['Admin', 'User'].map((value) => (
										<IonSelectOption
											key={value}
											color="attendify"
											value={value}>
											{value}
										</IonSelectOption>
									))}
								</IonSelect>
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
