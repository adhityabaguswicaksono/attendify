import {
  IonButton,
  IonCard,
  IonCardHeader,
  IonContent,
  IonHeader,
  IonLabel,
  IonPage,
  IonRow,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import React, { useState } from "react";
import "./sass/Tab2.scss";
import "./sass/app.scss";

const Tab2: React.FC = () => {
  let time = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

  const [ctime, setTime] = useState(time);
  const [msg, setMsg] = useState(""); 
  const [isClockIn, setIsClockIn] = useState(false);
  const UpdateTime = () => {
    time = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    setTime(time);
  };

  const handleClockIn = () => {
    setMsg("Clocked in at " + time);
    // Tambahin Function Buat Push time ke database
    setIsClockIn(true);
  }

  const handleClockOut = () => {
    setMsg("Clocked out at " + time);
    // Tambahin Function Buat Push time ke database
    setIsClockIn(false);
  }

  setInterval(UpdateTime, 1000); // Add a delay of 1000ms (1 second) to setInterval
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle className="title-page">Clock In/Out</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="containter" fullscreen>
        <IonCard style={{margin:8}} className="card-container ion-justify-content-between">
        <IonCard style={{margin: 8}} className="clock-container">
          <IonCardHeader>
            <IonLabel className="clock">
              {ctime}
            </IonLabel>
          </IonCardHeader>
        </IonCard>
        <IonRow>
          <IonButton onClick={handleClockIn} disabled={isClockIn === true} className="clock-in" href="/camera">Clock In</IonButton>
          <IonButton onClick={handleClockOut} disabled={isClockIn === false} className="clock-out">Clock Out</IonButton>
        </IonRow>
        <IonLabel>{msg}</IonLabel>
        </IonCard>
      </IonContent>
    </IonPage>
  );
};

export default Tab2;