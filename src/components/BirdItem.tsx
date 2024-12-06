import React, { useRef } from "react";

interface BirdItemProps {
    familia: string;
    nombre: string;
    ubicacion: string;
    descubridor: string;
    audio: string
}

const BirdItem: React.FC<BirdItemProps> = ({ audio, familia, nombre, ubicacion, descubridor }) => {

  const audioRef = useRef<HTMLAudioElement>(null);

  const playAudio = () => {
    if (audioRef.current) {
      audioRef.current.play();
    }
  };
  
  return (
    <div className="bird-item">
      <audio ref={audioRef} src={audio} preload="auto"></audio>
      <button onClick={playAudio} style={{ marginTop: "10px" }}>
        Reproducir Sonido
      </button>
      <h4>{familia}</h4>
      <p><strong>Nombre:</strong> {nombre}</p>
      <p><strong>Ubicación:</strong> {ubicacion}</p>
      <p><strong>Descubridor:</strong> {descubridor}</p>
    </div>
  );
};

export default BirdItem;