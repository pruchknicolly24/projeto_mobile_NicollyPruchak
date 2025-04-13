import { Image, StyleSheet, Platform } from 'react-native';
import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

export default function HomeScreen() {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#FF0000', dark: '#FF0000' }}
      headerImage={
        <Image
          source={require('@/assets/images/channels4_profile.png')}
          style={styles.reactLogo}
        />
      }>
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">🚨 SEJAM BEM-VINDOS AO FOFOCA NEWS! 🚨</ThemedText>
        <HelloWave />
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">🔥 O SITE QUE NÃO DEIXA NADA PASSAR! 🔥</ThemedText>
        <ThemedText>
          Aqui no <ThemedText type="defaultSemiBold">Fofoca News</ThemedText> você encontra tudo o que está rolando no Brasil e no mundo!
          Seja treta de famosos, escândalos políticos ou aquele babado quente do momento, a gente conta TUDO!{' '}
          <ThemedText type="defaultSemiBold">
            {Platform.select({
              ios: 'cmd + d',
              android: 'cmd + m',
              web: ''
            })}
          </ThemedText>{' '}
          Afinal, quem não ama um bom barraco, né?
        </ThemedText>
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">👀 NOSSO OBJETIVO 👀</ThemedText>
        <ThemedText>
          O nosso compromisso é com a VERDADE (e um pouquinho de entretenimento também, né? 😂).
          Trazemos as informações mais fresquinhas, de um jeito leve, descontraído e sem filtro!
        </ThemedText>
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">📢 O QUE VOCÊ VAI ENCONTRAR AQUI? 📢</ThemedText>
        <ThemedText>
          **Curiosidades, rumores e tudo que BOMBA na mídia!** 🎤🕵️{' '}
        </ThemedText>
      </ThemedView>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 280,
    width: 280,
    borderRadius: 140,
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: [{ translateX: -140 }, { translateY: -140 }],
    resizeMode: 'cover',
  },
});