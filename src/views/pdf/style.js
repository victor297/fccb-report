import {  StyleSheet,Font } from '@react-pdf/renderer';
import normal from "@/assets/trebuchet/Trebuchet-MS.ttf"
import bold from "@/assets/trebuchet/Trebuchet-MS-Bold.ttf"
import boldItalic from "@/assets/trebuchet/Trebuchet-MS-Italic.ttf"
import normalItalic from "@/assets/trebuchet/Trebuchet-MS-Bold.ttf"


Font.register({
    family: 'trebuchet',
    fonts: [
      {
        src: normal
      },
      {
        src: bold,
        fontWeight: 'bold'
      },
      {
        src: boldItalic,
        fontWeight: 'normal',
        fontStyle: 'italic'
      },
      {
        src: normalItalic,
        fontWeight: 'bold',
        fontStyle: 'italic'
      }
    ]
  })
  
export const styles = StyleSheet.create({
    page: {
      padding: 30,
      color: '#666',
      fontFamily:'trebuchet'
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
width:"200",
      color: '#003876',
    },
    addressheader: {
     flexDirection:"column",
    fontWeight:"bold",
    color:"#333",
     alignItems:'flex-end'
    },
    address: {
      fontSize: 8,
      color: '#333',
      textAlign: 'right',
      justifySelf:'end',
      justifyContent:'flex-end'
    },
    disclaimer:{
      fontSize: 8,
      color: '#333', 
      textAlign:"justify"
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
      width: '36%',
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
      fontSize: 12,
      fontWeight: 'bold',
      padding: 2,
      paddingTop: 6,
  
      color: '#FF6B00',
    },
    sectionDescription: {
      fontSize: 8,
      fontStyle: 'italic',
      color: '#FF6B00',
      marginBottom: 8,
    },
    
  // Enquiry Input Details

  enquiryinputdetailsGrid: {
    display: 'flex',
    flexDirection: 'column',
    // flexWrap: 'wrap',
  },
  enquiryinputdetailsRow: {
    width: '100%',
    flexDirection: 'row',
  },
  enquiryinputdetailsvalue: {
    backgroundColor: 'white',
    width: '70%',
    fontSize: 8,
    color: '#666',
    padding: 4,
    borderBottom: '1px solid #E0E0E0',

  },
  enquiryinputdetailslabel: {
    width: '30%',
    fontSize: 8,
    color: '#333',
    fontWeight: 'bold',
    backgroundColor: '#F5F5F5',
    padding: 4,
    borderBottom: '1px solid white',
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
      fontSize: 8,
      color: '#333',
      fontWeight: 'bold',
      backgroundColor: '#F5F5F5',
      padding: 4,
      borderBottom: '1px solid white',
    },
    Personaldetailvalue: {
      backgroundColor: 'white',
      width: '50%',
      fontSize: 8,
      color: '#666',
      padding: 4,
      borderTop: '1px solid #E0E0E0',
  
    },
    Personaldetailsummary: {
      fontSize: 10,
      fontStyle: 'italic',
      fontWeight:'bold',
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
      fontSize: 8,
      color: '#333',
      fontWeight: 'bold',
      backgroundColor: '#F5F5F5',
      padding: 4,
      borderBottom: '1px solid white',
    },
    value: {
      backgroundColor: 'white',
      width: '50%',
      fontSize: 8,
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
  
      fontSize: 8,
      width: 170,
      fontWeight: 'bold',
      backgroundColor: '#F5F5F5',
      padding: 5,
      color: '#333',
    },
    tableHeaderCell2: {
      flex: 1,
      fontSize: 8,
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
    // enquiryheader: {
    //   flexDirection: 'row',
    // },
    enquiryheader: {
        flexDirection: 'row',
        justifyContent:"space-between"
      },
  


    
  firstCentralconsumerscoreGrid: {
    display: 'flex',
    flexDirection: 'column',
    width:'70%',

    // flexWrap: 'wrap',

  },
  firstCentralconsumerscoreRow: {
    width: '100%',
    flexDirection: 'row',

  },
  firstCentralconsumerscorelabel: {
    width: '25%',
    fontSize: 6,
    color: '#333',
    fontWeight: 'bold',
    backgroundColor: '#F5F5F5',
    padding: 4,
    borderBottom: '1px solid white',
  },
  firstCentralconsumerscorevalue: {
    backgroundColor: 'white',
    width: '15%',
    fontSize: 6,
    padding: 4,
    // borderBottom: '1px solid #E0E0E0',

  },
  firstCentralconsumerscorestatRow: {
    flexDirection: 'row',
    marginTop: 8,
    alignItems: "center"
  },
  firstCentralconsumerscorestatColumn: {

  },
  firstCentralconsumerscorestatHeader: {
    padding: 5,


  },
  firstCentralconsumerscorestatDescription: {
    padding: 4,

  },
  firstCentralconsumerscorestatDescriptionText: {
    fontSize: 6,
    textAlign: 'center',
    color: '#333',
    marginHorizontal: "auto"
  },
  firstCentralconsumerscorestatWhiteText: {
    color: 'white',
    fontSize: 6,
    paddingHorizontal:8,
    paddingVertical:4,
    fontWeight: 'bold',
  },
  firstCentralconsumerscorestatCom90Below: {
    backgroundColor: '#006400',
  },
  firstCentralconsumerscorestatCom91to180: {
    backgroundColor: '#FFD700',

  },
  firstCentralconsumerscorestatCom181to365: {
    backgroundColor: '#FFA500',
  },
  firstCentralconsumerscorestatCom365Above: {
    backgroundColor: '#FF0000',
  },

  firstCentralconsumerscoretable: {
    flexDirection: "column",
    borderStyle: 'solid',
     width:'100%',
    borderWidth: 1,
    borderColor: '#e5e7eb',
  },
  firstCentralconsumerscoretableRow: {
    flexDirection: 'row',
 
    borderBottomWidth: 1,
    borderBottomColor: '#e5e7eb',
    alignItems: 'center',

  },
  firstCentralconsumerscoretableHeader: {
    backgroundColor: '#f3f4f6',

  },
  firstCentralconsumerscoretableCol: {
    padding: 4,
    width:'100%',
    fontSize: 8,
    borderRightWidth: 1,
    borderRightColor: '#e5e7eb',
    borderLeftWidth: 0,
    borderLeftColor: '#e5e7eb',
    textAlign:"center"
  },
  firstCentralconsumerscoretableColFirst: {
    borderLeftWidth: 0,
  },
  firstCentralconsumerscoretableColLast: {
    borderRightWidth: 0,
  },
  firstCentralconsumerscoretableCell: {
    fontSize: 8,
    color: '#374151',
  },
  firstCentralconsumerscoretableheaderCell: {
    fontSize: 8,
    color: '#FF6B00',

  },



    // FacilityPerformanceSummary
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
      fontSize: 8,
      color: '#333',
      fontWeight: 'bold',
      backgroundColor: '#F5F5F5',
      padding: 4,
      borderBottom: '1px solid white',
    },
    CreditAccountSummaryvalue: {
      backgroundColor: 'white',
      width: '16.6%',
      fontSize: 8,
      color: '#666',
      padding: 4,
      borderBottom: '1px solid #E0E0E0',
  
    },
    CommercialCreditAccountSummaryvalue: {
      backgroundColor: 'white',
      textAlign:"center",
      width: '33.3%',
      fontSize: 8,
      color: '#666',
      padding: 4,
      borderBottom: '1px solid #E0E0E0',
  
    },
    CreditAccountSummaryvalue2container:{
      flexDirection:'row',
      width: '16.6%',
    },
    CreditAccountSummaryvalue2: {
      backgroundColor: 'white',
      width: '50%',
      fontSize: 8,
      color: '#666',
      padding: 4,
      borderBottom: '1px solid #E0E0E0',
  
    },
  
    // DirectorInformation
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
      fontSize: 8,
      color: '#333',
      fontWeight: 'bold',
      backgroundColor: '#F5F5F5',
      padding: 4,
      borderBottom: '1px solid white',
    },
    CreditAccountRatingvalueperforming: {
      backgroundColor: 'white',
      width: '25%',
      fontSize: 8,
      color: 'green',
      textAlign: "center",
      padding: 4,
      borderBottom: '1px solid #E0E0E0',
  
    },
    CreditAccountRatingvaluenonperforming: {
      backgroundColor: 'white',
      width: '25%',
      fontSize: 8,
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
      padding: 4,
      borderRightColor: '#E0E0E0',
      textAlign: 'center',
      textAlignVertical: 'center', // Align text vertically in the middle
    },
    CreditAgreementsSummaryAccountNumber: {
      width: '18%',
      fontSize: 8,
      color: '#333',
      padding: 4,
      borderRightColor: '#E0E0E0',
      textAlign: 'center',
      textAlignVertical: 'center',
    },
    CreditAgreementSummaryCurrency: {
      width: '10%',
      fontSize: 8,
      color: '#666',
      padding: 4,
      borderRightColor: '#E0E0E0',
      textAlign: 'center',
      textAlignVertical: 'center',
    },
    CreditAgreementAvailedLimit: {
      width: '12%',
      fontSize: 8,
      color: '#666',
      padding: 4,
      borderRightColor: '#E0E0E0',
      textAlign: 'center',
      textAlignVertical: 'center',
    },
    CreditAgreementOustandingBalance: {
      width: '12%',
      fontSize: 8,
      color: '#666',
      padding: 4,
      borderRightColor: '#E0E0E0',
      textAlign: 'center',
      textAlignVertical: 'center',
    },
    CreditAgreementInstalmentAmount: {
      width: '10%',
      fontSize: 8,
      color: '#666',
      padding: 4,
      borderRightColor: '#E0E0E0',
      textAlign: 'center',
      textAlignVertical: 'center',
    },
    CreditAgreementArrearAmount: {
      width: '10%',
      fontSize: 8,
      color: '#666',
      padding: 4,
      borderRightColor: '#E0E0E0',
      textAlign: 'center',
      textAlignVertical: 'center',
    },
    CreditAgreementsFacilityClassification: {
      width: '10%',
      fontSize: 8,
      color: '#666',
      padding: 4,
      borderRightColor: '#E0E0E0',
      textAlign: 'center',
      textAlignVertical: 'center',
    },
    CreditAgreementsAccountStatus: {
      width: '10%',
      fontSize: 8,
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
      fontSize: 8,
      color: '#333',
  
      fontWeight: 'bold',
      padding: 4,
      textAlign: 'center',
      textAlignVertical: 'center',
    },
    CreditAgreementSummaryAvailedLimitHeader: {
      width: '10%',
      fontSize: 8,
      color: '#666',
  
      fontWeight: 'bold',
      padding: 4,
      textAlign: 'center',
      textAlignVertical: 'center',
    },
    CreditAgreementSummaryOustandingBalanceHeader: {
      width: '10%',
      fontSize: 8,
      color: '#666',
  
      fontWeight: 'bold',
      padding: 4,
      textAlign: 'center',
      textAlignVertical: 'center',
    },
    CreditAgreementSummaryInstalmentAmountHeader: {
      width: '10%',
      fontSize: 8,
      color: '#666',
  
      fontWeight: 'bold',
      padding: 4,
      textAlign: 'center',
      textAlignVertical: 'center',
    },
    CreditAgreementSummaryArrearAmountHeader: {
      width: '10%',
      fontSize: 8,
      color: '#666',
  
      fontWeight: 'bold',
      padding: 4,
      textAlign: 'center',
      textAlignVertical: 'center',
    },
    CreditAgreementsummaryFacilityClassificationHeader: {
      width: '10%',
      fontSize: 8,
      color: '#666',
  
      fontWeight: 'bold',
      padding: 4,
      textAlign: 'center',
      textAlignVertical: 'center',
    },
    CreditAgreementSummaryAccountStatusHeader: {
      width: '10%',
      fontSize: 8,
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
      fontSize: 8,
      color: '#333',
      fontWeight: 'bold',
      backgroundColor: '#F5F5F5',
      padding: 4,
      borderBottom: '1px solid white',
    },
    creditAgreementsfirstvalue: {
      backgroundColor: 'white',
      width: '68%',
      fontSize: 8,
      color: '#666',
      padding: 4,
      borderTop: '1px solid #E0E0E0',
  
    },
    creditAgreementslabel: {
      width: '55%',
      fontSize: 8,
      color: '#333',
      fontWeight: 'bold',
      backgroundColor: '#F5F5F5',
      padding: 4,
      borderBottom: '1px solid white',
    },
    creditAgreementsvalue: {
      backgroundColor: 'white',
      width: '45%',
      fontSize: 8,
      color: '#666',
      padding: 4,
      borderTop: '1px solid #E0E0E0',
  
    },
    creditAgreementssummary: {
      fontSize: 8,
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
      fontSize: 8,
      color: '#333',
      fontWeight: 'bold',
      backgroundColor: '#F5F5F5',
      padding: 4,
      borderBottom: '1px solid white',
    },
    GuarantorDetailsvalue: {
      backgroundColor: 'white',
      width: '50%',
      fontSize: 8,
      textAlign: "center",
      padding: 4,
      borderBottom: '1px solid #E0E0E0',
  
    },
  
  
    // LatestGuarantorDetails
    LatestGuarantorDetailslabel: {
      width: '25%',
      fontSize: 8,
      color: '#333',
      fontWeight: 'bold',
      backgroundColor: '#F5F5F5',
      padding: 4,
      borderBottom: '1px solid white',
    },
    LatestGuarantorDetailsvalue: {
      backgroundColor: 'white',
      width: '25%',
      fontSize: 8,
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
      textAlign:"center"
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
      fontSize: 8,
      color: '#333',
      fontWeight: 'bold',
      backgroundColor: '#F5F5F5',
      padding: 4,
      borderBottom: '1px solid white',
    },
    companydirectorshipvalue: {
      backgroundColor: 'white',
      width: '50%',
      fontSize: 8,
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
        textAlign:"center"
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
        textAlign:"center"
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
  
  
    // DirectorInformation  
    DirectorInformationidhead: {
      width:"5%",
      fontSize: 8,
      color: '#333',
      fontWeight: 'bold',
      padding: 4,
      borderRightColor: '#E0E0E0',
      textAlign: 'center',
      textAlignVertical: 'center',  // Align text vertically in the middle
    },
    DirectorInformationidnumberhead: {
      width:"15%",
      fontSize: 8,
      color: '#333',
      fontWeight: 'bold',
      padding: 4,
      borderRightColor: '#E0E0E0',
      textAlign: 'center',
      textAlignVertical: 'center',  // Align text vertically in the middle
    },
    DirectorInformationfirsthead: {
      width:"20%",
      fontSize: 8,
      color: '#333',
      fontWeight: 'bold',
      padding: 4,
      borderRightColor: '#E0E0E0',
      textAlign: 'center',
      textAlignVertical: 'center',  // Align text vertically in the middle
    },
    DirectorInformationlasthead: {
      width:"15%",
      fontSize: 8,
      color: '#333',
      fontWeight: 'bold',
      padding: 4,
      borderRightColor: '#E0E0E0',
      textAlign: 'center',
      textAlignVertical: 'center',  // Align text vertically in the middle
    },
    DirectorInformationsurnamehead: {
      width:"20%",
      fontSize: 8,
      color: '#333',
      fontWeight: 'bold',
      padding: 4,
      borderRightColor: '#E0E0E0',
      textAlign: 'center',
      textAlignVertical: 'center',  // Align text vertically in the middle
    },
    DirectorInformationdobhead: {
      width:"10%",
      fontSize: 8,
      color: '#333',
      fontWeight: 'bold',
      padding: 4,
      borderRightColor: '#E0E0E0',
      textAlign: 'center',
      textAlignVertical: 'center',  // Align text vertically in the middle
    },
    DirectorInformationappointmentdatehead: {
      width:"15%",
      fontSize: 8,
      color: '#333',
      padding: 4,
      textAlign: 'center',
      textAlignVertical: 'center', // Align text vertically in the middle
    },
  
  
    DirectorInformationid: {
      width:"5%",
      fontSize: 8,
      color: '#333',
      padding: 4,
      textAlign: 'center',
      textAlignVertical: 'center', // Align text vertically in the middle
    },
    DirectorInformationidnumber: {
      width:"15%",
      fontSize: 8,
      color: '#333',
      padding: 4,
      textAlign: 'center',
      textAlignVertical: 'center', // Align text vertically in the middle
    },
    DirectorInformationfirst: {
      width:"20%",
      fontSize: 8,
      color: '#333',
      padding: 4,
      textAlign: 'center',
      textAlignVertical: 'center', // Align text vertically in the middle
    },
    DirectorInformationlast: {
      width:"15%",
      fontSize: 8,
      color: '#333',
      padding: 4,
      textAlign: 'center',
      textAlignVertical: 'center', // Align text vertically in the middle
    },
    DirectorInformationsurname: {
      width:"20%",
      fontSize: 8,
      color: '#333',
      padding: 4,
      textAlign: 'center',
      textAlignVertical: 'center', // Align text vertically in the middle
    },
    DirectorInformationdob: {
      width:"10%",
      fontSize: 8,
      color: '#333',
      padding: 4,
      textAlign: 'center',
      textAlignVertical: 'center', // Align text vertically in the middle
    },
    DirectorInformationappointmentdate: {
      width:"15%",
      fontSize: 8,
      color: '#333',
      padding: 4,
      textAlign: 'center',
      textAlignVertical: 'center', // Align text vertically in the middle
    },
    companyhigestrepaymentheader:{
      width:"100%",
flexDirection:"row",
fontSize:10,
fontWeight: 'bold',
marginVertical:"8px"
},
    companyhigestrepayment:{
      width:"50%",
      textAlign:"center"
    }
  
  });