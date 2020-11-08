import styled, { keyframes } from "styled-components";
import FlowersImg from "./components/FlowersImg";
import FlowersImg2 from "./components/FlowersImg2";
import FlowersImg3 from "./components/FlowersImg3";
import NosCasamosImg from "./components/NosCasamosImg";
import JeymarAvatar from "./components/JeymarAvatar";
import RochyAvatar from "./components/RochyAvatar";
import DressCodeTitle from "./components/DressCodeTitle";
import GiftsTitle from "./components/GiftsTitle";
import LocationTitle from "./components/LocationTitle";
import Airplane from "./components/Airplane";
import Car from "./components/Car";
import Heart from "./components/Heart";
import paperbg from "./img/paperbg.jpg";

export const Main = styled.div`
  overflow-x: hidden;
`;

/* 
 INICIO
 */

export const Header = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  background: url(${paperbg});
  height: 290px;

  @media (min-width: 500px) {
    height: 450px;
  }
  @media (min-width: 1024px) {
    height: 650px;
  }
  @media (min-width: 1440px) {
    height: 850px;
  }
`;

export const MenuContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  flex-basis: 100%;
  margin-top: 28px;
`;

export const Menu = styled.div`
  background: rgba(249, 197, 221, 0.4);
  border-radius: 10px 0 0 10px;
  height: 40px;

  ul {
    padding: 0 10px 0 0px;
    margin: 0;
    display: flex;
    height: 100%;
    align-items: center;

    @media (min-width: 500px) {
      padding-right: 50px;
    }
    @media (min-width: 1024px) {
      padding-right: 70px;
    }
    @media (min-width: 1440px) {
      padding-right: 90px;
    }
  }

  ul > li {
    display: flex;
    align-items: center;
    padding: 0;
    margin: 0;
    list-style: none;
    margin-left: 10px;

    @media (min-width: 500px) {
      margin-left: 30px;
    }
    @media (min-width: 1024px) {
      margin-left: 50px;
    }
    @media (min-width: 1440px) {
      margin-left: 70px;
    }
  }

  ul > li > a {
    padding: 0;
    margin: 0;
    text-decoration: none;
    color: #843c3c;
    font-size: 9px;

    @media (min-width: 500px) {
      font-size: 12px;
    }
    @media (min-width: 1024px) {
      font-size: 16px;
    }
    @media (min-width: 1440px) {
      font-size: 20px;
    }
  }

  @media (min-width: 500px) {
    height: 50px;
  }
  @media (min-width: 1024px) {
    height: 70px;
  }
  @media (min-width: 1440px) {
    height: 90px;
  }
`;

export const Flowers = styled(FlowersImg)`
  position: absolute;
  width: 100px;
  top: 0;
  z-index: 2;

  @media (min-width: 375px) {
    width: 115px;
  }
  @media (min-width: 500px) {
    width: 200px;
  }
  @media (min-width: 1024px) {
    width: 300px;
  }
  @media (min-width: 1440px) {
    width: 400px;
  }
`;

/* 
 PHOTOS
 */

export const PhotosContainer = styled.div`
  display: flex;
  flex-basis: 100%;
  justify-content: flex-end;
  left: 10px;
  position: relative;
  z-index: 2;

  @media (min-width: 500px) {
    justify-content: center;
    margin-left: 100px;
  }
  @media (min-width: 1024px) {
    margin-left: 200px;
  }
  @media (min-width: 1440px) {
    margin-left: 300px;
  }
`;

export const PhotoFrame = styled.div`
  width: ${(props) => (props.small ? "120px" : "140px")};
  height: ${(props) => (props.small ? "120px" : "140px")};
  background-color: white;
  padding: 10px;
  box-shadow: 2px 3px 5px 0px rgba(0, 0, 0, 0.19);
  transform: ${(props) => props.transform};
  position: relative;
  z-index: ${(props) => props.zIndex};

  @media (min-width: 500px) {
    width: ${(props) => (props.small ? "220px" : "240px")};
    height: ${(props) => (props.small ? "220px" : "240px")};
  }
  @media (min-width: 1024px) {
    width: ${(props) => (props.small ? "320px" : "340px")};
    height: ${(props) => (props.small ? "320px" : "340px")};
  }
  @media (min-width: 1440px) {
    width: ${(props) => (props.small ? "420px" : "440px")};
    height: ${(props) => (props.small ? "420px" : "440px")};
  }
`;

export const Photo = styled.div`
  width: ${(props) => (props.small ? "120px" : "140px")};
  height: ${(props) => (props.small ? "100px" : "120px")};
  background-image: url(${(props) => props.src});
  background-size: contain;
  background-repeat: no-repeat;

  @media (min-width: 500px) {
    width: ${(props) => (props.small ? "220px" : "240px")};
    height: ${(props) => (props.small ? "200px" : "200px")};
  }
  @media (min-width: 1024px) {
    width: ${(props) => (props.small ? "320px" : "340px")};
    height: ${(props) => (props.small ? "300px" : "300px")};
  }
  @media (min-width: 1440px) {
    width: ${(props) => (props.small ? "420px" : "440px")};
    height: ${(props) => (props.small ? "400px" : "380px")};
  }
`;

export const PhotoText = styled.div`
  color: #d17979;
  font-size: 10px;
  margin-top: 5px;

  @media (min-width: 500px) {
    font-size: 20px;
  }
  @media (min-width: 1024px) {
    font-size: 30px;
  }
  @media (min-width: 1440px) {
    font-size: 40px;
  }
`;

/* 
 NOS CASAMOS SECTION
 */

export const DiagonalBox = styled.div`
  display: flex;
  width: 100%;
  height: 280px;
  background-color: #fcf1c5;
  transform: rotate(8deg) scaleX(1.5);
  margin-top: -50px;
  justify-content: center;
  align-items: center;

  @media (min-width: 500px) {
    height: 370px;
  }
  @media (min-width: 1024px) {
    height: 470px;
    margin-top: -100px;
  }
  @media (min-width: 1440px) {
    height: 570px;
    margin-top: -140px;
  }
`;

export const NosCasamos = styled(NosCasamosImg)`
  margin-top: 22px;
  width: 270px;
  transform: rotate(-10deg) scaleX(0.7);

  @media (min-width: 500px) {
    width: 370px;
  }
  @media (min-width: 1024px) {
    width: 470px;
  }
  @media (min-width: 1440px) {
    width: 557px;
  }
`;

/* 
 HISTORY
 */

export const OurHistory = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 100%;
  height: 200px;
  margin-top: -30px;
  color: #76b2b1;
  text-align: center;
  padding-top: 20px;
`;

export const OurHistoryTitle = styled.div`
  font-size: 18px;
  font-weight: bold;
  text-align: center;

  @media (min-width: 500px) {
    font-size: 35px;
  }
  @media (min-width: 1024px) {
    font-size: 45px;
  }
  @media (min-width: 1440px) {
    font-size: 55px;
  }
`;

export const OurHistoryText = styled.div`
  text-align: center;
  margin-top: 10px;
  width: 70%;
  font-size: 12px;

  @media (min-width: 500px) {
    font-size: 18px;
  }
  @media (min-width: 1024px) {
    font-size: 24px;
  }
  @media (min-width: 1440px) {
    font-size: 30px;
  }
`;

export const ThreeDots = styled.div`
  font-size: 32px;
  font-weight: bold;

  @media (min-width: 500px) {
    font-size: 60px;
  }
  @media (min-width: 1024px) {
    font-size: 90px;
  }
  @media (min-width: 1440px) {
    font-size: 100px;
  }
`;

/* 
 AVATARS
 */

export const AvatarsContainer = styled.div`
  display: flex;
  justify-content: space-around;
`;

const jeyMoveForward = keyframes`
  0% {
    transform: translateX(1px);
  }
  100% {
    transform: translateX(40px);
  }
`;

const rossMoveForward = keyframes`
  0% {
    transform: translateX(1px);
  }
  100% {
    transform: translateX(-40px);
  }
`;

const displayHeart = keyframes`
  0% {
    opacity: 0;
    transform: scale(1);
  }
  100% {
    opacity: 1;
    transform: scale(1.5);
  }
`;

export const HeartImg = styled(Heart)`
  width: 30px;
  height: 30px;
  animation: 3s ${displayHeart} infinite alternate;

  @media (min-width: 500px) {
    width: 240px;
    margin-top: 38px;
    position: relative;
    top: 50px;
  }
  @media (min-width: 1024px) {
    width: 340px;
    margin-top: 88px;
    top: 100px;
  }
  @media (min-width: 1440px) {
    width: 440px;
    margin-top: 120px;
    top: 150px;
  }
`;

export const Rochy = styled(RochyAvatar)`
  width: 140px;
  margin-top: -38px;
  position: relative;
  z-index: 0;
  animation: 3s ${rossMoveForward} infinite alternate;

  @media (min-width: 500px) {
    width: 240px;
    margin-top: 38px;
  }
  @media (min-width: 1024px) {
    width: 340px;
    margin-top: 88px;
  }
  @media (min-width: 1440px) {
    width: 440px;
    margin-top: 120px;
  }
`;

export const Jeymar = styled(JeymarAvatar)`
  width: 150px;
  margin-top: -38px;
  position: relative;
  z-index: 1;
  animation: 3s ${jeyMoveForward} infinite alternate;

  @media (min-width: 500px) {
    width: 250px;
    margin-top: 38px;
  }
  @media (min-width: 1024px) {
    width: 350px;
    margin-top: 88px;
  }
  @media (min-width: 1440px) {
    width: 450px;
    margin-top: 120px;
  }
`;

/* 
 INIVITATION INFO
 */

export const InvitationInfoContainer = styled.div`
  display: flex;
  justify-content: center;
  background: url(${paperbg});
  width: 100%;
  padding: 20px 0;

  > svg {
    margin-left: -8px;
    width: 332px;

    @media (min-width: 500px) {
      width: 500px;
    }
    @media (min-width: 1024px) {
      width: 650px;
    }
    @media (min-width: 1440px) {
      width: 850px;
    }
  }
`;

export const ConfirmAttendanceContainer = styled.div`
  display: flex;
  background-color: #d17a7a;
  height: 60px;
  align-items: center;

  @media (min-width: 500px) {
    height: 120px;
  }
  @media (min-width: 1024px) {
    height: 200px;
  }
  @media (min-width: 1440px) {
    height: 280px;
  }
`;

export const ConfirmAttendance = styled.div`
  display: flex;
  justify-content: center;
  flex-basis: 100%;
  align-items: center;

  .attendance-text {
    color: white;
    width: 118px;
    border-right: solid white 1px;
    padding-right: 10px;
    font-size: 14px;
    text-align: right;

    @media (min-width: 500px) {
      width: 198px;
      font-size: 22px;
    }
    @media (min-width: 1024px) {
      width: 298px;
      font-size: 36px;
    }
    @media (min-width: 1440px) {
      width: 398px;
      font-size: 42px;
    }
  }

  .attendance-button {
    background-color: white;
    color: #d17a7a;
    border-radius: 15px;
    border: solid transparent 1px;
    font-size: 9px;
    padding: 5px 10px;
    height: 20px;
    margin-left: 10px;
    font-weight: bold;

    @media (min-width: 500px) {
      height: 40px;
      font-size: 14px;
    }
    @media (min-width: 1024px) {
      height: 60px;
      font-size: 20px;
    }
    @media (min-width: 1440px) {
      height: 80px;
      font-size: 26px;
    }
  }
`;

/* 
 GIFTS
 */

export const Gifts = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px 0;
`;

export const Flowers2 = styled(FlowersImg2)`
  position: absolute;
  left: 0;
  top: 110px;
  width: 90px;

  @media (min-width: 500px) {
    top: 10px;
    width: 220px;
  }
  @media (min-width: 1024px) {
    width: 320px;
  }
  @media (min-width: 1440px) {
    width: 420px;
  }
`;

export const Flowers3 = styled(FlowersImg3)`
  position: absolute;
  right: 0;
  top: 10px;
  width: 90px;

  @media (min-width: 500px) {
    width: 220px;
  }
  @media (min-width: 1024px) {
    width: 320px;
  }
  @media (min-width: 1440px) {
    width: 420px;
  }
`;

export const DressCodeContainer = styled.div`
  text-align: center;
`;

export const DressCode = styled(DressCodeTitle)`
  width: 170px;
  @media (min-width: 500px) {
    width: 250px;
  }
  @media (min-width: 1024px) {
    width: 350px;
  }
  @media (min-width: 1440px) {
    width: 450px;
  }
`;

export const DressCodeInfo = styled.div`
  display: flex;
  color: #d17a7a;
  font-size: 10px;
  justify-content: center;
  align-items: center;

  margin-top: 10px .gender {
    font-weight: bold;
    flex-basis: 20%;
  }

  .dress-picture {
    flex-basis: 20%;
    margin: 0 10px;
  }

  .dress-picture img {
    width: 50px;
    position: relative;
    left: 10px;
  }

  .dress-description {
    flex-basis: 40%;
  }

  @media (min-width: 500px) {
    font-size: 16px;
  }
  @media (min-width: 1024px) {
    font-size: 18px;
  }
  @media (min-width: 1440px) {
    font-size: 24px;
  }
`;

export const Separator = styled.hr`
  border: solid #76b2b1 1px;
  width: 60%;
  margin-top: 40px;
`;

export const GiftsInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const GiftHeader = styled(GiftsTitle)`
  width: 170px;
  margin-top: 15px;

  @media (min-width: 500px) {
    width: 250px;
  }
  @media (min-width: 1024px) {
    width: 350px;
  }
  @media (min-width: 1440px) {
    width: 450px;
  }
`;

export const GiftTextContainer = styled.div`
  width: 60%;
  color: #d17a7a;
  font-size: 12px;
  text-align: center;
  margin-top: 10px;

  @media (min-width: 500px) {
    font-size: 18px;
  }
  @media (min-width: 1024px) {
    font-size: 24px;
  }
  @media (min-width: 1440px) {
    font-size: 30px;
  }
`;

export const LocationContainer = styled.div`
  display: flex;
  justify-content: center;
  position: relative;
  background-color: #bfd8d2;
  height: 60px;

  @media (min-width: 500px) {
    height: 120px;
  }
  @media (min-width: 1024px) {
    height: 220px;
  }
  @media (min-width: 1440px) {
    height: 320px;
  }
`;

export const AirplaneImg = styled(Airplane)`
  position: absolute;
  left: 0;
  width: 163px;
  top: -8px;

  @media (min-width: 500px) {
    width: 283px;
  }
  @media (min-width: 1024px) {
    width: 370px;
  }
  @media (min-width: 1440px) {
    width: 470px;
  }
`;

export const CarImg = styled(Car)`
  position: absolute;
  right: 0;
  width: 163px;
  top: -8px;

  @media (min-width: 500px) {
    width: 283px;
  }
  @media (min-width: 1024px) {
    width: 370px;
  }
  @media (min-width: 1440px) {
    width: 470px;
  }
`;

export const LocationHeaderContainer = styled.div`
  display: flex;
  justify-content: center;
  height: 75px;

  @media (min-width: 500px) {
    height: 175px;
  }
  @media (min-width: 1024px) {
    height: 275px;
  }
  @media (min-width: 1440px) {
    height: 375px;
  }
`;

export const LocationHeaderText = styled(LocationTitle)`
  width: 100px;

  @media (min-width: 500px) {
    width: 200px;
  }
  @media (min-width: 1024px) {
    width: 300px;
  }
  @media (min-width: 1440px) {
    height: 400px;
  }
`;

export const LocationCircle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 80px;
  height: 80px;
  border-radius: 50%;
  background-color: white;
  margin-top: -20px;

  @media (min-width: 500px) {
    width: 180px;
    height: 180px;
    margin-top: -60px;
  }
  @media (min-width: 1024px) {
    width: 280px;
    height: 280px;
  }
  @media (min-width: 1440px) {
    width: 380px;
    height: 380px;
  }
`;

export const LocationInnerCircle = styled.img`
  width: 70px;
  height: 70px;

  @media (min-width: 500px) {
    width: 170px;
    height: 170px;
  }
  @media (min-width: 1024px) {
    width: 270px;
    height: 270px;
  }
  @media (min-width: 1440px) {
    width: 370px;
    height: 370px;
  }
`;
