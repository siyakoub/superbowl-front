import React from 'react';

type SvgImageProps = {
    src: string; // Le chemin de l'image SVG
    alt: string; // Texte alternatif pour l'image
    width: number; // Largeur de l'image en pixels
    height: number; // Hauteur de l'image en pixels
};

const SvgImage: React.FC<SvgImageProps> = ({ src, alt, width, height }) => {
    return (
        <img
            src={src}
            alt={alt}
            width={width}
            height={height}
        />
    );
};

export default SvgImage;
