import React from "react";

import { View, Text, Image, StyleSheet } from 'react-native';
import estilos from "./estilos";


export default function TitleBar() {

    return <View style={estilos.conteudo}>
        <View style={estilos.total}>
            <Text style={estilos.descricao}>App Coffe</Text>
        </View>

        <View style={estilos.total}>
        <Image
        style={styles.tinyLogo}
        source={{uri: 'https://cdn-icons-png.flaticon.com/128/751/751621.png'}}
      />

        </View>

    </View>

}

const styles = StyleSheet.create({
    container: {
      paddingTop: 50,
    },
    tinyLogo: {
      width: 50,
      height: 50,
    },
    logo: {
      width: 66,
      height: 58,
    },
  });