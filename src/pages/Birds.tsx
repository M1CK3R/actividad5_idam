import { IonButton, IonContent, IonHeader, IonItem, IonLabel, IonList, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Tab2.css';
import { useEffect, useState } from 'react';
import { getBirdsData } from '../services/api';
import BirdItem from '../components/BirdItem';

const Birds: React.FC = () => {
  const [birds, setBirds] = useState<any[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getBirdsData();
        setBirds(data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);

  return (
    <IonPage>
    <IonHeader className="header">Aves de Guatemala</IonHeader>
    <IonContent className='content'>
        {birds.map((item, index) => (
              <BirdItem
                key={index}
                audio={item.file}
                familia={item.gen + " " + item.sp}
                nombre={item.en}
                ubicacion={item.loc}
                descubridor={item.rec}
                  />
        ))}
    </IonContent>
    </IonPage>
  );
  
};
export default Birds;
