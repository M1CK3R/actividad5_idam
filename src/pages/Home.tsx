import React, { useState } from 'react';
import { IonPage, IonHeader, IonContent, IonInput, IonButton, IonText } from '@ionic/react';
import { useHistory } from 'react-router-dom';
import './Tab1.css'

const Home: React.FC = () => {
  const history = useHistory();

  const handleStart = () => {
      history.push('/birds');
  };

  return (
    <IonPage>
      <IonHeader className="header">Inicio</IonHeader>
      <IonContent className="content">
        <IonText className="welcome-text">
          <h1>Nombre Completo</h1>
          <p>Erick Vinicio Carbonell Esquite</p>
          <h1>Número de Carnet</h1>
          <p>23003931</p>
        </IonText>
        <IonButton expand="block" className="start-button" onClick={handleStart}>
          Cargar
        </IonButton>
      </IonContent>
    </IonPage>
  );
};

export default Home;
