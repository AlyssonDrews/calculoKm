import React, { useState } from "react";
import { StyleSheet, Text, View, TextInput, Button } from "react-native";

const InputPage = (props) => {
  const [kmViajados, setkmViajados] = useState("");
  const [gasolinaConsumida, setgasolinaConsumida] = useState("");
  const [msg, setMsg] = useState("Cálculo de Kilometragem");

  const { navigation } = props;

  const average = () => {
    if (kmViajados && gasolinaConsumida) {
      const mediaDeConsumo = (kmViajados / gasolinaConsumida).toFixed(2);

      let indicacaoDeConsumo = "";
      if (mediaDeConsumo > 12) {
        indicacaoDeConsumo = "A";
      } else if (mediaDeConsumo > 10 && mediaDeConsumo <= 12) {
        indicacaoDeConsumo = "B";
      } else if (mediaDeConsumo > 8 && mediaDeConsumo <= 10) {
        indicacaoDeConsumo = "C";
      } else if (mediaDeConsumo > 4 && mediaDeConsumo <= 8) {
        indicacaoDeConsumo = "D";
      } else if (mediaDeConsumo < 4) {
        indicacaoDeConsumo = "E";
      }

      navigation.navigate("ResultPage", {
        mediaDeConsumo,
        indicacaoDeConsumo,
      });

      setkmViajados("");
      setgasolinaConsumida("");
    } else {
      setMsg("Você deve informar dados válidos.");
    }
  };

  return (
    <View style={styles.container}>
      <Text>{msg}</Text>
      <TextInput
        style={styles.caixaTexto}
        keyboardType="numeric"
        placeholder="Kilometragem"
        onChangeText={(valor) => setkmViajados(valor)}
        value={kmViajados}
      />
      <TextInput
        style={styles.caixaTexto}
        keyboardType="numeric"
        placeholder="Litros de gasolina consumidos"
        onChangeText={(valor) => setgasolinaConsumida(valor)}
        value={gasolinaConsumida}
      />
      <View>
        <Button title="Calcular" onPress={() => average()} />
      </View>
    </View>
  );
};

export default InputPage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  caixaTexto: {
    borderWidth: 1,
    borderColor: "gray",
    width: "90%",
    padding: 5,
    marginTop: 5,
  },
});
