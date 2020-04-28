import React, { useState } from "react";
import { StyleSheet, Text, View, Button } from "react-native";

const ResultPage = (props) => {
  const { navigation, route } = props;
  const { mediaDeConsumo, indicacaoDeConsumo } = route.params;

  return (
    <View style={styles.container}>
      <Text>Média de consumo do veículo: {mediaDeConsumo}</Text>
      <Text>Indicação de consumo de veículos: {indicacaoDeConsumo}</Text>
      <View>
        <Button
          title="Voltar"
          onPress={() => navigation.navigate("InputPage")}
        />
      </View>
    </View>
  );
};

export default ResultPage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    fontSize: 80,
    alignItems: "center",
    justifyContent: "center",
  },
});
