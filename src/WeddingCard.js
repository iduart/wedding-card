import React, { useEffect, useState } from "react";

import InvitationInfo from "./components/InvitationInfo";
import ParticipacionInfo from "./components/ParticipacionInfo";

// image format
import her from "./img/her.png";
import his from "./img/his.png";
import map from "./img/map.png";

// Gallery
import photo1 from "./img/gallery/1.jpg";
import photo2 from "./img/gallery/2.jpg";
import photo3 from "./img/gallery/3.jpg";
import photo4 from "./img/gallery/4.jpg";
import photo5 from "./img/gallery/5.jpg";
import photo6 from "./img/gallery/6.jpg";
import photo7 from "./img/gallery/7.jpg";
import photo8 from "./img/gallery/8.jpg";
import photo9 from "./img/gallery/9.jpg";

// styles
import {
  Main,
  Header,
  MenuContainer,
  Menu,
  Flowers,
  Flowers2,
  Flowers3,
  PhotosContainer,
  PhotoFrame,
  Photo,
  PhotoText,
  DiagonalBox,
  NosCasamos,
  OurHistory,
  OurHistoryText,
  OurHistoryTitle,
  ThreeDots,
  AvatarsContainer,
  Jeymar,
  Rochy,
  InvitationInfoContainer,
  ConfirmAttendance,
  ConfirmAttendanceContainer,
  ParticipacionContainer,
  GiftsInfoContainer,
  GiftHeader,
  GiftTextContainer,
  Gifts,
  DressCode,
  DressCodeContainer,
  DressCodeInfo,
  Separator,
  LocationCircle,
  LocationContainer,
  LocationHeaderContainer,
  LocationHeaderText,
  LocationInnerCircle,
  AirplaneImg,
  CarImg,
  HeartImg,
} from "./WeddingCard.styles";

function WeedingCard({ invitation }) {
  const photos = [
    photo1,
    photo2,
    photo3,
    photo4,
    photo5,
    photo6,
    photo7,
    photo8,
    photo9,
  ];
  const [currentPhoto, setCurrentPhoto] = useState(photos[1]);
  const [nextPhoto, setNextPhoto] = useState(photos[0]);

  let currentPhotoIndex = 0;
  let nextPhotoIndex = 1;

  function getCurrentPhoto() {
    if (currentPhotoIndex >= photos.length) {
      currentPhotoIndex = 0;
    }
    if (nextPhotoIndex >= photos.length) {
      nextPhotoIndex = 0;
    }
    setCurrentPhoto(photos[currentPhotoIndex]);
    setNextPhoto(photos[nextPhotoIndex]);
    currentPhotoIndex = currentPhotoIndex + 1;
    nextPhotoIndex = nextPhotoIndex + 1;
  }

  useEffect(() => {
    const interval = setInterval(() => {
      getCurrentPhoto();
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <Main>
      <Header>
        <Flowers />
        <MenuContainer>
          <Menu>
            <ul>
              <li>
                <a href="/">INICIO</a>
              </li>
              <li>
                <a href="#history">HISTORIA</a>
              </li>
              <li>
                <a href="#wedding-info">BODA</a>
              </li>
              <li>
                <a href="#attendance">ASISTENCIA</a>
              </li>
              <li>
                <a href="#gifts">REGALOS</a>
              </li>
            </ul>
          </Menu>
        </MenuContainer>
        <PhotosContainer>
          <PhotoFrame transform="rotate(-8deg)" zIndex="1">
            <Photo src={currentPhoto} />
            <PhotoText>#JeymaryRossana</PhotoText>
          </PhotoFrame>
          <PhotoFrame
            transform="rotate(11deg) translate(-37px, 10px)"
            zIndex="0"
            small
          >
            <Photo src={nextPhoto} small />
          </PhotoFrame>
        </PhotosContainer>
      </Header>
      <DiagonalBox>
        <NosCasamos />
      </DiagonalBox>
      <OurHistory id="history">
        <ThreeDots>
          {"\u00B7"}
          {"\u00B7"}
          {"\u00B7"}
        </ThreeDots>
        <OurHistoryTitle>NUESTRA HISTORIA</OurHistoryTitle>
        <OurHistoryText>
          Con la ayuda de Dios nos conocimos, con su luz como pareja nos
          realizamos y en nuestro amor su presencia descubrimos, con su
          bendición caminaremos hasta el altar, para compartir nuestra vida
          juntos para siempre.
        </OurHistoryText>
        <ThreeDots>
          {"\u00B7"}
          {"\u00B7"}
          {"\u00B7"}
        </ThreeDots>
      </OurHistory>
      <AvatarsContainer>
        <Jeymar />
        <HeartImg />
        <Rochy />
      </AvatarsContainer>
      <InvitationInfoContainer id="wedding-info">
        <InvitationInfo />
      </InvitationInfoContainer>
      {invitation && (
        <ConfirmAttendanceContainer id="attendance">
          {invitation && (
            <ConfirmAttendance>
              <div className="attendance-text">
                Acompáñanos en nuestro gran día
              </div>
              <button className="attendance-button">
                CONFIRMAR ASISTENCIA
              </button>
            </ConfirmAttendance>
          )}
        </ConfirmAttendanceContainer>
      )}
      {!invitation && (
        <ParticipacionContainer>
          <ParticipacionInfo />
        </ParticipacionContainer>
      )}
      {invitation && (
        <React.Fragment>
          <Gifts id="gifts">
            <Flowers2 />
            <Flowers3 />
            <DressCodeContainer>
              <DressCode />
              <DressCodeInfo>
                <div className="gender">Ellas</div>
                <div className="dress-picture">
                  <img src={her} alt="vestido ellas" />
                </div>
                <div className="dress-description">
                  Traje largo floreado
                </div>
              </DressCodeInfo>
              <DressCodeInfo>
                <div className="gender">Ellos</div>
                <div className="dress-picture">
                  <img src={his} alt="vestido ellas" />
                </div>
                <div className="dress-description">Guayabera / Camisa lino o floreada</div>
              </DressCodeInfo>
            </DressCodeContainer>
            <Separator />
            <GiftsInfoContainer>
              <GiftHeader />
              <GiftTextContainer>
                Ese día tendremos un lugar específico para que deposites tu
                obsequio y nos regales unas palabras para nuestro nuevo hogar
              </GiftTextContainer>
            </GiftsInfoContainer>
          </Gifts>
          <LocationHeaderContainer>
            <LocationHeaderText />
          </LocationHeaderContainer>
          <LocationContainer id="location">
            <LocationCircle
              onClick={() =>
                (window.location.href = "https://goo.gl/maps/d5U9aHhjGKyj42Ce8")
              }
            >
              <LocationInnerCircle src={map} alt="map" />
            </LocationCircle>
            <AirplaneImg />
            <CarImg />
          </LocationContainer>
        </React.Fragment>
      )}
    </Main>
  );
}

export default WeedingCard;
