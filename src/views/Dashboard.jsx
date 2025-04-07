import { useState } from 'react'
import { motion } from 'framer-motion'
import logo from "@/assets/logo.png"
import { FiChevronDown, FiEye } from 'react-icons/fi'
import NavbarNew from '../components/navbar/NavbarNew'
import { useSelector } from 'react-redux'
import { useConsumerMatchMutation, useConsumerFullCreditMutation, useConsumerBasicTraceMutation, useConsumerBasicCreditMutation, useConsumerXScoreFullCreditMutation, useConsumerXScorePrimeMutation, useConsumerIScoreMutation, useConsumerKYCVerificationMutation, useConsumerSnapcheckMutation } from '../redux/api/consumerApiSlice'
import toast from 'react-hot-toast'
import DataTable from '../components/table/DataTable'
import Loader from '../components/Loader'
import ConsumerBasicTrace from './pdf/consumer/ConsumerBasicTrace'
import ConsumerBasicCredit from './pdf/consumer/ConsumerBasicCredit'
import ConsumerFullCredit from './pdf/consumer/ConsumerFullCredit'
import SnapCheck from './pdf/consumer/SnapCheck'
import XSCoreConsumerFullCredit from './pdf/consumer/XSCoreConsumerFullCredit'
import XscoreConsumerPrime from './pdf/consumer/XscoreConsumerPrime'
import IScore from './pdf/consumer/IScore'
import Kyc from './pdf/consumer/Kyc'
import { useCommercialBasicCreditMutation, useCommercialFullCreditMutation, useCommercialMatchMutation } from '../redux/api/commercialApiSlice'
import CommercialDataTable from '../components/table/CommercialDataTable'
import CommercialBasicCredit from './pdf/commercial/CommercialBasicCredit'
import CommercialFullCredit from './pdf/commercial/CommercialFullCredit'

function Dashboard() {
  const isDarkMode = useSelector((state) => state.darkMode.isDarkMode); // Get dark mode state
  const [activeCategory, setActiveCategory] = useState('consumer')
  const [activeSubCategory, setActiveSubCategory] = useState('consumer-basic')
  const [reportData, setReportData] = useState(null);
  const [commercialReportData, setCommercialReportData] = useState(null);
  const [activeTab, setActiveTab] = useState('enquiry')
  const [enquiryReason, setEnquiryReason] = useState('Consumer Search - Consumer Basic Credit')
  const [formData, setFormData] = useState({
    EnquiryReason: '',
    ConsumerName: '',
    DateOfBirth: '',
    Identification: '',
    Accountno: '',
    ProductID: '',
    BusinessName: '',
    BusinessRegistrationNumber: '',
    AccountNumber: ''
  });
  const [consumerMatch, { isLoading: isLoadingMatch, isError, isSuccess, error }] = useConsumerMatchMutation();
  const [commercialMatch, { isLoading: isLoadingcommercialMatch, isError: isCommercialError, isSuccess: isCommercialSuccess, error: commercialError }] = useCommercialMatchMutation();
  const [fetchConsumerBasic, { isLoading: isLoadingBasic, error: errorBasic }] = useConsumerBasicCreditMutation();
  const [fetchConsumerDetailed, { isLoading: isLoadingDetailed, error: errorDetailed }] = useConsumerFullCreditMutation();
  const [fetchConsumerTrace, { isLoading: isLoadingTrace, error: errorTrace }] = useConsumerBasicTraceMutation();
  const [fetchConsumerSnap, { isLoading: isLoadingSnap, error: errorSnap }] = useConsumerSnapcheckMutation();
  const [fetchConsumerXScoreDetailed, { isLoading: isLoadingXScore, error: errorXScore }] = useConsumerXScoreFullCreditMutation();
  const [fetchConsumerPrime, { isLoading: isLoadingPrime, error: errorPrime }] = useConsumerXScorePrimeMutation();
  const [fetchConsumerIScore, { isLoading: isLoadingIScore, error: errorIScore }] = useConsumerIScoreMutation();
  const [fetchConsumerKYC, { isLoading: isLoadingkyc, error: errorkyc }] = useConsumerKYCVerificationMutation();
  const [fetchCommercialBasic, { isLoading: isLoadingCommercialBasic, error: errorCommercialBasic }] = useCommercialBasicCreditMutation();
  const [fetchCommercialDetailed, { isLoading: isLoadingCommercialDetailed, error: errorCommercialDetailed }] = useCommercialFullCreditMutation();
  
  const { userInfo } = useSelector((state) => state.auth);
  const [consumerData, setConsumerData] = useState(null)
  const [commercialData, setCommercialData] = useState(null)
  
  const apiMutations = {
    'consumer-basic': fetchConsumerBasic,
    'consumer-detailed': fetchConsumerDetailed,
    'consumer-basic-trace': fetchConsumerTrace,
    'consumer-basic-snap': fetchConsumerSnap,
    'consumer-detailed-xscore': fetchConsumerXScoreDetailed,
    'consumer-prime': fetchConsumerPrime,
    'consumer-iscore': fetchConsumerIScore,
    'consumer-kyc': fetchConsumerKYC,
    'commercial-basic':fetchCommercialBasic,
    'commercial-detailed':fetchCommercialDetailed,

  };
  const reportComponents = {
    'consumer-basic': ConsumerBasicCredit,
    'consumer-detailed': ConsumerFullCredit,
    'consumer-basic-trace': ConsumerBasicTrace,
    'consumer-basic-snap': SnapCheck,
    'consumer-detailed-xscore': XSCoreConsumerFullCredit,
    'consumer-prime': XscoreConsumerPrime,
    'consumer-iscore': IScore,
    'consumer-kyc': Kyc,
    'commercial-basic':CommercialBasicCredit,
    'commercial-detailed':CommercialFullCredit,
  };


  const isLoading = isLoadingMatch || isLoadingBasic || isLoadingDetailed || isLoadingTrace || isLoadingSnap || isLoadingXScore || isLoadingPrime || isLoadingIScore || isLoadingkyc||isLoadingCommercialBasic||isLoadingCommercialDetailed;
  const currentError = errorBasic || errorDetailed || errorTrace || errorSnap || errorXScore || errorPrime || errorIScore || errorkyc||errorCommercialBasic||errorCommercialDetailed;

  const searchHistory = [
    {
      enquiryType: 'Consumer Detailed Credit',
      refNo: 'FCB2025031201',
      searchOutput: 'TEMITOPE DAMILOLA FAPOHUNDA,22359228331,10/07/1998',
      viewedDate: '12/03/2025',
      systemUser: 'Edwin Igah'
    },
    {
      enquiryType: 'Consumer Detailed Credit',
      refNo: 'FCB2025031202',
      searchOutput: 'No Subject Found!',
      viewedDate: '12/03/2025',
      systemUser: 'Edwin Igah'
    },
    {
      enquiryType: 'Consumer Detailed Credit',
      refNo: 'FCB2025031203',
      searchOutput: 'MAUREEN, ISIOMA, EKPU : 87 Adeola Odeku Street',
      viewedDate: '12/03/2025',
      systemUser: 'Edwin Igah'
    }
  ]

  const categories = {
    consumer: {
      name: 'Consumer Search',
      subcategories: [
        { id: 'consumer-basic', name: 'Consumer Basic Credit' },
        { id: 'consumer-detailed', name: 'Consumer Detailed Credit' },
        { id: 'consumer-basic-trace', name: 'Consumer Basic Trace' },
        { id: 'consumer-basic-snap', name: 'Consumer Snap Check' },
        { id: 'consumer-detailed-xscore', name: 'X-Score Consumer Detailed Credit' },
        { id: 'consumer-prime', name: 'X-Score Consumer Prime' },
        { id: 'consumer-iscore', name: 'Consumer IScore Report' },
        { id: 'consumer-kyc', name: 'Consumer KYC Verification' },
      ]
    },
    commercial: {
      name: 'Commercial Search',
      subcategories: [
        { id: 'commercial-basic', name: 'Commercial Basic Credit' },
        { id: 'commercial-detailed', name: 'Commercial Detailed Credit' },
        { id: 'commercial-x-score', name: 'X-Score Commercial Detailed Credit' },
        { id: 'director-basic', name: 'Director Basic Credit' },
        { id: 'director-detailed', name: 'Director Detailed Credit' }

      ]
    }
  }

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log(formData, ":formdata")
    try {
      if (activeCategory === "consumer") {

        const res = await consumerMatch({ ...formData, DataTicket: userInfo?.DataTicket }).unwrap();
        setConsumerData(res)
        console.log(res, "resres")
      } else {
        const res = await commercialMatch({ ...formData, DataTicket: userInfo?.DataTicket }).unwrap();
        setCommercialData(res)
        console.log(res, "resres")
      }
      toast.success("Found Match")
    } catch (err) {
      toast.error("Fail to match Try again.")
    }
    console.log('Form submitted:', { ...formData, DataTicket: userInfo?.DataTicket })
  }

  const handleClear = () => {
    setFormData({
      EnquiryReason: '',
      ConsumerName: '',
      DateOfBirth: '',
      Identification: '',
      Accountno: '',
      ProductID: '',
      BusinessName: '',
      BusinessRegistrationNumber: '',
      AccountNumber: ''
    })
  }

  const handleCategoryClick=(key)=>{ 
    setActiveCategory(key);  
    setReportData(null)
    setConsumerData(null)
    setCommercialData(null)  
    setFormData({
    EnquiryReason: '',
    ConsumerName: '',
    DateOfBirth: '',
    Identification: '',
    Accountno: '',
    ProductID: '',
    BusinessName: '',
    BusinessRegistrationNumber: '',
    AccountNumber: ''
  })}
  const handleSubCategoryClick = (categoryKey, subCategory) => {
    setActiveCategory(categoryKey);
    setActiveSubCategory(subCategory.id);
    setActiveTab('enquiry');
    setConsumerData(null)
    setCommercialData(null) 
    setFormData({
      EnquiryReason: '',
      ConsumerName: '',
      DateOfBirth: '',
      Identification: '',
      Accountno: '',
      ProductID: '',
      BusinessName: '',
      BusinessRegistrationNumber: '',
      AccountNumber: ''
    })
    setEnquiryReason(`${categories[categoryKey].name} - ${subCategory.name}`);
  };

  const handleShowReport = async (data) => {
    setActiveTab('report');

    // Get the correct mutation trigger function
    const fetchReport = apiMutations[activeSubCategory];

    if (fetchReport && activeSubCategory === "consumer-kyc") {
      try {
        console.log({ ...data, Identification: formData.Identification },formData, "jkkkkkk")
        const response = await fetchReport({ ...data, Identification: formData.Identification }).unwrap(); // Unwrap response from mutation
        console.log("API Response:", response);

      } catch (error) {
        console.error("API Error:", error);
      }
    }

    if (fetchReport && activeSubCategory !== "consumer-kyc") {
      try {
        setReportData(null)
        const response = await fetchReport(data).unwrap(); // Unwrap response from mutation
        console.log("API Response:", response);
        setReportData(response); // Store response in state
      } catch (error) {
        console.error("API Error:", error);
      }
    }
    else {
      console.error("No API function found for:", activeSubCategory);
    }
  };

  const renderContent = () => {
console.log(reportData,"reportData")

    const ReportComponent = reportComponents[activeSubCategory];

    switch (activeTab) {
      case 'history':
        return (
          <div className="overflow-x-auto">
            <div className="mb-4 flex justify-between items-center">
              <p className={`text-sm ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                The Search History contains your last 50 enquiries. View your last 50 reports at no additional charge.
              </p>
              <button className="px-4 py-2 text-sm bg-[#FF6600] text-white rounded hover:bg-orange-700 transition-colors">
                Refresh
              </button>
            </div>
            <table className="w-full text-sm">
              <thead>
                <tr className={`${isDarkMode ? 'bg-gray-700' : 'bg-gray-100'}`}>
                  <th className="px-4 py-2 text-left">Enquiry Type</th>
                  <th className="px-4 py-2 text-left">FirstCentral Ref No.</th>
                  <th className="px-4 py-2 text-left">Search Output</th>
                  <th className="px-4 py-2 text-left">Details Viewed Date</th>
                  <th className="px-4 py-2 text-left">System User</th>
                  <th className="px-4 py-2 text-center">View</th>
                </tr>
              </thead>
              <tbody>
                {searchHistory.map((item, index) => (
                  <tr
                    key={index}
                    className={`
                      ${isDarkMode ? 'hover:bg-gray-700' : 'hover:bg-gray-50'}
                      ${index % 2 === 0 ? isDarkMode ? 'bg-gray-800' : 'bg-white' : isDarkMode ? 'bg-gray-900' : 'bg-gray-50'}
                    `}
                  >
                    <td className="px-4 py-2">{item.enquiryType}</td>
                    <td className="px-4 py-2">{item.refNo}</td>
                    <td className="px-4 py-2">{item.searchOutput}</td>
                    <td className="px-4 py-2">{item.viewedDate}</td>
                    <td className="px-4 py-2">{item.systemUser}</td>
                    <td className="px-4 py-2 text-center">
                      <button className="text-[#FF6600] hover:text-orange-700">
                        <FiEye className="w-4 h-4" />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <div className="mt-4 flex items-center justify-between text-sm">
              <span className={isDarkMode ? 'text-gray-300' : 'text-gray-600'}>
                Page 1 of 50 (500 items)
              </span>
              <div className="flex space-x-2">
                {[1, 2, 3, 4, 5].map(page => (
                  <button
                    key={page}
                    className={`px-3 py-1 rounded ${page === 1
                        ? 'bg-[#FF6600] text-white'
                        : `${isDarkMode ? 'text-gray-300 hover:bg-gray-700' : 'text-gray-600 hover:bg-gray-100'}`
                      }`}
                  >
                    {page}
                  </button>
                ))}
                <span className={isDarkMode ? 'text-gray-300' : 'text-gray-600'}>...</span>
                <button className={`px-3 py-1 rounded ${isDarkMode ? 'text-gray-300 hover:bg-gray-700' : 'text-gray-600 hover:bg-gray-100'}`}>
                  50
                </button>
              </div>
            </div>
          </div>
        )
      case 'enquiry':
        return (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className={`rounded-lg shadow-lg px-6 py-2 ${isDarkMode ? 'bg-gray-800' : 'bg-white'}`}
          >
            <h2 className={`text-sm bg-gray-200 dark:bg-gray-700 px-2 py-1 rounded-xl mb-6 ${isDarkMode ? 'text-white' : 'text-gray-800'}`}>Enquiry Type: {enquiryReason}</h2>


            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="flex flex-col gap-3">
                <div className='flex gap-4'>
                  <label className={`block text-xs  mb-2 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                    Enquiry Reason
                  </label>

                  <select name="EnquiryReason"
                    value={formData.EnquiryReason}
                    onChange={handleInputChange}
                    required
                    className={`w-1/4 rounded-md border px-3 py-1 text-xs ${isDarkMode
                        ? 'bg-gray-700 border-gray-600 text-white focus:border-[#FF6600]'
                        : 'bg-white border-gray-300 text-gray-900 focus:border-[#FF6600]'
                      }`}
                  >
                    <option value="">Please Select...</option>
                    <option n value="Application for credit by a borrower">Application for credit by a borrower.</option>
                    <option value="Reviewing of existing credit facilities">Reviewing of existing credit facilities.</option>
                    <option value="Opening of new accounts (as part of KYC principle)">{`Opening of new accounts (as part of KYC principle).`}</option>
                    <option value="Funds transfer of N1, 000,000 (One Million Naira) and above">{`Funds transfer of N1, 000,000 (One Million Naira) and above.`}</option>
                    <option value="Prospective/current employee checks">Prospective/current employee checks.</option>
                    <option value="New Credit Application">New Credit Application</option>
                    <option value="Tenancy contracts (for identification purposes)">{`Tenancy contracts (for identification purposes).`}</option>
                    <option value="Grant/review of insurance policies">Grant/review of insurance policies.</option>
                    <option value="Acceptance of guarantee(s)">{`Acceptance of guarantee(s).`}</option>
                    <option value="Application for contracts/pre-paid services (telephone etc)">{`Application for contracts/pre-paid services (telephone etc).`}</option>
                    <option value="Court judgement">Court judgement.</option>
                    <option value="Credit scoring of the client by credit bureau">Credit scoring of the client by credit bureau.</option>
                    <option value="A written consent from the client">A written consent from the client.</option>
                    <option value="Legislation">Legislation.</option>
                    <option value="Test">Test.</option>
                  </select>
                </div>








                {activeCategory === "consumer" ? (
                  <>
                    <div className='flex gap-4'>
                      <label className={`block text-xs  mb-2 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                        Consumer Name</label>
                      <input type="text" name="ConsumerName" value={formData.ConsumerName} onChange={handleInputChange} className={`w-1/4 rounded-md border px-3 py-1 text-xs ${isDarkMode
                          ? 'bg-gray-700 border-gray-600 text-white focus:border-[#FF6600]'
                          : 'bg-white border-gray-300 text-gray-900 focus:border-[#FF6600]'
                        }`} />
                    </div>

                    <div className='flex gap-4'>
                      <label className={`block text-xs  mb-2 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                        Birth Date</label>
                      <input type="text" name="DateOfBirth" value={formData.DateOfBirth} onChange={handleInputChange} className={`w-1/4 rounded-md border px-3 py-1 text-xs ${isDarkMode
                          ? 'bg-gray-700 border-gray-600 text-white focus:border-[#FF6600]'
                          : 'bg-white border-gray-300 text-gray-900 focus:border-[#FF6600]'
                        }`} />
                    </div>

                    <div className='flex gap-4'>
                      <label className={`block text-xs  mb-2 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                        Identification</label>
                      <input type="text" name="Identification" value={formData.Identification} onChange={handleInputChange} className={`w-1/4 rounded-md border px-3 py-1 text-xs ${isDarkMode
                          ? 'bg-gray-700 border-gray-600 text-white focus:border-[#FF6600]'
                          : 'bg-white border-gray-300 text-gray-900 focus:border-[#FF6600]'
                        }`} />
                    </div>

                    <div className='flex gap-4'>
                      <label className={`block text-xs  mb-2 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                        Account Number</label>
                      <input type="text" name="Accountno" value={formData.Accountno} onChange={handleInputChange} className={`w-1/4 rounded-md border px-3 py-1 text-xs ${isDarkMode
                          ? 'bg-gray-700 border-gray-600 text-white focus:border-[#FF6600]'
                          : 'bg-white border-gray-300 text-gray-900 focus:border-[#FF6600]'
                        }`} />
                    </div>
                  </>
                ) : (
                  <>
                    <div className='flex gap-4'>
                      <label className={`block text-xs  mb-2 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                        Business Name</label>
                      <input type="text" name="BusinessName" value={formData.BusinessName} onChange={handleInputChange} className={`w-1/4 rounded-md border px-3 py-1 text-xs ${isDarkMode
                          ? 'bg-gray-700 border-gray-600 text-white focus:border-[#FF6600]'
                          : 'bg-white border-gray-300 text-gray-900 focus:border-[#FF6600]'
                        }`} />
                    </div>

                    <div className='flex gap-4'>
                      <label className={`block text-xs  mb-2 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                        Business Registration Number</label>
                      <input type="text" name="BusinessRegistrationNumber" value={formData.BusinessRegistrationNumber} onChange={handleInputChange} className={`w-1/4 rounded-md border px-3 py-1 text-xs ${isDarkMode
                          ? 'bg-gray-700 border-gray-600 text-white focus:border-[#FF6600]'
                          : 'bg-white border-gray-300 text-gray-900 focus:border-[#FF6600]'
                        }`} />
                    </div>

                    <div className='flex gap-4'>
                      <label className={`block text-xs  mb-2 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                        Account Number</label>
                      <input type="text" name="AccountNumber" value={formData.AccountNumber} onChange={handleInputChange} className={`w-1/4 rounded-md border px-3 py-1 text-xs ${isDarkMode
                          ? 'bg-gray-700 border-gray-600 text-white focus:border-[#FF6600]'
                          : 'bg-white border-gray-300 text-gray-900 focus:border-[#FF6600]'
                        }`} />
                    </div>
                  </>
                )}
              </div>

              <div className="flex space-x-4">
                <button
                  type="submit"
                  className="bg-[#FF6600] text-white px-4 py-1 rounded-md hover:bg-orange-700 transition-colors text-xs"
                >
                  Submit
                </button>
                <button
                  type="button"
                  onClick={handleClear}
                  className={`px-4 py-1 rounded-md transition-colors text-xs ${isDarkMode
                      ? 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                      : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                    }`}
                >
                  Clear
                </button>
              </div>
            </form>

            {isLoadingMatch ? <Loader /> : consumerData ? <DataTable data={consumerData} handleView={handleShowReport} /> : null}
            {isLoadingcommercialMatch ? <Loader /> : commercialData ? <CommercialDataTable data={commercialData} handleView={handleShowReport} /> : null}

            <div className={`mt-8 p-4 rounded-md ${isDarkMode ? 'bg-gray-700' : 'bg-orange-50'}`}>
              <h3 className={`text-sm font-semibold mb-4 ${isDarkMode ? 'text-white' : 'text-[#FF6600]'}`}>
                ENHANCEMENT OF FirstCentral CREDIT REPORT (INCLUSION OF COLLATERAL INFORMATION)
              </h3>
              <p className={`mb-4 text-xs ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                We have implemented the Collateral Information section on the credit report. The new features implemented are:
              </p>
              <ul className={`list-disc list-inside space-y-2 text-xs ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                <li>The bank that provided the collateral information</li>
                <li>If collaterised, 'Yes', If not, 'No'</li>
                <li>The type of collateral used to secure the loan facility</li>
                <li>The date collateral information was submitted to FirstCentral</li>
              </ul>
            </div>
          </motion.div>
        )
      default:
        if (isLoading) return <Loader />
        if (currentError) return toast.error("Error Trying to load resource try again");
        return ReportComponent && reportData ? <div className='mt-5'><ReportComponent data={reportData} /> </div> : <p>No report available</p>;
    }
  }

  return (
    <div className={`min-h-screen ${isDarkMode ? 'dark bg-gray-900' : 'bg-gray-50'}`}>
      {/* Header */}
      <NavbarNew />

      <div className="flex">
        {/* Sidebar */}
        <aside className={`w-64 min-h-screen ${isDarkMode ? 'bg-gray-800' : 'bg-white'} border-r border-gray-200 dark:border-gray-700`}>
          <nav className="p-4">
            {Object.entries(categories).map(([key, category]) => (
              <div key={key} className="mb-4">
                <button
                  onClick={() =>handleCategoryClick(key)}
                  className={`w-full flex items-center justify-between p-2 rounded-md text-sm ${activeCategory === key
                      ? 'bg-[#FF6600] text-white'
                      : `${isDarkMode ? 'text-gray-300 hover:bg-gray-700' : 'text-gray-600 hover:bg-gray-100'}`
                    }`}
                >
                  <span>{category.name}</span>
                  <FiChevronDown className={`transform ${activeCategory === key ? 'rotate-180' : ''} w-4 h-4`} />
                </button>
                {activeCategory === key && (
                  <div className="ml-4 mt-2 space-y-2">
                    {category.subcategories.map((sub) => (
                      <button
                        key={sub.id}
                        onClick={() => handleSubCategoryClick(key, sub)}
                        className={`w-full text-left p-2 rounded-md text-xs ${activeSubCategory === sub.id
                            ? 'bg-orange-100 text-[#FF6600] dark:bg-gray-700 dark:text-orange-400'
                            : `${isDarkMode ? 'text-gray-300 hover:bg-gray-700' : 'text-gray-600 hover:bg-gray-100'}`
                          }`}
                      >
                        {sub.name}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-6">
          <div className="mb-1">
            <div className="flex space-x-6 border-b border-gray-200 dark:border-gray-700">
              <button
                onClick={() => setActiveTab('history')}
                className={`px-4 py-1 text-sm border-x-2 border-t-2 rounded-sm ${activeTab === 'history'
                    ? `${isDarkMode ? 'text-white border-[#FF6600]' : 'text-[#FF6600] border-[#FF6600]'}`
                    : 'border-transparent dark:text-white'
                  }`}
              >
                Search History
              </button>
              <button
                onClick={() => setActiveTab('enquiry')}
                className={`px-4 py-1 text-sm border-x-2 border-t-2 rounded-sm ${activeTab === 'enquiry'
                    ? `${isDarkMode ? 'text-white border-[#FF6600]' : 'text-[#FF6600] border-[#FF6600]'}`
                    : 'border-transparent dark:text-white'
                  }`}
              >
                Enquiry Panel
              </button>
              <button
                onClick={() => setActiveTab('report')}
                className={`px-4 py-1 text-sm border-x-2 border-t-2 rounded-sm ${activeTab === 'report'
                    ? `${isDarkMode ? 'text-white border-[#FF6600]' : 'text-[#FF6600] border-[#FF6600]'}`
                    : 'border-transparent dark:text-white'
                  }`}
              >
                Report Panel
              </button>
            </div>
          </div>

          {renderContent()}

        </main>
      </div>

      {/* Footer */}
      <footer className={`py-3 mt-8 ${isDarkMode ? 'bg-gray-800' : 'bg-gray-100'}`}>
        <div className="max-w-7xl mx-auto px-4 flex justify-end space-x-4 text-xs">
          <a href="#" className={`hover:text-[#FF6600] ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>Help Desk</a>
          <span className={isDarkMode ? 'text-gray-600' : 'text-gray-400'}>|</span>
          <a href="#" className={`hover:text-[#FF6600] ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>Reset Password</a>
          <span className={isDarkMode ? 'text-gray-600' : 'text-gray-400'}>|</span>
          <a href="#" className={`hover:text-[#FF6600] ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>Logout</a>
        </div>
      </footer>
    </div>
  )
}

export default Dashboard