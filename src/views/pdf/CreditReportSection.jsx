import { Document, Page, Text, View, StyleSheet, Image, Font } from '@react-pdf/renderer';

Font.register({
  family: 'Trebuchet',
  fonts: [
    {
      src: `./../../assets/trebuchet/Trebuchet-MS.ttf`
    },
    {
      src: `./../../assets/trebuchet/Trebuchet-MS-Bold.ttf`,
      fontWeight: 'bold'
    },
    {
      src: `./../../assets/trebuchet/Trebuchet-MS-Italic.ttf`,
      fontWeight: 'normal',
      fontStyle: 'italic'
    },
    {
      src: `./../../assets/trebuchet/Trebuchet-MS-Bold-Italic.ttf`,
      fontWeight: 'bold',
      fontStyle: 'italic'
    }
  ]
})

const styles = StyleSheet.create({
  page: {
    padding: 30,
    color: '#666',
    fontFamily:'Trebuchet'
  },
  pageNumber: {
    position: 'absolute',
    fontSize: 8,
    bottom: 10,
    flexDirection: "row",
    gap: 50,
    justifyContent: "space-between",
    color: 'black',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 30,
  },
  logo: {
    fontSize: 20,
    color: '#003876',
  },
  address: {
    fontSize: 8,
    color: '#333',
    textAlign: 'right',
  },
  section: {
    marginBottom: 14,
  },
  sectionHeader: {
    color: '#FF6B00',
    flexDirection: "row",
    marginBottom: 5,
    width: "100%"
  },
  sectionTitle: {
    borderTop: '1px solid #E0E0E0',
    borderRight: '1px solid #E0E0E0',
    paddingTop: 6,
    fontSize: 12,
    color: '#FF6B00',
    fontWeight: 'bold',
    display: 'inline',
    width: '40%',
  },
  otherSectionTitle: {
    borderTop: '1px solid #E0E0E0',
    borderRight: '1px solid #E0E0E0',
    paddingTop: 6,
    fontSize: 12,
    color: '#FF6B00',
    fontWeight: 'bold',
    display: 'inline',
    width: '33%',
  },
  sectionTitleBorder: {
    borderBottom: '1px solid #E0E0E0',
    width: '50%',
  },
  sectionTitleOrderBorder: {
    borderBottom: '1px solid #E0E0E0',
    width: '60%',
  },
  sectionTitleImage: {
    borderLeft: '1px solid #E0E0E0',
    borderTop: '1px solid #E0E0E0',
    width: '30%',
    fontSize: 14,
    padding: 2,
    paddingTop: 6,

    color: '#FF6B00',
  },
  sectionDescription: {
    fontSize: 9,
    fontStyle: 'italic',
    color: '#FF6B00',
    marginBottom: 8,
  },
  detailsGrid: {
    display: 'flex',
    flexDirection: 'column',
    flexWrap: 'wrap',
  },
  detailRow: {
    width: '100%',
    flexDirection: 'row',
  },
  PersonaldetailsGrid: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',


  },
  PersonaldetailRow: {
    width: '50%',
    flexDirection: 'row',
  },
  Personaldetaillabel: {
    width: '50%',
    fontSize: 9,
    color: '#333',
    fontWeight: 'bold',
    backgroundColor: '#F5F5F5',
    padding: 4,
    borderBottom: '1px solid white',
  },
  Personaldetailvalue: {
    backgroundColor: 'white',
    width: '50%',
    fontSize: 9,
    color: '#666',
    padding: 4,
    borderTop: '1px solid #E0E0E0',

  },
  Personaldetailsummary: {
    fontSize: 9,
    fontStyle: 'italic',
    color: '#333',
    marginBottom: 8,
  },
  fullWidthRow: {
    width: '100%',
    flexDirection: 'row',
    padding: 4,
    backgroundColor: '#F5F5F5',
    borderBottom: '1px solid #E0E0E0',
  },
  label: {
    width: '40%',
    fontSize: 9,
    color: '#333',
    fontWeight: 'bold',
    backgroundColor: '#F5F5F5',
    padding: 4,
    borderBottom: '1px solid white',
  },
  value: {
    backgroundColor: 'white',
    width: '50%',
    fontSize: 9,
    color: '#666',
    padding: 4,
    borderBottom: '1px solid #E0E0E0',

  },
  table: {
    width: '100%',
    marginTop: 5,
  },
  tableHeader: {
    flexDirection: 'row',
    gap: 2,
  },
  tableHeaderCell: {

    fontSize: 9,
    width: 170,
    fontWeight: 'bold',
    backgroundColor: '#F5F5F5',
    padding: 5,
    color: '#333',
  },
  tableHeaderCell2: {
    flex: 1,
    fontSize: 9,
    width: 170,
    fontWeight: 'bold',
    backgroundColor: '#F5F5F5',
    padding: 5,
    color: '#333',
  },
  consumerImage: {
    width: 100,
    height: 120,
    border: '1px solid #E0E0E0',
  },
  enquiryheader: {
    flexDirection: 'row',
  },

  // CreditAccountSummary
  CreditAccountSummaryenquiryheader: {
    flexDirection: 'row',
  },
  CreditAccountSummarydetailsGrid: {
    display: 'flex',
    flexDirection: 'column',
    // flexWrap: 'wrap',


  },
  CreditAccountSummarydetailRow: {
    width: '100%',
    flexDirection: 'row',
  },
  CreditAccountSummarylabel: {
    width: '48%',
    fontSize: 9,
    color: '#333',
    fontWeight: 'bold',
    backgroundColor: '#F5F5F5',
    padding: 4,
    borderBottom: '1px solid white',
  },
  CreditAccountSummaryvalue: {
    backgroundColor: 'white',
    width: '16.6%',
    fontSize: 9,
    color: '#666',
    padding: 4,
    borderBottom: '1px solid #E0E0E0',

  },

  // CreditAccountRating
  CreditAccountRatingenquiryheader: {
    flexDirection: 'row',


  },
  CreditAccountRatingdetailsGrid: {
    display: 'flex',
    flexDirection: 'column',
    // flexWrap: 'wrap',

  },
  CreditAccountRatingdetailRow: {
    width: '100%',
    flexDirection: 'row',

  },
  CreditAccountRatinglabel: {
    width: '50%',
    fontSize: 9,
    color: '#333',
    fontWeight: 'bold',
    backgroundColor: '#F5F5F5',
    padding: 4,
    borderBottom: '1px solid white',
  },
  CreditAccountRatingvalueperforming: {
    backgroundColor: 'white',
    width: '25%',
    fontSize: 9,
    color: 'green',
    textAlign: "center",
    padding: 4,
    borderBottom: '1px solid #E0E0E0',

  },
  CreditAccountRatingvaluenonperforming: {
    backgroundColor: 'white',
    width: '25%',
    fontSize: 9,
    color: 'red',
    textAlign: "center",
    padding: 4,
    borderBottom: '1px solid #E0E0E0',

  },

  // Credit Agreements Summary 
  CreditAgreementSummaryenquiryheader: {
    flexDirection: 'row',
    backgroundColor: '#F5F5F5',

  },
  CreditAgreementSummarydetailsGrid: {
    display: 'flex',
    flexDirection: 'column',
    flexWrap: 'wrap',


  },
  CreditAgreementSummarydetailRow: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center', // Ensure all cells have the same height
    borderBottomWidth: 1,
    borderBottomColor: '#E0E0E0',
  },
  
  CreditAgreementSummarySubscriberName: {
    width: '13%',
    fontSize: 8,
    color: '#333',
    fontWeight: 'bold',
    padding: 4,
    borderRightColor: '#E0E0E0',
    textAlign: 'center',
    textAlignVertical: 'center', // Align text vertically in the middle
  },
  CreditAgreementsSummaryAccountNumber: {
    width: '18%',
    fontSize: 8,
    color: '#333',
    fontWeight: 'bold',
    padding: 4,
    borderRightColor: '#E0E0E0',
    textAlign: 'center',
    textAlignVertical: 'center',
  },
  CreditAgreementSummaryCurrency: {
    width: '10%',
    fontSize: 9,
    color: '#666',
    padding: 4,
    borderRightColor: '#E0E0E0',
    textAlign: 'center',
    textAlignVertical: 'center',
  },
  CreditAgreementAvailedLimit: {
    width: '10%',
    fontSize: 9,
    color: '#666',
    padding: 4,
    borderRightColor: '#E0E0E0',
    textAlign: 'center',
    textAlignVertical: 'center',
  },
  CreditAgreementOustandingBalance: {
    width: '10%',
    fontSize: 9,
    color: '#666',
    padding: 4,
    borderRightColor: '#E0E0E0',
    textAlign: 'center',
    textAlignVertical: 'center',
  },
  CreditAgreementInstalmentAmount: {
    width: '10%',
    fontSize: 9,
    color: '#666',
    padding: 4,
    borderRightColor: '#E0E0E0',
    textAlign: 'center',
    textAlignVertical: 'center',
  },
  CreditAgreementArrearAmount: {
    width: '10%',
    fontSize: 9,
    color: '#666',
    padding: 4,
    borderRightColor: '#E0E0E0',
    textAlign: 'center',
    textAlignVertical: 'center',
  },
  CreditAgreementsFacilityClassification: {
    width: '10%',
    fontSize: 9,
    color: '#666',
    padding: 4,
    borderRightColor: '#E0E0E0',
    textAlign: 'center',
    textAlignVertical: 'center',
  },
  CreditAgreementsAccountStatus: {
    width: '10%',
    fontSize: 9,
    color: '#666',
    padding: 4,
    textAlign: 'center',
    textAlignVertical: 'center',
  },
  CreditAgreementSummarySubscriberNameHeader: {
    width: '13%',
    fontSize: 8,
    color: '#333',
    fontWeight: 'bold',
    padding: 4,
    borderRightColor: '#E0E0E0',
    textAlign: 'center',
    textAlignVertical: 'center', // Align text vertically in the middle
  },
  CreditAgreementsSummaryAccountNumberHeader: {
    width: '18%',
    fontSize: 8,
    color: '#333',
    fontWeight: 'bold',
    padding: 4,
    textAlign: 'center',
    textAlignVertical: 'center',
  },
  CreditAgreementSummaryCurrencyHeader: {
    width: '10%',
    fontSize: 9,
    color: '#666',
    padding: 4,
    textAlign: 'center',
    textAlignVertical: 'center',
  },
  CreditAgreementSummaryAvailedLimitHeader: {
    width: '10%',
    fontSize: 9,
    color: '#666',
    padding: 4,
    textAlign: 'center',
    textAlignVertical: 'center',
  },
  CreditAgreementSummaryOustandingBalanceHeader: {
    width: '10%',
    fontSize: 9,
    color: '#666',
    padding: 4,
    textAlign: 'center',
    textAlignVertical: 'center',
  },
  CreditAgreementSummaryInstalmentAmountHeader: {
    width: '10%',
    fontSize: 9,
    color: '#666',
    padding: 4,
    textAlign: 'center',
    textAlignVertical: 'center',
  },
  CreditAgreementSummaryArrearAmountHeader: {
    width: '10%',
    fontSize: 9,
    color: '#666',
    padding: 4,
    textAlign: 'center',
    textAlignVertical: 'center',
  },
  CreditAgreementsummaryFacilityClassificationHeader: {
    width: '10%',
    fontSize: 9,
    color: '#666',
    padding: 4,
    textAlign: 'center',
    textAlignVertical: 'center',
  },
  CreditAgreementSummaryAccountStatusHeader: {
    width: '10%',
    fontSize: 9,
    color: '#666',
    padding: 4,
    textAlign: 'center',
    textAlignVertical: 'center',
    backgroundColor: '#F5F5F5',

  },

  //  {/* Credit Agreement */}
  creditAgreementsGrid: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    width:'100%'
  },
  creditAgreementsRow: {
    width: '40%',
    flexDirection: 'row',
  },
  creditAgreementsfirstRow: {
    width: '60%',
    flexDirection: 'row',
  },

  creditAgreementsfirstlabel: {
    width: '32%',
    fontSize: 9,
    color: '#333',
    fontWeight: 'bold',
    backgroundColor: '#F5F5F5',
    padding: 4,
    borderBottom: '1px solid white',
  },
  creditAgreementsfirstvalue: {
    backgroundColor: 'white',
    width: '68%',
    fontSize: 9,
    color: '#666',
    padding: 4,
    borderTop: '1px solid #E0E0E0',

  },
  creditAgreementslabel: {
    width: '55%',
    fontSize: 9,
    color: '#333',
    fontWeight: 'bold',
    backgroundColor: '#F5F5F5',
    padding: 4,
    borderBottom: '1px solid white',
  },
  creditAgreementsvalue: {
    backgroundColor: 'white',
    width: '45%',
    fontSize: 9,
    color: '#666',
    padding: 4,
    borderTop: '1px solid #E0E0E0',

  },
  creditAgreementssummary: {
    fontSize: 9,
    fontStyle: 'italic',
    color: '#333',
    marginBottom: 8,
  },


  // 24MonthsPaymentHistory
  '24MonthsPaymentHistoryTable': {
    display: 'table',
    width: 'auto',
    borderStyle: 'solid',
    borderWidth: 1,
    borderRightWidth: 0,
    borderBottomWidth: 0,
    borderColor: '#FFFFFF', // White borders
  },
  '24MonthsPaymentHistoryTableRow': {
    flexDirection: 'row',
  },
  '24MonthsPaymentHistoryTableCol': {
    width: '8.33%',
    borderStyle: 'solid',
    borderWidth: 1,
    borderLeftWidth: 0,
    borderTopWidth: 0,
    borderColor: '#FFFFFF', // White borders
  },
  '24MonthsPaymentHistoryTableCell': {
    margin: 'auto',
    // marginTop: 5,
    paddingVertical:5,
    fontSize: 8,
  },
  dashedHR: {
    borderBottomWidth: 1,
    borderBottomColor: '#000',
    borderBottomStyle: 'dashed',
    marginVertical: 3,
  },
  cellOK: {
    backgroundColor: 'green', // Light green background for OK
    color:"white",
    textDecorationColor:"white"
  },
  cellND: {
    backgroundColor: '#ADD8E6', // Light blue background for ND
    color: '#666',

  },







  // 24MonthsPaymentHistorystats
  stats24MonthsPaymentHistorySection: {
    marginBottom: 20,
  },
  stats24MonthsPaymentHistoryTitle: {
    fontSize: 12,
    marginBottom: 10,
    color: '#FF6B00',
  },
  stats24MonthsPaymentHistoryRow: {
    flexDirection: 'row',
    marginBottom: 2,
  },
  stats24MonthsPaymentHistoryColumn: {
    flex: 1,
  },
  stats24MonthsPaymentHistoryHeader: {
    padding: 8,
    marginBottom: 4,
  },
  stats24MonthsPaymentHistoryDescription: {
    padding: 4,
  },
  // Microfinance Banks styles
  stats24MonthsPaymentHistoryOK: {
    backgroundColor: '#008000',
  },
  stats24MonthsPaymentHistory30Below: {
    backgroundColor: '#006400',
  },
  stats24MonthsPaymentHistory31to60: {
    backgroundColor: '#FFD700',
  },
  stats24MonthsPaymentHistory61to90: {
    backgroundColor: '#FFA500',
  },
  stats24MonthsPaymentHistory91Above: {
    backgroundColor: '#FF0000',
  },
  stats24MonthsPaymentHistoryND: {
    backgroundColor: '#ADD8E6',
  },
  // Commercial Banks styles
  stats24MonthsPaymentHistoryComOK: {
    backgroundColor: '#008000',
  },
  stats24MonthsPaymentHistoryCom90Below: {
    backgroundColor: '#006400',
  },
  stats24MonthsPaymentHistoryCom91to180: {
    backgroundColor: '#FFD700',
  },
  stats24MonthsPaymentHistoryCom181to365: {
    backgroundColor: '#FFA500',
  },
  stats24MonthsPaymentHistoryCom365Above: {
    backgroundColor: '#FF0000',
  },
  stats24MonthsPaymentHistoryComND: {
    backgroundColor: '#ADD8E6',
  },
  stats24MonthsPaymentHistoryWhiteText: {
    color: 'white',
    fontSize: 10,
    textAlign: 'center',
  },
  stats24MonthsPaymentHistoryBlackText: {
    color: 'black',
    fontSize: 10,
    textAlign: 'center',
  },
  stats24MonthsPaymentHistoryDescriptionText: {
    fontSize: 8,
    textAlign: 'center',
    color: '#333',
  },

  // Guarantor Details
  GuarantorDetailslabel: {
    width: '50%',
    fontSize: 9,
    color: '#333',
    fontWeight: 'bold',
    backgroundColor: '#F5F5F5',
    padding: 4,
    borderBottom: '1px solid white',
  },
  GuarantorDetailsvalue: {
    backgroundColor: 'white',
    width: '50%',
    fontSize: 9,
    textAlign: "center",
    padding: 4,
    borderBottom: '1px solid #E0E0E0',

  },


  // LatestGuarantorDetails
  LatestGuarantorDetailslabel: {
    width: '25%',
    fontSize: 9,
    color: '#333',
    fontWeight: 'bold',
    backgroundColor: '#F5F5F5',
    padding: 4,
    borderBottom: '1px solid white',
  },
  LatestGuarantorDetailsvalue: {
    backgroundColor: 'white',
    width: '25%',
    fontSize: 9,
    textAlign: "center",
    padding: 4,
    borderBottom: '1px solid #E0E0E0',

  },




  // addreshistory
  AddressHistorytable: {
    display: 'table',
    width: '100%',
    borderStyle: 'solid',
    borderWidth: 1,
    borderColor: '#e5e7eb',
  },
  AddressHistorytableRow: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: '#e5e7eb',
    // minHeight: 35,
    alignItems: 'center',
  },
  AddressHistorytableHeader: {
    backgroundColor: '#f3f4f6',
  },
  AddressHistorytableCol: {
    width: '16.66%',
    padding: 4,
    fontSize: 8,
    borderRightWidth: 1,
    borderRightColor: '#e5e7eb',
    borderLeftWidth: 0,
    borderLeftColor: '#e5e7eb',
  },
  AddressHistorytableColFirst: {
    borderLeftWidth: 0,
  },
  AddressHistorytableColLast: {
    borderRightWidth: 0,
  },
  AddressHistorytableCell: {
    fontSize: 8,
    color: '#374151',
  },



  // collateralinformation
  collateralinformationtable: {
    display: 'table',
    width: '100%',
    borderStyle: 'solid',
    borderWidth: 1,
    borderColor: '#e5e7eb',
  },
  collateralinformationtableRow: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: '#e5e7eb',
    alignItems: 'center',
  },
  collateralinformationtableHeader: {
    backgroundColor: '#f3f4f6',
  },
  collateralinformationtableCol: {
    width: '25%',
    padding: 4,
    fontSize: 8,
    borderRightWidth: 1,
    borderRightColor: '#e5e7eb',
    borderLeftWidth: 0,
    borderLeftColor: '#e5e7eb',
  },
  collateralinformationtableColFirst: {
    borderLeftWidth: 0,
  },
  collateralinformationtableColLast: {
    borderRightWidth: 0,
  },
  collateralinformationtableCell: {
    fontSize: 8,
    color: '#374151',
  },


  // Dishonoured Cheque
  dishonouredchequetable: {
    display: 'table',
    width: '100%',
    borderStyle: 'solid',
    borderWidth: 1,
    borderColor: '#e5e7eb',
  },
  dishonouredchequetableRow: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: '#e5e7eb',
    alignItems: 'center',
  },
  dishonouredchequetableHeader: {
    backgroundColor: '#f3f4f6',
  },
  dishonouredchequetableCol: {
    width: '25%',
    padding: 4,
    fontSize: 8,
    borderRightWidth: 1,
    borderRightColor: '#e5e7eb',
    borderLeftWidth: 0,
    borderLeftColor: '#e5e7eb',
  },
  dishonouredchequetableColFirst: {
    borderLeftWidth: 0,
  },
  dishonouredchequetableColLast: {
    borderRightWidth: 0,
  },
  dishonouredchequetableCell: {
    fontSize: 8,
    color: '#374151',
  },


  // company directorship

  companydirectorshiplabel: {
    width: '50%',
    fontSize: 9,
    color: '#333',
    fontWeight: 'bold',
    backgroundColor: '#F5F5F5',
    padding: 4,
    borderBottom: '1px solid white',
  },
  companydirectorshipvalue: {
    backgroundColor: 'white',
    width: '50%',
    fontSize: 9,
    textAlign: "center",
    padding: 4,
    borderBottom: '1px solid #E0E0E0',

  },

    // Enquiry History in Last 12 Months
    enquiryhistoryinlast12monthstable: {
      display: 'table',
      width: '100%',
      borderStyle: 'solid',
      borderWidth: 1,
      borderColor: '#e5e7eb',
    },
    enquiryhistoryinlast12monthtableRow: {
      flexDirection: 'row',
      borderBottomWidth: 1,
      borderBottomColor: '#e5e7eb',
      alignItems: 'center',
    },
    enquiryhistoryinlast12monthtableHeader: {
      backgroundColor: '#f3f4f6',
    },
    enquiryhistoryinlast12monthtableCol: {
      width: '25%',
      padding: 4,
      fontSize: 8,
      borderRightWidth: 1,
      borderRightColor: '#e5e7eb',
      borderLeftWidth: 0,
      borderLeftColor: '#e5e7eb',
    },
    enquiryhistoryinlast12monthtableColFirst: {
      borderLeftWidth: 0,
    },
    enquiryhistoryinlast12monthtableColLast: {
      borderRightWidth: 0,
    },
    enquiryhistoryinlast12monthtableCell: {
      fontSize: 8,
      color: '#374151',
    },



    // Identification History

    identificationhistorytable: {
      display: 'table',
      width: '100%',
      borderStyle: 'solid',
      borderWidth: 1,
      borderColor: '#e5e7eb',
    },
    identificationhistorytableRow: {
      flexDirection: 'row',
      borderBottomWidth: 1,
      borderBottomColor: '#e5e7eb',
      alignItems: 'center',
    },
    identificationhistorytableHeader: {
      backgroundColor: '#f3f4f6',
    },
    identificationhistorytableCol: {
      width: '33.333%',
      padding: 4,
      fontSize: 8,
      borderRightWidth: 1,
      borderRightColor: '#e5e7eb',
      borderLeftWidth: 0,
      borderLeftColor: '#e5e7eb',
    },
    identificationhistorytableColFirst: {
      borderLeftWidth: 0,
    },
    identificationhistorytableColLast: {
      borderRightWidth: 0,
    },
    identificationhistorytableCell: {
      fontSize: 8,
      color: '#374151',
    },


    // Employment History

    employmenthistorytable: {
      display: 'table',
      width: '100%',
      borderStyle: 'solid',
      borderWidth: 1,
      borderColor: '#e5e7eb',
    },
    employmenthistorytableRow: {
      flexDirection: 'row',
      borderBottomWidth: 1,
      borderBottomColor: '#e5e7eb',
      alignItems: 'center',
    },
    employmenthistorytableHeader: {
      backgroundColor: '#f3f4f6',
    },
    employmenthistorytableCol: {
      width: '33.333%',
      padding: 4,
      fontSize: 8,
      borderRightWidth: 1,
      borderRightColor: '#e5e7eb',
      borderLeftWidth: 0,
      borderLeftColor: '#e5e7eb',
    },
    employmenthistorytableColFirst: {
      borderLeftWidth: 0,
    },
    employmenthistorytableColLast: {
      borderRightWidth: 0,
    },
    employmenthistorytableCell: {
      fontSize: 8,
      color: '#374151',
    },


    
  // Telephone History

  telephonehistorytable: {
    display: 'table',
    width: '100%',
    borderStyle: 'solid',
    borderWidth: 1,
    borderColor: '#e5e7eb',
  },
  telephonehistorytableRow: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: '#e5e7eb',
    // minHeight: 35,
    alignItems: 'center',
  },
  telephonehistorytableHeader: {
    backgroundColor: '#f3f4f6',
  },
  telephonehistorytableCol: {
    width: '16.66%',
    padding: 4,
    fontSize: 8,
    borderRightWidth: 1,
    borderRightColor: '#e5e7eb',
    borderLeftWidth: 0,
    borderLeftColor: '#e5e7eb',
  },
  telephonehistorytableColFirst: {
    borderLeftWidth: 0,
  },
  telephonehistorytableColLast: {
    borderRightWidth: 0,
  },
  telephonehistorytableCell: {
    fontSize: 8,
    color: '#374151',
  },

  

});
const getFormattedDate = () => {
  const now = new Date();
  return now.toLocaleString('en-GB', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: false,
  });
};
const addressData = [
  {
    bureauUpdate: '13/05/2024',
    address: 'Residential',
    addressLine1: '20 DESMOND STREET OTUN AKUTE OGUN STATE',
    addressLine2: '20 DESMOND STREET OTUN AKUTE OGUN STATE',
    addressLine3: 'EZEAGU',
    addressLine4: 'Enugu',
  },
  {
    bureauUpdate: '12/11/2024',
    address: 'Residential',
    addressLine1: '20 DESMOND STREET OTUN AKUTE OGUN STATE',
    addressLine2: '20 DESMOND STREET OTUN AKUTE OGUN STATE',
    addressLine3: 'EZEAGU',
    addressLine4: 'Enugu',
  },
  {
    bureauUpdate: '12/02/2015',
    address: 'Residential',
    addressLine1: '9 AKUTE ODO ROAD AKUT',
    addressLine2: '',
    addressLine3: 'LAGOS',
    addressLine4: '',
  },
  {
    bureauUpdate: '04/03/2022',
    address: 'Residential',
    addressLine1: '9 AKUTE ODO ROAD AKUT',
    addressLine2: 'AKUTE',
    addressLine3: 'AKUTE',
    addressLine4: '',
  },
  {
    bureauUpdate: '13/05/2024',
    address: 'Postal',
    addressLine1: '20 DESMOND STREET OTUN AKUTE OGUN STATE',
    addressLine2: '20 DESMOND STREET OTUN AKUTE OGUN STATE',
    addressLine3: 'EZEAGU',
    addressLine4: 'Enugu',
  },
  {
    bureauUpdate: '12/11/2024',
    address: 'Postal',
    addressLine1: '20 DESMOND STREET ',
    addressLine2: '20 DESMOND STREE',
    addressLine3: 'EZEAGU',
    addressLine4: 'Enugu',
  },
];

// The document structure with 1000+ pages
const CreditReportSection = ({ totalPages = 500 }) => (
  <Document>
    {[...Array(totalPages)].map((_, i) => (
      <Page key={i} size="A4" style={styles.page}>
         <View style={styles.section}>
             <View style={styles.sectionHeader}>
               <Text style={styles.otherSectionTitle}>Credit Agreements</Text>
               <Text style={styles.sectionTitleOrderBorder}></Text>
             </View>
             <Text style={styles.sectionDescription}>
             This sections includes a 24 months payment beviour of all credit agreements as reported by the Credit Providers
             </Text>
             <Text style={styles.creditAgreementssummary}>
             Details of Credit Agreement with "ECOBANK Nigeria PLC Lagos" for Account Number: 3802001946        </Text>
             <Text style={styles.sectionDescription}> Acccount Information   </Text>
     
             <View style={styles.creditAgreementsGrid}>
               <View style={styles.creditAgreementsfirstRow}>
                 <Text style={styles.creditAgreementsfirstlabel}>Subscriber Name</Text>
                 <Text style={styles.creditAgreementsfirstvalue}>FCR123456789</Text>
               </View>
               <View style={styles.creditAgreementsRow}>
                 <Text style={styles.creditAgreementslabel}>Account Number</Text>
                 <Text style={styles.creditAgreementsvalue}>UTN987654321</Text>
               </View>
               <View style={styles.creditAgreementsfirstRow}>
                 <Text style={styles.creditAgreementsfirstlabel}>Effective Date</Text>
                 <Text style={styles.creditAgreementsfirstvalue}>Doe</Text>
               </View>
               <View style={styles.creditAgreementsRow}>
                 <Text style={styles.creditAgreementslabel}>Bureau Updated Date</Text>
                 <Text style={styles.creditAgreementsvalue}>John James</Text>
               </View>
               <View style={styles.creditAgreementsfirstRow}>
                 <Text style={styles.creditAgreementsfirstlabel}>Type of Credit Facilit</Text>
                 <Text style={styles.creditAgreementsfirstvalue}>John</Text>
               </View>
               <View style={styles.creditAgreementsRow}>
                 <Text style={styles.creditAgreementslabel}>Currency</Text>
                 <Text style={styles.creditAgreementsvalue}>12345678901</Text>
               </View>
               <View style={styles.creditAgreementsfirstRow}>
                 <Text style={styles.creditAgreementsfirstlabel}>Credit / Debit</Text>
                 <Text style={styles.creditAgreementsfirstvalue}>01/01/1980</Text>
               </View>
               <View style={styles.creditAgreementsRow}>
                 <Text style={styles.creditAgreementslabel}>Loan Amount/Credit Limit</Text>
                 <Text style={styles.creditAgreementsvalue}>Male</Text>
               </View>
               <View style={styles.creditAgreementsfirstRow}>
                 <Text style={styles.creditAgreementsfirstlabel}>Current Balance </Text>
                 <Text style={styles.creditAgreementsfirstvalue}>Single</Text>
               </View>
               <View style={styles.creditAgreementsRow}>
                 <Text style={styles.creditAgreementslabel}>Instalment Amount</Text>
                 <Text style={styles.creditAgreementsvalue}>2</Text>
               </View>
               <View style={styles.creditAgreementsfirstRow}>
                 <Text style={styles.creditAgreementsfirstlabel}>Arrear Amount</Text>
                 <Text style={styles.creditAgreementsfirstvalue}>NIN123456789</Text>
               </View>
               <View style={styles.creditAgreementsRow}>
                 <Text style={styles.creditAgreementslabel}>Expiry Date</Text>
                 <Text style={styles.creditAgreementsvalue}>PEN987654321</Text>
               </View>
               <View style={styles.creditAgreementsfirstRow}>
                 <Text style={styles.creditAgreementsfirstlabel}>Facility Classification</Text>
                 <Text style={styles.creditAgreementsfirstvalue}>DRV123456789</Text>
               </View>
               <View style={styles.creditAgreementsRow}>
                 <Text style={styles.creditAgreementslabel}>Last Payment Date</Text>
                 <Text style={styles.creditAgreementsvalue}>A12345678</Text>
               </View>
             
               <View style={styles.creditAgreementsfirstRow}>
                 <Text style={styles.creditAgreementsfirstlabel}>Account Status</Text>
                 <Text style={styles.creditAgreementsfirstvalue}>Nigerian</Text>
               </View>
               <View style={styles.creditAgreementsRow}>
                 <Text style={styles.creditAgreementslabel}>Loan Duration </Text>
                 <Text style={styles.creditAgreementsvalue}>123 , Lagos, Nigeria</Text>
               </View>
           
               <View style={styles.creditAgreementsfirstRow}>
                 <Text style={styles.creditAgreementsfirstlabel}>Repayment Frequency</Text>
                 <Text style={styles.creditAgreementsfirstvalue}>+234 1 234 5678</Text>
               </View>
          
               <View style={styles.creditAgreementsRow}>
                 <Text style={styles.creditAgreementslabel}> </Text>
                 <Text style={styles.creditAgreementsvalue}> </Text>
               </View>
        
               
             
           
             </View>
           </View>
           <View> 
           <Text style={{ fontSize: 14, marginBottom: 4 }}>24 Months Payment History</Text>
           <View style={styles['24MonthsPaymentHistoryTable']}>
             <View style={styles['24MonthsPaymentHistoryTableRow']}>
               {['2025JAN', '2024DEC', '2024NOV', '2024OCT', '2024SEP', '2024AUG', '2024JUL', '2024JUN', '2024MAY', '2024APR', '2024MAR', '2024FEB'].map((month, index) => (
                 <View key={index} style={styles['24MonthsPaymentHistoryTableCol']}>
                   <Text style={styles['24MonthsPaymentHistoryTableCell']}>{month}</Text>
                 </View>
               ))}
             </View>
             <View style={styles['24MonthsPaymentHistoryTableRow']}>
               {['ND', 'OK', 'ND', 'OK', 'ND', 'OK', 'ND', 'ND', 'OK', 'OK', 'ND', 'ND'].map((value, index) => (
                 <View key={index} style={[styles['24MonthsPaymentHistoryTableCol'], value === 'OK' ? styles.cellOK : styles.cellND]}>
                   <Text style={styles['24MonthsPaymentHistoryTableCell']}>{value}</Text>
                 </View>
               ))}
             </View>
           </View>
           {/* Dashed horizontal rule */}
           <View style={styles.dashedHR} /> 
          
           </View>
     
     
     
           {/* // 24MonthsPaymentHistorystats */}
     
     
           <View style={styles.section}>
             <View style={styles.sectionHeader}>
               <Text style={styles.otherSectionTitle}>Payment Behaviour Definitions </Text>
               <Text style={styles.sectionTitleOrderBorder}></Text>
             </View>
             <Text style={styles.sectionDescription}>
             This section is a summary of payment definitions and colour status codes for Commercial Banks and Other Institutions        </Text>
            
             <View style={styles.stats24MonthsPaymentHistoryRow}>
               <View style={styles.stats24MonthsPaymentHistoryColumn}>
                 <View style={[styles.stats24MonthsPaymentHistoryHeader, styles.stats24MonthsPaymentHistoryOK]}>
                   <Text style={styles.stats24MonthsPaymentHistoryWhiteText}>OK</Text>
                 </View>
                 <View style={styles.stats24MonthsPaymentHistoryDescription}>
                   <Text style={styles.stats24MonthsPaymentHistoryDescriptionText}>Performing</Text>
                   <Text style={styles.stats24MonthsPaymentHistoryDescriptionText}>0 - 1 Month in Arrears</Text>
                   <Text style={styles.stats24MonthsPaymentHistoryDescriptionText}>(0 - 30 Days)</Text>
                 </View>
               </View>
               <View style={styles.stats24MonthsPaymentHistoryColumn}>
                 <View style={[styles.stats24MonthsPaymentHistoryHeader, styles.stats24MonthsPaymentHistory30Below]}>
                   <Text style={styles.stats24MonthsPaymentHistoryWhiteText}>30 and below</Text>
                 </View>
                 <View style={styles.stats24MonthsPaymentHistoryDescription}>
                   <Text style={styles.stats24MonthsPaymentHistoryDescriptionText}>Performing</Text>
                   <Text style={styles.stats24MonthsPaymentHistoryDescriptionText}>0 - 1 Month in Arrears</Text>
                   <Text style={styles.stats24MonthsPaymentHistoryDescriptionText}>(0 - 30 Days)</Text>
                 </View>
              
               </View>
               <View style={styles.stats24MonthsPaymentHistoryColumn}>
                 <View style={[styles.stats24MonthsPaymentHistoryHeader, styles.stats24MonthsPaymentHistory31to60]}>
                   <Text style={styles.stats24MonthsPaymentHistoryBlackText}>31 - 60</Text>
                 </View>
                 <View style={styles.stats24MonthsPaymentHistoryDescription}>
                   <Text style={styles.stats24MonthsPaymentHistoryDescriptionText}>Substandard</Text>
                   <Text style={styles.stats24MonthsPaymentHistoryDescriptionText}>2 Months in Arrears</Text>
                   <Text style={styles.stats24MonthsPaymentHistoryDescriptionText}>(31 - 60 Days)</Text>
                 </View>
               </View>
               <View style={styles.stats24MonthsPaymentHistoryColumn}>
                 <View style={[styles.stats24MonthsPaymentHistoryHeader, styles.stats24MonthsPaymentHistory61to90]}>
                   <Text style={styles.stats24MonthsPaymentHistoryWhiteText}>61 - 90</Text>
                 </View>
                 
                 <View style={styles.stats24MonthsPaymentHistoryDescription}>
                   <Text style={styles.stats24MonthsPaymentHistoryDescriptionText}>Doubtful</Text>
                   <Text style={styles.stats24MonthsPaymentHistoryDescriptionText}>3 Months in Arrears</Text>
                   <Text style={styles.stats24MonthsPaymentHistoryDescriptionText}>(61 - 90 Days)</Text>
                 </View>
            
               </View>
               <View style={styles.stats24MonthsPaymentHistoryColumn}>
                 <View style={[styles.stats24MonthsPaymentHistoryHeader, styles.stats24MonthsPaymentHistory91Above]}>
                   <Text style={styles.stats24MonthsPaymentHistoryWhiteText}>91 and above</Text>
                 </View>
                      <View style={styles.stats24MonthsPaymentHistoryDescription}>
                   <Text style={styles.stats24MonthsPaymentHistoryDescriptionText}>Lost</Text>
                   <Text style={styles.stats24MonthsPaymentHistoryDescriptionText}>4+ Months in Arrears</Text>
                 </View>
               </View>
               <View style={styles.stats24MonthsPaymentHistoryColumn}>
                 <View style={[styles.stats24MonthsPaymentHistoryHeader, styles.stats24MonthsPaymentHistoryND]}>
                   <Text style={styles.stats24MonthsPaymentHistoryBlackText}>ND</Text>
                 </View>
                 <View style={styles.stats24MonthsPaymentHistoryDescription}>
                   <Text style={styles.stats24MonthsPaymentHistoryDescriptionText}>No Data Supplied</Text>
                 </View>
               </View>
             </View>
           </View>
     
     
     
     
     
     
     
           <View style={styles.section}>
             <View style={styles.sectionHeader}>
               <Text style={styles.otherSectionTitle}>Payment Behaviour Definitions </Text>
               <Text style={styles.sectionTitleOrderBorder}></Text>
             </View>
             <Text style={styles.sectionDescription}>
             This section is a summary of payment definitions and colour status codes for Commercial Banks and Other Institutions        </Text>
             <View style={styles.stats24MonthsPaymentHistoryRow}>
               <View style={styles.stats24MonthsPaymentHistoryColumn}>
                 <View style={[styles.stats24MonthsPaymentHistoryHeader, styles.stats24MonthsPaymentHistoryComOK]}>
                   <Text style={styles.stats24MonthsPaymentHistoryWhiteText}>OK</Text>
                   
                 </View>
                 <View style={styles.stats24MonthsPaymentHistoryDescription}>
                   <Text style={styles.stats24MonthsPaymentHistoryDescriptionText}>Performing</Text>
                   <Text style={styles.stats24MonthsPaymentHistoryDescriptionText}>0 - 3 Months in Arrears</Text>
                   <Text style={styles.stats24MonthsPaymentHistoryDescriptionText}>(0 - 90 Days)</Text>
                 </View>
               </View>
               <View style={styles.stats24MonthsPaymentHistoryColumn}>
                 <View style={[styles.stats24MonthsPaymentHistoryHeader, styles.stats24MonthsPaymentHistoryCom90Below]}>
                   <Text style={styles.stats24MonthsPaymentHistoryWhiteText}>90 and below</Text>
                 </View>
                 
               </View>
               <View style={styles.stats24MonthsPaymentHistoryColumn}>
                 <View style={[styles.stats24MonthsPaymentHistoryHeader, styles.stats24MonthsPaymentHistoryCom91to180]}>
                   <Text style={styles.stats24MonthsPaymentHistoryBlackText}>91 - 180</Text>
                 </View>
                 <View style={styles.stats24MonthsPaymentHistoryDescription}>
                   <Text style={styles.stats24MonthsPaymentHistoryDescriptionText}>Substandard</Text>
                   <Text style={styles.stats24MonthsPaymentHistoryDescriptionText}>4 - 6 Months in Arrears</Text>
                   <Text style={styles.stats24MonthsPaymentHistoryDescriptionText}>(91 - 180 Days)</Text>
                 </View>
               </View>
               <View style={styles.stats24MonthsPaymentHistoryColumn}>
                 <View style={[styles.stats24MonthsPaymentHistoryHeader, styles.stats24MonthsPaymentHistoryCom181to365]}>
                   <Text style={styles.stats24MonthsPaymentHistoryWhiteText}>181 - 365</Text>
                 </View>
                 
                 <View style={styles.stats24MonthsPaymentHistoryDescription}>
                   <Text style={styles.stats24MonthsPaymentHistoryDescriptionText}>Doubtful</Text>
                   <Text style={styles.stats24MonthsPaymentHistoryDescriptionText}>7 - 12 Months in Arrears</Text>
                   <Text style={styles.stats24MonthsPaymentHistoryDescriptionText}>(181 - 365 Days)</Text>
                 </View>
               </View>
               <View style={styles.stats24MonthsPaymentHistoryColumn}>
                 <View style={[styles.stats24MonthsPaymentHistoryHeader, styles.stats24MonthsPaymentHistoryCom365Above]}>
                   <Text style={styles.stats24MonthsPaymentHistoryWhiteText}>365 and above</Text>
                 </View>
                 
                 <View style={styles.stats24MonthsPaymentHistoryDescription}>
                   <Text style={styles.stats24MonthsPaymentHistoryDescriptionText}>Lost</Text>
                   <Text style={styles.stats24MonthsPaymentHistoryDescriptionText}>13+ Months in Arrears</Text>
                   <Text style={styles.stats24MonthsPaymentHistoryDescriptionText}>(361+ Days)</Text>
                 </View>
               </View>
               <View style={styles.stats24MonthsPaymentHistoryColumn}>
                 <View style={[styles.stats24MonthsPaymentHistoryHeader, styles.stats24MonthsPaymentHistoryComND]}>
                   <Text style={styles.stats24MonthsPaymentHistoryBlackText}>ND</Text>
                 </View>
                 <View style={styles.stats24MonthsPaymentHistoryDescription}>
                   <Text style={styles.stats24MonthsPaymentHistoryDescriptionText}>No Data</Text>
                   <Text style={styles.stats24MonthsPaymentHistoryDescriptionText}>Supplied</Text>
                 </View>
               </View>
             </View>
           </View>
      </Page>
    ))}
  </Document>
);

export default CreditReportSection;
