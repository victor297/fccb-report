import { Document, Page, Text, View, Image, PDFViewer } from '@react-pdf/renderer';
import { xscoreconsumerfullcredit1 } from '../../../test';
import { styles } from '../style';
import logo from "../../../assets/logo.png"
import Loader from '../../../components/Loader';
import { useState } from 'react';
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



const DirectorCreditReport = () => {
  const [isLoading, setIsLoading] = useState(true);
  const subjectlist = xscoreconsumerfullcredit1.map(item => item.SubjectList).filter(Boolean);
  const scoring = xscoreconsumerfullcredit1.map(item => item.Scoring).filter(Boolean);
  const enquiryInput = xscoreconsumerfullcredit1.map(item => item.EnquiryInput).filter(Boolean);
  const personaldetailsssummary = xscoreconsumerfullcredit1.map(item => item.PersonalDetailsSummary).filter(Boolean);
  const deliquencyinformtion = xscoreconsumerfullcredit1.map(item => item.DeliquencyInformation).filter(Boolean);
  const creditAccountSummary = xscoreconsumerfullcredit1.map(item => item.CreditAccountSummary).filter(Boolean);
  const creditAccountRating = xscoreconsumerfullcredit1.map(item => item.CreditAccountRating).filter(Boolean);
  const creditAgreementSummary = xscoreconsumerfullcredit1.map(item => item.CreditAgreementSummary).filter(Boolean);
  const accountMonthlyPaymentHistoryHeader = xscoreconsumerfullcredit1.map(item => item.AccountMonthlyPaymentHeader).filter(Boolean);
  const accountMonthlyPaymentHistory = xscoreconsumerfullcredit1.map(item => item.AccountMonthlyPaymentHistory).filter(Boolean);
  const guarantorCount = xscoreconsumerfullcredit1.map(item => item.GuarantorCount).filter(Boolean);
  const guarantorDetails = xscoreconsumerfullcredit1.map(item => item.GuarantorDetails).filter(Boolean);
  const enquiryHistoryTop = xscoreconsumerfullcredit1.map(item => item.EnquiryHistoryTop).filter(Boolean);
  const identificationHistory = xscoreconsumerfullcredit1.map(item => item.IdentificationHistory).filter(Boolean);
  const addressHistory = xscoreconsumerfullcredit1.map(item => item.AddressHistory).filter(Boolean);
  const employmentHistory = xscoreconsumerfullcredit1.map(item => item.EmploymentHistory).filter(Boolean);
  const telephoneHistory = xscoreconsumerfullcredit1.map(item => item.TelephoneHistory).filter(Boolean);
  const enquiryDetails = xscoreconsumerfullcredit1.map(item => item.EnquiryDetails).filter(Boolean);
  const Scoring = scoring?.[0][0]
  const EnquiryInput = enquiryInput?.[0]?.[0]
  const SubjectList = subjectlist[0][0]
  const personalDetails = personaldetailsssummary[0]?.[0] || {}; // Ensuring we don't access undefined values
  const formatValue = (value) => value ?? " "; // Utility function to handle null, undefined, or empty strings
  const CreditAccountRating = creditAccountRating[0][0]
  const CreditAccountSummary = creditAccountSummary[0][0]
  const CreditAgreementSummary = creditAgreementSummary[0]
  const AccountMonthlyPaymentHistoryHeader = accountMonthlyPaymentHistoryHeader?.[0]?.[0]
  const AccountMonthlyPaymentHistory = accountMonthlyPaymentHistory?.[0]
  const dynamicMonths = Object?.values(AccountMonthlyPaymentHistoryHeader ?? {})
    ?.slice(3)
    ?.map(month => month.replace('\n', ' '))
    ?.reverse();
  const GuarantorCount = guarantorCount[0][0]
  const GuarantorDetails = guarantorDetails[0][0]
  const IdentificationHistory = identificationHistory?.[0]
  const AddressHistory = addressHistory?.[0]
  const TelephoneHistory = telephoneHistory?.[0]
  const EmploymentHistory = employmentHistory?.[0]


  console.log("SubjectList:", subjectlist?.[0]?.[0]);
  console.log("Scoring:", scoring?.[0]?.[0]);
  console.log("EnquiryInput:", EnquiryInput);
  console.log("PersonalDetailsSummary:", personaldetailsssummary?.[0]?.[0]);
  console.log("DeliquencyInformation:", deliquencyinformtion?.[0]);
  console.log("CreditAccountSummary:", creditAccountSummary?.[0]?.[0]);
  console.log("CreditAccountRating:", creditAccountRating?.[0]?.[0]);
  console.log("CreditAgreementSummary:", creditAgreementSummary);
  console.log("AccountMonthlyPaymentHistoryHeader:", accountMonthlyPaymentHistoryHeader);
  console.log("AccountMonthlyPaymentHistory:", accountMonthlyPaymentHistory);
  console.log("GuarantorCount:", guarantorCount?.[0]?.[0]);
  console.log("GuarantorDetails:", guarantorDetails?.[0]?.[0]);
  console.log("EnquiryHistoryTop:", enquiryHistoryTop?.[0]);
  console.log("IdentificationHistory:", identificationHistory);
  console.log("AddressHistory:", addressHistory);
  console.log("EmploymentHistory:", employmentHistory?.[0]?.[0]);
  console.log("TelephoneHistory:", telephoneHistory?.[0]?.[0]);
  console.log("EnquiryDetails: ", enquiryDetails?.[0]?.[0]);
  return (
    <div className=' flex justify-center'>
      {isLoading && (
        <div style={{ textAlign: 'center', padding: 20 }}>
          <Loader />
        </div>
      )}

      <PDFViewer style={{ width: '100%', height: '400vh', display: isLoading ? 'none' : 'block' }}>

        <Document onRender={() => setIsLoading(false)}>
          <Page size="A4" style={styles.page}>
            {/* Header */}
            <View style={styles.header} fixed>
              <View>
                <Image style={styles.logo} src={logo} />
              </View>
              <View style={styles.addressheader}>
                <Text>Director Credit Report - Detailed</Text>
                <Text style={styles.address}>
                  37A Raymond Njoku Street, Ikoyi, Lagos, Nigeria{'\n'}
                  Tel No:+234 (1) 453 4908, +234 (909) 114 1981{'\n'}
                  website:www.firstcentralcreditbureau.com{'\n'}
                  Email: info@firstcentralcreditbureau.com
                </Text>
              </View>
            </View>

            {/* Enquiry Input Details */}

            <View style={styles.section}>
              <View style={styles.sectionHeader}>
                <Text style={styles.otherSectionTitle}>Enquiry Input Details</Text>
                <Text style={styles.sectionTitleOrderBorder}></Text>
              </View>
              <Text style={styles.sectionDescription}>
                This section includes the user's search input details and matching rate.
              </Text>

              <View style={styles.enquiryinputdetailsGrid}>
                <View style={styles.enquiryinputdetailsRow}>
                  <Text style={styles.enquiryinputdetailslabel}>Enquiry Date</Text>
                  <Text style={styles.enquiryinputdetailsvalue}>{EnquiryInput?.EnquiryDate}</Text>
                </View>
                <View style={styles.enquiryinputdetailsRow}>
                  <Text style={styles.enquiryinputdetailslabel}>Enquiry Type</Text>
                  <Text style={styles.enquiryinputdetailsvalue}>{EnquiryInput?.EnquiryType}</Text>
                </View>
                <View style={styles.enquiryinputdetailsRow}>
                  <Text style={styles.enquiryinputdetailslabel}>Subscriber Name</Text>
                  <Text style={styles.enquiryinputdetailsvalue}>{EnquiryInput?.SubscriberName}</Text>
                </View>
                <View style={styles.enquiryinputdetailsRow}>
                  <Text style={styles.enquiryinputdetailslabel}>Subscriber User Name</Text>
                  <Text style={styles.enquiryinputdetailsvalue}>{EnquiryInput?.SubscriberUsername}</Text>
                </View>
                <View style={styles.enquiryinputdetailsRow}>
                  <Text style={styles.enquiryinputdetailslabel}>Enquiry Input</Text>
                  <Text style={styles.enquiryinputdetailsvalue}>{EnquiryInput?.Input}</Text>
                </View>
                <View style={styles.enquiryinputdetailsRow}>
                  <Text style={styles.enquiryinputdetailslabel}>Enquiry Reason</Text>
                  <Text style={styles.enquiryinputdetailsvalue}>{EnquiryInput?.EnquiryReason}</Text>
                </View>
                <View style={styles.enquiryinputdetailsRow}>
                  <Text style={styles.enquiryinputdetailslabel}>Matching Rate</Text>
                  <Text style={styles.enquiryinputdetailsvalue}>{EnquiryInput?.MatchRate}</Text>
                </View>
              </View>
            </View>


            {/* Personal Details */}
            <View style={styles.section}>
              <View style={styles.sectionHeader}>
                <Text style={styles.otherSectionTitle}>Personal Details Summary</Text>
                <Text style={styles.sectionTitleOrderBorder}></Text>
              </View>
              <Text style={styles.sectionDescription}>
                This section includes the consumer's demographic information.
              </Text>
              <Text style={styles.Personaldetailsummary}>
                {formatValue(personalDetails?.Header)}
              </Text>
              <View style={styles.PersonaldetailsGrid}>
                {[
                  { label: "FirstCentral Reference Number", value: personalDetails?.ConsumerID },
                  { label: "Unique Tracking Number", value: personalDetails?.ReferenceNo },
                  { label: "Surname", value: personalDetails?.Surname },
                  { label: "Other Names", value: personalDetails?.OtherNames },
                  { label: "First Name", value: personalDetails?.FirstName },
                  { label: "Bank Verification Number (BVN)", value: personalDetails?.BankVerificationNo },
                  { label: "Date of Birth", value: personalDetails?.BirthDate },
                  { label: "Driver's License Number", value: personalDetails?.DriversLicenseNo },
                  { label: "National ID Number", value: personalDetails?.NationalIDNo },
                  { label: "PENCOM ID", value: personalDetails?.PencomIDNo },
                  { label: "Other ID Number", value: personalDetails?.otheridNo },
                  { label: "Passport Number", value: personalDetails?.PassportNo },
                  // { label: "Gender", value: personalDetails?.Gender },
                  // { label: "Marital Status", value: personalDetails?.MaritalStatus },
                  // { label: "No. of Dependants", value: personalDetails?.Dependants },
                  // { label: "Nationality", value: personalDetails?.Nationality },
                  // { label: "Latest Residential Address 1", value: personalDetails?.ResidentialAddress1 },
                  // { label: "Latest Postal Address", value: personalDetails?.PostalAddress1 },
                  // { label: "Home Telephone", value: personalDetails?.HomeTelephoneNo },
                  // { label: "Work Telephone", value: personalDetails?.WorkTelephoneNo },
                  // { label: "Current Employer", value: personalDetails?.EmployerDetail },
                  // { label: "Property Ownership Type", value: personalDetails?.PropertyOwnedType },
                  // { label: "Email Address", value: personalDetails?.EmailAddress },
                  // { label: "Mobile Number", value: personalDetails?.CellularNo },

                ].map((item, index) => (

                  <View key={index} style={styles.PersonaldetailRow}>
                    <Text style={styles.Personaldetaillabel}>{item.label}</Text>
                    <Text style={styles.Personaldetailvalue}>{item.value || " "}</Text>
                  </View>
                ))}
              </View>
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
                    <Text style={styles.companydirectorshipvalue}>1 </Text>

                  </View>
                </View>
              </View>
            </View>




            {/* // Company Directorship Breakdown */}


            <View style={styles.section}>
              <View style={styles.sectionHeader}>
                <Text style={styles.otherSectionTitle}>Company Directorship Breakdown</Text>
                <Text style={styles.sectionTitleOrderBorder}></Text>
              </View>
              <Text style={styles.sectionDescription}>
                This section includes a breakdown of directorships held information.
              </Text>
              <View style={styles.enquiryhistoryinlast12monthtable}>
                {/* Table Header */}
                <View style={[styles.enquiryhistoryinlast12monthtableRow, styles.enquiryhistoryinlast12monthtableHeader]}>
                  <View style={[styles.enquiryhistoryinlast12monthtableCol, styles.enquiryhistoryinlast12monthtableColFirst]}>
                    <Text style={styles.enquiryhistoryinlast12monthtableCell}>Date Updated</Text>
                  </View>
                  <View style={styles.enquiryhistoryinlast12monthtableCol}>
                    <Text style={styles.enquiryhistoryinlast12monthtableCell}>Company Name</Text>
                  </View>
                  <View style={styles.enquiryhistoryinlast12monthtableCol}>
                    <Text style={styles.enquiryhistoryinlast12monthtableCell}>Company Reg. Number</Text>
                  </View>
                  <View style={styles.enquiryhistoryinlast12monthtableCol}>
                    <Text style={styles.enquiryhistoryinlast12monthtableCell}>Appointment Date</Text>
                  </View>

                </View>
              </View>

              {/* Table Body */}
              {[1, 2].map((record, index) => (
                <View key={index} style={styles.enquiryhistoryinlast12monthtableRow}>
                  <View style={[styles.enquiryhistoryinlast12monthtableCol, styles.enquiryhistoryinlast12monthtableColFirst]}>
                    <Text style={styles.enquiryhistoryinlast12monthtableCell}>{`22/12/2017`}</Text>
                  </View>
                  <View style={styles.enquiryhistoryinlast12monthtableCol}>
                    <Text style={styles.enquiryhistoryinlast12monthtableCell}>{`XYZ FINANCE BANK LTD`}</Text>
                  </View>
                  <View style={styles.enquiryhistoryinlast12monthtableCol}>
                    <Text style={styles.enquiryhistoryinlast12monthtableCell}>{`RC1389690`}</Text>
                  </View>
                  <View style={styles.enquiryhistoryinlast12monthtableCol}>
                    <Text style={styles.enquiryhistoryinlast12monthtableCell}>{`22/12/2000`}</Text>
                  </View>

                </View>
              ))}
            </View>

            {/* //Highest Repayment Default */}
            <View style={styles.section}>
              <View style={styles.sectionHeader}>
                <Text style={styles.otherSectionTitle}>Highest Repayment Default
                </Text>
                <Text style={styles.sectionTitleOrderBorder}></Text>
              </View>
              <Text style={styles.sectionDescription}>
                This section includes the highest delinquency rate (in Months) of each Company where Individual is a director.
              </Text>
              <View style={styles.companyhigestrepaymentheader}>
                <Text style={styles.companyhigestrepayment}>Company Names</Text>
                <Text style={styles.companyhigestrepayment}>Highest Months in Arrears</Text>

              </View>
              <View style={styles.CreditAccountRatingenquiryheader}>
                <View style={styles.CreditAccountRatingdetailsGrid}>
                  <View style={styles.CreditAccountRatingdetailRow}>
                    <Text style={styles.companydirectorshiplabel}>XYZ FINANCE BANK LTD </Text>
                    <Text style={styles.companydirectorshipvalue}>5 </Text>

                  </View>
                </View>
              </View>
            </View>

            {/* Blacklisted account */}
            <View style={styles.section} wrap={false}>
              <View style={styles.sectionHeader}>
                <Text style={styles.otherSectionTitle}>Blacklisted Account
                </Text>
                <Text style={styles.sectionTitleOrderBorder}></Text>
              </View>
              <Text style={styles.sectionDescription}>
                This section includes the Blacklisted account where Individual is a director.
              </Text>
              <View style={styles.companyhigestrepaymentheader}>
                <Text style={styles.companyhigestrepayment}>Company Names</Text>
                <Text style={styles.companyhigestrepayment}>Date of Blacklist</Text>

              </View>
              <View style={styles.CreditAccountRatingenquiryheader}>
                <View style={styles.CreditAccountRatingdetailsGrid}>
                  <View style={styles.CreditAccountRatingdetailRow}>
                    <Text style={styles.companydirectorshiplabel}>XYZ FINANCE BANK LTD </Text>
                    <Text style={styles.companydirectorshipvalue}>5/02/2024 </Text>

                  </View>
                </View>
              </View>
            </View>


            {/* Credit account sumaarry */}
            <View style={styles.section} wrap={false}>
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
                    <Text style={styles.CreditAccountSummarylabel}> </Text>
                    <Text style={styles.CreditAccountSummaryvalue}>{`Dates/ Counts`} </Text>
                    <Text style={styles.CreditAccountSummaryvalue}>{`(=N=)`}</Text>
                    <Text style={styles.CreditAccountSummaryvalue}>{` (US$)`}</Text>
                  </View>
                  <View style={styles.CreditAccountSummarydetailRow}>
                    <Text style={styles.CreditAccountSummarylabel}> Total Monthly Installments </Text>
                    <View style={styles.CreditAccountSummaryvalue2container}>
                      <Text style={styles.CreditAccountSummaryvalue2}> {null}</Text>
                      <Text style={styles.CreditAccountSummaryvalue2}> {null}</Text>
                    </View>
                    <Text style={styles.CreditAccountSummaryvalue}>{CreditAccountSummary?.TotalMonthlyInstalment}</Text>
                    <Text style={styles.CreditAccountSummaryvalue}>{CreditAccountSummary?.TotalMonthlyInstalment1}</Text>
                  </View>
                  <View style={styles.CreditAccountSummarydetailRow}>
                    <Text style={styles.CreditAccountSummarylabel}>Total Outstanding Debt</Text>
                    <View style={styles.CreditAccountSummaryvalue2container}><Text style={styles.CreditAccountSummaryvalue2}> {null}</Text><Text style={styles.CreditAccountSummaryvalue2}> {null}</Text></View>
                    <Text style={styles.CreditAccountSummaryvalue}>{CreditAccountSummary?.TotalOutstandingdebt}</Text>
                    <Text style={styles.CreditAccountSummaryvalue}>{CreditAccountSummary?.TotalOutstandingdebt1}</Text>
                  </View>
                  <View style={styles.CreditAccountSummarydetailRow}>
                    <Text style={styles.CreditAccountSummarylabel}>Total Number of Accounts in Arrears</Text>
                    <View style={styles.CreditAccountSummaryvalue2container}><Text style={styles.CreditAccountSummaryvalue2}> {CreditAccountSummary?.TotalAccountarrear}</Text><Text style={styles.CreditAccountSummaryvalue2}> {CreditAccountSummary?.TotalAccountarrear1}</Text></View>
                    <Text style={styles.CreditAccountSummaryvalue}>{null}</Text>
                    <Text style={styles.CreditAccountSummaryvalue}>{null}</Text>
                  </View>
                  <View style={styles.CreditAccountSummarydetailRow}>
                    <Text style={styles.CreditAccountSummarylabel}>Total Arrear Amount</Text>
                    <View style={styles.CreditAccountSummaryvalue2container}><Text style={styles.CreditAccountSummaryvalue2}> {null}</Text><Text style={styles.CreditAccountSummaryvalue2}> {null}</Text></View>
                    <Text style={styles.CreditAccountSummaryvalue}>{CreditAccountSummary?.Amountarrear}</Text>
                    <Text style={styles.CreditAccountSummaryvalue}>{CreditAccountSummary?.Amountarrear1}</Text>
                  </View>
                  <View style={styles.CreditAccountSummarydetailRow}>
                    <Text style={styles.CreditAccountSummarylabel}>Total Number of Accounts in Good Standing </Text>
                    <View style={styles.CreditAccountSummaryvalue2container}><Text style={styles.CreditAccountSummaryvalue2}> {CreditAccountSummary?.TotalaccountinGoodcondition}</Text><Text style={styles.CreditAccountSummaryvalue2}> {CreditAccountSummary?.TotalaccountinGodcondition1}</Text></View>
                    <Text style={styles.CreditAccountSummaryvalue}>{null}</Text>
                    <Text style={styles.CreditAccountSummaryvalue}>{null}</Text>
                  </View>
                  <View style={styles.CreditAccountSummarydetailRow}>
                    <Text style={styles.CreditAccountSummarylabel}>Total Number of Accounts Taken </Text>
                    <View style={styles.CreditAccountSummaryvalue2container}><Text style={styles.CreditAccountSummaryvalue2}> {CreditAccountSummary?.TotalAccounts}</Text><Text style={styles.CreditAccountSummaryvalue2}> {CreditAccountSummary?.TotalAccounts1}</Text></View>
                    <Text style={styles.CreditAccountSummaryvalue}>{null}</Text>
                    <Text style={styles.CreditAccountSummaryvalue}>{null}</Text>
                  </View>
                  <View style={styles.CreditAccountSummarydetailRow}>
                    <Text style={styles.CreditAccountSummarylabel}>    </Text>
                    <Text style={styles.CreditAccountSummaryvalue}>    </Text>
                    <Text style={styles.CreditAccountSummaryvalue}>  </Text>
                    <Text style={styles.CreditAccountSummaryvalue}>  </Text>
                  </View>
                  <View style={styles.CreditAccountSummarydetailRow}>
                    <Text style={styles.CreditAccountSummarylabel}>Total Number of Judgements</Text>
                    <View style={styles.CreditAccountSummaryvalue2container}><Text style={styles.CreditAccountSummaryvalue2}> {CreditAccountSummary?.TotalJudgementAmount}</Text><Text style={styles.CreditAccountSummaryvalue2}> {CreditAccountSummary?.TotalJudgementAmount1}</Text></View>
                    <Text style={styles.CreditAccountSummaryvalue}>{null}</Text>
                    <Text style={styles.CreditAccountSummaryvalue}>{null}</Text>
                  </View>
                  <View style={styles.CreditAccountSummarydetailRow}>
                    <Text style={styles.CreditAccountSummarylabel}>Total Judgement Amount</Text>
                    <View style={styles.CreditAccountSummaryvalue2container}><Text style={styles.CreditAccountSummaryvalue2}> {null}</Text><Text style={styles.CreditAccountSummaryvalue2}> {null}</Text></View>
                    <Text style={styles.CreditAccountSummaryvalue}>{CreditAccountSummary?.TotalNumberofJudgement}</Text>
                    <Text style={styles.CreditAccountSummaryvalue}>{CreditAccountSummary?.TotalNumberofJudgement1}</Text>
                  </View>
                  <View style={styles.CreditAccountSummarydetailRow}>
                    <Text style={styles.CreditAccountSummarylabel}>Date of Last Judgement</Text>
                    <View style={styles.CreditAccountSummaryvalue2container}><Text style={styles.CreditAccountSummaryvalue2}> {CreditAccountSummary?.LastJudgementDate}</Text><Text style={styles.CreditAccountSummaryvalue2}> {CreditAccountSummary?.LastJudgementDate1}</Text></View>
                    <Text style={styles.CreditAccountSummaryvalue}>{null}</Text>
                    <Text style={styles.CreditAccountSummaryvalue}>{null}</Text>
                  </View>
                  <View style={styles.CreditAccountSummarydetailRow}>
                    <Text style={styles.CreditAccountSummarylabel}>  </Text>
                    <Text style={styles.CreditAccountSummaryvalue}>  </Text>
                    <Text style={styles.CreditAccountSummaryvalue}>  </Text>
                    <Text style={styles.CreditAccountSummaryvalue}>  </Text>
                  </View>
                  <View style={styles.CreditAccountSummarydetailRow}>
                    <Text style={styles.CreditAccountSummarylabel}>Total Number of Dishonoured Cheques</Text>
                    <View style={styles.CreditAccountSummaryvalue2container}>
                      <Text style={styles.CreditAccountSummaryvalue2}> {CreditAccountSummary?.TotalNumberofDishonoured}</Text>
                      <Text style={styles.CreditAccountSummaryvalue2}> {CreditAccountSummary?.TotalNumberofDishonoured1}</Text>
                    </View>
                    <Text style={styles.CreditAccountSummaryvalue}>{null}</Text>
                    <Text style={styles.CreditAccountSummaryvalue}>{null}</Text>
                  </View>
                  <View style={styles.CreditAccountSummarydetailRow}>
                    <Text style={styles.CreditAccountSummarylabel}>Total Amount of Dishonoured Cheques </Text>
                    <View style={styles.CreditAccountSummaryvalue2container}><Text style={styles.CreditAccountSummaryvalue2}> {null}</Text><Text style={styles.CreditAccountSummaryvalue2}> {null}</Text></View>
                    <Text style={styles.CreditAccountSummaryvalue}>{CreditAccountSummary?.TotalDishonouredAmount}</Text>
                    <Text style={styles.CreditAccountSummaryvalue}>{CreditAccountSummary?.TotalDishonouredAmount}</Text>
                  </View>
                  <View style={styles.CreditAccountSummarydetailRow}>
                    <Text style={styles.CreditAccountSummarylabel}>Date of Last Bounced Cheque            </Text>
                    <View style={styles.CreditAccountSummaryvalue2container}>
                      <Text style={styles.CreditAccountSummaryvalue2}> {CreditAccountSummary?.LastBouncedChequesDate}</Text>
                      <Text style={styles.CreditAccountSummaryvalue2}> {CreditAccountSummary?.LastBouncedChequesDate1}</Text></View>
                    <Text style={styles.CreditAccountSummaryvalue}>{null}</Text>
                    <Text style={styles.CreditAccountSummaryvalue}>{null}</Text>
                  </View>
                  <View style={styles.CreditAccountSummarydetailRow}>
                    <Text style={styles.CreditAccountSummarylabel}>  </Text>
                    <Text style={styles.CreditAccountSummaryvalue}>    </Text>
                    <Text style={styles.CreditAccountSummaryvalue}>  </Text>
                    <Text style={styles.CreditAccountSummaryvalue}>  </Text>
                  </View>
                  <View style={styles.CreditAccountSummarydetailRow}>
                    <Text style={styles.CreditAccountSummarylabel}>Total Number of Utilities</Text>
                    <View style={styles.CreditAccountSummaryvalue2container}><Text style={styles.CreditAccountSummaryvalue2}> {`0`}</Text><Text style={styles.CreditAccountSummaryvalue2}> {`0`}</Text></View>
                    <Text style={styles.CreditAccountSummaryvalue}>{`0.0`}</Text>
                    <Text style={styles.CreditAccountSummaryvalue}>{`0.00`}</Text>
                  </View>
                  <View style={styles.CreditAccountSummarydetailRow}>
                    <Text style={styles.CreditAccountSummarylabel}>Total Amount of Utilities</Text>
                    <View style={styles.CreditAccountSummaryvalue2container}><Text style={styles.CreditAccountSummaryvalue2}> {`0`}</Text><Text style={styles.CreditAccountSummaryvalue2}> {`0`}</Text></View>
                    <Text style={styles.CreditAccountSummaryvalue}>{`0.0`}</Text>
                    <Text style={styles.CreditAccountSummaryvalue}>{`0.00`}</Text>
                  </View>
                  <View style={styles.CreditAccountSummarydetailRow}>
                    <Text style={styles.CreditAccountSummarylabel}>Date of Last Utility</Text>
                    <View style={styles.CreditAccountSummaryvalue2container}><Text style={styles.CreditAccountSummaryvalue2}> {`0`}</Text><Text style={styles.CreditAccountSummaryvalue2}> {`0`}</Text></View>
                    <Text style={styles.CreditAccountSummaryvalue}>{`0.0`}</Text>
                    <Text style={styles.CreditAccountSummaryvalue}>{`0.00`}</Text>
                  </View>

                </View>

              </View>
            </View>
            <Text style={styles.disclaimer} >
              Disclaimer {'\n'}{'\n'}
              This information contained in this report has been compiled on the data provided by the subscribers of FirstCentral or other authorized sources and may not have been
              independently verified by FirstCentral. It does not represent the opinion of FirstCentral Nigeria on the creditworthiness or appropriateness of the subject(s) for any credit
              facility.{'\n'}{'\n'}
              FirstCentral does not make or give warranties with respect to the information contained in this report, express or implied, statutory or otherwise, including but not
              limited to warranties of accuracy, merchantability, and fitness for a particular purpose.{'\n'}{'\n'}
              By furnishing this information, FirstCentral does not underwrite or assume any legal responsibility in any manner whatsoever, and hereby denies liability, for any losses or
              damage that may result from use of this report as a consequence of any inaccuracies in, or any omissions from, the information which it may contain.{'\n'}{'\n'}
              The information contained in this report is supplied on a strictly confidential basis to you and shall not be disclosed to any other person. The information contained in this
              report shall be used only for permissible purpose as defined by the Credit Reporting Act, 2017 and by the Central Bank of Nigeria’s Guidelines made pursuant thereto
            </Text>

            {/* footer */}
            <View style={styles.pageNumber} fixed >
              <Text> Report Extracted on: {getFormattedDate()}</Text>

              <Text render={({ pageNumber, totalPages }) => (
                `${pageNumber} / ${totalPages}`
              )} fixed />
            </View>
          </Page>

        </Document>
      </PDFViewer>
    </div>
  )
};

export default DirectorCreditReport;