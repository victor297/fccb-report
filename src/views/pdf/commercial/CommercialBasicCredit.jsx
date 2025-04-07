import { Document, Page, Text, View, Image, PDFViewer } from '@react-pdf/renderer';
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


const CommercialBasicCredit = ({ data }) => {
  console.log(data, "commercial")

  const [isLoading, setIsLoading] = useState(true);
  const subjectlist = data.map(item => item.SubjectList).filter(Boolean);
  const businessData = data.map(item => item.BusinessData).filter(Boolean);
  const deliquencyinformtion = data.map(item => item.HighestDelinquencyRating).filter(Boolean);
  const facilityPerformanceSummary = data.map(item => item.FacilityPerformanceSummary).filter(Boolean);
  const directorInformation = data.map(item => item.DirectorInformation).filter(Boolean);
  const BusinessData = businessData[0]?.[0] || {}; // Ensuring we don't access undefined values
  const DirectorInformation = directorInformation[0]
  const FacilityPerformanceSummary = facilityPerformanceSummary[0][0]

  const SubjectList = subjectlist[0][0]



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
                <Text>Commercial Credit Report - Basic</Text>
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

            {/* Detail Business Data */}
            <View style={styles.section}>
              <View style={styles.sectionHeader}>
                <Text style={styles.otherSectionTitle}>Detail Business Data</Text>
                <Text style={styles.sectionTitleOrderBorder}></Text>
              </View>
              <Text style={styles.sectionDescription}>
                This section includes the commercial's demographic information.
              </Text>

              <View style={styles.PersonaldetailsGrid}>
                {[
                  { label: "FirstCentral Reference Number", value: BusinessData?.CommercialID },
                  { label: "Unique Tracking Number", value: BusinessData?.ReferenceNo },
                  { label: "Business Name", value: BusinessData?.BusinessName },
                  { label: "Registration Number", value: BusinessData?.BusinessRegistrationNumber },
                  { label: "Trading Name", value: BusinessData?.TradingName },
                  { label: "Previous Registration Number", value: BusinessData?.PreviousRegistrationNumber },
                  { label: "Previous Business Name", value: BusinessData?.PreviousBusinessName },

                  { label: "Tax Identification Number", value: BusinessData?.TaxIdentificationNumber },
                  { label: "Business Type", value: BusinessData?.BusinessType },
                  { label: "VAT Number", value: BusinessData?.VatNumber },
                  { label: "Date Of Incorporation", value: BusinessData?.DateOfIncorporation },
                  { label: "Date Of Commencement", value: BusinessData?.DateOfCommencement },
                  { label: "Property Ownership Type", value: null },
                  { label: "", value: null },
                  { label: "Business Location Addres", value: BusinessData?.CommercialAddress1 },
                  { label: "Latest Postal Address", value: BusinessData?.postalAddress1 },
                  { label: " ", value: BusinessData?.CommercialAddress2 },
                  { label: " ", value: BusinessData?.postalAddress2 },
                  { label: " ", value: BusinessData?.CommercialAddress3 },
                  { label: " ", value: BusinessData?.postalAddress3 },
                  { label: " ", value: BusinessData?.CommercialAddress4 },
                  { label: " ", value: BusinessData?.postalAddress4 },
                  { label: "Web Address", value: BusinessData?.Webaddress },
                  { label: "Company E-Mail Address", value: BusinessData?.CommercialEmail1 },
                  { label: "Telephone Number 1", value: BusinessData?.Telephone1 },
                  { label: "Telephone Number 2", value: BusinessData?.Telephone2 },
                  { label: "Office Fax 1", value: BusinessData?.Fax1 },
                  { label: "Office Fax 2", value: BusinessData?.Fax2 },


                ].map((item, index) => (

                  <View key={index} style={styles.PersonaldetailRow}>
                    <Text style={styles.Personaldetaillabel}>{item.label}</Text>
                    <Text style={styles.Personaldetailvalue}>{item.value || null}</Text>
                  </View>
                ))}
              </View>
            </View>

            {/* Director/s Information */}
            <View style={styles.section}>
              <View style={styles.sectionHeader}>
                <Text style={styles.otherSectionTitle}>Director/s Information</Text>
                <Text style={styles.sectionTitleOrderBorder}></Text>
              </View>
              <Text style={styles.sectionDescription}>
                This section includes the director's demographic informations.
              </Text>

              <View style={styles.detailRow}>
                <Text style={styles.label}>Number of Registered Directors</Text>
                <Text style={styles.value}>{DirectorInformation?.length}</Text>
              </View>
              <View style={styles.CreditAgreementSummaryenquiryheader}>
                <View style={styles.CreditAgreementSummarydetailsGrid}>
                  <View style={styles.CreditAgreementSummarydetailRow}>
                    <Text style={styles.DirectorInformationidhead}>No.</Text>
                    <Text style={styles.DirectorInformationidnumberhead}>ID Details</Text>
                    <Text style={styles.DirectorInformationfirsthead}>First Name</Text>
                    <Text style={styles.DirectorInformationlasthead}>Other Name</Text>
                    <Text style={styles.DirectorInformationsurnamehead}>Surname</Text>
                    <Text style={styles.DirectorInformationdobhead}>DOB</Text>
                    <Text style={styles.DirectorInformationappointmentdatehead}>Director Appointment Date</Text>

                  </View>
                </View>
              </View>

              <View>
                {DirectorInformation?.map((director, index) => (
                  <View key={index} style={styles.CreditAgreementSummarydetailsGrid}>
                    <View style={styles.CreditAgreementSummarydetailRow}>
                      <Text style={styles.DirectorInformationid}>{director?.Directorid}</Text>
                      <Text style={styles.DirectorInformationidnumber}>{director?.Identificationnumber}</Text>
                      <Text style={styles.DirectorInformationfirst}>{director?.firstName}</Text>
                      <Text style={styles.DirectorInformationlast}>{director?.othernames}</Text>
                      <Text style={styles.DirectorInformationsurname}>{director?.surname}</Text>
                      <Text style={styles.DirectorInformationdob}>{director?.DateofBirth}</Text>
                      <Text style={styles.DirectorInformationappointmentdate}>{director?.DirectorAppointmentdate}</Text>
                    </View>
                  </View>
                ))}
              </View>
            </View>

            {/* Facility Performance Summary */}
            <View style={styles.section}>
              <View style={styles.sectionHeader}>
                <Text style={styles.otherSectionTitle}>Facility Performance Summary</Text>
                <Text style={styles.sectionTitleOrderBorder}></Text>
              </View>
              <Text style={styles.sectionDescription}>
                This section includes a summary of all facilities taken and rating information
              </Text>

              <View style={styles.detailsGrid}>
                <View style={styles.detailRow}>
                  <Text style={styles.label}>Total Number of Facilities Taken</Text>
                  <Text style={styles.value}>{FacilityPerformanceSummary?.TotalAccounts}</Text>
                </View>
                <View style={styles.detailRow}>
                  <Text style={styles.label}>	Total Number of Facilities in Good Standing</Text>
                  <Text style={styles.value}>{FacilityPerformanceSummary?.TotalaccountinGoodcondition}</Text>
                </View>
                <View style={styles.detailRow}>
                  <Text style={styles.label}> </Text>
                  <Text style={styles.value}> </Text>
                </View>
                <View style={styles.detailRow}>
                  <Text style={styles.label}>Total Number of Judgements Against</Text>
                  <Text style={styles.value}>{FacilityPerformanceSummary?.TotalNumberofJudgement}</Text>
                </View>
                <View style={styles.detailRow}>
                  <Text style={styles.label}>Date of Last Judgement</Text>
                  <Text style={styles.value}>{FacilityPerformanceSummary?.LastJudgementDate}</Text>
                </View>
                <View style={styles.detailRow}>
                  <Text style={styles.label}> </Text>
                  <Text style={styles.value}> </Text>
                </View>
                <View style={styles.detailRow}>
                  <Text style={styles.label}>Total Number of Dishonoured Cheques</Text>
                  <Text style={styles.value}>{FacilityPerformanceSummary?.TotalNumberofDishonoured}</Text>
                </View>
                <View style={styles.detailRow}>
                  <Text style={styles.label}>Date of Last Dishonoured Cheque</Text>
                  <Text style={styles.value}>{FacilityPerformanceSummary?.LastDishonouredChequeDate}</Text>
                </View>
                <View style={styles.detailRow}>
                  <Text style={styles.label}>Highest Delinquency Rating</Text>
                  <Text style={styles.value}>{FacilityPerformanceSummary?.Rating}</Text>
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

export default CommercialBasicCredit;