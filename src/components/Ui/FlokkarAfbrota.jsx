import { motion } from "framer-motion";
// import { styles } from "../../styles";

const FlokkarAfbrota = ({
  // skoðanirTitil,
  // skoðanirText,
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
  // lol,
}) => {
  const sledIn = {
    hidden: {
      x: "-100vw",
      y: "5vh",
    },
    visible: {
      x: "0vw",
      y: "5vh",
      transition: {
        duration: 2.5,
      },
    },
    exit: {
      x: "-100vw",
      transition: {
        duration: 2.5,
      },
    },
  };

  //! Laga það hvernig grit er set upp og mögulega ver með setet sem bretir css
  return (
    <>
      <motion.div
        className="grid grid-rows-1 grid-cols-6 gap-4 w-full h-[60%] text-[0.8rem]"
        variants={sledIn}
        initial="hidden"
        animate="visible"
        exit="exit"
      >
        <motion.div
          className={`w-[100%] h-[100%] row-start-1 row-span-3 col-start-1 col-span-2`}
        >
          <h1 className="text-[1rem]">{samstöðuTitil}</h1>
          <p>{samstöðuText}</p>
        </motion.div>
        <motion.div
          className={`w-[100%] h-[100%] row-start-1 col-start-3 row-span-3 col-span-2`}
        >
          <h1 className="text-[1rem]">{samskiptaTitil}</h1>
          <p>{samskiptaText}</p>
        </motion.div>
        <motion.div
          className={`w-[100%] h-[100%] row-start-1 col-start-5 row-span-3 col-span-2`}
        >
          <h1 className="text-[1rem]">{átakaTitil}</h1>
          <p>{átakaText}</p>
        </motion.div>
      </motion.div>

      <motion.div
        className="mt-2 grid grid-rows-1 grid-cols-4 gap-4 w-full h-[40%] text-[0.8rem]"
        variants={sledIn}
        initial="hidden"
        animate="visible"
        exit="exit"
      >
        <motion.div
          className={`w-[100%] h-[100%] row-start-1 row-span-2 col-span-2`}
        >
          <h1 className="text-[1rem]">{refsilögTitil}</h1>
          <p>{refsilögText}</p>
        </motion.div>
        <motion.div
          className={`w-[100%] h-[100%] row-start-1 row-span-2 col-span-2`}
        >
          <h className="text-[1rem]">{refsingTitil}</h>
          <p>{refsingtext}</p>
        </motion.div>
      </motion.div>
    </>
  );
};

export default FlokkarAfbrota;
