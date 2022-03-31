import * as React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';

export default function AssetExample() {
  return (
    <View style={styles.container}>
      <Text style={styles.news}>
        Новости
      </Text>
      <Image style={styles.logo} source={require('../assets/image-styles.jpeg')} />
      <Text style={styles.paragraph}>
        Превращаем стресс в своего помощника
      </Text>
      <Text>
        Исследователи Йельского университета заявляют, что люди, которые рассматривают стресс, как возможность личностного роста, отмечают улучшение качества жизни. Сегодня узнаем, как это работает и как увидеть положительные стороны стресса.
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    padding: 20,
  },
  news: {
    margin: 15,
    color: `#0000ff`,
  },
  paragraph: {
    margin: 24,
    marginTop: 0,
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  logo: {
    margin: 15,
    height: 170,
    width: 250,
  }
});
