import { useState } from "react";
import { Navbar, ThePointsOfView, Survey } from "./components/index.js";
import { netglæpir, líkamsárásir, fíkniefnaneysla } from "./constants/index.js";

const App = () => {
  const [pointOrAb, setPointOrAb] = useState(false);
  const [survey, setSurvey] = useState(false);

  const [skoðanirTitil, setSkoðanirTitil] = useState();
  const [skoðanirText, setSkoðanirText] = useState();

  const [samstöðuTitil, setSamstöðuTitil] = useState();
  const [samstöðuText, setSamstöðuText] = useState();

  const [samskiptaTitil, setSamskiptaTitil] = useState();
  const [samskiptaText, setSamskiptaText] = useState();

  const [átakaTitil, setÁtakaTitil] = useState();
  const [átakaText, setÁtakaText] = useState();

  const [refsilögTitil, setRefsilögTitil] = useState();
  const [refsilögText, setRefsilögText] = useState();

  const [refsingTitil, setRefsingTitil] = useState();
  const [refsingtext, setRefsingtext] = useState();

  const handleClick = (
    skoH,
    skoP,
    stöH,
    stöP,
    skipH,
    skipP,
    átakH,
    átakP,
    rlögH,
    rlögP,
    refsH,
    refsP
  ) => {
    setSurvey(!survey);
    setPointOrAb(!pointOrAb);

    setSkoðanirTitil(skoH);
    setSkoðanirText(skoP);

    setSamstöðuTitil(stöH);
    setSamstöðuText(stöP);

    setSamskiptaTitil(skipH);
    setSamskiptaText(skipP);

    setÁtakaTitil(átakH);
    setÁtakaText(átakP);

    setRefsilögTitil(rlögH);
    setRefsilögText(rlögP);

    setRefsingTitil(refsH);
    setRefsingtext(refsP);

    setSurvey(true);
  };

  const clickSurvey = () => {
    setPointOrAb(!pointOrAb);
    setSurvey(false);
  };

  const clickNet = () =>
    handleClick(
      netglæpir.skoðanirTitil,
      netglæpir.skoðanirText,
      netglæpir.samstöðuTitil,
      netglæpir.samstöðuText,
      netglæpir.samskiptaTitil,
      netglæpir.samskiptaText,
      netglæpir.átakaTitil,
      netglæpir.átakaText,
      netglæpir.refsilögTitil,
      netglæpir.refsilögText,
      netglæpir.refsingTitil,
      netglæpir.refsingtext
    );
  const clickLík = () =>
    handleClick(
      líkamsárásir.skoðanirTitil,
      líkamsárásir.skoðanirText,
      líkamsárásir.samstöðuTitil,
      líkamsárásir.samstöðuText,
      líkamsárásir.samskiptaTitil,
      líkamsárásir.samskiptaText,
      líkamsárásir.átakaTitil,
      líkamsárásir.átakaText,
      líkamsárásir.refsilögTitil,
      líkamsárásir.refsilögText,
      líkamsárásir.refsingTitil,
      líkamsárásir.refsingtext
    );
  const clickFík = () =>
    handleClick(
      fíkniefnaneysla.skoðanirTitil,
      fíkniefnaneysla.skoðanirText,
      fíkniefnaneysla.samstöðuTitil,
      fíkniefnaneysla.samstöðuText,
      fíkniefnaneysla.samskiptaTitil,
      fíkniefnaneysla.samskiptaText,
      fíkniefnaneysla.átakaTitil,
      fíkniefnaneysla.átakaText,
      fíkniefnaneysla.refsilögTitil,
      fíkniefnaneysla.refsilögText,
      fíkniefnaneysla.refsingTitil,
      fíkniefnaneysla.refsingtext
    );

  return (
    <>
      <section className="h-screen">
        <Navbar
          net={clickNet}
          lík={clickLík}
          fík={clickFík}
          survey={clickSurvey}
        />
        <div className="w-full h-[75%]">
          {pointOrAb ? (
            <Survey
              {...{
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
              }}
              survey={survey}
              function={clickNet}
            />
          ) : (
            <ThePointsOfView />
          )}
        </div>
      </section>
    </>
  );
};

export default App;
