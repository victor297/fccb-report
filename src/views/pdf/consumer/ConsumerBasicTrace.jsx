import { Document, Page, Text, View, Image, PDFViewer } from '@react-pdf/renderer';
// import { data } from '../../../test';
import { useState } from 'react';
import Loader from '../../../components/Loader';
import { styles } from '../style';
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
const ConsumerBasicTrace = ({ data }) => {
  const [isLoading, setIsLoading] = useState(true);

  const enquiryDetails = data?.map(item => item.EnquiryDetails).filter(Boolean);

  const enquiryInput = data.map(item => item.EnquiryInput).filter(Boolean);
  const subjectlist = data.map(item => item.SubjectList).filter(Boolean);
  const personaldetailsssummary = data.map(item => item.PersonalDetailsSummary).filter(Boolean);
  const creditAccountSummary = data.map(item => item.CreditAccountSummary).filter(Boolean);
  const guarantorCount = data.map(item => item.GuarantorCount).filter(Boolean);
  const guarantorDetails = data.map(item => item.GuarantorDetails).filter(Boolean);
  const identificationHistory = data.map(item => item.IdentificationHistory).filter(Boolean);
  const addressHistory = data.map(item => item.AddressHistory).filter(Boolean);
  const employmentHistory = data.map(item => item.EmploymentHistory).filter(Boolean);
  const telephoneHistory = data.map(item => item.TelephoneHistory).filter(Boolean);
  console.log("EnquiryDetails: ", enquiryDetails);
  console.log("SubjectList:", subjectlist);
  console.log("EnquiryInput:", enquiryInput);
  console.log("PersonalDetailsSummary:", personaldetailsssummary);
  console.log("CreditAccountSummary:", creditAccountSummary);
  console.log("GuarantorCount:", guarantorCount);
  console.log("GuarantorDetails:", guarantorDetails?.[0]?.[0]);
  console.log("IdentificationHistory:", identificationHistory);
  console.log("AddressHistory:", addressHistory);
  console.log("EmploymentHistory:", employmentHistory);
  console.log("TelephoneHistory:", telephoneHistory);
  const EnquiryInput = enquiryInput?.[0]?.[0]
  const SubjectList = subjectlist?.[0]?.[0]
  const personalDetails = personaldetailsssummary[0]?.[0] || {}; // Ensuring we don't access undefined values
  const formatValue = (value) => value ?? "N/A"; // Utility function to handle null, undefined, or empty strings
  const CreditAccountSummary = creditAccountSummary?.[0]?.[0]
  const GuarantorCount = guarantorCount?.[0]?.[0]
  const GuarantorDetails = guarantorDetails?.[0]?.[0]
  const IdentificationHistory = identificationHistory[0]
  const AddressHistory = addressHistory[0]
  const EmploymentHistory = employmentHistory[0]
  const TelephoneHistory = telephoneHistory[0]

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
                <Text>Consumer Credit Trace - Basic</Text>
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
                  { label: "", value: personalDetails?.PostalAddress2 },
                  { label: "", value: personalDetails?.ResidentialAddress2 },
                  { label: "", value: personalDetails?.PostalAddress3 },
                  { label: "", value: personalDetails?.ResidentialAddress3 },
                  { label: "", value: personalDetails?.PostalAddress4 },
                  { label: "", value: personalDetails?.ResidentialAddress4 },
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
                    <Text style={styles.LatestGuarantorDetailsvalue}>{GuarantorDetails?.GuarantorFirstName}</Text>
                    <Text style={styles.LatestGuarantorDetailslabel}>Other Names</Text>
                    <Text style={styles.LatestGuarantorDetailsvalue}>{GuarantorDetails?.GuarantorOtherName}</Text>
                  </View>

                  <View style={styles.CreditAccountRatingdetailRow}>
                    <Text style={styles.LatestGuarantorDetailslabel}>National ID Number</Text>
                    <Text style={styles.LatestGuarantorDetailsvalue}>{GuarantorDetails?.GuarantorNationalIDNo}</Text>
                    <Text style={styles.LatestGuarantorDetailslabel}>PENCOM ID</Text>
                    <Text style={styles.LatestGuarantorDetailsvalue}>{GuarantorDetails?.GuarantorPENCOMIDNo}</Text>
                  </View>

                  <View style={styles.CreditAccountRatingdetailRow}>
                    <Text style={styles.LatestGuarantorDetailslabel}>Driver's License Number</Text>
                    <Text style={styles.LatestGuarantorDetailsvalue}>{GuarantorDetails?.GuarantorDriverLicenceNo}</Text>
                    <Text style={styles.LatestGuarantorDetailslabel}>Passport Number</Text>
                    <Text style={styles.LatestGuarantorDetailsvalue}>{GuarantorDetails?.GuarantorPassport}</Text>
                  </View>

                  <View style={styles.CreditAccountRatingdetailRow}>
                    <Text style={styles.LatestGuarantorDetailslabel}>Other ID Number</Text>
                    <Text style={styles.LatestGuarantorDetailsvalue}>{GuarantorDetails?.GuarantorOtherID}</Text>
                    <Text style={styles.LatestGuarantorDetailslabel}>Date of Birth</Text>
                    <Text style={styles.LatestGuarantorDetailsvalue}>{GuarantorDetails?.GuarantorDateOfBirth}</Text>
                  </View>

                  <View style={styles.CreditAccountRatingdetailRow}>
                    <Text style={styles.LatestGuarantorDetailslabel}>Home Telephone</Text>
                    <Text style={styles.LatestGuarantorDetailsvalue}>{GuarantorDetails?.GuarantorHomeTelephone}</Text>
                    <Text style={styles.LatestGuarantorDetailslabel}>Work Telephone</Text>
                    <Text style={styles.LatestGuarantorDetailsvalue}>{GuarantorDetails?.GuarantorworkTelephone}</Text>
                  </View>

                  <View style={styles.CreditAccountRatingdetailRow}>
                    <Text style={styles.LatestGuarantorDetailslabel}>Mobile Number</Text>
                    <Text style={styles.LatestGuarantorDetailsvalue}>{GuarantorDetails?.GuarantorMobileTelephone}</Text>
                  </View>
                </View>
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
                    <Text style={styles.companydirectorshipvalue}>0 </Text>

                  </View>
                </View>
              </View>
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
              {IdentificationHistory?.map((identicication, index) => (
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
                {AddressHistory?.map((record, index) => (
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
              <View style={styles.identificationhistorytable}>
                {/* Table Header */}
                <View style={[styles.identificationhistorytableRow, styles.identificationhistorytableHeader]}>
                  <View style={[styles.identificationhistorytableCol, styles.identificationhistorytableColFirst]}>
                    <Text style={styles.identificationhistorytableCell}>Home Telephone</Text>
                  </View>
                  <View style={styles.identificationhistorytableCol}>
                    <Text style={styles.identificationhistorytableCell}>Work Telephone</Text>
                  </View>
                  <View style={styles.identificationhistorytableCol}>
                    <Text style={styles.identificationhistorytableCell}>Mobile Number</Text>
                  </View>

                </View>
              </View>
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
                {TelephoneHistory?.map((address, index) => (
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

export default ConsumerBasicTrace;