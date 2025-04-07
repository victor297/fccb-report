import { Document, Page, Text, View, Image, PDFViewer } from '@react-pdf/renderer';
// import { data } from '../../../test';
import { styles } from '../style';
import { useState } from 'react';
import Loader from '../../../components/Loader';
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


const ConsumerBasicCredit = ({ data }) => {
  const [isLoading, setIsLoading] = useState(true);

  const enquiryDetails = data.map(item => item.EnquiryDetails).filter(Boolean);

  const enquiryInput = data.map(item => item.EnquiryInput).filter(Boolean);
  const subjectlist = data.map(item => item.SubjectList).filter(Boolean);
  const personaldetailsssummary = data.map(item => item.PersonalDetailsSummary).filter(Boolean);
  const creditAccountSummary = data.map(item => item.CreditAccountSummary).filter(Boolean);
  // const creditAccountRating = data.map(item => item.CreditAccountRating).filter(Boolean);
  const creditAccountRating = data.map(item => item.AccountRating).filter(Boolean);

  console.log("EnquiryDetails: ", enquiryDetails);
  console.log("SubjectList:", subjectlist);
  console.log("EnquiryInput:", enquiryInput);
  console.log("PersonalDetailsSummary:", personaldetailsssummary);
  console.log("CreditAccountSummary:", creditAccountSummary);
  console.log("CreditAccountRating:", creditAccountRating);
  const EnquiryInput = enquiryInput?.[0]?.[0]
  const SubjectList = subjectlist?.[0]?.[0]
  const personalDetails = personaldetailsssummary[0]?.[0] || {}; // Ensuring we don't access undefined values
  const formatValue = (value) => value ?? " "; // Utility function to handle null, undefined, or empty strings
  const CreditAccountSummary = creditAccountSummary?.[0]?.[0]
  const CreditAccountRating = creditAccountRating?.[0]?.[0]


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
                <Text>Consumer Credit Report - Basic</Text>
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
                  {/* <Image style={styles.consumerImage} src="https://static.vecteezy.com/system/resources/thumbnails/036/324/708/small/ai-generated-picture-of-a-tiger-walking-in-the-forest-photo.jpg" /> */}
                  <View style={styles.consumerImage} />
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
                  { label: " ", value: personalDetails?.PostalAddress2 },
                  { label: " ", value: personalDetails?.ResidentialAddress2 },
                  { label: " ", value: personalDetails?.PostalAddress3 },
                  { label: " ", value: personalDetails?.ResidentialAddress3 },
                  { label: " ", value: personalDetails?.PostalAddress4 },
                  { label: " ", value: personalDetails?.ResidentialAddress4 },
                  { label: "Home Telephone", value: personalDetails?.HomeTelephoneNo },
                  { label: "Work Telephone", value: personalDetails?.WorkTelephoneNo },
                  { label: "Current Employer", value: personalDetails?.EmployerDetail },
                  { label: "Property Ownership Type", value: personalDetails?.PropertyOwnedType },
                  { label: "Email Address", value: personalDetails?.EmailAddress },
                  { label: "Mobile Number", value: personalDetails?.CellularNo },

                ].map((item, index) => (

                  <View key={index} style={styles.PersonaldetailRow}>
                    <Text style={styles.Personaldetaillabel}>{item?.label}</Text>
                    <Text style={styles.Personaldetailvalue}>{item?.value}</Text>
                  </View>
                ))}
              </View>
            </View>


            {/* Credit account summary */}
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
                      <Text style={styles.CreditAccountRatinglabel}>{`Total Number of ${item?.label}`}</Text>
                      <Text style={styles.CreditAccountRatingvalueperforming}>{CreditAccountRating[item?.good] ?? 0}</Text>
                      <Text style={styles.CreditAccountRatingvaluenonperforming}>{CreditAccountRating[item?.bad] ?? 0}</Text>
                    </View>
                  ))}
                  <Text style={{ color: 'green', fontSize: 8, marginTop: 10 }}>
                    * PERFORMING : Up to date payments received on Loans/Facility
                  </Text>
                  <Text style={{ color: 'red', fontSize: 8 }}>
                    * NON PERFORMING : Loans/Facility that is more than 90 days in arrears
                  </Text>
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

export default ConsumerBasicCredit;