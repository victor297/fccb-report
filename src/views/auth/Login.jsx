// Login.js
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import { jwtDecode } from "jwt-decode";
import authlogo from "@/assets/logo.png";
import Input from "@/components/input/Input";
import { useLoginMutation } from "@/redux/api/usersApiSlice";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setCredentials } from "@/redux/features/auth/authSlice";
import { p } from "framer-motion/client";
import { FaCopy } from "react-icons/fa";
import { useConsumerReportsMutation } from "../../redux/api/consumerApiSlice";

const Login = () => {
  const [ticket, setTicket] = useState(null);
  const [selectedReport, setSelectedReport] = useState("");
  const [formData, setFormData] = useState({
    EnquiryReason: '',
    ConsumerName: '',
    DateOfBirth: '',
    Identification: '',
    Accountno: '',
    ProductID: '',
    BusinessName: '',
    BusinessRegistrationNumber: '',
    AccountNumber: '',
    email:''
  });

  // List of reports with their types
  const reports = [
    { name: "XscoreConsumer", type: "consumer", id: 50 }, 
    { name: "Consumer Full Credit", type: "consumer", id: 45 }, 
    { name: "Consumer Basic Credit", type: "consumer", id: 44 }, 
    { name: "iScore Report", type: "consumer", id: 70 } 
  ];

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [login, { isLoading }] = useLoginMutation();
  const [consumerReport, { isLoading:isReportLoading }] = useConsumerReportsMutation();
console.log(isReportLoading,"isReportLoading")
  const onSubmit = async (data) => {
    try {
      const res = await login(data).unwrap();
      setTicket(res);
      toast.success("token received!");
    } catch (error) {
      toast.error(error.data?.message || "Login failed!");
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleReportChange = (e) => {
    setSelectedReport(e.target.value);
  };
  const handleSubmitReport = async (e) => {
    e.preventDefault();
    
    if (!selectedReport) {
      toast.error("Please select a report type");
      return;
    }
  
    const selectedReportData = reports.find(report => report.name === selectedReport);
    
    try {
      const reportData = {
        ...formData,
        ProductID: selectedReportData.id, // Add the product ID
        DataTicket: ticket[0].DataTicket // Include the ticket from login
      };
  
      const res = await consumerReport(reportData).unwrap();
      toast.success("Report generated successfully!");
      // Handle the report response here
    } catch (error) {
      toast.error(error.data?.message || "Report generation failed!");
    }
  };
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
      AccountNumber: '',
      email:''

    });
    setSelectedReport("");
  };

  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(ticket[0].DataTicket);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  const productData = ticket?.[1];
  
  // Check if selected report is a consumer report
  const isConsumerReport = reports.find(report => report.name === selectedReport)?.type === "consumer";

  return (
    <div className="sm:flex items-center justify-center sm:mt-36">
      <div className="w-full max-w-sm p-8 mx-auto">
        <div className="flex items-center justify-center mb-4">
          <img src={authlogo} alt="Eduworld Logo" className="w-32 h-auto" />
        </div>
        <p className="text-3xl font-bold text-center mb-2">
          Log in to your account
        </p>
        <p className="text-center text-gray-600 mb-6">
          Welcome back! Please enter your details.
        </p>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Input
            label="Username"
            id="username"
            type="username"
            placeholder="Enter your username"
            register={register("username", { required: "Username is required" })}
            error={errors.username?.message}
          />
          <Input
            label="Password"
            id="password"
            type="password"
            placeholder="Enter your password"
            register={register("password", {
              required: "Password is required",
            })}
            error={errors.password?.message}
          />
       
          <button
            type="submit"
            disabled={isLoading}
            className="w-full bg-orange-300 text-white font-medium py-2 rounded-md shadow hover:bg-orange-600"
          >
            {isLoading ? "Logging in..." : "Login"}
          </button>
        </form>
      </div>
     
      {ticket && <div className="p-6 max-w-lg mx-auto">
        <div className="mb-6">
          <div className="flex items-center gap-2 bg-primary p-4 rounded shadow">
            <span className="break-all text-sm text-white flex-1">{ticket[0].DataTicket}</span>
            <button
              onClick={handleCopy}
              className="text-white hover:text-teal-400"
              title="Copy Ticket"
            >
              <FaCopy />
            </button>
          </div>
          {copied && <p className="text-green-600 mt-2 text-sm">Copied!</p>}
        </div>

        <table className="w-full border border-gray-300 rounded shadow">
          <thead className="bg-orange-300">
            <tr>
              <th className="p-3 text-left">Product</th>
              <th className="p-3 text-left">Price (₦)</th>
            </tr>
          </thead>
          <tbody>
            {Object.entries(productData).map(([product, price], index) => (
              <tr key={index} className="border-t">
                <td className="p-3">{product}</td>
                <td className="p-3">{price.toLocaleString()}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>}
     
      <div className="w-full max-w-lg p-8 mx-auto">
        <p className="text-center text-gray-600 mb-6">
          Welcome back! Please enter your details to generate Report
        </p>
        <form onSubmit={handleSubmitReport} className="space-y-6">
                    <div className="flex flex-col gap-3">
            {/* Report Selection Dropdown */}
            <div className='flex gap-4 text-nowrap'>
              <label className={`block text-xs mb-2`}>
                Select Report
              </label>
              <select 
                name="ReportType"
                value={selectedReport}
                onChange={handleReportChange}
                required
                className={`w-full rounded-md border px-3 py-1 text-xs bg-white border-gray-300 text-gray-900 focus:border-[#FF6600]`}
              >
                <option value="">Select a report...</option>
                {reports.map((report, index) => (
                  <option key={index} value={report.name}>{report.name}</option>
                ))}
              </select>
            </div>

            {/* <div className='flex gap-4 flex-nowrap'>
              <label className={`block text-xs text-nowrap mb-2`}>
                Enquiry Reason
              </label>
              <select 
                name="EnquiryReason"
                value={formData.EnquiryReason}
                onChange={handleInputChange}
                required
                className={`w-full rounded-md border px-3 py-1 text-xs bg-white border-gray-300 text-gray-900 focus:border-[#FF6600]`}
              >
                <option value="">Please Select...</option>
                <option value="Application for credit by a borrower">Application for credit by a borrower.</option>
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
            </div> */}

            {/* Conditional rendering based on report type */}
            {selectedReport && (
              isConsumerReport ? (
                <>
                  {/* <div className='flex gap-4'>
                    <label className={`block text-xs text-nowrap mb-2`}>
                      Consumer Name</label>
                    <input 
                      type="text" 
                      name="ConsumerName" 
                      value={formData.ConsumerName} 
                      onChange={handleInputChange} 
                      className={`w-full rounded-md border px-3 py-1 text-xs bg-white border-gray-300 text-gray-900 focus:border-[#FF6600]`} 
                    />
                  </div>

                  <div className='flex gap-4'>
                    <label className={`block text-xs text-nowrap mb-2`}>
                      Birth Date</label>
                    <input 
                      type="text" 
                      name="DateOfBirth" 
                      value={formData.DateOfBirth} 
                      onChange={handleInputChange} 
                      className={`w-full rounded-md border px-3 py-1 text-xs bg-white border-gray-300 text-gray-900 focus:border-[#FF6600]`} 
                    />
                  </div> */}

                  <div className='flex gap-4'>
                    <label className={`block text-xs text-nowrap mb-2`}>
                      Email</label>
                    <input 
                      type="email" 
                      name="email" 
                      value={formData.email} 
                      onChange={handleInputChange} 
                      required
                      className={`w-full rounded-md border px-3 py-1 text-xs bg-white border-gray-300 text-gray-900 focus:border-[#FF6600]`} 
                    />
                  </div>

                  <div className='flex gap-4'>
                    <label className={`block text-xs text-nowrap mb-2`}>
                      Identification</label>
                    <input 
                      type="text" 
                      name="Identification" 
                      required
                      value={formData.Identification} 
                      onChange={handleInputChange} 
                      className={`w-full rounded-md border px-3 py-1 text-xs bg-white border-gray-300 text-gray-900 focus:border-[#FF6600]`} 
                    />
                  </div>

                  {/* <div className='flex gap-4'>
                    <label className={`block text-xs text-nowrap mb-2`}>
                      Account Number</label>
                    <input 
                      type="text" 
                      name="Accountno" 
                      value={formData.Accountno} 
                      onChange={handleInputChange} 
                      className={`w-full rounded-md border px-3 py-1 text-xs bg-white border-gray-300 text-gray-900 focus:border-[#FF6600]`}
                    />
                  </div> */}
                </>
              ) : (
                <>
                  <div className='flex gap-4'>
                    <label className={`block text-xs text-nowrap mb-2`}>
                      Business Name</label>
                    <input 
                      type="text" 
                      name="BusinessName" 
                      value={formData.BusinessName} 
                      onChange={handleInputChange} 
                      className={`w-full rounded-md border px-3 py-1 text-xs bg-white border-gray-300 text-gray-900 focus:border-[#FF6600]`}
                    />
                  </div>

                  <div className='flex gap-4'>
                    <label className={`block text-xs text-nowrap mb-2`}>
                      Business Registration Number</label>
                    <input 
                      type="text" 
                      name="BusinessRegistrationNumber" 
                      value={formData.BusinessRegistrationNumber} 
                      onChange={handleInputChange} 
                      className={`w-full rounded-md border px-3 py-1 text-xs bg-white border-gray-300 text-gray-900 focus:border-[#FF6600]`}
                    />
                  </div>

                  <div className='flex gap-4'>
                    <label className={`block text-xs text-nowrap mb-2`}>
                      Account Number</label>
                    <input 
                      type="text" 
                      name="AccountNumber" 
                      value={formData.AccountNumber} 
                      onChange={handleInputChange} 
                      className={`w-full rounded-md border px-3 py-1 text-xs bg-white border-gray-300 text-gray-900 focus:border-[#FF6600]`}
                    />
                  </div>
                </>
              )
            )}
          </div>

          <div className="flex space-x-4">
          <button
  type="submit"
  disabled={isReportLoading || !ticket}
  className={`bg-[#FF6600] text-white px-4 py-1 rounded-md hover:bg-orange-700 transition-colors text-xs ${
    isReportLoading || !ticket ? 'opacity-50 cursor-not-allowed' : ''
  }`}
>
  {isReportLoading ? "Submitting..." : "Submit"}
</button>
            <button
              type="button"
              onClick={handleClear}
              className={`px-4 py-1 rounded-md transition-colors text-xs bg-gray-200 text-gray-700 hover:bg-gray-300`}
            >
              Clear
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;