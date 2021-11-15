import React from "react";
import {
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

export default function YugiPDF({ resultado }) {
  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <View wrap={false}>
          <div style={styles.contenedor}>
            {resultado ? (
              resultado.map((yugi) => (
                <div style={styles.card} key={yugi.name}>
                  <Image
                    src={
                      // "https://cdn.shopify.com/s/files/1/0449/4229/5199/files/hombre_con_cel.png"
                      yugi.img
                    }
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
}
