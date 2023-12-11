import { UiPoints, UiPointsText } from "./Ui/index.js";
const Points = ({
  onClick1,
  onClick2,
  onClick3,
  pointTitil,
  pointText,
  pointText1,
  pointText2,
  pointText3,
  open,
  back,
}) => {
  return (
    <>
      {open === false ? (
        <UiPoints onClick1={onClick1} onClick2={onClick2} onClick3={onClick3} />
      ) : (
        <UiPointsText
          pointTitil={pointTitil}
          pointText={pointText}
          pointText1={pointText1}
          pointText2={pointText2}
          pointText3={pointText3}
          back={back}
        />
      )}
    </>
  );
};

export default Points;
