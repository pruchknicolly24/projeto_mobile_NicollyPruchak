import React from 'react';
import { View, Text, StyleSheet, FlatList, Image, useColorScheme } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

type BastidorItem = {
  id: string;
  titulo: string;
  descricao: string;
  imagem: string;
};

const dadosBastidores: BastidorItem[] = [
  {
    id: '1',
    titulo: 'Bastidores das Polêmicas',
    descricao: 'Veja o que acontece nos bastidores das maiores polêmicas da mídia!',
    imagem: 'https://img.freepik.com/fotos-premium/nos-bastidores-da-producao-ou-gravacao-de-video_124865-2500.jpg',
  },
  {
    id: '2',
    titulo: 'Escândalos nos Bastidores',
    descricao: 'Aconteceu nos bastidores, mas todo mundo ficou sabendo! Os maiores bafos do momento!',
    imagem: 'https://i.ytimg.com/vi/dr_Yc1DQ2k0/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLDUkW_1enL19UFdb7J48wcdiAylUg',
  },
  {
    id: '3',
    titulo: 'Nos Bastidores das Celebridades',
    descricao: 'Fique por dentro das fofocas de como as celebridades se preparam para os holofotes!',
    imagem: 'https://img.freepik.com/free-photo/paparazzi-red-carpet_23-2151941575.jpg',
  },
];

export default function Bastidores() {
  const colorScheme = useColorScheme();
  const isDark = colorScheme === 'dark';

  return (
    <SafeAreaView style={[styles.container, { backgroundColor: isDark ? '#000' : '#fff' }]}>
      <Text style={[styles.titulo, { color: isDark ? '#fff' : '#000' }]}>Bastidores 🎬</Text>
      <FlatList
        data={dadosBastidores}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={[styles.card, { backgroundColor: isDark ? '#1a1a1a' : '#f2f2f2' }]}>
            <Image source={{ uri: item.imagem }} style={styles.imagem} />
            <Text style={[styles.cardTitulo, { color: isDark ? '#fff' : '#000' }]}>{item.titulo}</Text>
            <Text style={[styles.cardDescricao, { color: isDark ? '#ccc' : '#333' }]}>{item.descricao}</Text>
          </View>
        )}
        contentContainerStyle={{ paddingBottom: 20 }}
        showsVerticalScrollIndicator={false}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
    paddingTop: 16,
  },
  titulo: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  card: {
    borderRadius: 12,
    marginBottom: 16,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOpacity: 0.15,
    shadowRadius: 6,
    elevation: 3,
  },
  imagem: {
    width: '100%',
    height: 160,
  },
  cardTitulo: {
    fontSize: 18,
    fontWeight: '600',
    marginTop: 8,
    marginHorizontal: 12,
  },
  cardDescricao: {
    fontSize: 14,
    marginHorizontal: 12,
    marginBottom: 12,
    marginTop: 4,
  },
});
