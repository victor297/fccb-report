import { Document, Page, Text, View, StyleSheet, Image, Font } from '@react-pdf/renderer';
import authlogo from "@/assets/logo.png";
import ArialFont from '@/assets/arial/arial.ttf'; // Ensure this file exists

// Font.register({
//   family: 'Roboto',
//   fonts: [
//     {
//       src: 'https://fonts.gstatic.com/s/roboto/v27/KFOmCnqEu92Fr1Mu72xKOzY.woff2',
//     },
//   ],
// });
// Font.register({
//   family: 'Arial',
//   src: `./../../assets/arial/arial.ttf`,
// });
Font.register({
  family: 'Arial',
  src: ArialFont,
  fontWeight: 'normal',
  format: 'truetype',
});


const styles = StyleSheet.create({
  page: {
    padding: 30,
    color: '#666',
    // fontFamily:'Courier'
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
  creditAgreementslabel: {
    width: '45%',
    fontSize: 9,
    color: '#333',
    fontWeight: 'bold',
    backgroundColor: '#F5F5F5',
    padding: 4,
    borderBottom: '1px solid white',
  },
  creditAgreementsfirstvalue: {
    backgroundColor: 'white',
    width: '65%',
    fontSize: 9,
    color: '#666',
    padding: 4,
    borderTop: '1px solid #E0E0E0',

  },
  creditAgreementsvalue: {
    backgroundColor: 'white',
    width: '55%',
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


const CreditReport = () => (
  <Document>
    <Page size="A4" style={styles.page}>
      {/* Header */}
      <View style={styles.header} fixed>
        <View>
          <Text style={styles.logo}>FirstCentral Credit Bureau</Text>
        </View>
        <View>
          <Text style={styles.address}>
            37/37A Raymond Njoku Street, Ikoyi, Lagos,{'\n'}
            Nigeria{'\n'}
            Tel No: +234 (1) 453 4900 - 234 (1) 453 4901{'\n'}
            Email: info@firstcentralcreditbureau.com
          </Text>
        </View>
      </View>

      {/* Enquiry Input Details */}
      <View style={styles.section}>
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Enquiry Input Details</Text>
          <Text style={styles.sectionTitleBorder}></Text>
          <Text style={styles.sectionTitleImage}>Consumer Image</Text>
        </View>
        <Text style={styles.sectionDescription}>
          This section includes the user's search input details and matching rate.
        </Text>
        <View style={styles.enquiryheader}>

          <View style={styles.detailsGrid}>
            <View style={styles.detailRow}>
              <Text style={styles.label}>Enquiry Date</Text>
              <Text style={styles.value}>{new Date().toLocaleDateString()}</Text>
            </View>
            <View style={styles.detailRow}>
              <Text style={styles.label}>Enquiry Type</Text>
              <Text style={styles.value}>Credit Check</Text>
            </View>
            <View style={styles.detailRow}>
              <Text style={styles.label}>Subscriber Name</Text>
              <Text style={styles.value}>Sample Bank Ltd</Text>
            </View>
            <View style={styles.detailRow}>
              <Text style={styles.label}>Subscriber User Name</Text>
              <Text style={styles.value}>John Smith</Text>
            </View>
            <View style={styles.detailRow}>
              <Text style={styles.label}>Enquiry Input</Text>
              <Text style={styles.value}>BVN12345678</Text>
            </View>
            <View style={styles.detailRow}>
              <Text style={styles.label}>Enquiry Reason</Text>
              <Text style={styles.value}>New Credit Application</Text>
            </View>
            <View style={styles.detailRow}>
              <Text style={styles.label}>Matching Rate</Text>
              <Text style={styles.value}>100%</Text>
            </View>
          </View>
          <View >
            <Image style={styles.consumerImage} src="https://static.vecteezy.com/system/resources/thumbnails/036/324/708/small/ai-generated-picture-of-a-tiger-walking-in-the-forest-photo.jpg" />
          </View>
        </View>
      </View>

      {/* Subjects List */}
      <View style={styles.section}>
        <View style={styles.sectionHeader}>
          <Text style={styles.otherSectionTitle}>Subjects List</Text>
          <Text style={styles.sectionTitleOrderBorder}></Text>
        </View>
        <Text style={styles.sectionDescription}>
          The subjects list contains all consumers included in the search
        </Text>
        <View style={styles.table}>
          <View style={styles.tableHeader}>
            <Text style={styles.tableHeaderCell}>FirstCentral Ref No.</Text>
            <Text style={styles.tableHeaderCell2}>Subject Details</Text>
          </View>
          <View style={styles.tableHeader}>
            <Text style={styles.tableHeaderCell}>FirstCentral Ref No.</Text>
            <Text style={styles.tableHeaderCell2}>Subject Details</Text>
          </View>
        </View>
      </View>

      {/* Personal Details */}
    <View style={styles.section}>
        <View style={styles.sectionHeader}>
          <Text style={styles.otherSectionTitle}>Personal Details</Text>
          <Text style={styles.sectionTitleOrderBorder}></Text>
        </View>
        <Text style={styles.sectionDescription}>
          This section includes the consumer's demographic informations.
        </Text>
        <Text style={styles.Personaldetailsummary}>
          PERSONAL DETAILS SUMMARY: MAGBO REMIGUS
        </Text>
        <View style={styles.PersonaldetailsGrid}>
          <View style={styles.PersonaldetailRow}>
            <Text style={styles.Personaldetaillabel}>FirstCentral Reference Number</Text>
            <Text style={styles.Personaldetailvalue}>FCR123456789</Text>
          </View>
          <View style={styles.PersonaldetailRow}>
            <Text style={styles.Personaldetaillabel}>Unique Tracking Number</Text>
            <Text style={styles.Personaldetailvalue}>UTN987654321</Text>
          </View>
          <View style={styles.PersonaldetailRow}>
            <Text style={styles.Personaldetaillabel}>Surname</Text>
            <Text style={styles.Personaldetailvalue}>Doe</Text>
          </View>
          <View style={styles.PersonaldetailRow}>
            <Text style={styles.Personaldetaillabel}>Other Names</Text>
            <Text style={styles.Personaldetailvalue}>John James</Text>
          </View>
          <View style={styles.PersonaldetailRow}>
            <Text style={styles.Personaldetaillabel}>First Name</Text>
            <Text style={styles.Personaldetailvalue}>John</Text>
          </View>
          <View style={styles.PersonaldetailRow}>
            <Text style={styles.Personaldetaillabel}>Bank Verification Number(BVN)</Text>
            <Text style={styles.Personaldetailvalue}>12345678901</Text>
          </View>
          <View style={styles.PersonaldetailRow}>
            <Text style={styles.Personaldetaillabel}>Date Of Birth</Text>
            <Text style={styles.Personaldetailvalue}>01/01/1980</Text>
          </View>
          <View style={styles.PersonaldetailRow}>
            <Text style={styles.Personaldetaillabel}>Gender</Text>
            <Text style={styles.Personaldetailvalue}>Male</Text>
          </View>
          <View style={styles.PersonaldetailRow}>
            <Text style={styles.Personaldetaillabel}>Marital Status</Text>
            <Text style={styles.Personaldetailvalue}>Single</Text>
          </View>
          <View style={styles.PersonaldetailRow}>
            <Text style={styles.Personaldetaillabel}>No. Of Dependants</Text>
            <Text style={styles.Personaldetailvalue}>2</Text>
          </View>
          <View style={styles.PersonaldetailRow}>
            <Text style={styles.Personaldetaillabel}>National ID Number</Text>
            <Text style={styles.Personaldetailvalue}>NIN123456789</Text>
          </View>
          <View style={styles.PersonaldetailRow}>
            <Text style={styles.Personaldetaillabel}>PENCOMID ID</Text>
            <Text style={styles.Personaldetailvalue}>PEN987654321</Text>
          </View>
          <View style={styles.PersonaldetailRow}>
            <Text style={styles.Personaldetaillabel}>Driver's License Number</Text>
            <Text style={styles.Personaldetailvalue}>DRV123456789</Text>
          </View>
          <View style={styles.PersonaldetailRow}>
            <Text style={styles.Personaldetaillabel}>Passport Number</Text>
            <Text style={styles.Personaldetailvalue}>A12345678</Text>
          </View>
          <View style={styles.PersonaldetailRow}>
            <Text style={styles.Personaldetaillabel}>Other ID Number</Text>
            <Text style={styles.Personaldetailvalue}>OTH123456789</Text>
          </View>
          <View style={styles.PersonaldetailRow}>
            <Text style={styles.Personaldetaillabel}>Nationality</Text>
            <Text style={styles.Personaldetailvalue}>Nigerian</Text>
          </View>
          <View style={styles.PersonaldetailRow}>
            <Text style={styles.Personaldetaillabel}>Latest Residential Address</Text>
            <Text style={styles.Personaldetailvalue}>123 Sample Street, Lagos, Nigeria</Text>
          </View>
          <View style={styles.PersonaldetailRow}>
            <Text style={styles.Personaldetaillabel}>Latest Postal Address</Text>
            <Text style={styles.Personaldetailvalue}>P.O. Box 12345, Lagos, Nigeria</Text>
          </View>
          <View style={styles.PersonaldetailRow}>
            <Text style={styles.Personaldetaillabel}>Home Telephone</Text>
            <Text style={styles.Personaldetailvalue}>+234 1 234 5678</Text>
          </View>
          <View style={styles.PersonaldetailRow}>
            <Text style={styles.Personaldetaillabel}>Work Telephone</Text>
            <Text style={styles.Personaldetailvalue}>+234 1 234 5679</Text>
          </View>
          <View style={styles.PersonaldetailRow}>
            <Text style={styles.Personaldetaillabel}>Current Employer</Text>
            <Text style={styles.Personaldetailvalue}>Sample Company Ltd</Text>
          </View>
          <View style={styles.PersonaldetailRow}>
            <Text style={styles.Personaldetaillabel}>Property Ownership Type</Text>
            <Text style={styles.Personaldetailvalue}>Owned</Text>
          </View>
          <View style={styles.PersonaldetailRow}>
            <Text style={styles.Personaldetaillabel}>Email Address</Text>
            <Text style={styles.Personaldetailvalue}>john.doe@example.com</Text>
          </View>
          <View style={styles.PersonaldetailRow}>
            <Text style={styles.Personaldetaillabel}>Mobile Number</Text>
            <Text style={styles.Personaldetailvalue}>+234 801 234 5678</Text>
          </View>
        </View>
      </View> 

      {/* Delinquency Information Section Header */}
      <View style={styles.section}>
        <View style={styles.sectionHeader}>
          <Text style={styles.otherSectionTitle}>Delinquency Information</Text>
          <Text style={styles.sectionTitleOrderBorder}></Text>
        </View>

        <View style={styles.detailsGrid}>
          <View style={styles.detailRow}>
            <Text style={styles.label}>Subscriber Name</Text>
            <Text style={styles.value}>FirstCentral Data</Text>
          </View>
          <View style={styles.detailRow}>
            <Text style={styles.label}>Account Number</Text>
            <Text style={styles.value}>UTN987654321</Text>
          </View>
          <View style={styles.detailRow}>
            <Text style={styles.label}>Year/Month</Text>
            <Text style={styles.value}>Doe</Text>
          </View>
          <View style={styles.detailRow}>
            <Text style={styles.label}>Days in Arrears</Text>
            <Text style={styles.value}>John James</Text>
          </View>
        </View>
      </View>


      {/* Credit account sumaarry */}
      <View style={styles.section}>
        <View style={styles.sectionHeader}>
          <Text style={styles.otherSectionTitle}>Credit Account Summary
          </Text>
          <Text style={styles.sectionTitleOrderBorder}></Text>
        </View>
        <Text style={styles.sectionDescription}>
          This section includes a summary of all aggregated credit and loan informations.
        </Text>
        <View style={styles.CreditAccountSummaryenquiryheader}>

          <View style={styles.CreditAccountSummarydetailsGrid}>
            <View style={styles.CreditAccountSummarydetailRow}>
              <Text style={styles.CreditAccountSummarylabel}>Total Monthly Installments </Text>
              <Text style={styles.CreditAccountSummaryvalue}> </Text>
              <Text style={styles.CreditAccountSummaryvalue}>{`630,0000.00000`}</Text>
              <Text style={styles.CreditAccountSummaryvalue}>{`0.00`}</Text>
            </View>
            <View style={styles.CreditAccountSummarydetailRow}>
              <Text style={styles.CreditAccountSummarylabel}>Total Outstanding Debt</Text>
              <Text style={styles.CreditAccountSummaryvalue}> </Text>
              <Text style={styles.CreditAccountSummaryvalue}>{`630,0000.00000`}</Text>
              <Text style={styles.CreditAccountSummaryvalue}>{`0.00`}</Text>
            </View>
            <View style={styles.CreditAccountSummarydetailRow}>
              <Text style={styles.CreditAccountSummarylabel}>Total Number of Accounts in Arrears</Text>
              <Text style={styles.CreditAccountSummaryvalue}> </Text>
              <Text style={styles.CreditAccountSummaryvalue}>{`630,0000.00000`}</Text>
              <Text style={styles.CreditAccountSummaryvalue}>{`0.00`}</Text>
            </View>
            <View style={styles.CreditAccountSummarydetailRow}>
              <Text style={styles.CreditAccountSummarylabel}>Total Arrear Amount</Text>
              <Text style={styles.CreditAccountSummaryvalue}> </Text>
              <Text style={styles.CreditAccountSummaryvalue}>{`630,0000.00000`}</Text>
              <Text style={styles.CreditAccountSummaryvalue}>{`0.00`}</Text>
            </View>
            <View style={styles.CreditAccountSummarydetailRow}>
              <Text style={styles.CreditAccountSummarylabel}>Total Number of Accounts in Good Standing </Text>
              <Text style={styles.CreditAccountSummaryvalue}> </Text>
              <Text style={styles.CreditAccountSummaryvalue}>{`630,0000.00000`}</Text>
              <Text style={styles.CreditAccountSummaryvalue}>{`0.00`}</Text>
            </View>
            <View style={styles.CreditAccountSummarydetailRow}>
              <Text style={styles.CreditAccountSummarylabel}>Total Number of Accounts Taken </Text>
              <Text style={styles.CreditAccountSummaryvalue}> </Text>
              <Text style={styles.CreditAccountSummaryvalue}>{`630,0000.00000`}</Text>
              <Text style={styles.CreditAccountSummaryvalue}>{`0.00`}</Text>
            </View>
            <View style={styles.CreditAccountSummarydetailRow}>
              <Text style={styles.CreditAccountSummarylabel}>    </Text>
              <Text style={styles.CreditAccountSummaryvalue}>    </Text>
              <Text style={styles.CreditAccountSummaryvalue}>  </Text>
              <Text style={styles.CreditAccountSummaryvalue}>  </Text>
            </View>
            <View style={styles.CreditAccountSummarydetailRow}>
              <Text style={styles.CreditAccountSummarylabel}>Total Number of Judgements</Text>
              <Text style={styles.CreditAccountSummaryvalue}> </Text>
              <Text style={styles.CreditAccountSummaryvalue}>{`630,0000.00000`}</Text>
              <Text style={styles.CreditAccountSummaryvalue}>{`0.00`}</Text>
            </View>
            <View style={styles.CreditAccountSummarydetailRow}>
              <Text style={styles.CreditAccountSummarylabel}>Total Judgement Amount</Text>
              <Text style={styles.CreditAccountSummaryvalue}> </Text>
              <Text style={styles.CreditAccountSummaryvalue}>{`630,0000.00000`}</Text>
              <Text style={styles.CreditAccountSummaryvalue}>{`0.00`}</Text>
            </View>
            <View style={styles.CreditAccountSummarydetailRow}>
              <Text style={styles.CreditAccountSummarylabel}>Date of Last Judgement</Text>
              <Text style={styles.CreditAccountSummaryvalue}> </Text>
              <Text style={styles.CreditAccountSummaryvalue}>{`630,0000.00000`}</Text>
              <Text style={styles.CreditAccountSummaryvalue}>{`0.00`}</Text>
            </View>
            <View style={styles.CreditAccountSummarydetailRow}>
              <Text style={styles.CreditAccountSummarylabel}>  </Text>
              <Text style={styles.CreditAccountSummaryvalue}>  </Text>
              <Text style={styles.CreditAccountSummaryvalue}>  </Text>
              <Text style={styles.CreditAccountSummaryvalue}>  </Text>
            </View>
            <View style={styles.CreditAccountSummarydetailRow}>
              <Text style={styles.CreditAccountSummarylabel}>Total Number of Dishonoured Cheques</Text>
              <Text style={styles.CreditAccountSummaryvalue}> </Text>
              <Text style={styles.CreditAccountSummaryvalue}>{`630,0000.00000`}</Text>
              <Text style={styles.CreditAccountSummaryvalue}>{`0.00`}</Text>
            </View>
            <View style={styles.CreditAccountSummarydetailRow}>
              <Text style={styles.CreditAccountSummarylabel}>Total Amount of Dishonoured Cheques </Text>
              <Text style={styles.CreditAccountSummaryvalue}> </Text>
              <Text style={styles.CreditAccountSummaryvalue}>{`630,0000.00000`}</Text>
              <Text style={styles.CreditAccountSummaryvalue}>{`0.00`}</Text>
            </View>
            <View style={styles.CreditAccountSummarydetailRow}>
              <Text style={styles.CreditAccountSummarylabel}>Date of Last Bounced Cheque            </Text>
              <Text style={styles.CreditAccountSummaryvalue}> </Text>
              <Text style={styles.CreditAccountSummaryvalue}>{`630,0000.00000`}</Text>
              <Text style={styles.CreditAccountSummaryvalue}>{`0.00`}</Text>
            </View>
            <View style={styles.CreditAccountSummarydetailRow}>
              <Text style={styles.CreditAccountSummarylabel}>  </Text>
              <Text style={styles.CreditAccountSummaryvalue}>    </Text>
              <Text style={styles.CreditAccountSummaryvalue}>  </Text>
              <Text style={styles.CreditAccountSummaryvalue}>  </Text>
            </View>
            <View style={styles.CreditAccountSummarydetailRow}>
              <Text style={styles.CreditAccountSummarylabel}>Total Number of Utilities</Text>
              <Text style={styles.CreditAccountSummaryvalue}> </Text>
              <Text style={styles.CreditAccountSummaryvalue}>{`630,0000.00000`}</Text>
              <Text style={styles.CreditAccountSummaryvalue}>{`0.00`}</Text>
            </View>
            <View style={styles.CreditAccountSummarydetailRow}>
              <Text style={styles.CreditAccountSummarylabel}>Total Amount of Utilities</Text>
              <Text style={styles.CreditAccountSummaryvalue}> </Text>
              <Text style={styles.CreditAccountSummaryvalue}>{`630,0000.00000`}</Text>
              <Text style={styles.CreditAccountSummaryvalue}>{`0.00`}</Text>
            </View>
            <View style={styles.CreditAccountSummarydetailRow}>
              <Text style={styles.CreditAccountSummarylabel}>Date of Last Utility</Text>
              <Text style={styles.CreditAccountSummaryvalue}> </Text>
              <Text style={styles.CreditAccountSummaryvalue}>{`630,0000.00000`}</Text>
              <Text style={styles.CreditAccountSummaryvalue}>{`0.00`}</Text>
            </View>

          </View>

        </View>
      </View>



      {/* Credit Account Rating */}
      <View style={styles.section}>
        <View style={styles.sectionHeader}>
          <Text style={styles.otherSectionTitle}>Credit Account Rating
          </Text>
          <Text style={styles.sectionTitleOrderBorder}></Text>
        </View>
        <Text style={styles.sectionDescription}>
          This section includes a performance status indicator aggregated by Loan Account Types
        </Text>
        <View style={styles.CreditAccountRatingenquiryheader}>
          <View style={styles.CreditAccountRatingdetailsGrid}>
            <View style={styles.CreditAccountRatingdetailRow}>
              <Text style={{ width: '50%' }}> </Text>
              <Text style={styles.CreditAccountRatingvalueperforming}>* PERFORMING </Text>
              <Text style={styles.CreditAccountRatingvaluenonperforming}>* NON PERFORMING</Text>
            </View>

            <View style={styles.CreditAccountRatingdetailRow}>
              <Text style={styles.CreditAccountRatinglabel}>Total Number of Home Loans/Building/Mortgage Facilities </Text>
              <Text style={styles.CreditAccountRatingvalueperforming}>0 </Text>
              <Text style={styles.CreditAccountRatingvaluenonperforming}>{0}</Text>

            </View>

            <View style={styles.CreditAccountRatingdetailRow}>
              <Text style={styles.CreditAccountRatinglabel}>Total Number of Auto Loans/Facilities</Text>
              <Text style={styles.CreditAccountRatingvalueperforming}> {0}</Text>
              <Text style={styles.CreditAccountRatingvaluenonperforming}>{0}</Text>

            </View>
            <View style={styles.CreditAccountRatingdetailRow}>
              <Text style={styles.CreditAccountRatinglabel}>{`Total Number of Study(Student) Loans/Facilities `} </Text>
              <Text style={styles.CreditAccountRatingvalueperforming}>{0} </Text>
              <Text style={styles.CreditAccountRatingvaluenonperforming}>{0}</Text>

            </View>
            <View style={styles.CreditAccountRatingdetailRow}>
              <Text style={styles.CreditAccountRatinglabel}>Total Number of Personal Loans/Facilities </Text>
              <Text style={styles.CreditAccountRatingvalueperforming}> {0}</Text>
              <Text style={styles.CreditAccountRatingvaluenonperforming}>{0}</Text>

            </View>
            <View style={styles.CreditAccountRatingdetailRow}>
              <Text style={styles.CreditAccountRatinglabel}>Total Number of Credit Cards</Text>
              <Text style={styles.CreditAccountRatingvalueperforming}> {0}</Text>
              <Text style={styles.CreditAccountRatingvaluenonperforming}>{0}</Text>

            </View>
            <View style={styles.CreditAccountRatingdetailRow}>
              <Text style={styles.CreditAccountRatinglabel}>{`Total Number of Retail Credit/Instalment(Term) Facilities`}</Text>
              <Text style={styles.CreditAccountRatingvalueperforming}> {0}</Text>
              <Text style={styles.CreditAccountRatingvaluenonperforming}>{0}</Text>

            </View>
            <View style={styles.CreditAccountRatingdetailRow}>
              <Text style={styles.CreditAccountRatinglabel}>Total Number of Joint Loans/Facilities</Text>
              <Text style={styles.CreditAccountRatingvalueperforming}> </Text>
              <Text style={styles.CreditAccountRatingvaluenonperforming}> </Text>

            </View>
            <View style={styles.CreditAccountRatingdetailRow}>
              <Text style={styles.CreditAccountRatinglabel}>Total Number of Telecom Facilities</Text>
              <Text style={styles.CreditAccountRatingvalueperforming}> {0}</Text>
              <Text style={styles.CreditAccountRatingvaluenonperforming}>{0}</Text>

            </View>
            <View style={styles.CreditAccountRatingdetailRow}>
              <Text style={styles.CreditAccountRatinglabel}>Total Amount of Dishonoured Cheques </Text>
              <Text style={styles.CreditAccountRatingvalueperforming}> {0}</Text>
              <Text style={styles.CreditAccountRatingvaluenonperforming}>{0}</Text>

            </View>
            <View style={styles.CreditAccountRatingdetailRow}>
              <Text style={styles.CreditAccountRatinglabel}>Total Number of Overdraft/Other Loans</Text>
              <Text style={styles.CreditAccountRatingvalueperforming}> {0}</Text>
              <Text style={styles.CreditAccountRatingvaluenonperforming}>{0}</Text>

            </View>
            <Text style={{ color: 'green', fontSize: 9, marginTop: 10 }}> * PERFORMING : Up to date payments received on Loans/Facility</Text>
            <Text style={{ color: 'red', fontSize: 9, }}>
              * NON PERFORMING : Loans/Facility that is more than 90 days in arrears

            </Text>
          </View>

        </View>
      </View>




      {/* Credit Agreements Summary */}
      <View style={styles.section}>
        <View style={styles.sectionHeader}>
          <Text style={styles.otherSectionTitle}>Credit Agreements Summary
          </Text>
          <Text style={styles.sectionTitleOrderBorder}></Text>
        </View>
        <Text style={styles.sectionDescription}>
          This sections includes a Summarized payment beviour of all credit agreements as reported by the Credit Providers
        </Text>
        <View style={styles.CreditAgreementSummaryenquiryheader}>
        <View style={styles.CreditAgreementSummarydetailsGrid}>
            <View style={styles.CreditAgreementSummarydetailRow}>
              <Text style={styles.CreditAgreementSummarySubscriberNameHeader}> Subscriber Name</Text>
              <Text style={styles.CreditAgreementsSummaryAccountNumberHeader}>Account Number</Text>
              <Text style={styles.CreditAgreementSummaryCurrencyHeader}>Currency</Text>
              <Text style={styles.CreditAgreementSummaryAccountStatusHeader}>Availed Limit</Text>
              <Text style={styles.CreditAgreementSummaryAvailedLimitHeader}> Oustanding Balance</Text>
              <Text style={styles.CreditAgreementSummaryOustandingBalanceHeader}>Instalment Amount</Text>
              <Text style={styles.CreditAgreementSummaryInstalmentAmountHeader}>Arrear Amount</Text>
              <Text style={styles.CreditAgreementSummaryArrearAmountHeader}>Facility Classification</Text>
              <Text style={styles.CreditAgreementsummaryFacilityClassificationHeader
              }>Account Status</Text>
            </View>

          </View>
          </View>
        <View >

          <View style={styles.CreditAgreementSummarydetailsGrid}>
            <View style={styles.CreditAgreementSummarydetailRow}>
              <Text style={styles.CreditAgreementSummarySubscriberName}> Headway Microfinance Bank Limited</Text>
              <Text style={styles.CreditAgreementsSummaryAccountNumber}>{`01950013020004795`}</Text>
              <Text style={styles.CreditAgreementSummaryCurrency}>{`NGN`}</Text>
              <Text style={styles.CreditAgreementAvailedLimit}>{`500,000.00`}</Text>
              <Text style={styles.CreditAgreementOustandingBalance}>{`0.00`}</Text>
              <Text style={styles.CreditAgreementInstalmentAmount}>{`155,000.00 `}</Text>
              <Text style={styles.CreditAgreementArrearAmount}>{`0.00`}</Text>
              <Text style={styles.CreditAgreementsFacilityClassification
              }>{`Performing`}</Text>
              <Text style={styles.CreditAgreementsAccountStatus}>{`Closed`}</Text>
            </View>

          </View>


          <View style={styles.CreditAgreementSummarydetailsGrid}>
            <View style={styles.CreditAgreementSummarydetailRow}>
              <Text style={styles.CreditAgreementSummarySubscriberName}> Headway Microfinance Bank Limited</Text>
              <Text style={styles.CreditAgreementsSummaryAccountNumber}>{`01950013020004795`}</Text>
              <Text style={styles.CreditAgreementSummaryCurrency}>{`NGN`}</Text>
              <Text style={styles.CreditAgreementAvailedLimit}>{`500,000.00`}</Text>
              <Text style={styles.CreditAgreementOustandingBalance}>{`0.00`}</Text>
              <Text style={styles.CreditAgreementInstalmentAmount}>{`155,000.00 `}</Text>
              <Text style={styles.CreditAgreementArrearAmount}>{`0.00`}</Text>
              <Text style={styles.CreditAgreementsFacilityClassification
              }>{`Performing`}</Text>
              <Text style={styles.CreditAgreementsAccountStatus}>{`Closed`}</Text>
            </View>

          </View>

        </View>

          <View style={styles.CreditAgreementSummarydetailsGrid}>
            <View style={styles.CreditAgreementSummarydetailRow}>
              <Text style={styles.CreditAgreementSummarySubscriberName}> Headway Microfinance Bank Limited</Text>
              <Text style={styles.CreditAgreementsSummaryAccountNumber}>{`01950013020004795`}</Text>
              <Text style={styles.CreditAgreementSummaryCurrency}>{`NGN`}</Text>
              <Text style={styles.CreditAgreementAvailedLimit}>{`500,000.00`}</Text>
              <Text style={styles.CreditAgreementOustandingBalance}>{`0.00`}</Text>
              <Text style={styles.CreditAgreementInstalmentAmount}>{`155,000.00 `}</Text>
              <Text style={styles.CreditAgreementArrearAmount}>{`0.00`}</Text>
              <Text style={styles.CreditAgreementsFacilityClassification
              }>{`Performing`}</Text>
              <Text style={styles.CreditAgreementsAccountStatus}>{`Closed`}</Text>
            </View>


        </View>

          <View style={styles.CreditAgreementSummarydetailsGrid}>
            <View style={styles.CreditAgreementSummarydetailRow}>
              <Text style={styles.CreditAgreementSummarySubscriberName}> Headway Microfinance Bank Limited</Text>
              <Text style={styles.CreditAgreementsSummaryAccountNumber}>{`01950013020004795`}</Text>
              <Text style={styles.CreditAgreementSummaryCurrency}>{`NGN`}</Text>
              <Text style={styles.CreditAgreementAvailedLimit}>{`500,000.00`}</Text>
              <Text style={styles.CreditAgreementOustandingBalance}>{`0.00`}</Text>
              <Text style={styles.CreditAgreementInstalmentAmount}>{`155,000.00 `}</Text>
              <Text style={styles.CreditAgreementArrearAmount}>{`0.00`}</Text>
              <Text style={styles.CreditAgreementsFacilityClassification
              }>{`Performing`}</Text>
              <Text style={styles.CreditAgreementsAccountStatus}>{`Closed`}</Text>
            </View>


        </View>
      </View>

  {/* Credit Agreement */}
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
            <Text style={styles.creditAgreementslabel}>Subscriber Name</Text>
            <Text style={styles.creditAgreementsfirstvalue}>FCR123456789</Text>
          </View>
          <View style={styles.creditAgreementsRow}>
            <Text style={styles.creditAgreementslabel}>Account Number</Text>
            <Text style={styles.creditAgreementsvalue}>UTN987654321</Text>
          </View>
          <View style={styles.creditAgreementsfirstRow}>
            <Text style={styles.creditAgreementslabel}>Effective Date</Text>
            <Text style={styles.creditAgreementsfirstvalue}>Doe</Text>
          </View>
          <View style={styles.creditAgreementsRow}>
            <Text style={styles.creditAgreementslabel}>Bureau Updated Date</Text>
            <Text style={styles.creditAgreementsvalue}>John James</Text>
          </View>
          <View style={styles.creditAgreementsfirstRow}>
            <Text style={styles.creditAgreementslabel}>Type of Credit Facilit</Text>
            <Text style={styles.creditAgreementsfirstvalue}>John</Text>
          </View>
          <View style={styles.creditAgreementsRow}>
            <Text style={styles.creditAgreementslabel}>Currency</Text>
            <Text style={styles.creditAgreementsvalue}>12345678901</Text>
          </View>
          <View style={styles.creditAgreementsfirstRow}>
            <Text style={styles.creditAgreementslabel}>Credit / Debit</Text>
            <Text style={styles.creditAgreementsfirstvalue}>01/01/1980</Text>
          </View>
          <View style={styles.creditAgreementsRow}>
            <Text style={styles.creditAgreementslabel}>Loan Amount/Credit Limit</Text>
            <Text style={styles.creditAgreementsvalue}>Male</Text>
          </View>
          <View style={styles.creditAgreementsfirstRow}>
            <Text style={styles.creditAgreementslabel}>Current Balance </Text>
            <Text style={styles.creditAgreementsfirstvalue}>Single</Text>
          </View>
          <View style={styles.creditAgreementsRow}>
            <Text style={styles.creditAgreementslabel}>Instalment Amount</Text>
            <Text style={styles.creditAgreementsvalue}>2</Text>
          </View>
          <View style={styles.creditAgreementsfirstRow}>
            <Text style={styles.creditAgreementslabel}>Arrear Amount</Text>
            <Text style={styles.creditAgreementsfirstvalue}>NIN123456789</Text>
          </View>
          <View style={styles.creditAgreementsRow}>
            <Text style={styles.creditAgreementslabel}>Expiry Date</Text>
            <Text style={styles.creditAgreementsvalue}>PEN987654321</Text>
          </View>
          <View style={styles.creditAgreementsfirstRow}>
            <Text style={styles.creditAgreementslabel}>Facility Classification</Text>
            <Text style={styles.creditAgreementsfirstvalue}>DRV123456789</Text>
          </View>
          <View style={styles.creditAgreementsRow}>
            <Text style={styles.creditAgreementslabel}>Last Payment Date</Text>
            <Text style={styles.creditAgreementsvalue}>A12345678</Text>
          </View>
        
          <View style={styles.creditAgreementsfirstRow}>
            <Text style={styles.creditAgreementslabel}>Account Status</Text>
            <Text style={styles.creditAgreementsfirstvalue}>Nigerian</Text>
          </View>
          <View style={styles.creditAgreementsRow}>
            <Text style={styles.creditAgreementslabel}>Loan Duration </Text>
            <Text style={styles.creditAgreementsvalue}>123 , Lagos, Nigeria</Text>
          </View>
      
          <View style={styles.creditAgreementsfirstRow}>
            <Text style={styles.creditAgreementslabel}>Repayment Frequency</Text>
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




      {/* Guarantor Details */}
      <View style={styles.section}>
        <View style={styles.sectionHeader}>
          <Text style={styles.otherSectionTitle}>Guarantor Details</Text>
          <Text style={styles.sectionTitleOrderBorder}></Text>
        </View>
        <Text style={styles.sectionDescription}>
        This section includes an aggregate of Guarantor provided on Credit/Loan application.
        </Text>
        <View style={styles.CreditAccountRatingenquiryheader}>
          <View style={styles.CreditAccountRatingdetailsGrid}>
            <View style={styles.CreditAccountRatingdetailRow}>
              <Text style={styles.GuarantorDetailslabel}>Number of Accounts Requiring Guarantors</Text>
              <Text style={styles.GuarantorDetailsvalue}>0 </Text>
              
            </View>

            <View style={styles.CreditAccountRatingdetailRow}>
              <Text style={styles.GuarantorDetailslabel}>Number of Guarantors Secured </Text>
              <Text style={styles.GuarantorDetailsvalue}>{0}</Text>
            </View>
          </View>
        </View>
      </View>


    {/*  Latest Guurantor Details */}

    <View style={styles.section}>
        <View style={styles.sectionHeader}>
          <Text style={styles.otherSectionTitle}>Latest Guarantor Details</Text>
          <Text style={styles.sectionTitleOrderBorder}></Text>
        </View>
        <Text style={styles.sectionDescription}>
        This section includes the details of the latest Guarantor used on Credit/Loan application.
        </Text>
        <View style={styles.CreditAccountRatingenquiryheader}>
          <View style={styles.CreditAccountRatingdetailsGrid}>
            <View style={styles.CreditAccountRatingdetailRow}>
              <Text style={styles.LatestGuarantorDetailslabel}>Surname</Text>
              <Text style={styles.LatestGuarantorDetailsvalue}>0 </Text>
              <Text style={styles.LatestGuarantorDetailslabel}>Other Names              </Text>
              <Text style={styles.LatestGuarantorDetailsvalue}>0 </Text>
            </View>
            <View style={styles.CreditAccountRatingdetailRow}>
              <Text style={styles.LatestGuarantorDetailslabel}>National ID Number</Text>
              <Text style={styles.LatestGuarantorDetailsvalue}>0 </Text>
              <Text style={styles.LatestGuarantorDetailslabel}>PENCOM ID</Text>
              <Text style={styles.LatestGuarantorDetailsvalue}>0 </Text>
            </View>
            <View style={styles.CreditAccountRatingdetailRow}>
              <Text style={styles.LatestGuarantorDetailslabel}>Driver's License Number</Text>
              <Text style={styles.LatestGuarantorDetailsvalue}>0 </Text>
              <Text style={styles.LatestGuarantorDetailslabel}>Passport Number</Text>
              <Text style={styles.LatestGuarantorDetailsvalue}>0 </Text>
            </View>
            <View style={styles.CreditAccountRatingdetailRow}>
              <Text style={styles.LatestGuarantorDetailslabel}>Other ID Number</Text>
              <Text style={styles.LatestGuarantorDetailsvalue}>0 </Text>
              <Text style={styles.LatestGuarantorDetailslabel}>Date of Birth</Text>
              <Text style={styles.LatestGuarantorDetailsvalue}>0 </Text>
            </View>
            <View style={styles.CreditAccountRatingdetailRow}>
              <Text style={styles.LatestGuarantorDetailslabel}>Home Telephone</Text>
              <Text style={styles.LatestGuarantorDetailsvalue}>0 </Text>
              <Text style={styles.LatestGuarantorDetailslabel}>Work Telephone</Text>
              <Text style={styles.LatestGuarantorDetailsvalue}>0 </Text>
            </View>

            <View style={styles.CreditAccountRatingdetailRow}>
              <Text style={styles.LatestGuarantorDetailslabel}>Mobile Number </Text>
              <Text style={styles.LatestGuarantorDetailsvalue}>{0}</Text>
              <Text style={styles.LatestGuarantorDetailslabel}></Text>
              <Text style={styles.LatestGuarantorDetailsvalue}>{0}</Text>
            </View>
          </View>
        </View>
      </View>

          {/* collateral information */}
          <View style={styles.section}>
        <View style={styles.sectionHeader}>
          <Text style={styles.otherSectionTitle}>Collateral Information
          </Text>
          <Text style={styles.sectionTitleOrderBorder}></Text>
        </View>
        <Text style={styles.sectionDescription}>
        This sections includes collateral details as reported by the Credit Providers
        </Text>
          <View style={styles.collateralinformationtable}>
        {/* Table Header */}
        <View style={[styles.collateralinformationtableRow, styles.collateralinformationtableHeader]}>
          <View style={[styles.collateralinformationtableCol, styles.collateralinformationtableColFirst]}>
            <Text style={styles.collateralinformationtableCell}>Supplier Name</Text>
          </View>
          <View style={styles.collateralinformationtableCol}>
            <Text style={styles.collateralinformationtableCell}>Loan Security Status </Text>
          </View>
          <View style={styles.collateralinformationtableCol}>
            <Text style={styles.collateralinformationtableCell}>Collateral Type</Text>
          </View>
          <View style={styles.collateralinformationtableCol}>
            <Text style={styles.collateralinformationtableCell}>Collateral Details</Text>
          </View>
     
        </View>
        </View>

        {/* Table Body */}
        {addressData.map((record, index) => (
          <View key={index} style={styles.collateralinformationtableRow}>
            <View style={[styles.collateralinformationtableCol, styles.collateralinformationtableColFirst]}>
              <Text style={styles.collateralinformationtableCell}>{`Headway Microfinance Bank Limited`}</Text>
            </View>
            <View style={styles.collateralinformationtableCol}>
              <Text style={styles.collateralinformationtableCell}>{`Loan Security Status `}</Text>
            </View>
            <View style={styles.collateralinformationtableCol}>
              <Text style={styles.collateralinformationtableCell}>{`Collateral Type`}</Text>
            </View>
            <View style={styles.collateralinformationtableCol}>
              <Text style={styles.collateralinformationtableCell}>{`Collateral Details`}</Text>
            </View>
           
          </View>
        ))}
      </View>


      
          {/* dishonoured Cheque */}
          <View style={styles.section}>
        <View style={styles.sectionHeader}>
          <Text style={styles.otherSectionTitle}>Dishonoured Cheque Information
          </Text>
          <Text style={styles.sectionTitleOrderBorder}></Text>
        </View>
        <Text style={styles.sectionDescription}>
        This section includes the consumer's bounced cheques information.
        </Text>
          <View style={styles.dishonouredchequetable}>
        {/* Table Header */}
        <View style={[styles.dishonouredchequetableRow, styles.dishonouredchequetableHeader]}>
          <View style={[styles.dishonouredchequetableCol, styles.dishonouredchequetableColFirst]}>
            <Text style={styles.dishonouredchequetableCell}>Date Cheque Issued</Text>
          </View>
          <View style={styles.dishonouredchequetableCol}>
            <Text style={styles.dishonouredchequetableCell}>Date Cheque Dishonoured</Text>
          </View>
          <View style={styles.dishonouredchequetableCol}>
            <Text style={styles.dishonouredchequetableCell}>Issuing Bank</Text>
          </View>
          <View style={styles.dishonouredchequetableCol}>
            <Text style={styles.dishonouredchequetableCell}>Amount</Text>
          </View>
     
        </View>
        </View>

        {/* Table Body */}
        {addressData.map((record, index) => (
          <View key={index} style={styles.dishonouredchequetableRow}>
            <View style={[styles.dishonouredchequetableCol, styles.dishonouredchequetableColFirst]}>
              <Text style={styles.dishonouredchequetableCell}>{`Headway Microfinance Bank Limited`}</Text>
            </View>
            <View style={styles.dishonouredchequetableCol}>
              <Text style={styles.dishonouredchequetableCell}>{`Loan Security Status `}</Text>
            </View>
            <View style={styles.dishonouredchequetableCol}>
              <Text style={styles.dishonouredchequetableCell}>{`Collateral Type`}</Text>
            </View>
            <View style={styles.dishonouredchequetableCol}>
              <Text style={styles.dishonouredchequetableCell}>{`Collateral Details`}</Text>
            </View>
           
          </View>
        ))}
      </View>



          {/* Company Directorship Summary*/}
          <View style={styles.section}>
        <View style={styles.sectionHeader}>
          <Text style={styles.otherSectionTitle}>Company Directorship Summary</Text>
          <Text style={styles.sectionTitleOrderBorder}></Text>
        </View>
        <Text style={styles.sectionDescription}>
        This section includes a summary of directorships held.
        </Text>
        <View style={styles.CreditAccountRatingenquiryheader}>
          <View style={styles.CreditAccountRatingdetailsGrid}>
            <View style={styles.CreditAccountRatingdetailRow}>
              <Text style={styles.companydirectorshiplabel}>Total Number of Company Directorships</Text>
              <Text style={styles.companydirectorshipvalue}>0 </Text>
              
            </View>
          </View>
        </View>
      </View>



   
      {/* // Enquiry History in Last 12 Months */}


     <View style={styles.section}>
        <View style={styles.sectionHeader}>
          <Text style={styles.otherSectionTitle}>Enquiry History in Last 12 Months  </Text>
          <Text style={styles.sectionTitleOrderBorder}></Text>
        </View>
        <Text style={styles.sectionDescription}>
        This section includes a list of organisations or credit providers who have requested a Credit Report of this consumer.
        </Text>
          <View style={styles.enquiryhistoryinlast12monthtable}>
        {/* Table Header */}
        <View style={[styles.enquiryhistoryinlast12monthtableRow, styles.enquiryhistoryinlast12monthtableHeader]}>
          <View style={[styles.enquiryhistoryinlast12monthtableCol, styles.enquiryhistoryinlast12monthtableColFirst]}>
            <Text style={styles.enquiryhistoryinlast12monthtableCell}>Enquiry Date</Text>
          </View>
          <View style={styles.enquiryhistoryinlast12monthtableCol}>
            <Text style={styles.enquiryhistoryinlast12monthtableCell}>Name of Enquirer</Text>
          </View>
          <View style={styles.enquiryhistoryinlast12monthtableCol}>
            <Text style={styles.enquiryhistoryinlast12monthtableCell}>Enquirer Phone Number</Text>
          </View>
          <View style={styles.enquiryhistoryinlast12monthtableCol}>
            <Text style={styles.enquiryhistoryinlast12monthtableCell}>Reason for Enquiry</Text>
          </View>
     
        </View>
        </View>

        {/* Table Body */}
        {addressData.map((record, index) => (
          <View key={index} style={styles.enquiryhistoryinlast12monthtableRow}>
            <View style={[styles.enquiryhistoryinlast12monthtableCol, styles.enquiryhistoryinlast12monthtableColFirst]}>
              <Text style={styles.enquiryhistoryinlast12monthtableCell}>{`Headway Microfinance Bank Limited`}</Text>
            </View>
            <View style={styles.enquiryhistoryinlast12monthtableCol}>
              <Text style={styles.enquiryhistoryinlast12monthtableCell}>{`Loan Security Status `}</Text>
            </View>
            <View style={styles.enquiryhistoryinlast12monthtableCol}>
              <Text style={styles.enquiryhistoryinlast12monthtableCell}>{`Collateral Type`}</Text>
            </View>
            <View style={styles.enquiryhistoryinlast12monthtableCol}>
              <Text style={styles.enquiryhistoryinlast12monthtableCell}>{`Collateral Details`}</Text>
            </View>
           
          </View>
        ))}
      </View>



   {/* // Identification History */}

   <View style={styles.section}>
        <View style={styles.sectionHeader}>
          <Text style={styles.otherSectionTitle}>Identification History </Text>
          <Text style={styles.sectionTitleOrderBorder}></Text>
        </View>
        <Text style={styles.sectionDescription}>
        This section includes a list of all Identification means presented on the Credit/Loan applications.
        </Text>
          <View style={styles.identificationhistorytable}>
        {/* Table Header */}
        <View style={[styles.identificationhistorytableRow, styles.identificationhistorytableHeader]}>
          <View style={[styles.identificationhistorytableCol, styles.identificationhistorytableColFirst]}>
            <Text style={styles.identificationhistorytableCell}>Bureau Update Date</Text>
          </View>
          <View style={styles.identificationhistorytableCol}>
            <Text style={styles.identificationhistorytableCell}>Identification Type</Text>
          </View>
          <View style={styles.identificationhistorytableCol}>
            <Text style={styles.identificationhistorytableCell}>Identification Details</Text>
          </View>
      
        </View>
        </View>

        {/* Table Body */}
        {addressData.map((record, index) => (
          <View key={index} style={styles.identificationhistorytableRow}>
            <View style={[styles.identificationhistorytableCol, styles.identificationhistorytableColFirst]}>
              <Text style={styles.identificationhistorytableCell}>{`Headway Microfinance Bank Limited`}</Text>
            </View>
            <View style={styles.identificationhistorytableCol}>
              <Text style={styles.identificationhistorytableCell}>{`Loan Security Status `}</Text>
            </View>
            <View style={styles.identificationhistorytableCol}>
              <Text style={styles.identificationhistorytableCell}>{`Collateral Type`}</Text>
            </View>
          </View>
        ))}
      </View>



      {/* AddressHistory */} 
      <View style={styles.section}>
        <View style={styles.sectionHeader}>
          <Text style={styles.otherSectionTitle}>Address History </Text>
          <Text style={styles.sectionTitleOrderBorder}></Text>
        </View>
        <Text style={styles.sectionDescription}>
        This section includes a list of all Address Information presented on the Credit/Loan applications.
        </Text>
      <View style={styles.AddressHistorytable}>
        {/* Table Header */}
        <View style={[styles.AddressHistorytableRow, styles.AddressHistorytableHeader]}>
          <View style={[styles.AddressHistorytableCol, styles.AddressHistorytableColFirst]}>
            <Text style={styles.AddressHistorytableCell}>Bureau Update</Text>
          </View>
          <View style={styles.AddressHistorytableCol}>
            <Text style={styles.AddressHistorytableCell}>Address</Text>
          </View>
          <View style={styles.AddressHistorytableCol}>
            <Text style={styles.AddressHistorytableCell}>Address Line 1</Text>
          </View>
          <View style={styles.AddressHistorytableCol}>
            <Text style={styles.AddressHistorytableCell}>Address Line 2</Text>
          </View>
          <View style={styles.AddressHistorytableCol}>
            <Text style={styles.AddressHistorytableCell}>Address Line 3</Text>
          </View>
          <View style={[styles.AddressHistorytableCol, styles.AddressHistorytableColLast]}>
            <Text style={styles.AddressHistorytableCell}>Address Line 4</Text>
          </View>
        </View>

        {/* Table Body */}
        {addressData.map((record, index) => (
          <View key={index} style={styles.AddressHistorytableRow}>
            <View style={[styles.AddressHistorytableCol, styles.AddressHistorytableColFirst]}>
              <Text style={styles.AddressHistorytableCell}>{record.bureauUpdate}</Text>
            </View>
            <View style={styles.AddressHistorytableCol}>
              <Text style={styles.AddressHistorytableCell}>{record.address}</Text>
            </View>
            <View style={styles.AddressHistorytableCol}>
              <Text style={styles.AddressHistorytableCell}>{record.addressLine1}</Text>
            </View>
            <View style={styles.AddressHistorytableCol}>
              <Text style={styles.AddressHistorytableCell}>{record.addressLine2}</Text>
            </View>
            <View style={styles.AddressHistorytableCol}>
              <Text style={styles.AddressHistorytableCell}>{record.addressLine3}</Text>
            </View>
            <View style={[styles.AddressHistorytableCol, styles.AddressHistorytableColLast]}>
              <Text style={styles.AddressHistorytableCell}>{record.addressLine4}</Text>
            </View>
          </View>
        ))}
      </View>

      </View>

     {/* // Employment History */}
     <View style={styles.section}>
        <View style={styles.sectionHeader}>
          <Text style={styles.otherSectionTitle}>Identification History </Text>
          <Text style={styles.sectionTitleOrderBorder}></Text>
        </View>
        <Text style={styles.sectionDescription}>
        This section includes a list of all Identification means presented on the Credit/Loan applications.
        </Text>
          <View style={styles.employmenthistorytable}>
        {/* Table Header */}
        <View style={[styles.employmenthistorytableRow, styles.employmenthistorytableHeader]}>
          <View style={[styles.employmenthistorytableCol, styles.employmenthistorytableColFirst]}>
            <Text style={styles.employmenthistorytableCell}>Bureau Update Date</Text>
          </View>
          <View style={styles.employmenthistorytableCol}>
            <Text style={styles.employmenthistorytableCell}>Identification Type</Text>
          </View>
          <View style={styles.employmenthistorytableCol}>
            <Text style={styles.employmenthistorytableCell}>Identification Details</Text>
          </View>
      
        </View>
        </View>

        {/* Table Body */}
        {addressData.map((record, index) => (
          <View key={index} style={styles.employmenthistorytableRow}>
            <View style={[styles.employmenthistorytableCol, styles.employmenthistorytableColFirst]}>
              <Text style={styles.employmenthistorytableCell}>{`Bureau Update Date`}</Text>
            </View>
            <View style={styles.employmenthistorytableCol}>
              <Text style={styles.employmenthistorytableCell}>{`Company`}</Text>
            </View>
            <View style={styles.employmenthistorytableCol}>
              <Text style={styles.employmenthistorytableCell}>{`Occupation`}</Text>
            </View>
          </View>
        ))}
      </View>

   {/* Telephone History */} 
   <View style={styles.section}>
        <View style={styles.sectionHeader}>
          <Text style={styles.otherSectionTitle}>Telephone History</Text>
          <Text style={styles.sectionTitleOrderBorder}></Text>
        </View>
        <Text style={styles.sectionDescription}>
        This section includes a list of all Contact Information presented on the Credit/Loan applications.
        </Text>
      <View style={styles.employmenthistorytable}>
        {/* Table Header */}
        <View style={[styles.employmenthistorytableRow, styles.employmenthistorytableHeader]}>
          <View style={[styles.employmenthistorytableCol, styles.employmenthistorytableColFirst]}>
            <Text style={styles.employmenthistorytableCell}>Bureau Update Date</Text>
          </View>
          <View style={styles.employmenthistorytableCol}>
            <Text style={styles.employmenthistorytableCell}>Telephone Number</Text>
          </View>
          <View style={styles.employmenthistorytableCol}>
            <Text style={styles.employmenthistorytableCell}>Bureau Update Date</Text>
          </View>
          <View style={styles.employmenthistorytableCol}>
            <Text style={styles.employmenthistorytableCell}>Telephone Number</Text>
          </View>
          <View style={styles.employmenthistorytableCol}>
            <Text style={styles.employmenthistorytableCell}>Bureau Update Date</Text>
          </View>
          <View style={[styles.employmenthistorytableCol, styles.employmenthistorytableColLast]}>
            <Text style={styles.employmenthistorytableCell}>Telephone Number</Text>
          </View>
        </View>

        {/* Table Body */}
        {addressData.map((record, index) => (
          <View key={index} style={styles.employmenthistorytableRow}>
            <View style={[styles.employmenthistorytableCol, styles.employmenthistorytableColFirst]}>
              <Text style={styles.employmenthistorytableCell}>{`record.bureauUpdate`}</Text>
            </View>
            <View style={styles.employmenthistorytableCol}>
              <Text style={styles.employmenthistorytableCell}>{`record.address`}</Text>
            </View>
            <View style={styles.employmenthistorytableCol}>
              <Text style={styles.employmenthistorytableCell}>{`record.addressLine1`}</Text>
            </View>
            <View style={styles.employmenthistorytableCol}>
              <Text style={styles.employmenthistorytableCell}>{`record.addressLine2`}</Text>
            </View>
            <View style={styles.employmenthistorytableCol}>
              <Text style={styles.employmenthistorytableCell}>{`record.addressLine3`}</Text>
            </View>
            <View style={[styles.employmenthistorytableCol, styles.employmenthistorytableColLast]}>
              <Text style={styles.employmenthistorytableCell}>{`record.addressLine4`}</Text>
            </View>
          </View>
        ))}
      </View>

      </View>
      {/* footer */}
      <View style={styles.pageNumber} fixed >
        <Text> Report Extracted on: {getFormattedDate()}</Text>

        <Text render={({ pageNumber, totalPages }) => (
          `${pageNumber} / ${totalPages}`
        )} fixed />
      </View>
    </Page>

  </Document>
);

export default CreditReport;