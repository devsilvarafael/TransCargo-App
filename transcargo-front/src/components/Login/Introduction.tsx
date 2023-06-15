import {
  Intro,
  IntroHeader,
  IntroMain,
} from "../../pages/login/login.module.tsx";
import { SVGlogo } from "../../assets/icons/SVGlogo.tsx";
import SVGdraw from "../../assets/SVGdraw.svg";

export function Introduction() {
  return (
    <Intro>
      <IntroHeader>
        <SVGlogo />
        <p>Sumiu</p>
      </IntroHeader>
      <IntroMain>
        <img src={SVGdraw} alt="" />
      </IntroMain>
    </Intro>
  );
}
