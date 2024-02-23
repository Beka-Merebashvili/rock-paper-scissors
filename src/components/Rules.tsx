import styled from "styled-components";
import rulesImg from "../images/image-rules.svg";
import closeIcon from "../images/icon-close.svg";
import { motion } from "framer-motion"

const Rules: React.FC<{ setRules: (value: boolean) => void }> = (props) => {
return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <RurelsContainer>
          <div className="wrapper">
            <img
              className="closeIcon"
              src={closeIcon}
              alt="closeIcon"
              onClick={() => props.setRules(false)}
            />
            <img src={rulesImg} alt="rulesImg" />
          </div>
        </RurelsContainer>
      </motion.div>
    </>
  );
};

const RurelsContainer = styled.div`
  width: 100%;
  height: 100vh;
  background-color: #fdfeff;
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  .closeIcon {
    position: absolute;
    top: 50px;
    right: 30px;
    cursor: pointer;
  }

  @media screen and (min-width: 980px) {
    width: 50%;
    height: 60vh;
    top: 20%;
    left: 25%;
  }
`;

export default Rules;
