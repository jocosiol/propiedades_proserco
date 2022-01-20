import { Box } from "@mui/system";
import React from "react";
import AppContext from "../context/AppContext";

const myStyle = {
  backgroundImage:
    "url('https://res.cloudinary.com/imgpetapp/image/upload/v1642687598/Propiedades_Proserco/hand-presenting-model-house-home-loan-campaign_zgular.jpg')",
  height: "100vh",
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
};

function Home() {
  return (
    <div style={myStyle}>
      <Box>
        <Box sx={{ display: "flex", justifyContent: "center", pt: 2 }}>
          <img
            src="https://res.cloudinary.com/imgpetapp/image/upload/c_thumb,w_200,g_face/v1642684582/Propiedades_Proserco/Logo_Proserco_s9xhl6.png"
            alt="logo"
          />
        </Box>
        <Box>Home</Box>
      </Box>
    </div>
  );
}

export default Home;
