import {
	IonButton,
	IonCard,
	IonCardContent,
	IonCardHeader,
	IonCardSubtitle,
	IonCardTitle,
	IonContent,
	IonHeader,
	IonImg,
	IonInput,
	IonInputPasswordToggle,
	IonItem,
	IonPage,
	IonSelect,
	IonSelectOption,
} from '@ionic/react';
import React from 'react';

const Login: React.FC = () => {
	return (
		<IonPage>
			<IonContent fullscreen>
				<IonCard
					style={{
						// textAlign: 'center',
						position: 'absolute',
						left: 0,
						right: 0,
						top: '50%',
						transform: 'translateY(-50%)',
						margin: '0 auto',
						maxWidth: '500px',
					}}>
					<IonCardContent
						style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
						<IonImg
							src="/assets/images/attendify-logo-color.png"
							alt="The Wisconsin State Capitol building in Madison, WI at night"
							style={{
								maxWidth: '350px',
								margin: '0 auto',
							}}
							class="ion-padding"></IonImg>

						<div
							style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
							<IonInput
								label="Alamat Surel"
								labelPlacement="stacked"
								type="email"
								placeholder="john.doe@mail.com"></IonInput>
							<IonInput
								label="Alamat Surel"
								labelPlacement="stacked"
								type="password"
								placeholder="••••••••••">
								<IonInputPasswordToggle slot="end"></IonInputPasswordToggle>
							</IonInput>
							<IonSelect
								label="Nama Perusahaan"
								labelPlacement="stacked"
								defaultValue="Pilih Perusahaan">
								<IonSelectOption value="apple">Apple</IonSelectOption>
								<IonSelectOption value="banana">Banana</IonSelectOption>
								<IonSelectOption value="orange">Orange</IonSelectOption>
							</IonSelect>
						</div>

						<IonButton>Masuk</IonButton>
					</IonCardContent>
				</IonCard>
			</IonContent>
		</IonPage>
	);
};

export default Login;
