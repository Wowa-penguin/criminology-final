import { könnun } from "../../constants";
import { styles } from "../../styles";
import { motion } from "framer-motion";
import {
  könnun1,
  könnun2,
  könnun3,
  könnun4,
  könnun5,
  könnun6,
} from "../../assets";
//! Laga allt!!!!!
const SurveyData = () => {
  return (
    <>
      <motion.div className={`w-full h-full text-[0.8rem] flex flex-col gap-6`}>
        <div className="grid grid-cols-3 gap-5">
          <div className={`${styles.border} w-[100%] h-[100%] row-start-1`}>
            <h1 className="text-[1rem]">Inngangur</h1>
            <p>{könnun.Inngangur}</p>
          </div>
          <div className={`${styles.border} w-[100%] h-[100%]`}>
            <h1 className="text-[1rem]">Spurningar úr könnun.</h1>
            <p>
              Finnst þér mikil hætta á því í dag að einstaklingar verði fyrir
              netglæpum hér á Íslandi ?
            </p>
            <p>Heldur þú að netglæpir muni aukast á næstu árum ?</p>
            <p>
              Finnst þér vera mikil hætta á því að einstaklingar verði fyrir
              líkamsárás nú til dags ?
            </p>
            <p>
              Telur þú að líkamsárásir eigi eftir að aukast á komandi árum ?
            </p>
            <p>Finnst þér fíkniefnaneysla mikil nú til dags ?</p>
            <p>
              Heldur þú að fíkniefnaneysla eigi eftir að aukast næstu árin ?
            </p>
          </div>
          <div className={`${styles.border} w-[100%] h-[100%] col-start-3`}>
            <h1 className="text-[1rem]">Niðurstöður</h1>
            <p>{könnun.Niðurstöður}</p>
          </div>
        </div>
        <div>
          <div className="grid gird-row-3 grid-cols-3">
            <div className="h-full w-full">
              <img className="" src={könnun1} alt="Error" />
            </div>
            <div className="h-full w-full">
              <img className="" src={könnun2} alt="Error" />
            </div>
            <div className="h-full w-full">
              <img className="" src={könnun3} alt="Error" />
            </div>
            <div className="h-full w-full">
              <img className="" src={könnun4} alt="Error" />
            </div>
            <div className="h-full w-full">
              <img className="" src={könnun5} alt="Error" />
            </div>
            <div className="h-full w-full">
              <img className="" src={könnun6} alt="Error" />
            </div>
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default SurveyData;
