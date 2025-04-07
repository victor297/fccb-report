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


const SnapCheck = ({ data }) => {
  const [isLoading, setIsLoading] = useState(true);
  const enquiryDetails = data.map(item => item.EnquiryDetails).filter(Boolean);

  const enquiryInput = data.map(item => item.EnquiryInput).filter(Boolean);
  const subjectlist = data.map(item => item.SubjectList).filter(Boolean);
  const personaldetailsssummary = data.map(item => item.PersonalDetailsSummary).filter(Boolean);
  const snapshecksummary = data.map(item => item.SnapCheckSummary).filter(Boolean);

  const SubjectList = subjectlist?.[0]?.[0]
  const personalDetails = personaldetailsssummary[0]?.[0] || {}; // Ensuring we don't access undefined values
  const formatValue = (value) => value ?? " "; // Utility function to handle null, undefined, or empty strings
  const SnapCheckSummary = snapshecksummary[0][0]


  return (
    <div className=' flex justify-center'>
      {isLoading && (
        <div style={{ textAlign: 'center', padding: 20 }}>
          <Loader />
        </div>
      )}

      <PDFViewer style={{ width: '100%', height: '200vh', display: isLoading ? 'none' : 'block' }}>

        <Document onRender={() => setIsLoading(false)}>
          <Page size="A4" style={styles.page}>
            {/* Header */}
            <View style={styles.header} fixed>
              <View>
                <Image style={styles.logo} src={logo} />
              </View>
              <View style={styles.addressheader}>
                <Text>Consumer Snap Check</Text>
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
              <View style={styles.CreditAccountRatingenquiryheader}>
                <View style={styles.CreditAccountRatingdetailsGrid}>
                  <View style={styles.CreditAccountRatingdetailRow}>
                    <Text style={styles.GuarantorDetailslabel}>Has No Outstanding Loan</Text>
                    <Text style={styles.GuarantorDetailsvalue}>{SnapCheckSummary?.HasNoOutStandingLoan} </Text>

                  </View>

                  <View style={styles.CreditAccountRatingdetailRow}>
                    <Text style={styles.GuarantorDetailslabel}>Has Current Running Loan And Not Defaulting</Text>
                    <Text style={styles.GuarantorDetailsvalue}>{SnapCheckSummary?.HasCurrentRunningLoanAndNotDefaulting}</Text>
                  </View>
                  <View style={styles.CreditAccountRatingdetailRow}>
                    <Text style={styles.GuarantorDetailslabel}>Has Defaulted In Any Loan</Text>
                    <Text style={styles.GuarantorDetailsvalue}>{SnapCheckSummary?.HasDefaultedinAnyLoan}</Text>
                  </View>
                  <View style={styles.CreditAccountRatingdetailRow}>
                    <Text style={styles.GuarantorDetailslabel}>Total Number of Loans</Text>
                    <Text style={styles.GuarantorDetailsvalue}>{SnapCheckSummary?.TotalNoOfLoans}</Text>
                  </View>
                  <View style={styles.CreditAccountRatingdetailRow}>
                    <Text style={styles.GuarantorDetailslabel}>Total Number of Performing Loans</Text>
                    <Text style={styles.GuarantorDetailsvalue}>{SnapCheckSummary?.TotalNoOfPerformingLoans}</Text>
                  </View>
                  <View style={styles.CreditAccountRatingdetailRow}>
                    <Text style={styles.GuarantorDetailslabel}>Total Number of Defaulting Loans</Text>
                    <Text style={styles.GuarantorDetailsvalue}>{SnapCheckSummary?.TotalNoOfDefaultingLoans}</Text>
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

export default SnapCheck;