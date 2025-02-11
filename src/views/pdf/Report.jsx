import React from 'react';
import { Document, Page, View, Text, Image, StyleSheet, Font } from '@react-pdf/renderer';

// Register fonts if necessary
// Font.register({
//   family: 'YourFont',
//   src: 'path/to/font.ttf',
// });

const styles = StyleSheet.create({
  container: {
    width: '100%',
  },
  padding: {
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: 10,
    paddingBottom: 10,
  },
  table: {
    borderWidth: 0,
    backgroundColor: '#FFFFFF',
    margin: '0 auto',
    width: '100%',
  },
  cell: {
    border: '1px solid #000',
    padding: 5,
  },
  title: {
    fontSize: 8,
    textAlign: 'right',
    marginLeft: -200,
    verticalAlign:'middle'
  },
  header: {
    textAlign: 'left',
  },
  sectionTitle: {
    fontSize: 12,
    textAlign: 'left',
  },
  details: {
    textAlign: 'left',
  },
  imageCell: {
    textAlign: 'center',
    padding: 10,
  },
  subjectListHeader: {
    textAlign: 'left',
    fontSize: 12,
  },
});

const Report = ({ enquiryInput, subjectList }) => {
  return (
    <Document>
      <Page size="A4" style={styles.container}>
        <View style={styles.padding}>
          <View style={styles.table}>
            <View style={styles.cell}>
              <Text style={styles.title}>Nano Report</Text>
              <Text style={styles.title}>37/37A Raymond Njoku Street, Ikoyi, Lagos, Nigeria</Text>
              <Text style={styles.title}>Tel No: +234 (1) 453 4908, +234 (909) 114 1981</Text>
              <Text style={styles.title}>Website: www.firstcentralcreditbureau.com</Text>
              <Text style={styles.title}>Email: info@firstcentralcreditbureau.com</Text>
            </View>

            <View style={styles.cell}>
              <Text style={styles.sectionTitle}>Enquiry Input Details</Text>
              <Text>This section includes the user's search input details and matching rate.</Text>
            </View>

            {enquiryInput.map((input, index) => (
              <View key={index} style={styles.cell}>
                <Text style={styles.details}>
                  <Text>Enquiry Date: {input.EnquiryDate}</Text>
                </Text>
                <Text style={styles.details}>
                  <Text>Enquiry Type: {input.EnquiryType}</Text>
                </Text>
                <Text style={styles.details}>
                  <Text>Subscriber Name: {input.SubscriberName}</Text>
                </Text>
                <Text style={styles.details}>
                  <Text>Subscriber User Name: {input.SubscriberUsername}</Text>
                </Text>
                <Text style={styles.details}>
                  <Text>Enquiry Input: {input.Input}</Text>
                </Text>
                <Text style={styles.details}>
                  <Text>Enquiry Reason: {input.EnquiryReason}</Text>
                </Text>
                <Text style={styles.details}>
                  <Text>Matching Rate: {input.MatchRate}</Text>
                </Text>
              </View>
            ))}

            <View style={styles.cell}>
              <Text style={styles.subjectListHeader}>Subjects List</Text>
              {subjectList.map((subject, index) => (
                <View key={index} style={styles.cell}>
                  <Text>{subject.ConsumerID}</Text>
                  <Text>{subject.SearchOutput}</Text>
                </View>
              ))}
            </View>

            <View style={styles.cell}>
              <Text style={styles.subjectListHeader}>Personal Details</Text>
              <Text>This section includes the consumer's demographic information.</Text>
            </View>
          </View>
        </View>
      </Page>
    </Document>
  );
};

export default Report;
