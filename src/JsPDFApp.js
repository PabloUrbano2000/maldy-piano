import React, { useEffect, useState } from "react";
import YugiCard from "./components/YugiCard";
import { jsPDF } from "jspdf";
import * as htmlToImage from "html-to-image";

export default function JsPDFApp() {
  const [resultado, setResultado] = useState([]);
  const [isShow, setIsShow] = useState(false);

  useEffect(() => {
    fetch("https://pokeapi.co/api/v2/pokemon-species/?limit=12")
      .then((response) => response.json())
      .then((data) => {
        const { results } = data;
        const resultsFix = results.map((pokemon) => {
          const id = pokemon.url
            .replace("https://pokeapi.co/api/v2/pokemon-species/", "")
            .replace("/", "");
          return {
            ...pokemon,
            id: id,
            img: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/${id}.gif`,
          };
        });
        setResultado(resultsFix);
        setIsShow(true);
      })
      .catch((error) => {
        console.log(error);
        setResultado([]);
      });
  }, []);

  const generarPDF = () => {
    // aca viene la funcionalidad del pdf
    htmlToImage
      .toCanvas(document.getElementById("pdf-pokemon"), { quality: 1.0 })
      .then(function (dataUrl) {
        const pdf = new jsPDF("p", "pt", "a4", false);
        const imgProps = pdf.getImageProperties(dataUrl);
        const pdfWidth = pdf.internal.pageSize.getWidth();
        const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;
        pdf.addImage(dataUrl, "PNG", 0, 0, pdfWidth, pdfHeight);
        pdf.save("pokemons.pdf");
      });
  };

  return (
    <div>
      <div className="header">
        <button onClick={() => generarPDF()}>Generar PDF</button>
        {isShow ? (
          <div id="pdf-pokemon" className="card-grid">
            {resultado ? (
              resultado.map((pokemon) => (
                <YugiCard key={pokemon.id} {...pokemon}></YugiCard>
              ))
            ) : (
              <p>No se encontraron resultados...</p>
            )}
          </div>
        ) : null}
      </div>
    </div>
  );
}
