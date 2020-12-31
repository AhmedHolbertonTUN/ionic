import React, { useState } from "react";
import {
  IonApp,
  IonContent,
  IonGrid,
  IonHeader,
  IonRow,
  IonTitle,
  IonButton,
  IonCol,
  IonToolbar,
  IonLabel,
  IonItem,
  IonInput,
  IonIcon,
} from "@ionic/react";
import { calculatorOutline, refreshOutline } from "ionicons/icons";

/* Core CSS required for Ionic components to work properly */
import "@ionic/react/css/core.css";

/* Basic CSS for apps built with Ionic */
import "@ionic/react/css/normalize.css";
import "@ionic/react/css/structure.css";
import "@ionic/react/css/typography.css";

/* Optional CSS utils that can be commented out */
import "@ionic/react/css/padding.css";
import "@ionic/react/css/float-elements.css";
import "@ionic/react/css/text-alignment.css";
import "@ionic/react/css/text-transformation.css";
import "@ionic/react/css/flex-utils.css";
import "@ionic/react/css/display.css";

/* Theme variables */
import "./theme/variables.css";

const App: React.FC = () => {
  const [height, setheight] = useState(0);
  const [weight, setweight] = useState(0);
  const [hiden, setHiden] = useState(true);
  let bmi = (weight / (height * height)).toFixed(1);

  const Color = (x: any) => {
    if (x < 18.5) return "warning";
    if (x > 18.5 && x < 24.99) return "success";
    if (x > 25) return "danger";
  };

  const Class = (x: any) => {
    if (x < 18.5) return "Underweight";
    if (x > 18.5 && x < 24.99) return "Normal range";
    if (x > 25) return "Overweight";
    else return "Error !";
  };

  const BmiCalc = () => {
    if (height > 0 && weight > 0) return true;
    else return false;
  };

  return (
    <IonApp>
      <IonHeader>
        <IonToolbar color="primary">
          <IonTitle>BMI Calculator</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonItem>
          <IonLabel position="floating">
            <strong>Your Height :</strong>
          </IonLabel>
          <IonInput
            type="number"
            onIonInput={(e: any) => setheight(e.target.value)}
            required={true}
          ></IonInput>
        </IonItem>
        <IonItem>
          <IonLabel position="floating">
            <strong>Your Weight :</strong>
          </IonLabel>
          <IonInput
            type="number"
            onIonInput={(e: any) => setweight(e.target.value)}
            required={true}
          ></IonInput>
        </IonItem>
        <IonGrid>
          <IonRow style={{ paddingLeft: "45px" }}>
            <IonCol>
              <IonButton
                color="primary"
                onClick={() => {
                  console.log(weight / (height * height));
                  setHiden(false);
                }}
              >
                <IonIcon slot="start" icon={calculatorOutline} />
                Calculate
              </IonButton>
            </IonCol>
            <IonCol>
              <IonButton
                fill="outline"
                onClick={() => window.location.reload(false)}
              >
                <IonIcon slot="start" icon={refreshOutline} />
                Reset
              </IonButton>
            </IonCol>
          </IonRow>
          <IonRow>
            {hiden || !BmiCalc() ? (
              <></>
            ) : (
              <IonToolbar color={`${Color(bmi)}`} className="ion-margin-top">
                <IonTitle className="ion-text-center" size="small">
                  {" "}
                  {`${bmi} : ${Class(bmi)}`}{" "}
                </IonTitle>
              </IonToolbar>
            )}
          </IonRow>
        </IonGrid>
      </IonContent>
    </IonApp>
  );
};

export default App;
