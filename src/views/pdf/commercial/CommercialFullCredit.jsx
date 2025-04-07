import { Document, Page, Text, View, Image, PDFViewer } from '@react-pdf/renderer';
import { fullcredit } from '../../../commercial';
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


const CommercialFullCredit = () => {
  const subjectlist = fullcredit.map(item => item.SubjectList).filter(Boolean);
  const businessData = fullcredit.map(item => item.BusinessData).filter(Boolean);
  const deliquencyinformtion = fullcredit.map(item => item.HighestDelinquencyRating).filter(Boolean);
  const facilityPerformanceSummary = fullcredit.map(item => item.FacilityPerformanceSummary).filter(Boolean);
  const directorInformation = fullcredit.map(item => item.DirectorInformation).filter(Boolean);
  const creditAgreementSummary = fullcredit.map(item => item.CreditAgreementSummary).filter(Boolean);
  const accountMonthlyPaymentHistoryHeader = fullcredit.map(item => item.AccountMonthlyPaymentHistoryHeader).filter(Boolean);
  const accountMonthlyPaymentHistory = fullcredit.map(item => item.AccountMonthlyPaymentHistory).filter(Boolean);
  const guarantorDetails = fullcredit.map(item => item.GuarantorDetails).filter(Boolean);
  const enquiryHistoryTop = fullcredit.map(item => item.EnquiryHistoryTop).filter(Boolean);
  const addressHistory = fullcredit.map(item => item.AddressHistory).filter(Boolean);
  const additionalContactHistory = fullcredit.map(item => item.AdditionalContactHistory).filter(Boolean);
  const enquiryDetails = fullcredit.map(item => item.EnquiryDetails).filter(Boolean);



  // Example of how to access and log the data:
  console.log("SubjectList:", subjectlist[0][0]);
  console.log("BusinessData:", businessData[0][0]);
  console.log("HighestDelinquencyRating:", deliquencyinformtion[0]);
  console.log("FacilityPerformanceSummary:", facilityPerformanceSummary[0][0]);
  console.log("DirectorInformation:", directorInformation[0]);
  console.log("CreditAgreementSummary:", creditAgreementSummary);
  console.log("AccountMonthlyPaymentHistoryHeader:", accountMonthlyPaymentHistoryHeader);
  console.log("AccountMonthlyPaymentHistory:", accountMonthlyPaymentHistory);
  console.log("GuarantorDetails:", guarantorDetails);
  console.log("AddressHistory:", addressHistory[0][0]);
  console.log("EnquiryHistoryTop:", enquiryHistoryTop[0]);
  console.log("EnquiryDetails: ", enquiryDetails[0][0]);
  console.log("AdditionalContactHistory: ", additionalContactHistory[0][0]);


  const BusinessData = businessData[0]?.[0] || {}; // Ensuring we don't access undefined values
  const DirectorInformation = directorInformation[0]
  const FacilityPerformanceSummary = facilityPerformanceSummary[0][0]
  const CreditAgreementSummary = creditAgreementSummary[0]
  const AccountMonthlyPaymentHistoryHeader = accountMonthlyPaymentHistoryHeader[0][0]
  const AccountMonthlyPaymentHistory = accountMonthlyPaymentHistory[0]
  const dynamicMonths = Object.values(AccountMonthlyPaymentHistoryHeader)
    .slice(3) // Skipping the first three non-month keys (TableName, DisplayText, Company)
    .map(month => month.replace('\n', ' ')).reverse();
  const GuarantorDetails = guarantorDetails?.[0]?.[0]
  const SubjectList = subjectlist[0][0]
  const AddressHistory = addressHistory[0]
  const AdditionalContactHistory = additionalContactHistory[0][0]
  const EnquiryHistoryTop = enquiryHistoryTop[0]


  return (
    <div className=' flex justify-center'>
      <PDFViewer style={{ width: '100%', height: '100vh' }}>
        <Document>
          <Page size="A4" style={styles.page}>

            {/* Header */}
            <View style={styles.header} fixed>
              <View>
                <Image style={styles.logo} src={logo} />
              </View>
              <View style={styles.addressheader}>
                <Text>Commercial Credit Report - Detailed</Text>
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
                    <Text style={styles.CommercialCreditAccountSummaryvalue}>{`(=N=)`}</Text>
                    <Text style={styles.CommercialCreditAccountSummaryvalue}>{` (US$)`}</Text>
                  </View>
                  <View style={styles.CreditAccountSummarydetailRow}>
                    <Text style={styles.CreditAccountSummarylabel}> Total Monthly Installments Amount</Text>
                    <Text style={styles.CommercialCreditAccountSummaryvalue}>{FacilityPerformanceSummary?.TotalMonthlyInstalment}</Text>
                    <Text style={styles.CommercialCreditAccountSummaryvalue}>{FacilityPerformanceSummary?.TotalMonthlyInstalment1}</Text>
                  </View>
                  <View style={styles.CreditAccountSummarydetailRow}>
                    <Text style={styles.CreditAccountSummarylabel}>Total Outstanding Debt</Text>
                    <Text style={styles.CommercialCreditAccountSummaryvalue}>{FacilityPerformanceSummary?.TotalOutstandingdebt}</Text>
                    <Text style={styles.CommercialCreditAccountSummaryvalue}>{FacilityPerformanceSummary?.TotalOutstandingdebt1}</Text>
                  </View>

                  <View style={styles.CreditAccountSummarydetailRow}>
                    <Text style={styles.CreditAccountSummarylabel}>Total Arrear Amount</Text>
                    <Text style={styles.CommercialCreditAccountSummaryvalue}>{FacilityPerformanceSummary?.Amountarrear}</Text>
                    <Text style={styles.CommercialCreditAccountSummaryvalue}>{FacilityPerformanceSummary?.Amountarrear1}</Text>
                  </View>
                  <View style={styles.CreditAccountSummarydetailRow}>
                    <Text style={styles.CreditAccountSummarylabel}>Total Number of Accounts Taken </Text>
                    <Text style={styles.CommercialCreditAccountSummaryvalue}>{FacilityPerformanceSummary?.TotalAccounts}</Text>
                    <Text style={styles.CommercialCreditAccountSummaryvalue}>{FacilityPerformanceSummary?.TotalAccounts1}</Text>
                  </View>

                  <View style={styles.CreditAccountSummarydetailRow}>
                    <Text style={styles.CreditAccountSummarylabel}>Total Judgement Amount</Text>
                    <Text style={styles.CommercialCreditAccountSummaryvalue}>{FacilityPerformanceSummary?.TotalJudgementAmount}</Text>
                    <Text style={styles.CommercialCreditAccountSummaryvalue}>{FacilityPerformanceSummary?.TotalJudgementAmount1}</Text>
                  </View>
                  <View style={styles.CreditAccountSummarydetailRow}>
                    <Text style={styles.CreditAccountSummarylabel}>Date of Last Judgement</Text>
                    <Text style={styles.CommercialCreditAccountSummaryvalue}>{FacilityPerformanceSummary?.LastJudgementDate}</Text>
                    <Text style={styles.CommercialCreditAccountSummaryvalue}>{FacilityPerformanceSummary?.LastJudgementDate1}</Text>
                  </View>
                  <View style={styles.CreditAccountSummarydetailRow}>
                    <Text style={styles.CreditAccountSummarylabel}>Total Amount of Dishonoured Cheques</Text>
                    <Text style={styles.CommercialCreditAccountSummaryvalue}>{FacilityPerformanceSummary?.TotalDishonouredAmount}</Text>
                    <Text style={styles.CommercialCreditAccountSummaryvalue}>{FacilityPerformanceSummary?.TotalDishonouredAmount1}</Text>
                  </View>
                  <View style={styles.CreditAccountSummarydetailRow}>
                    <Text style={styles.CreditAccountSummarylabel}>Date of Last Bounced Cheque</Text>
                    <Text style={styles.CommercialCreditAccountSummaryvalue}>{null}</Text>
                    <Text style={styles.CommercialCreditAccountSummaryvalue}>{null}</Text>
                  </View>


                </View>
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
                <Text style={styles.label}>Subscriber Name</Text>
                <Text style={styles.value}>FirstCentral Data</Text>
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
                      <Text style={styles.creditAgreementsfirstvalue}>{account.IndicatorDescription || null}</Text>
                    </View>
                    <View style={styles.creditAgreementsRow}>
                      <Text style={styles.creditAgreementslabel}>Currency</Text>
                      <Text style={styles.creditAgreementsvalue}>{account.Currency}</Text>
                    </View>
                    <View style={styles.creditAgreementsfirstRow}>
                      <Text style={styles.creditAgreementsfirstlabel}>Credit / Debit</Text>
                      <Text style={styles.creditAgreementsfirstvalue}>{account.CurrentBalanceDebitInd || null}</Text>
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
                      <Text style={styles.creditAgreementsvalue}>{account.ClosedDate || null}</Text>
                    </View>
                    <View style={styles.creditAgreementsfirstRow}>
                      <Text style={styles.creditAgreementsfirstlabel}>Facility Classification</Text>
                      <Text style={styles.creditAgreementsfirstvalue}>{account.PerformanceStatus}</Text>
                    </View>
                    <View style={styles.creditAgreementsRow}>
                      <Text style={styles.creditAgreementslabel}>Last Payment Date</Text>
                      <Text style={styles.creditAgreementsvalue}>{account.LastPaymentDate || null}</Text>
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

            {/*  Latest Guurantor Details */}
            <View style={styles.section}>
              <View style={styles.sectionHeader}>
                <Text style={styles.otherSectionTitle}>Guarantor Details</Text>
                <Text style={styles.sectionTitleOrderBorder}></Text>
              </View>
              <Text style={styles.sectionDescription}>
                This section includes the details of the latest Guarantor used on a Credit/Loan application.
              </Text>

              <View style={styles.CreditAccountRatingenquiryheader}>
                <View style={styles.CreditAccountRatingdetailsGrid}>
                  <View style={styles.CreditAccountRatingdetailRow}>
                    <Text style={styles.LatestGuarantorDetailslabel}>Gurantor's Name</Text>
                    <Text style={styles.LatestGuarantorDetailsvalue}>{GuarantorDetails?.GuarantorFirstName || null}</Text>
                    <Text style={styles.LatestGuarantorDetailslabel}>Gurantor's Name</Text>
                    <Text style={styles.LatestGuarantorDetailsvalue}>{GuarantorDetails?.GuarantorFirstName || null}</Text>
                  </View>

                  <View style={styles.CreditAccountRatingdetailRow}>
                    <Text style={styles.LatestGuarantorDetailslabel}>Date of Birth</Text>
                    <Text style={styles.LatestGuarantorDetailsvalue}>{GuarantorDetails?.GuarantorOtherName || null}</Text>
                    <Text style={styles.LatestGuarantorDetailslabel}>Date of Birth</Text>
                    <Text style={styles.LatestGuarantorDetailsvalue}>{GuarantorDetails?.GuarantorOtherName || null}</Text>
                  </View>

                  <View style={styles.CreditAccountRatingdetailRow}>

                    <Text style={styles.LatestGuarantorDetailslabel}>National ID Number</Text>
                    <Text style={styles.LatestGuarantorDetailsvalue}>{GuarantorDetails?.GuarantorNationalIDNo || null}</Text>
                    <Text style={styles.LatestGuarantorDetailslabel}>National ID Number</Text>
                    <Text style={styles.LatestGuarantorDetailsvalue}>{GuarantorDetails?.GuarantorNationalIDNo || null}</Text>
                  </View>

                  <View style={styles.CreditAccountRatingdetailRow}>
                    <Text style={styles.LatestGuarantorDetailslabel}>PENCOM/Other ID Number</Text>
                    <Text style={styles.LatestGuarantorDetailsvalue}>{GuarantorDetails?.GuarantorOtherID || null}</Text>

                    <Text style={styles.LatestGuarantorDetailslabel}>PENCOM/Other ID Number</Text>
                    <Text style={styles.LatestGuarantorDetailsvalue}>{GuarantorDetails?.GuarantorOtherID || null}</Text>

                  </View>

                  <View style={styles.CreditAccountRatingdetailRow}>

                    <Text style={styles.LatestGuarantorDetailslabel}>Driver's License Number</Text>
                    <Text style={styles.LatestGuarantorDetailsvalue}>{GuarantorDetails?.GuarantorDriverLicenceNo || null}</Text>
                    <Text style={styles.LatestGuarantorDetailslabel}>Driver's License Number</Text>
                    <Text style={styles.LatestGuarantorDetailsvalue}>{GuarantorDetails?.GuarantorDriverLicenceNo || null}</Text>
                  </View>

                  <View style={styles.CreditAccountRatingdetailRow}>
                    <Text style={styles.LatestGuarantorDetailslabel}>Passport Number</Text>
                    <Text style={styles.LatestGuarantorDetailsvalue}>{GuarantorDetails?.GuarantorPassport || null}</Text>
                    <Text style={styles.LatestGuarantorDetailslabel}>Passport Number</Text>
                    <Text style={styles.LatestGuarantorDetailsvalue}>{GuarantorDetails?.GuarantorPassport || null}</Text>
                  </View>
                  <View style={styles.CreditAccountRatingdetailRow}>
                    <Text style={styles.LatestGuarantorDetailslabel}>Employer</Text>
                    <Text style={styles.LatestGuarantorDetailsvalue}>{GuarantorDetails?.GuarantorMobileTelephone || null}</Text>
                    <Text style={styles.LatestGuarantorDetailslabel}>Employer</Text>
                    <Text style={styles.LatestGuarantorDetailsvalue}>{GuarantorDetails?.GuarantorMobileTelephone || null}</Text>
                  </View>

                  <View style={styles.CreditAccountRatingdetailRow}>
                    <Text style={styles.LatestGuarantorDetailslabel}>Home Telephone Number</Text>
                    <Text style={styles.LatestGuarantorDetailsvalue}>{GuarantorDetails?.GuarantorMobileTelephone || null}</Text>
                    <Text style={styles.LatestGuarantorDetailslabel}>Home Telephone Number</Text>
                    <Text style={styles.LatestGuarantorDetailsvalue}>{GuarantorDetails?.GuarantorMobileTelephone || null}</Text>
                  </View>
                  <View style={styles.CreditAccountRatingdetailRow}>
                    <Text style={styles.LatestGuarantorDetailslabel}>Work Telephone Number</Text>
                    <Text style={styles.LatestGuarantorDetailsvalue}>{GuarantorDetails?.GuarantorMobileTelephone || null}</Text>
                    <Text style={styles.LatestGuarantorDetailslabel}>Work Telephone Number</Text>
                    <Text style={styles.LatestGuarantorDetailsvalue}>{GuarantorDetails?.GuarantorMobileTelephone || null}</Text>
                  </View>
                  <View style={styles.CreditAccountRatingdetailRow}>
                    <Text style={styles.LatestGuarantorDetailslabel}>Mobile Telephone Number</Text>
                    <Text style={styles.LatestGuarantorDetailsvalue}>{GuarantorDetails?.GuarantorMobileTelephone || null}</Text>
                    <Text style={styles.LatestGuarantorDetailslabel}>Mobile Telephone Number</Text>
                    <Text style={styles.LatestGuarantorDetailsvalue}>{GuarantorDetails?.GuarantorMobileTelephone || null}</Text>
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
              {[1, 2, 3].map((record, index) => (
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

            {/* AddressHistory */}
            <View style={styles.section}>
              <View style={styles.sectionHeader}>
                <Text style={styles.otherSectionTitle}>Additional Address History </Text>
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
                    <Text style={styles.AddressHistorytableCell}>Address Type</Text>
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
                      <Text style={styles.AddressHistorytableCell}>{record?.CommercialAddressType}</Text>
                    </View>
                    <View style={styles.AddressHistorytableCol}>
                      <Text style={styles.AddressHistorytableCell}>{record?.CommercialAddress1}</Text>
                    </View>
                    <View style={styles.AddressHistorytableCol}>
                      <Text style={styles.AddressHistorytableCell}>{record?.CommercialAddress2}</Text>
                    </View>
                    <View style={styles.AddressHistorytableCol}>
                      <Text style={styles.AddressHistorytableCell}>{record?.CommercialAddress3}</Text>
                    </View>
                    <View style={[styles.AddressHistorytableCol, styles.AddressHistorytableColLast]}>
                      <Text style={styles.AddressHistorytableCell}>{record?.CommercialAddress4}</Text>
                    </View>
                  </View>
                ))}
              </View>

            </View>

            {/*  Additional Contact History */}
            <View style={styles.section}>
              <View style={styles.sectionHeader}>
                <Text style={styles.otherSectionTitle}>Additional Contact History</Text>
                <Text style={styles.sectionTitleOrderBorder}></Text>
              </View>
              <Text style={styles.sectionDescription}>
                This section includes a list of more Contact Information abpoutthe subject presented on the Credit/Loan applications.
              </Text>

              <View style={styles.CreditAccountRatingenquiryheader}>
                <View style={styles.CreditAccountRatingdetailsGrid}>
                  <View style={styles.CreditAccountRatingdetailRow}>
                    <Text style={styles.LatestGuarantorDetailslabel}>Telephone Number 3</Text>
                    <Text style={styles.LatestGuarantorDetailsvalue}>{AdditionalContactHistory?.Telephone3}</Text>
                    <Text style={styles.LatestGuarantorDetailslabel}>Bureau Update Date</Text>
                    <Text style={styles.LatestGuarantorDetailsvalue}>{AdditionalContactHistory?.UpdatedOn}</Text>
                  </View>

                  <View style={styles.CreditAccountRatingdetailRow}>
                    <Text style={styles.LatestGuarantorDetailslabel}>Telephone Number 4</Text>
                    <Text style={styles.LatestGuarantorDetailsvalue}>{AdditionalContactHistory?.Telephone3}</Text>
                    <Text style={styles.LatestGuarantorDetailslabel}> </Text>
                    <Text style={styles.LatestGuarantorDetailsvalue}>{null}</Text>
                  </View>

                  <View style={styles.CreditAccountRatingdetailRow}>
                    <Text style={styles.LatestGuarantorDetailslabel}>Office Fax 2</Text>
                    <Text style={styles.LatestGuarantorDetailsvalue}>{AdditionalContactHistory?.Fax2}</Text>
                    <Text style={styles.LatestGuarantorDetailslabel}> </Text>
                    <Text style={styles.LatestGuarantorDetailsvalue}>{null}</Text>
                  </View>

                  <View style={styles.CreditAccountRatingdetailRow}>
                    <Text style={styles.LatestGuarantorDetailslabel}>Previous Business Name</Text>
                    <Text style={styles.LatestGuarantorDetailsvalue}>{AdditionalContactHistory?.PreviousBusinessName}</Text>
                    <Text style={styles.LatestGuarantorDetailslabel}> </Text>
                    <Text style={styles.LatestGuarantorDetailsvalue}>{null}</Text>
                  </View>

                  <View style={styles.CreditAccountRatingdetailRow}>
                    <Text style={styles.LatestGuarantorDetailslabel}>E-Mail Address 2</Text>
                    <Text style={styles.LatestGuarantorDetailsvalue}>{AdditionalContactHistory?.CommercialEmail2}</Text>
                    <Text style={styles.LatestGuarantorDetailslabel}> </Text>
                    <Text style={styles.LatestGuarantorDetailsvalue}>{null}</Text>
                  </View>

                  <View style={styles.CreditAccountRatingdetailRow}>
                    <Text style={styles.LatestGuarantorDetailslabel}>E-Mail Address 3</Text>
                    <Text style={styles.LatestGuarantorDetailsvalue}>{AdditionalContactHistory?.CommercialEmail3}</Text>
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
              {EnquiryHistoryTop.map((EnquiryHistoryTop, index) => (
                <View key={index} style={styles.enquiryhistoryinlast12monthtableRow}>
                  <View style={[styles.enquiryhistoryinlast12monthtableCol, styles.enquiryhistoryinlast12monthtableColFirst]}>
                    <Text style={styles.enquiryhistoryinlast12monthtableCell}>{EnquiryHistoryTop?.CompanyTelephoneNo}</Text>
                  </View>
                  <View style={styles.enquiryhistoryinlast12monthtableCol}>
                    <Text style={styles.enquiryhistoryinlast12monthtableCell}>{EnquiryHistoryTop?.SubscriberName}</Text>
                  </View>
                  <View style={styles.enquiryhistoryinlast12monthtableCol}>
                    <Text style={styles.enquiryhistoryinlast12monthtableCell}>{EnquiryHistoryTop?.CompanyTelephoneNo}</Text>
                  </View>
                  <View style={styles.enquiryhistoryinlast12monthtableCol}>
                    <Text style={styles.enquiryhistoryinlast12monthtableCell}>{EnquiryHistoryTop?.EnquiryReason}</Text>
                  </View>

                </View>
              ))}
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

export default CommercialFullCredit;