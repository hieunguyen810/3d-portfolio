import React from "react";

import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { languages } from "../constants";

import { styles } from "../styles";
import { motion } from "framer-motion";
import { textVariant } from "../utils/motion";

const Languages = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
      <p className={`${styles.sectionSubText} text-center`}>
        Languages
      </p>
    </motion.div>
      <div className='flex flex-row flex-wrap justify-center gap-10'>
        {languages.map((lang) => (
          <div className='w-28 h-28' key={lang.name}>
            <BallCanvas icon={lang.icon} />
          </div>
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Languages, "");
