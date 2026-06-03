import React, { useState } from "react";
import { IonButton } from "@ionic/react";
import "./ExploreContainer.css";

const server = "http://[YOUR IP HERE ]:3000";

interface ContainerProps {}

const ExploreContainer: React.FC<ContainerProps> = () => {
  const [cookiesValue, setCookiesValue] = useState<string>(
    "please click button set cookies",
  );
  const [setCookiesStatu, setSetCookiesStatu] = useState<boolean>(true);

  const setCookies = async () => {
    try {
      const res = await fetch(`${server}/setCookies`, {
        credentials: "include",
        mode: "cors",
      });
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      const data = await res.text();
      alert("set cookies success,look console");
      setSetCookiesStatu(false);
      console.log(data);
      setCookiesValue(data);
    } catch (err) {
      alert("set cookies error,check console or your server address is wrong");
      console.error(err);
    }
  };

  const getCookies = async () => {
    try {
      const res = await fetch(`${server}/getCookies`, {
        credentials: "include",
        mode: "cors",
      });
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      const data = await res.text();
      alert("get cookies success,look console");
      console.log(data);
      setCookiesValue(data);
    } catch (err) {
      alert("get cookies error,check console or your server address is wrong");
      console.error(err);
    }
  };

  return (
    <div id="container">
      <IonButton
        color="secondary"
        expand="full"
        onClick={setCookies}
        disabled={!setCookiesStatu}
      >
        set cookies
      </IonButton>
      <IonButton color="success" expand="full" onClick={getCookies}>
        get cookies
      </IonButton>
      <div>{cookiesValue}</div>
    </div>
  );
};

export default ExploreContainer;
