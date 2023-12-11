import { FlokkarAfbrota, SurveyData } from "./Ui/index.js";
// import { useState, useEffect } from "react";

const Survey = ({
  skoðanirTitil,
  skoðanirText,
  samstöðuTitil,
  samstöðuText,
  samskiptaTitil,
  samskiptaText,
  átakaTitil,
  átakaText,
  refsilögTitil,
  refsilögText,
  refsingTitil,
  refsingtext,
  survey,
}) => {
  //! Hafa það þannig að styls bretast eftir hvað er veirð að sína
  // const [lol, setLol] = useState(false);

  // useEffect(() => {
  //   if (lol === false) {
  //     setLol("grid grid-rows-4 grid-cols-3 gap-4 w-full h-full text-[0.8rem]");
  //   } else {
  //     setLol("");
  //   }
  // }, [lol]);

  return (
    <>
      {survey === false ? (
        <SurveyData />
      ) : (
        <FlokkarAfbrota
          skoðanirTitil={skoðanirTitil}
          skoðanirText={skoðanirText}
          samstöðuTitil={samstöðuTitil}
          samstöðuText={samstöðuText}
          samskiptaTitil={samskiptaTitil}
          samskiptaText={samskiptaText}
          átakaTitil={átakaTitil}
          átakaText={átakaText}
          refsilögTitil={refsilögTitil}
          refsilögText={refsilögText}
          refsingTitil={refsingTitil}
          refsingtext={refsingtext}
          // lol={lol}
        />
      )}
    </>
  );
};

export default Survey;
