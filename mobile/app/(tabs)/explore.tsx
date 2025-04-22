import { StyleSheet, Image, Platform } from 'react-native';
import { Collapsible } from '@/components/Collapsible';
import { ExternalLink } from '@/components/ExternalLink';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { IconSymbol } from '@/components/ui/IconSymbol';

export default function TabTwoScreen() {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#FF0000', dark: '#FF0000' }} 
      headerImage={
        <Image 
          source={require('@/assets/images/channels4_profile.png')} 
          style={styles.headerImage}
        />
      }>
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">🔥EXPLORE AS ULTIMAS POLÊMICAS! 🔥</ThemedText>
      </ThemedView>
      <ThemedText></ThemedText>
      <Collapsible title="💔 CASAL DO MOMENTO ANUNCIA SEPARAÇÃO E CHOCA FÃS!">
        <ThemedText>
          O que ninguém esperava aconteceu! O casal mais amado da mídia confirmou o fim do relacionamento, deixando os fãs completamente em choque! Fontes dizem que a separação aconteceu por motivos dramáticos, e uma traição estaria envolvida. As redes sociais não conseguem parar de comentar!{' '}
        </ThemedText>
        <ExternalLink href="https://docs.expo.dev/router/introduction">
          <ThemedText type="link"></ThemedText>
        </ExternalLink>
      </Collapsible>
      <Collapsible title="🎤 CANTORA EXPLODE AO VIVO E BRIGA COM FÃ NO PALCO!">
        <ThemedText>
          O público foi pego de surpresa quando, no meio do show, a cantora famosa simplesmente perdeu o controle e começou uma briga feia com um fã!{' '}
          <ThemedText type="defaultSemiBold">Gritos e xingamentos ao vivo!</ThemedText> O que parecia ser apenas mais uma performance virou um dos maiores bafos do ano!
        </ThemedText>
      </Collapsible>
      <Collapsible title="🚨 VAZAMENTO DE ÁUDIO COMPROMETE NOME FORTE DA POLÍTICA!">
        <ThemedText>
          Um áudio vazado deixou os bastidores políticos em polvorosa! <ThemedText type="defaultSemiBold"></ThemedText> O nome de um político influente está agora na boca do povo,{' '}
          <ThemedText type="defaultSemiBold"></ThemedText>e os boatos de corrupção são mais do que nunca uma realidade.
          A coisa tá feia!
        </ThemedText>
        <Image source={require('@/assets/images/react-logo.png')} style={{ alignSelf: 'center' }} />
        <ExternalLink href="https://reactnative.dev/docs/images">
          <ThemedText type="link"></ThemedText>
        </ExternalLink>
      </Collapsible>
      <Collapsible title="🔥 TREND VIRALIZA, MAS MÉDICOS ALERTAM: “É PERIGOSO!”">
        <ThemedText>
          O novo desafio nas redes sociais parece inofensivo, mas médicos já alertam para os perigos! <ThemedText type="defaultSemiBold">Vários jovens já foram parar no hospital.</ThemedText> A cada segundo, mais e mais pessoas estão caindo na armadilha.{' '}
          <ThemedText style={{ fontFamily: 'SpaceMono' }}>
            
          </ThemedText>
        </ThemedText>
        <ExternalLink href="https://docs.expo.dev/versions/latest/sdk/font">
          <ThemedText type="link"></ThemedText>
        </ExternalLink>
      </Collapsible>
      <Collapsible title="🏆 ATLETA QUEBRA RECORDE E FAZ HISTÓRIA NO ESPORTE!">
        <ThemedText>
          O impossível aconteceu! Um atleta bateu um recorde mundial que parecia inquebrável, e as redes sociais estão em festa!{' '}
          <ThemedText type="defaultSemiBold"></ThemedText>
          Todos os holofotes estão sobre ele agora, mas qual será o próximo passo dessa estrela?
        </ThemedText>
        <ExternalLink href="https://docs.expo.dev/develop/user-interface/color-themes/">
          <ThemedText type="link"></ThemedText>
        </ExternalLink>
      </Collapsible>
      <Collapsible title="💅 INFLUENCIADORA REVELA BASTIDORES SOMBROSOS DA FAMA!">
        <ThemedText>
          A influenciadora mais querida da internet acabou com a imagem de conto de fadas e revelou os bastidores sombrios da fama. Ela falou sobre contratos abusivos, como tudo é um jogo e o que realmente acontece por trás das câmeras.{' '}
          <ThemedText type="defaultSemiBold"></ThemedText>
          <ThemedText type="defaultSemiBold"></ThemedText>{' '}
          Não é só brilho e glamour, pessoal!
        </ThemedText>
        {Platform.select({
          ios: (
            <ThemedText>
               <ThemedText type="defaultSemiBold"></ThemedText>{' '}
              
            </ThemedText>
          ),
        })}
      </Collapsible>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  headerImage: {
    width: 100, 
    height: 100, 
    borderRadius: 50, 
    position: 'absolute',
    top: 25,  
    left: 20, 
    resizeMode: 'cover', 
  },
  titleContainer: {
    flexDirection: 'row',
    gap: 8,
  },
});


