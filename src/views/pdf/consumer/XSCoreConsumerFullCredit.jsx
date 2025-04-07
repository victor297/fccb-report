import { Document, Page, Text, View, Image, PDFViewer } from '@react-pdf/renderer';
// import { data } from '../../../test';
import { styles } from '../style';
import Loader from '../../../components/Loader';
import { useState } from 'react';
import logo from "../../../assets/logo.png"

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

const XSCoreConsumerFullCredit = ({ data }) => {
  const [isLoading, setIsLoading] = useState(true);
  const subjectlist = data.map(item => item.SubjectList).filter(Boolean);
  const scoring = data.map(item => item.Scoring).filter(Boolean);
  const enquiryInput = data.map(item => item.EnquiryInput).filter(Boolean);
  const personaldetailsssummary = data.map(item => item.PersonalDetailsSummary).filter(Boolean);
  const deliquencyinformtion = data.map(item => item.DeliquencyInformation).filter(Boolean);
  const creditAccountSummary = data.map(item => item.CreditAccountSummary).filter(Boolean);
  const creditAccountRating = data.map(item => item.CreditAccountRating).filter(Boolean);
  const creditAgreementSummary = data.map(item => item.CreditAgreementSummary).filter(Boolean);
  const accountMonthlyPaymentHistoryHeader = data.map(item => item.AccountMonthlyPaymentHeader).filter(Boolean);
  const accountMonthlyPaymentHistory = data.map(item => item.AccountMonthlyPaymentHistory).filter(Boolean);
  const guarantorCount = data.map(item => item.GuarantorCount).filter(Boolean);
  const guarantorDetails = data.map(item => item.GuarantorDetails).filter(Boolean);
  const enquiryHistoryTop = data.map(item => item.EnquiryHistoryTop).filter(Boolean);
  const identificationHistory = data.map(item => item.IdentificationHistory).filter(Boolean);
  const addressHistory = data.map(item => item.AddressHistory).filter(Boolean);
  const employmentHistory = data.map(item => item.EmploymentHistory).filter(Boolean);
  const telephoneHistory = data.map(item => item.TelephoneHistory).filter(Boolean);
  const enquiryDetails = data.map(item => item.EnquiryDetails).filter(Boolean);
  const Scoring = scoring?.[0][0]
  const EnquiryInput = enquiryInput?.[0]?.[0]
  const SubjectList = subjectlist[0][0]
  const personalDetails = personaldetailsssummary[0]?.[0] || {}; // Ensuring we don't access undefined values
  const formatValue = (value) => value ?? "N/A"; // Utility function to handle null, undefined, or empty strings
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
                <Text>X-Score Consumer Report - Detailed</Text>
                <Text style={styles.address}>
                  37A Raymond Njoku Street, Ikoyi, Lagos, Nigeria{'\n'}
                  Tel No:+234 (1) 453 4908, +234 (909) 114 1981{'\n'}
                  website:www.firstcentralcreditbureau.com{'\n'}
                  Email: info@firstcentralcreditbureau.com
                </Text>
              </View>
            </View>

            {/* FirstCentral Consumer Score*/}
            <View style={styles.section}>
              <View style={styles.sectionHeader}>
                <Text style={styles.sectionTitle}>FirstCentral Consumer Score</Text>
                <Text style={styles.sectionTitleBorder}></Text>
                <Text style={styles.sectionTitleImage}>Consumer Image</Text>
              </View>
              <Text style={styles.sectionDescription}>
                This section contains the Customer's FirstCentral Consumer Score.
              </Text>
              <View style={styles.enquiryheader}>


                <View style={styles.firstCentralconsumerscoreGrid}>
                  <View style={styles.firstCentralconsumerscoreRow}>
                    <Text style={styles.firstCentralconsumerscorelabel}>Repayment History:</Text>
                    <Text style={styles.firstCentralconsumerscorevalue}>{Scoring?.RepaymentHistoryScore}</Text>
                    <Text style={styles.firstCentralconsumerscorelabel}>Length of Credit History:            </Text>
                    <Text style={styles.firstCentralconsumerscorevalue}>{Scoring?.LengthOfCreditHistoryScore}</Text>
                  </View>
                  <View style={styles.firstCentralconsumerscoreRow}>
                    <Text style={styles.firstCentralconsumerscorelabel}>Total Amount Owed:</Text>
                    <Text style={styles.firstCentralconsumerscorevalue}>{Scoring?.TotalAmountOwedScore}</Text>
                    <Text style={styles.firstCentralconsumerscorelabel}>Number of Credits:</Text>
                    <Text style={styles.firstCentralconsumerscorevalue}>{Scoring?.NoOfAcctScore} </Text>
                  </View>
                  <View style={styles.firstCentralconsumerscoreRow}>
                    <Text style={styles.firstCentralconsumerscorelabel}>{`Types of Credit(s) in Use:`}</Text>
                    <Text style={styles.firstCentralconsumerscorevalue}>{Scoring?.TypesOfCreditScore}</Text>
                    <Text style={styles.firstCentralconsumerscorelabel}> </Text>
                    <Text style={styles.firstCentralconsumerscorevalue}> </Text>
                  </View>


                  <View style={styles.firstCentralconsumerscorestatRow}>
                    <View style={styles.firstCentralconsumerscorestatColumn}>
                      <View style={[styles.firstCentralconsumerscorestatHeader, styles.firstCentralconsumerscorestatCom365Above]}>
                        <Text style={styles.firstCentralconsumerscorestatWhiteText}>HIGH RISK</Text>
                      </View>

                      <View style={styles.firstCentralconsumerscorestatDescription}>
                        <Text style={styles.firstCentralconsumerscorestatDescriptionText}>300-629</Text>

                      </View>
                    </View>
                    <View style={styles.firstCentralconsumerscorestatColumn}>
                      <View style={[styles.firstCentralconsumerscorestatHeader, styles.firstCentralconsumerscorestatCom181to365]}>
                        <Text style={styles.firstCentralconsumerscorestatWhiteText}>FAIR RISK</Text>
                      </View>

                      <View style={styles.firstCentralconsumerscorestatDescription}>
                        <Text style={styles.firstCentralconsumerscorestatDescriptionText}>630-689</Text>
                      </View>
                    </View>
                    <View style={styles.firstCentralconsumerscorestatColumn}>
                      <View style={[styles.firstCentralconsumerscorestatHeader, styles.firstCentralconsumerscorestatCom91to180]}>
                        <Text style={styles.firstCentralconsumerscorestatWhiteText}>MEDIUM RISK</Text>
                      </View>
                      <View style={styles.firstCentralconsumerscorestatDescription}>
                        <Text style={styles.firstCentralconsumerscorestatDescriptionText}>690-719</Text>
                      </View>
                    </View>
                    <View style={styles.firstCentralconsumerscorestatColumn}>
                      <View style={[styles.firstCentralconsumerscorestatHeader, styles.firstCentralconsumerscorestatCom90Below]}>
                        <Text style={styles.firstCentralconsumerscorestatWhiteText}>LOW RISK</Text>
                      </View>
                      <View style={styles.firstCentralconsumerscorestatDescription}>
                        <Text style={styles.firstCentralconsumerscorestatDescriptionText}>720 and Above</Text>
                      </View>

                    </View>



                  </View>

                  <View style={styles.firstCentralconsumerscoretable}>

                    {/* Table Header */}
                    <View style={[styles.firstCentralconsumerscoretableRow, styles.firstCentralconsumerscoretableHeader]}>

                      <View style={styles.firstCentralconsumerscoretableCol}>
                        <Text style={styles.firstCentralconsumerscoretableheaderCell}>SCORE DATE</Text>
                      </View>
                      <View style={styles.firstCentralconsumerscoretableCol}>
                        <Text style={styles.firstCentralconsumerscoretableheaderCell}>SCORE</Text>
                      </View>
                      <View style={styles.firstCentralconsumerscoretableCol}>
                        <Text style={styles.firstCentralconsumerscoretableheaderCell}>CREDIT SCORE CLASS</Text>
                      </View>
                    </View>

                    {/* Table Body */}
                    <View style={styles.firstCentralconsumerscoretableRow}>
                      <View style={styles.firstCentralconsumerscoretableCol}>
                        <Text style={styles.firstCentralconsumerscoretableCell}>{Scoring?.ScoreDate}</Text>
                      </View>
                      <View style={styles.firstCentralconsumerscoretableCol}>
                        <Text style={styles.firstCentralconsumerscoretableCell}>{Scoring?.TotalConsumerScore}</Text>
                      </View>
                      <View style={styles.firstCentralconsumerscoretableCol}>
                        <Text style={styles.firstCentralconsumerscoretableCell}>{Scoring?.Description}</Text>
                      </View>
                    </View>

                  </View>

                </View>



                <View >
                  {/* <Image style={styles.consumerImage} src="https://static.vecteezy.com/system/resources/thumbnails/036/324/708/small/ai-generated-picture-of-a-tiger-walking-in-the-forest-photo.jpg" /> */}
                  <View style={styles.consumerImage} />
                </View>
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
                  <Text style={styles.tableHeaderCell}>{SubjectList.Reference}</Text>
                  <Text style={styles.tableHeaderCell2}>{SubjectList.SearchOutput}
                  </Text>
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
                  { label: "Gender", value: personalDetails?.Gender },
                  { label: "Marital Status", value: personalDetails?.MaritalStatus },
                  { label: "No. of Dependants", value: personalDetails?.Dependants },
                  { label: "National ID Number", value: personalDetails?.NationalIDNo },
                  { label: "PENCOM ID", value: personalDetails?.PencomIDNo },
                  { label: "Driver's License Number", value: personalDetails?.DriversLicenseNo },
                  { label: "Passport Number", value: personalDetails?.PassportNo },
                  { label: "Other ID Number", value: personalDetails?.otheridNo },
                  { label: "Nationality", value: personalDetails?.Nationality },
                  { label: "Latest Residential Address 1", value: personalDetails?.ResidentialAddress1 },
                  { label: "Latest Postal Address", value: personalDetails?.PostalAddress1 },
                  { label: "Home Telephone", value: personalDetails?.HomeTelephoneNo },
                  { label: "Work Telephone", value: personalDetails?.WorkTelephoneNo },
                  { label: "Current Employer", value: personalDetails?.EmployerDetail },
                  { label: "Property Ownership Type", value: personalDetails?.PropertyOwnedType },
                  { label: "Email Address", value: personalDetails?.EmailAddress },
                  { label: "Mobile Number", value: personalDetails?.CellularNo },

                ].map((item, index) => (

                  <View key={index} style={styles.PersonaldetailRow}>
                    <Text style={styles.Personaldetaillabel}>{item.label}</Text>
                    <Text style={styles.Personaldetailvalue}>{item.value || "N/A"}</Text>
                  </View>
                ))}
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



            {/* Credit Account Rating */}
            <View style={styles.section}>
              <View style={styles.sectionHeader}>
                <Text style={styles.otherSectionTitle}>Credit Account Rating</Text>
                <Text style={styles.sectionTitleOrderBorder}></Text>
              </View>
              <Text style={styles.sectionDescription}>
                This section includes a performance status indicator aggregated by Loan Account Types
              </Text>
              <View style={styles.CreditAccountRatingenquiryheader}>
                <View style={styles.CreditAccountRatingdetailsGrid}>
                  <View style={styles.CreditAccountRatingdetailRow}>
                    <Text style={{ width: '50%' }}></Text>
                    <Text style={styles.CreditAccountRatingvalueperforming}>* PERFORMING</Text>
                    <Text style={styles.CreditAccountRatingvaluenonperforming}>* NON PERFORMING</Text>
                  </View>
                  {[
                    { label: 'Home Loans/Building/Mortgage Facilities', good: 'NoOfHomeLoanAccountsGood', bad: 'NoOfHomeLoanAccountsBad' },
                    { label: 'Auto Loans/Facilities', good: 'NoOfAutoLoanccountsGood', bad: 'NoOfAutoLoanAccountsBad' },
                    { label: 'Study(Student) Loans/Facilities', good: 'NoOfStudyLoanAccountsGood', bad: 'NoOfStudyLoanAccountsBad' },
                    { label: 'Personal Loans/Facilities', good: 'NoOfPersonalLoanAccountsGood', bad: 'NoOfPersonalLoanAccountsBad' },
                    { label: 'Credit Cards', good: 'NoOfCreditCardAccountsGood', bad: 'NoOfCreditCardAccountsBad' },
                    { label: 'Retail Credit/Instalment(Term) Facilities', good: 'NoOfRetailAccountsGood', bad: 'NoOfRetailAccountsBad' },
                    { label: 'Joint Loans/Facilities', good: 'NoOfJointLoanAccountsGood', bad: 'NoOfJointLoanAccountsBad' },
                    { label: 'Telecom Facilities', good: 'NoOfTelecomAccountsGood', bad: 'NoOfTelecomAccountsBad' },
                    { label: 'Overdraft/Other Loans', good: 'NoOfOtherAccountsGood', bad: 'NoOfOtherAccountsBad' },
                  ].map((item, index) => (
                    <View key={index} style={styles.CreditAccountRatingdetailRow}>
                      <Text style={styles.CreditAccountRatinglabel}>{`Total Number of ${item.label}`}</Text>
                      <Text style={styles.CreditAccountRatingvalueperforming}>{CreditAccountRating[item.good] ?? 0}</Text>
                      <Text style={styles.CreditAccountRatingvaluenonperforming}>{CreditAccountRating[item.bad] ?? 0}</Text>
                    </View>
                  ))}
                  <Text style={{ color: 'green', marginTop: 10, fontSize: 8 }}>
                    * PERFORMING : Up to date payments received on Loans/Facility
                  </Text>
                  <Text style={{ color: 'red', fontSize: 8 }}>
                    * NON PERFORMING : Loans/Facility that is more than 90 days in arrears
                  </Text>
                </View>
              </View>
            </View>






            {/* Credit Agreements Summary */}
            <View style={styles.section}>
              <View style={styles.sectionHeader}>
                <Text style={styles.otherSectionTitle}>Credit Agreements Summary</Text>
                <Text style={styles.sectionTitleOrderBorder}></Text>
              </View>
              <Text style={styles.sectionDescription}>
                This section includes a summarized payment behavior of all credit agreements as reported by the Credit Providers.
              </Text>

              <View style={styles.CreditAgreementSummaryenquiryheader}>
                <View style={styles.CreditAgreementSummarydetailsGrid}>
                  <View style={styles.CreditAgreementSummarydetailRow}>
                    <Text style={styles.CreditAgreementSummarySubscriberNameHeader}> Subscriber Name</Text>
                    <Text style={styles.CreditAgreementsSummaryAccountNumberHeader}>Account Number</Text>
                    <Text style={styles.CreditAgreementSummaryCurrencyHeader}>Currency</Text>
                    <Text style={styles.CreditAgreementSummaryAvailedLimitHeader}>Availed Limit</Text>
                    <Text style={styles.CreditAgreementSummaryOustandingBalanceHeader}> Oustanding Balance</Text>
                    <Text style={styles.CreditAgreementSummaryInstalmentAmountHeader}>Instalment Amount</Text>
                    <Text style={styles.CreditAgreementSummaryArrearAmountHeader}>Arrear Amount</Text>
                    <Text style={styles.CreditAgreementsummaryFacilityClassificationHeader}>Facility Classification</Text>
                    <Text style={styles.CreditAgreementSummaryAccountStatusHeader
                    }>Account Status</Text>
                  </View>
                </View>
              </View>

              <View>
                {CreditAgreementSummary?.map((agreement, index) => (
                  <View key={index} style={styles.CreditAgreementSummarydetailsGrid}>
                    <View style={styles.CreditAgreementSummarydetailRow}>
                      <Text style={styles.CreditAgreementSummarySubscriberName}>{agreement.SubscriberName}</Text>
                      <Text style={styles.CreditAgreementsSummaryAccountNumber}>{agreement.AccountNo}</Text>
                      <Text style={styles.CreditAgreementSummaryCurrency}>{agreement.Currency}</Text>
                      <Text style={styles.CreditAgreementAvailedLimit}>{agreement.OpeningBalanceAmt}</Text>
                      <Text style={styles.CreditAgreementOustandingBalance}>{agreement.CurrentBalanceAmt}</Text>
                      <Text style={styles.CreditAgreementInstalmentAmount}>{agreement.InstalmentAmount}</Text>
                      <Text style={styles.CreditAgreementArrearAmount}>{agreement.AmountOverdue}</Text>
                      <Text style={styles.CreditAgreementsFacilityClassification}>{agreement.PerformanceStatus}</Text>
                      <Text style={styles.CreditAgreementsummaryFacilityClassificationHeader}>{agreement.AccountStatus}</Text>
                    </View>
                  </View>
                ))}
              </View>
            </View>


            {/* Credit Agreement */}
            <View style={styles.section}>
              <View style={styles.sectionHeader}>
                <Text style={styles.otherSectionTitle}>Credit Agreements</Text>
                <Text style={styles.sectionTitleOrderBorder}></Text>
              </View>
              <Text style={styles.sectionDescription}>
                This section includes a 24-month payment behavior of all credit agreements as reported by the Credit Providers.
              </Text>
              {AccountMonthlyPaymentHistory.map((account, index) => (
                <View key={index}>
                  <Text style={styles.creditAgreementssummary}>{account.Header}</Text>
                  <Text style={styles.sectionDescription}>Account Information</Text>

                  <View style={styles.creditAgreementsGrid}>
                    <View style={styles.creditAgreementsfirstRow}>
                      <Text style={styles.creditAgreementsfirstlabel}>Subscriber Name</Text>
                      <Text style={styles.creditAgreementsfirstvalue}>{account.SubscriberName}</Text>
                    </View>
                    <View style={styles.creditAgreementsRow}>
                      <Text style={styles.creditAgreementslabel}>Account Number</Text>
                      <Text style={styles.creditAgreementsvalue}>{account.AccountNo}</Text>
                    </View>
                    <View style={styles.creditAgreementsfirstRow}>
                      <Text style={styles.creditAgreementsfirstlabel}>Effective Date</Text>
                      <Text style={styles.creditAgreementsfirstvalue}>{account.DateAccountOpened}</Text>
                    </View>
                    <View style={styles.creditAgreementsRow}>
                      <Text style={styles.creditAgreementslabel}>Bureau Updated Date</Text>
                      <Text style={styles.creditAgreementsvalue}>{account.LastUpdatedDate}</Text>
                    </View>
                    <View style={styles.creditAgreementsfirstRow}>
                      <Text style={styles.creditAgreementsfirstlabel}>Type of Credit Facility</Text>
                      <Text style={styles.creditAgreementsfirstvalue}>{account.IndicatorDescription || "N/A"}</Text>
                    </View>
                    <View style={styles.creditAgreementsRow}>
                      <Text style={styles.creditAgreementslabel}>Currency</Text>
                      <Text style={styles.creditAgreementsvalue}>{account.Currency}</Text>
                    </View>
                    <View style={styles.creditAgreementsfirstRow}>
                      <Text style={styles.creditAgreementsfirstlabel}>Credit / Debit</Text>
                      <Text style={styles.creditAgreementsfirstvalue}>{account.CurrentBalanceDebitInd || "N/A"}</Text>
                    </View>
                    <View style={styles.creditAgreementsRow}>
                      <Text style={styles.creditAgreementslabel}>Loan Amount/Credit Limit</Text>
                      <Text style={styles.creditAgreementsvalue}>{account.OpeningBalanceAmt}</Text>
                    </View>
                    <View style={styles.creditAgreementsfirstRow}>
                      <Text style={styles.creditAgreementsfirstlabel}>Current Balance</Text>
                      <Text style={styles.creditAgreementsfirstvalue}>{account.CurrentBalanceAmt}</Text>
                    </View>
                    <View style={styles.creditAgreementsRow}>
                      <Text style={styles.creditAgreementslabel}>Instalment Amount</Text>
                      <Text style={styles.creditAgreementsvalue}>{account.MonthlyInstalmentAmt}</Text>
                    </View>
                    <View style={styles.creditAgreementsfirstRow}>
                      <Text style={styles.creditAgreementsfirstlabel}>Arrear Amount</Text>
                      <Text style={styles.creditAgreementsfirstvalue}>{account.AmountOverdue}</Text>
                    </View>
                    <View style={styles.creditAgreementsRow}>
                      <Text style={styles.creditAgreementslabel}>Expiry Date</Text>
                      <Text style={styles.creditAgreementsvalue}>{account.ClosedDate || "N/A"}</Text>
                    </View>
                    <View style={styles.creditAgreementsfirstRow}>
                      <Text style={styles.creditAgreementsfirstlabel}>Facility Classification</Text>
                      <Text style={styles.creditAgreementsfirstvalue}>{account.PerformanceStatus}</Text>
                    </View>
                    <View style={styles.creditAgreementsRow}>
                      <Text style={styles.creditAgreementslabel}>Last Payment Date</Text>
                      <Text style={styles.creditAgreementsvalue}>{account.LastPaymentDate || "N/A"}</Text>
                    </View>
                    <View style={styles.creditAgreementsfirstRow}>
                      <Text style={styles.creditAgreementsfirstlabel}>Account Status</Text>
                      <Text style={styles.creditAgreementsfirstvalue}>{account.AccountStatus}</Text>
                    </View>
                    <View style={styles.creditAgreementsRow}>
                      <Text style={styles.creditAgreementslabel}>Loan Duration</Text>
                      <Text style={styles.creditAgreementsvalue}>{account.LoanDuration}</Text>
                    </View>
                    <View style={styles.creditAgreementsfirstRow}>
                      <Text style={styles.creditAgreementsfirstlabel}>Repayment Frequency</Text>
                      <Text style={styles.creditAgreementsfirstvalue}>{account.RepaymentFrequencyCode}</Text>
                    </View>
                  </View>
                  <View>
                    <Text style={styles.sectionDescription}>24 Months Payment History</Text>
                    <View style={styles["24MonthsPaymentHistoryTable"]}>
                      <View style={styles["24MonthsPaymentHistoryTableRow"]}>
                        {dynamicMonths.slice(0, 12).map((month, index) => (
                          <View key={index} style={styles["24MonthsPaymentHistoryTableCol"]}>
                            <Text style={styles["24MonthsPaymentHistoryTableCell"]}>{month}</Text>
                          </View>
                        ))}
                      </View>
                      <View style={styles["24MonthsPaymentHistoryTableRow"]}>
                        {Array.from({ length: 12 }, (_, i) => (
                          <View
                            key={i}
                            style={[
                              styles["24MonthsPaymentHistoryTableCol"],
                              account[`M${String(i + 1).padStart(2, "0")}`] === "0" ? styles.cellOK : styles.cellND,
                            ]}
                          >
                            <Text style={styles["24MonthsPaymentHistoryTableCell"]}>
                              {account[`M${String(i + 1).padStart(2, "0")}`] === "0" ? "OK" : "ND"}
                            </Text>
                          </View>
                        ))}
                      </View>
                      <View style={styles.dashedHR} />
                    </View>

                    {/* Next 12 months */}
                    <View style={styles["24MonthsPaymentHistoryTable"]}>
                      <View style={styles["24MonthsPaymentHistoryTableRow"]}>
                        {dynamicMonths.slice(12, 24).map((month, index) => (
                          <View key={index} style={styles["24MonthsPaymentHistoryTableCol"]}>
                            <Text style={styles["24MonthsPaymentHistoryTableCell"]}>{month}</Text>
                          </View>
                        ))}
                      </View>
                      <View style={styles["24MonthsPaymentHistoryTableRow"]}>
                        {Array.from({ length: 12 }, (_, i) => (
                          <View
                            key={i}
                            style={[
                              styles["24MonthsPaymentHistoryTableCol"],
                              account[`M${String(i + 13).padStart(2, "0")}`] === "0" ? styles.cellOK : styles.cellND,
                            ]}
                          >
                            <Text style={styles["24MonthsPaymentHistoryTableCell"]}>
                              {account[`M${String(i + 13).padStart(2, "0")}`] === "0" ? "OK" : "ND"}
                            </Text>
                          </View>
                        ))}
                      </View>
                      <View style={styles.dashedHR} />
                    </View>
                  </View>

                </View>
              ))}
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
                    <Text style={styles.GuarantorDetailsvalue}>{GuarantorCount?.Accounts} </Text>

                  </View>

                  <View style={styles.CreditAccountRatingdetailRow}>
                    <Text style={styles.GuarantorDetailslabel}>Number of Guarantors Secured </Text>
                    <Text style={styles.GuarantorDetailsvalue}>{GuarantorCount?.GuarantorsSecured}</Text>
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
                This section includes the details of the latest Guarantor used on a Credit/Loan application.
              </Text>

              <View style={styles.CreditAccountRatingenquiryheader}>
                <View style={styles.CreditAccountRatingdetailsGrid}>
                  <View style={styles.CreditAccountRatingdetailRow}>
                    <Text style={styles.LatestGuarantorDetailslabel}>Surname</Text>
                    <Text style={styles.LatestGuarantorDetailsvalue}>{GuarantorDetails.GuarantorFirstName || "N/A"}</Text>
                    <Text style={styles.LatestGuarantorDetailslabel}>Other Names</Text>
                    <Text style={styles.LatestGuarantorDetailsvalue}>{GuarantorDetails.GuarantorOtherName || "N/A"}</Text>
                  </View>

                  <View style={styles.CreditAccountRatingdetailRow}>
                    <Text style={styles.LatestGuarantorDetailslabel}>National ID Number</Text>
                    <Text style={styles.LatestGuarantorDetailsvalue}>{GuarantorDetails.GuarantorNationalIDNo || "N/A"}</Text>
                    <Text style={styles.LatestGuarantorDetailslabel}>PENCOM ID</Text>
                    <Text style={styles.LatestGuarantorDetailsvalue}>{GuarantorDetails.GuarantorPENCOMIDNo || "N/A"}</Text>
                  </View>

                  <View style={styles.CreditAccountRatingdetailRow}>
                    <Text style={styles.LatestGuarantorDetailslabel}>Driver's License Number</Text>
                    <Text style={styles.LatestGuarantorDetailsvalue}>{GuarantorDetails.GuarantorDriverLicenceNo || "N/A"}</Text>
                    <Text style={styles.LatestGuarantorDetailslabel}>Passport Number</Text>
                    <Text style={styles.LatestGuarantorDetailsvalue}>{GuarantorDetails.GuarantorPassport || "N/A"}</Text>
                  </View>

                  <View style={styles.CreditAccountRatingdetailRow}>
                    <Text style={styles.LatestGuarantorDetailslabel}>Other ID Number</Text>
                    <Text style={styles.LatestGuarantorDetailsvalue}>{GuarantorDetails.GuarantorOtherID || "N/A"}</Text>
                    <Text style={styles.LatestGuarantorDetailslabel}>Date of Birth</Text>
                    <Text style={styles.LatestGuarantorDetailsvalue}>{GuarantorDetails.GuarantorDateOfBirth || "N/A"}</Text>
                  </View>

                  <View style={styles.CreditAccountRatingdetailRow}>
                    <Text style={styles.LatestGuarantorDetailslabel}>Home Telephone</Text>
                    <Text style={styles.LatestGuarantorDetailsvalue}>{GuarantorDetails.GuarantorHomeTelephone || "N/A"}</Text>
                    <Text style={styles.LatestGuarantorDetailslabel}>Work Telephone</Text>
                    <Text style={styles.LatestGuarantorDetailsvalue}>{GuarantorDetails.GuarantorworkTelephone || "N/A"}</Text>
                  </View>

                  <View style={styles.CreditAccountRatingdetailRow}>
                    <Text style={styles.LatestGuarantorDetailslabel}>Mobile Number</Text>
                    <Text style={styles.LatestGuarantorDetailsvalue}>{GuarantorDetails.GuarantorMobileTelephone || "N/A"}</Text>
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
              {IdentificationHistory.map((identicication, index) => (
                <View key={index} style={styles.identificationhistorytableRow}>
                  <View style={[styles.identificationhistorytableCol, styles.identificationhistorytableColFirst]}>
                    <Text style={styles.identificationhistorytableCell}>{identicication.UpDateOnDate}</Text>
                  </View>
                  <View style={styles.identificationhistorytableCol}>
                    <Text style={styles.identificationhistorytableCell}>{identicication?.IdentificationType}</Text>
                  </View>
                  <View style={styles.identificationhistorytableCol}>
                    <Text style={styles.identificationhistorytableCell}>{identicication?.IdentificationNumber}</Text>
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
                {AddressHistory.map((record, index) => (
                  <View key={index} style={styles.AddressHistorytableRow}>
                    <View style={[styles.AddressHistorytableCol, styles.AddressHistorytableColFirst]}>
                      <Text style={styles.AddressHistorytableCell}>{record?.UpDateOnDate}</Text>
                    </View>
                    <View style={styles.AddressHistorytableCol}>
                      <Text style={styles.AddressHistorytableCell}>{record?.AddressTypeInd}</Text>
                    </View>
                    <View style={styles.AddressHistorytableCol}>
                      <Text style={styles.AddressHistorytableCell}>{record?.Address1}</Text>
                    </View>
                    <View style={styles.AddressHistorytableCol}>
                      <Text style={styles.AddressHistorytableCell}>{record?.Address2}</Text>
                    </View>
                    <View style={styles.AddressHistorytableCol}>
                      <Text style={styles.AddressHistorytableCell}>{record?.Address3}</Text>
                    </View>
                    <View style={[styles.AddressHistorytableCol, styles.AddressHistorytableColLast]}>
                      <Text style={styles.AddressHistorytableCell}>{record?.Address4}</Text>
                    </View>
                  </View>
                ))}
              </View>

            </View>

            {/* // Employment History */}
            <View style={styles.section}>
              <View style={styles.sectionHeader}>
                <Text style={styles.otherSectionTitle}>Employment History </Text>
                <Text style={styles.sectionTitleOrderBorder}></Text>
              </View>
              <Text style={styles.sectionDescription}>
                This section includes a list of all Employment Information presented on the Credit/Loan applications.
              </Text>
              <View style={styles.employmenthistorytable}>
                {/* Table Header */}
                <View style={[styles.employmenthistorytableRow, styles.employmenthistorytableHeader]}>
                  <View style={[styles.employmenthistorytableCol, styles.employmenthistorytableColFirst]}>
                    <Text style={styles.employmenthistorytableCell}>Bureau Update Date</Text>
                  </View>
                  <View style={styles.employmenthistorytableCol}>
                    <Text style={styles.employmenthistorytableCell}>Company</Text>
                  </View>
                  <View style={styles.employmenthistorytableCol}>
                    <Text style={styles.employmenthistorytableCell}>Occupation</Text>
                  </View>

                </View>
              </View>

              {/* Table Body */}
              {EmploymentHistory?.map((employment, index) => (
                <View key={index} style={styles.employmenthistorytableRow}>
                  <View style={[styles.employmenthistorytableCol, styles.employmenthistorytableColFirst]}>
                    <Text style={styles.employmenthistorytableCell}>{employment?.UpDateOnDate}</Text>
                  </View>
                  <View style={styles.employmenthistorytableCol}>
                    <Text style={styles.employmenthistorytableCell}>{employment?.EmployerDetail}</Text>
                  </View>
                  <View style={styles.employmenthistorytableCol}>
                    <Text style={styles.employmenthistorytableCell}>{employment?.Occupation}</Text>
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
                {TelephoneHistory.map((address, index) => (
                  <View key={index} style={styles.employmenthistorytableRow}>
                    <View style={[styles.employmenthistorytableCol, styles.employmenthistorytableColFirst]}>
                      <Text style={styles.employmenthistorytableCell}>{address?.HomeNoUpdatedonDate}</Text>
                    </View>
                    <View style={styles.employmenthistorytableCol}>
                      <Text style={styles.employmenthistorytableCell}>{address?.HomeTelephoneNumber}</Text>
                    </View>
                    <View style={styles.employmenthistorytableCol}>
                      <Text style={styles.employmenthistorytableCell}>{address?.WorkNoUpdatedonDate}</Text>
                    </View>
                    <View style={styles.employmenthistorytableCol}>
                      <Text style={styles.employmenthistorytableCell}>{address?.WorkTelephoneNumber}</Text>
                    </View>
                    <View style={styles.employmenthistorytableCol}>
                      <Text style={styles.employmenthistorytableCell}>{address?.MobileNoUpdatedonDate}</Text>
                    </View>
                    <View style={[styles.employmenthistorytableCol, styles.employmenthistorytableColLast]}>
                      <Text style={styles.employmenthistorytableCell}>{address?.MobileTelephoneNumber}</Text>
                    </View>
                  </View>
                ))}
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

export default XSCoreConsumerFullCredit;