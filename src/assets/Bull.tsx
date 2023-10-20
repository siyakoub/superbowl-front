import React from "react";
import logo from "./bull.jpg";

const Bull: React.FC = () => {
    const imageStyle = {
        width: "650px", // Largeur souhaitée
        height: "450px",  // Hauteur automatique pour maintenir les proportions
    };

    return (
        <>
            <img src={logo} alt="Logo" style={imageStyle} />
        </>
    );
};

export default Bull;
