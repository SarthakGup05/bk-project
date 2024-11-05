// CertificateTemplate.jsx
import React from 'react';
import { Page, Text, Image, View, Document, StyleSheet } from '@react-pdf/renderer';

const CertificateTemplate = ({ name, quizTitle, date }) => (
  <Document>
    <Page style={styles.body}>
      {/* Background Image */}
      <Image src="/assets/img/Certificate.jpg" style={styles.background} />

      {/* Overlay text positioned on the template */}
      <View style={styles.textContainer}>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.quizTitle}>{quizTitle}</Text>
        <Text style={styles.date}>{date}</Text>
      </View>
    </Page>
  </Document>
);

const styles = StyleSheet.create({
  body: {
    position: 'relative',
    width: '100%',
    height: '100%',
  },
  background: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    zIndex: -1,
  },
  textContainer: {
    position: 'relative',
    textAlign: 'center',
    paddingTop: 250,
  },
  name: {
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#333333',
  },
  quizTitle: {
    fontSize: 24,
    fontStyle: 'italic',
    marginBottom: 8,
    color: '#555555',
  },
  date: {
    fontSize: 18,
    color: '#777777',
  },
});

export default CertificateTemplate;
