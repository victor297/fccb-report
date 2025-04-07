import { Document, Page, Text, View, Image, PDFViewer } from '@react-pdf/renderer';
import { styles } from '../style';
// import { data } from '../../../test';
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


const IScore = ({ data }) => {
  const [isLoading, setIsLoading] = useState(true);

  const subjectlist = data.map(item => item.SubjectList).filter(Boolean);
  const scoring = data.map(item => item.Scoring).filter(Boolean);
  const enquiryInput = data.map(item => item.EnquiryInput).filter(Boolean);
  const Scoring = scoring[0][0]
  const EnquiryInput = enquiryInput?.[0]?.[0]
  const SubjectList = subjectlist[0][0]
  const formatValue = (value) => value ?? " ";
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
                <Text>Consumer IScore Report</Text>
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
                {formatValue(Scoring?.Header)}
              </Text>
              <View style={styles.PersonaldetailsGrid}>
                {[
                  { label: "FirstCentral Reference Number", value: Scoring?.ConsumerID },
                  { label: "Unique Tracking Number", value: Scoring?.ReferenceNo },
                  { label: "Surname", value: Scoring?.Surname },
                  { label: "Other Names", value: Scoring?.OtherNames },
                  { label: "First Name", value: Scoring?.FirstName },
                  { label: "Bank Verification Number (BVN)", value: Scoring?.BankVerificationNo },
                  { label: "Date of Birth", value: Scoring?.BirthDate },
                  { label: "Gender", value: Scoring?.Gender }

                ].map((item, index) => (

                  <View key={index} style={styles.PersonaldetailRow}>
                    <Text style={styles.Personaldetaillabel}>{item.label}</Text>
                    <Text style={styles.Personaldetailvalue}>{item.value || " "}</Text>
                  </View>
                ))}
              </View>
            </View>

            {/* Credit Summary*/}
            <View style={styles.section} wrap={false}>
              <View style={styles.sectionHeader}>
                <Text style={styles.otherSectionTitle}>Credit Account Summary</Text>
                <Text style={styles.sectionTitleOrderBorder}></Text>
              </View>
              <Text style={styles.sectionDescription}>
                This section includes a summary of all aggregated credit and loan informations
              </Text>
              <View style={styles.CreditAccountRatingenquiryheader}>
                <View style={styles.CreditAccountRatingdetailsGrid}>
                  <View style={styles.CreditAccountRatingdetailRow}>
                    <Text style={styles.companydirectorshiplabel}></Text>
                    <Text style={styles.companydirectorshipvalue}>Counts </Text>

                  </View>
                  <View style={styles.CreditAccountRatingdetailRow}>
                    <Text style={styles.companydirectorshiplabel}>Total Number of Account Taken</Text>
                    <Text style={styles.companydirectorshipvalue}>{Scoring?.TotalAccounts} </Text>

                  </View>
                  <View style={styles.CreditAccountRatingdetailRow}>
                    <Text style={styles.companydirectorshiplabel}>Total Number of Account In Good Standing</Text>
                    <Text style={styles.companydirectorshipvalue}>{Scoring?.TotalaccountinGoodcondition} </Text>

                  </View>
                  <View style={styles.CreditAccountRatingdetailRow}>
                    <Text style={styles.companydirectorshiplabel}>Total Number of Account In Bad Standing</Text>
                    <Text style={styles.companydirectorshipvalue}>{Scoring?.TotalaccountinBadcondition} </Text>

                  </View>
                  <View style={styles.CreditAccountRatingdetailRow}>
                    <Text style={styles.companydirectorshiplabel}>Total Outstanding Debt</Text>
                    <Text style={styles.companydirectorshipvalue}>{Scoring?.TotalOutstandingDebt} </Text>

                  </View>
                  <View style={styles.CreditAccountRatingdetailRow}>
                    <Text style={styles.companydirectorshiplabel}>Total Foreign Outstanding Debt</Text>
                    <Text style={styles.companydirectorshipvalue}>{Scoring?.TotalForeignOutstandingDebt} </Text>

                  </View>
                  <View style={styles.CreditAccountRatingdetailRow}>
                    <Text style={styles.companydirectorshiplabel}>Total Account Arrear</Text>
                    <Text style={styles.companydirectorshipvalue}>{Scoring?.TotalAccountarrear} </Text>

                  </View>
                  <View style={styles.CreditAccountRatingdetailRow}>
                    <Text style={styles.companydirectorshiplabel}>Total Amount Overdue</Text>
                    <Text style={styles.companydirectorshipvalue}>{Scoring?.TotalAmountOverdue} </Text>

                  </View>
                  <View style={styles.CreditAccountRatingdetailRow}>
                    <Text style={styles.companydirectorshiplabel}>Total Accounts</Text>
                    <Text style={styles.companydirectorshipvalue}>{Scoring?.TotalAccounts} </Text>

                  </View>
                  <View style={styles.CreditAccountRatingdetailRow}>
                    <Text style={styles.companydirectorshiplabel}>Total Foreign Accounts</Text>
                    <Text style={styles.companydirectorshipvalue}>{Scoring?.TotalForeignAccounts} </Text>

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

export default IScore;