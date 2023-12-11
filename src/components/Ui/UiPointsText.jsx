import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";

const UiPointsText = ({
  pointTitil,
  pointText,
  pointText1,
  pointText2,
  pointText3,
  back,
}) => {
  const controls = useAnimation();

  const sledIn = {
    hidden: {
      x: "-100vw",
      opacity: 0,
    },
    visible: {
      x: "2vw",
      y: "3vh",
      opacity: 1,
      transition: {
        duration: 2.5,
      },
    },
    exit: {
      x: "80vw",
      width: "0",
      opacity: 0,
      transition: {
        duration: 2.5,
      },
    },
  };

  const handleClick = async (animationVariant, backFunction) => {
    await controls.start("exit");
    await controls.start(animationVariant);
    // Perform additional actions, e.g., calling the back function
    backFunction();
  };

  useEffect(() => {
    controls.start("visible");
  }, [controls]);

  return (
    <>
      <motion.div
        className="grid grid-rows-2 grid-cols-3 w-[98%] h-full"
        variants={sledIn}
        initial="hidden"
        animate={controls}
      >
        <motion.div className="h-full row-start-1 row-end-3 col-start-1 col-end-4">
          <motion.h1 exit={{ width: 0 }}>{pointTitil}</motion.h1>
          <motion.p exit={{ width: 0 }}>{pointText}</motion.p>
          <motion.p exit={{ width: 0 }}>{pointText1}</motion.p>
          <motion.p exit={{ width: 0 }}>{pointText2}</motion.p>
          <motion.p exit={{ width: 0 }}>{pointText3}</motion.p>
        </motion.div>

        <motion.button
          className="row-start-3 col-start-1 bg-[#57bd9c] w-20 h-10 rounded-md"
          whileHover={{ scale: 1.2, opacity: 0.8 }}
          whileTap={{ scale: 0.8, opacity: 0.6 }}
          onClick={() => handleClick(sledIn, back)}
          exit={{ width: 0 }}
        >
          Til Baka
        </motion.button>
      </motion.div>
    </>
  );
};

export default UiPointsText;
