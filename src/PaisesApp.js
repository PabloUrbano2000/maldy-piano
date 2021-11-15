import React, { useEffect, useState } from "react";
import PokemonCard from "./components/YugiCard";
import {
  PDFDownloadLink,
  Document,
  Page,
  View,
  Text,
  Image,
  StyleSheet,
} from "@react-pdf/renderer";

const styles = StyleSheet.create({
  contenedor: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-around",
  },
  card: {
    alignContent: "center",
    border: "1px solid gray",
    borderRadius: "6px",
    marginBottom: "10px",
    minWidth: "90px",
    paddingLeft: "10px",
    paddingRight: "10px",
  },
  image: {
    maxHeight: "120px",
  },
  parrafo: {
    textAlign: "center",
    fontSize: "10px",
  },
});

export default function PaisesApp() {
  const [resultado, setResultado] = useState([]);
  const [isShow, setIsShow] = useState(false);

  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        const dataImages = data.map((pais) => {
          return {
            name: pais.name.common,
            img:
              pais.coatOfArms.png !== undefined
                ? pais.coatOfArms.png
                : "https://mainfacts.com/media/images/coats_of_arms/lv.png",
          };
        });
        console.log(dataImages);
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
          <div id="pdf-pokemon" className="card-grid">
            {resultado ? (
              <>
                <Btn resultado={resultado} />
                {resultado.map((pais) => (
                  <PokemonCard key={pais.name} {...pais}></PokemonCard>
                ))}
              </>
            ) : (
              <p>No se encontraron resultados...</p>
            )}
          </div>
        </>
      ) : null}
    </div>
  );
}

const MyDoc = ({ resultado }) => (
  <Document>
    <Page size="A4" style={styles.page}>
      <View wrap={false}>
        <div style={styles.contenedor}>
          {resultado ? (
            resultado.map((pais) => (
              <div style={styles.card} key={pais.img}>
                <Image
                  src={
                    // "https://cdn.shopify.com/s/files/1/0449/4229/5199/files/hombre_con_cel.png"
                    pais.img ? pais.img : ""
                  }
                  alt={pais.name}
                  style={styles.image}
                />
              </div>
            ))
          ) : (
            <Text style={styles.parrafo}>no se encontraron resultados</Text>
          )}
        </div>
      </View>
    </Page>
  </Document>
);

function Btn({ resultado }) {
  return (
    <div>
      <PDFDownloadLink
        document={<MyDoc resultado={resultado} />}
        fileName="paises.pdf">
        {({ loading }) => (loading ? "Cargando documento..." : "Descargar PDF")}
      </PDFDownloadLink>
    </div>
  );
}
