import React, { useEffect } from "react";

//import "./style.css";
import { makeStyles } from "@mui/styles";
import { Player } from "@lottiefiles/react-lottie-player";
import loaderIcon from "../../assets/lotties/loader.json";
import { useSelector } from "react-redux";
import { loaderSelector } from "@/redux/selectors/uiSelector";
import { store } from "@/redux/store";

const useStyles = makeStyles({
  message: {
    fontSize: "1.3rem",
    fontWeight: 600,
    textAlign: "center",
  },
  bg: {
    backgroundColor: (props) => props.bgcolor,
  },
});

const Loader = ({ initial = true }) => {
  let loaderState = useSelector(loaderSelector);

  console.log("loader", loaderState);
  // const messages = useSelector(messageSelector);
  if (loaderState) {
    return (
      <>
        <div
          style={{
            animation: "zoomInOut 1s infinite",
            filter: "drop-shadow(0 0 10px #007aff63)",

            height: "110vh",
            width: "100%",
            position: "absolute",
            backdropFilter: "blur(1.2px)",
            backgroundColor: "transparent",
          }}
        >
          <Player
            autoplay
            loop
            src={loaderIcon}
            style={{
              height: "80px",
              width: "80px",
              margin: "auto",
              padding: "auto",
              //opacity: "",
              boxShadow: "0px 1px 2px 0px #00000026",
              background: "#ffffff",
              transform: "translate3d(0vh, 50vh, 0)",
              borderRadius: "24px",
              //filter: "drop-shadow(0 0 10px #007aff63)",
            }}
          />
        </div>
      </>
    );
  } else {
    return <></>;
  }
};

// Loader.propTypes = {
//     initial: PropTypes.bool,
// };

export default Loader;
