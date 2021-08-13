import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import {
  Colors,
  DebugInstructions,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen'
import { Section } from './Section'

interface Props {
  isDarkMode: boolean
}

export const Body: React.FC<Props> = ({ isDarkMode }) => {
  return (
    <View
      style={{
        backgroundColor: isDarkMode ? Colors.black : Colors.white,
      }}>
      <Section title="Step One" isDarkMode={isDarkMode}>
        Edit <Text style={styles.highlight}>App.js</Text> to change this screen
        and then come back to see your edits.
      </Section>
      <Section title="See Your Changes" isDarkMode={isDarkMode}>
        <ReloadInstructions />
      </Section>
      <Section title="Debug" isDarkMode={isDarkMode}>
        <DebugInstructions />
      </Section>
      <Section title="Learn More" isDarkMode={isDarkMode}>
        Read the docs to discover what to do next:
      </Section>
      <LearnMoreLinks />
    </View>
  )
}

const styles = StyleSheet.create({
  highlight: {
    fontWeight: '700',
  },
})
