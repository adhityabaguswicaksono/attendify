import {
    IonButton,
  IonCard,
  IonCol,
  IonContent,
  IonDatetime,
  IonHeader,
  IonIcon,
  IonInput,
  IonLabel,
  IonPage,
  IonRow,
  IonTitle,
  IonToolbar,
  } from "@ionic/react";
import { camera, options } from "ionicons/icons";
import { Camera, CameraResultType, CameraSource } from "@capacitor/camera";

const CameraPhoto: React.FC = () => {
    const takePhotoHandler = async () =>{
        const image = Camera.getPhoto({
            resultType : CameraResultType.Uri,
            source : CameraSource.Camera,
            quality : 80,
            width : 500,
        });
        console.log(image);
    };

    return (
       <IonPage>
        <IonHeader>
            <IonToolbar>
                <IonTitle>Camera</IonTitle>
            </IonToolbar>
        </IonHeader>
        <IonContent fullscreen>
            <IonCol>
                <div className="image-preview">
                    <h1>Take a picture</h1>
                </div>
                <IonButton fill="clear" onClick={takePhotoHandler}>
                    <IonIcon slot="start" icon={camera}></IonIcon>
                    <IonLabel>Take Photo</IonLabel>
                </IonButton>
                <IonButton href="/tab2">
                    <IonIcon slot="start"></IonIcon>
                    <IonLabel>Clock-in</IonLabel>
                </IonButton>
            </IonCol>
        </IonContent>
       </IonPage> 
    );
};

export default CameraPhoto;