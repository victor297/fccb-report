import React from 'react';
import { Document, Page, Text, View, StyleSheet, Font } from '@react-pdf/renderer';

Font.register({
  family: 'Helvetica',
  src: 'https://cdnjs.cloudflare.com/ajax/libs/pdf.js/2.10.377/fonts/helveticaneue.ttf',
});

const styles = StyleSheet.create({
  page: {
    flexDirection: 'column',
    backgroundColor: '#E4E4E4',
    padding: 20,
  },
  section: {
    margin: 5,
    padding: 5,
    flexGrow: 1,
  },
  title: {
    fontSize: 20,
    marginBottom: 10,
    textAlign: 'center',
  },
  bodyText: {
    fontSize: 10,
    marginBottom: 5,
    lineHeight: 1.4,
  },
  header: {
    fontSize: 16,
    marginBottom: 10,
    textAlign: 'center',
    fontWeight: 'bold',
  },
});

const PdfTest2 = ({ data }) => {
  return (
    <Document>
      <Page size="A4" style={styles.page}>
      <Text style={styles.footer} render={({ pageNumber, totalPages }) => (
          `${pageNumber} / ${totalPages}`
        )} fixed />
        {data?.map((data1, index) => (
          <View key={index} style={styles.section}>
            {/* Subject List */}
            <Text style={styles.header}>Subject List</Text>
            {data1?.SubjectList?.map((subject, idx) => (
              <View key={idx}>
                <Text style={styles.bodyText}>Consumer ID: {subject.ConsumerID}</Text>
                <Text style={styles.bodyText}>Search Output: {subject.SearchOutput}</Text>
                <Text style={styles.bodyText}>Reference: {subject.Reference}</Text>
              </View>
            ))}

            {/* Personal Details */}
            <Text style={styles.title}>Personal Information</Text>
            {data1?.PersonalDetailsSummary?.map((details, idx) => (
              <View key={idx}>
                <Text style={styles.bodyText}>Name: {details.FirstName} {details.Surname}</Text>
                <Text style={styles.bodyText}>Gender: {details.Gender}</Text>
                <Text style={styles.bodyText}>Nationality: {details.Nationality}</Text>
                <Text style={styles.bodyText}>Date of Birth: {details.BirthDate}</Text>
                <Text style={styles.bodyText}>Address: {details.ResidentialAddress1}, {details.ResidentialAddress2}</Text>
              </View>
            ))}

            {/* Delinquency Information */}
            <Text style={styles.header}>Delinquency Information</Text>
            {data1?.DeliquencyInformation?.map((delinquency, idx) => (
              <View key={idx}>
                <Text style={styles.bodyText}>Account Number: {delinquency.AccountNo}</Text>
                <Text style={styles.bodyText}>Period: {delinquency.PeriodNum}</Text>
                <Text style={styles.bodyText}>Months in Arrears: {delinquency.MonthsinArrears}</Text>
              </View>
            ))}

            {/* Credit Account Summary */}
            <Text style={styles.header}>Credit Account Summary</Text>
            {data1?.CreditAccountSummary?.map((account, idx) => (
              <View key={idx}>
                <Text style={styles.bodyText}>Total Monthly Instalment: {account.TotalMonthlyInstalment}</Text>
                <Text style={styles.bodyText}>Total Outstanding Debt: {account.TotalOutstandingdebt}</Text>
              </View>
            ))}

            {/* Credit Account Rating */}
            <Text style={styles.header}>Credit Account Rating</Text>
            {data1?.CreditAccountRating?.map((rating, idx) => (
              <View key={idx}>
                <Text style={styles.bodyText}>No. of Home Loan Accounts Good: {rating.NoOfHomeLoanAccountsGood}</Text>
                <Text style={styles.bodyText}>No. of Home Loan Accounts Bad: {rating.NoOfHomeLoanAccountsBad}</Text>
                <Text style={styles.bodyText}>No. of Auto Loan Accounts Good: {rating.NoOfAutoLoanAccountsGood}</Text>
                <Text style={styles.bodyText}>No. of Auto Loan Accounts Bad: {rating.NoOfAutoLoanAccountsBad}</Text>
                <Text style={styles.bodyText}>No. of Study Loan Accounts Good: {rating.NoOfStudyLoanAccountsGood}</Text>
              </View>
            ))}

            {/* Credit Agreement Summary */}
            <Text style={styles.header}>Credit Agreement Summary</Text>
            {data1?.CreditAgreementSummary?.map((agreement, idx) => (
              <View key={idx}>
                <Text style={styles.bodyText}>Date Account Opened: {agreement.DateAccountOpened}</Text>
                <Text style={styles.bodyText}>Subscriber Name: {agreement.SubscriberName}</Text>
                <Text style={styles.bodyText}>Account No: {agreement.AccountNo}</Text>
                <Text style={styles.bodyText}>Opening Balance: {agreement.OpeningBalanceAmt}</Text>
                <Text style={styles.bodyText}>Account Status: {agreement.AccountStatus}</Text>
                <Text style={styles.bodyText}>Performance Status: {agreement.PerformanceStatus}</Text>
              </View>
            ))}

            {/* Account Monthly Payment History Header */}
            <Text style={styles.header}>Account Monthly Payment History Header</Text>
            {data1?.AccountMonthlyPaymentHistoryHeader?.map((header, idx) => (
              <View key={idx}>
                <Text style={styles.bodyText}>Table Name: {header.TableName}</Text>
                <Text style={styles.bodyText}>Display Text: {header.DisplayText}</Text>
              </View>
            ))}

            {/* Account Monthly Payment History */}
            <Text style={styles.header}>Account Monthly Payment History</Text>
            {data1?.AccountMonthlyPaymentHistory?.map((history, idx) => (
              <View key={idx}>
                <Text style={styles.bodyText}>Header: {history.Header}</Text>
                <Text style={styles.bodyText}>Date Account Opened: {history.DateAccountOpened}</Text>
                <Text style={styles.bodyText}>Account No: {history.AccountNo}</Text>
                <Text style={styles.bodyText}>Opening Balance: {history.OpeningBalanceAmt}</Text>
                <Text style={styles.bodyText}>Amount Overdue: {history.AmountOverdue}</Text>
              </View>
            ))}

            {/* Guarantor Details */}
            <Text style={styles.header}>Guarantor Details</Text>
            {data1?.GuarantorDetails?.length === 0 ? (
              <Text style={styles.bodyText}>No guarantors available.</Text>
            ) : (
              data1?.GuarantorDetails?.map((guarantor, idx) => (
                <View key={idx}>
                  <Text style={styles.bodyText}>Name: {guarantor.GuarantorFirstName} {guarantor.GuarantorOtherName}</Text>
                  <Text style={styles.bodyText}>National ID: {guarantor.GuarantorNationalIDNo}</Text>
                  <Text style={styles.bodyText}>Gender: {guarantor.GuarantorGender}</Text>
                </View>
              ))
            )}

            {/* Enquiry History */}
            <Text style={styles.header}>Enquiry History</Text>
            {data1?.EnquiryHistoryTop?.length === 0 ? (
              <Text style={styles.bodyText}>No enquiry history available.</Text>
            ) : (
              data1?.EnquiryHistoryTop?.map((enquiry, idx) => (
                <View key={idx}>
                  <Text style={styles.bodyText}>Enquiry Date: {enquiry.DateRequested}</Text>
                  <Text style={styles.bodyText}>Enquiry Reason: {enquiry.EnquiryReason}</Text>
                  <Text style={styles.bodyText}>Company Telephone: {enquiry.CompanyTelephoneNo}</Text>
                </View>
              ))
            )}

            {/* Identification History */}
            <Text style={styles.header}>Identification History</Text>
            {data1?.IdentificationHistory?.map((identification, idx) => (
              <View key={idx}>
                <Text style={styles.bodyText}>Identification Number: {identification.IdentificationNumber}</Text>
                <Text style={styles.bodyText}>Identification Type: {identification.IdentificationType}</Text>
              </View>
            ))}

            {/* Address History */}
            <Text style={styles.header}>Address History</Text>
            {data1?.AddressHistory?.map((address, idx) => (
              <View key={idx}>
                <Text style={styles.bodyText}>Address 1: {address.Address1}</Text>
                <Text style={styles.bodyText}>Address 2: {address.Address2}</Text>
              </View>
            ))}

            {/* Employment History */}
            <Text style={styles.header}>Employment History</Text>
            {data1?.EmploymentHistory?.map((employment, idx) => (
              <View key={idx}>
                <Text style={styles.bodyText}>Employer Detail: {employment.EmployerDetail}</Text>
                <Text style={styles.bodyText}>Occupation: {employment.Occupation}</Text>
              </View>
            ))}

            {/* Telephone History */}
            <Text style={styles.header}>Telephone History</Text>
            {data1?.TelephoneHistory?.length === 0 ? (
              <Text style={styles.bodyText}>No telephone history available.</Text>
            ) : (
              data1?.TelephoneHistory?.map((telephone, idx) => (
                <View key={idx}>
                  <Text style={styles.bodyText}>Telephone Number: {telephone.TelephoneNumber}</Text>
                </View>
              ))
            )}

            {/* Enquiry Details */}
            <Text style={styles.header}>Enquiry Details</Text>
            {data1?.EnquiryDetails?.length === 0 ? (
              <Text style={styles.bodyText}>No enquiry details available.</Text>
            ) : (
              data1?.EnquiryDetails?.map((enquiryDetail, idx) => (
                <View key={idx}>
                  <Text style={styles.bodyText}>Enquiry Type: {enquiryDetail.EnquiryType}</Text>
                  <Text style={styles.bodyText}>Enquiry Date: {enquiryDetail.EnquiryDate}</Text>
                </View>
              ))
            )}
          </View>
        ))}
      </Page>
      <Page >
      <Text style={styles.bodyText}>Enquiry Type: </Text>
                  <Text style={styles.bodyText}>Enquiry Date: </Text>
                
      </Page>
    </Document>
  );
};

export default PdfTest2;
