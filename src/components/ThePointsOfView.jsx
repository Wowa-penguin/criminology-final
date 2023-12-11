import { useState } from "react";
import {
  samstöðusjónarmiðið,
  samskiptasjónarmiðið,
  átakasjónarmiðið,
} from "../constants/index.js";
import Points from "./Points";

const ThePointsOfView = () => {
  const [open, setOpen] = useState(false);
  const [pointTitil, setPointTitil] = useState(0);
  const [pointText, setPointText] = useState(0);
  const [pointText1, setPointText1] = useState(0);
  const [pointText2, setPointText2] = useState(0);
  const [pointText3, setPointText3] = useState(0);

  const click = () => {
    setOpen(!open);
    setPointTitil(samstöðusjónarmiðið.pointTitil);
    setPointText(samstöðusjónarmiðið.pointText);
    setPointText1(samstöðusjónarmiðið.pointText1);
    setPointText2(samstöðusjónarmiðið.pointText2);
    setPointText3(samstöðusjónarmiðið.pointText3);
  };
  const click2 = () => {
    setOpen(!open);
    setPointTitil(samskiptasjónarmiðið.pointTitil);
    setPointText(samskiptasjónarmiðið.pointText);
    setPointText1(samskiptasjónarmiðið.pointText1);
    setPointText2(samskiptasjónarmiðið.pointText2);
    setPointText3(samskiptasjónarmiðið.pointText3);
  };
  const click3 = () => {
    setOpen(!open);
    setPointTitil(átakasjónarmiðið.pointTitil);
    setPointText(átakasjónarmiðið.pointText);
    setPointText1(átakasjónarmiðið.pointText1);
    setPointText2(átakasjónarmiðið.pointText2);
    setPointText3(átakasjónarmiðið.pointText3);
  };
  const back = () => {
    setOpen(false);
    setPointTitil();
    setPointText();
  };

  return (
    <Points
      onClick1={click}
      onClick2={click2}
      onClick3={click3}
      pointTitil={pointTitil}
      pointText={pointText}
      pointText1={pointText1}
      pointText2={pointText2}
      pointText3={pointText3}
      open={open}
      back={back}
    />
  );
};

export default ThePointsOfView;
