import React from "react"
import {Paragraf} from "@/Component/StyledComponent/Typography/CustomTypography"
import Spacer from "../Spacer/spacer"
import {motion} from "framer-motion"
import {useInView} from "react-intersection-observer"

import {useTranslation} from "react-i18next"

DescPage.defaultProps = {
  text: "&rdquo; Lorem ipsum dolor sit amet consectetur adipisicing elit."
}

export default function DescPage() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const animationVariants = {
    hidden: {opacity: 0, y: 50},
    visible: {opacity: 1, y: 0},
  };

  const {t} = useTranslation();

  return (<motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={animationVariants}
          transition={{duration: 0.5}}
          style={{
            paddingInline: "10px",
          }}
      >
        <Spacer y={"100px"}/>
        <Paragraf
            styledTitle={true}
            width={'300px'} title={t("homeTitle1")}>
          <i>{t("WebDesc")}</i>
        </Paragraf>
      </motion.div>
  )
}