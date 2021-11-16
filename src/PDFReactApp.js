import React, { useEffect, useState } from "react";
import YugiCard from "./components/cards/YugiCard";
import YugiPDF from "./components/pdf/YugiPDF";
import { PDFDownloadLink, StyleSheet } from "@react-pdf/renderer";

const styles = StyleSheet.create({
  button: {
    padding: "20px",
    color: "white",
    fontSize: "18px",
    textDecoration: "none",
    backgroundColor: "darkred",
  },
});

export default function PDFReactApp() {
  const [resultado, setResultado] = useState([]);
  const [isShow, setIsShow] = useState(false);

  useEffect(() => {
    fetch("https://db.ygoprodeck.com/api/v7/cardinfo.php")
      .then((response) => response.json())
      .then((data) => {
        // console.log(data.data[0].card_images[0].image_url);
        let dataShort = data.data;
        if (dataShort.length > 100) {
          dataShort = data.data.slice(1, 100);
        }
        const dataImages = dataShort.map((carta) => {
          return {
            name: carta.name,
            img: carta.card_images[0].image_url,
          };
        });
        setResultado(dataImages);
        setIsShow(true);
      })
      .catch((error) => {
        console.log(error);
        setResultado([]);
      });
  }, []);

  return (
    <div className="header">
      {isShow ? (
        <>
          <Btn resultado={resultado} />
          <a
            href="https://db.ygoprodeck.com/api/v7/cardinfo.php"
            target="_blank"
            rel="noreferrer">
            Visita la API
          </a>
          <div id="pdf-pokemon" className="card-grid">
            {resultado ? (
              <>
                {resultado.map((yugi) => (
                  <YugiCard key={yugi.name} {...yugi}></YugiCard>
                ))}
              </>
            ) : (
              <p>No se encontraron resultados...</p>
            )}
          </div>
        </>
      ) : (
        <p>Cargando...</p>
      )}
    </div>
  );
}

function Btn({ resultado }) {
  return (
    <div style={{ margin: "auto 0 40px 0" }}>
      <PDFDownloadLink
        document={<YugiPDF resultado={resultado} />}
        fileName="yugiOH.pdf"
        style={styles.button}>
        {({ loading }) => (loading ? "Cargando documento..." : "Descargar PDF")}
      </PDFDownloadLink>
    </div>
  );
}
