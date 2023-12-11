import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";

const UiPoints = ({ onClick1, onClick2, onClick3 }) => {
  const controls = useAnimation();

  const sledInLeft = {
    hidden: {
      x: "-50vw",
    },
    visible: {
      x: "0vw",
      transition: {
        duration: 2,
      },
    },
    exit: {
      scale: 0,
      rotate: 360,
      transition: {
        duration: 1,
      },
    },
  };

  const sledInRight = {
    hidden: {
      x: "50vw",
    },
    visible: {
      x: "0vw",
      transition: {
        duration: 2,
      },
    },
    exit: {
      scale: 0,
      rotate: 360,
      transition: {
        duration: 1,
      },
    },
  };

  const sledInBotom = {
    hidden: {
      y: "60vh",
    },
    visible: {
      y: "10vh",
      transition: {
        duration: 2,
      },
    },
    exit: {
      scale: 0,
      rotate: 360,
      transition: {
        duration: 1,
      },
    },
  };

  const heimildaskrá = {
    hidden: {
      x: "-50vw",
      y: "30vh",
    },
    visible: {
      x: "2vw",
      transition: {
        duration: 2,
      },
    },
    exit: {
      scale: 0,
      rotate: 360,
      transition: {
        duration: 1,
      },
    },
  };

  const handleClick = async (animationVariant, text) => {
    await controls.start("exit");
    await controls.start(animationVariant);
    // Trigger the text change
    text();
  };

  useEffect(() => {
    controls.start("visible");
  }, [controls]);

  return (
    <div className="mt-[5%]">
      <div className="grid grid-cols-2 gap-5 text-[2rem] w-full">
        <motion.button
          className="col-start-1 col-end-2"
          onClick={() => handleClick(sledInLeft, onClick1)}
          variants={sledInLeft}
          initial="hidden"
          animate={controls}
        >
          Um samstöðusjónarmiðið
        </motion.button>
        <motion.button
          className="col-start-2 col-end-3"
          onClick={() => handleClick(sledInRight, onClick2)}
          variants={sledInRight}
          initial="hidden"
          animate={controls}
        >
          Um samskiptasjónarmiðið
        </motion.button>
        <motion.button
          className="col-start-1 col-end-3"
          onClick={() => handleClick(sledInBotom, onClick3)}
          variants={sledInBotom}
          initial="hidden"
          animate={controls}
        >
          Um átakasjónarmiðið
        </motion.button>
      </div>
      <motion.div
        className="w-[40%]"
        variants={heimildaskrá}
        initial="hidden"
        animate={controls}
      >
        <h1>Heimildaskrá</h1>
        <p>Almenn hegningarlög nr. 19/1940</p>
        <p>
          {
            "Helgi Gunnlaugsson. (2018). Afbrot og íslenskt samfélag. Háskólaútgáfan."
          }
        </p>
      </motion.div>
    </div>
  );
};

export default UiPoints;
