import { Link } from "react-router-dom";
import {
  FaClipboardCheck,
  FaUserShield,
  FaChartBar,
  FaFileInvoiceDollar,
  FaRegHandPaper,
  FaShieldAlt,
  FaUserFriends,
  FaLock,
  FaCog,
  FaCheckCircle,
  FaArrowRight,
} from "react-icons/fa";

const Landing = ()=> {
  const features = [
    {
      title: "Accurate Credit Reporting",
      description:
        "Get precise and reliable information about your credit history.",
      icon: FaClipboardCheck,
      image:
        "https://th.bing.com/th/id/OIF.8qeef0uYAeQdxvdSw9wuyw?w=350&h=134&c=7&r=0&o=5&pid=1.7",
    },
    {
      title: "Credit Score Monitoring",
      description:
        "Keep track of your credit score with real-time updates.",
      icon: FaChartBar,
      image:
        "https://mydebt-plan.co.uk/wp-content/uploads/2023/06/online-credit-score.jpg_s1024x1024wisk20cFyLpx5wJWtIrvhmUdbOn_INajf9bdXvVcd0QpSxul90.jpg",
    },
    {
      title: "Identity Theft Protection",
      description:
        "Safeguard your personal information with robust security measures.",
      icon: FaUserShield,
      image:
        "https://th.bing.com/th/id/OIF.CC9Y608OqNKLNDdh0XvYKg?w=213&h=180&c=7&r=0&o=5&pid=1.70000000000000000000000000000000000",
    },
  ];

  const benefits = [
    { text: "Instant access to credit reports", icon: FaFileInvoiceDollar },
    { text: "Expert advice on credit improvement", icon: FaRegHandPaper },
    { text: "Personalized alerts for credit changes", icon: FaShieldAlt },
    { text: "Secure and private data handling", icon: FaLock },
    { text: "24/7 customer support", icon: FaUserFriends },
    { text: "User-friendly dashboard", icon: FaCog },
  ];

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
        {/* Hero Section */}
        <div className="text-center">
          <div className="flex items-center justify-center gap-2 mb-6">
            <FaCheckCircle className="w-6 h-6 text-orange-600" />
            <span className="text-blue-700 font-medium">
              Welcome to firstcentralcreditBureau
            </span>
          </div>
          <h1 className="text-5xl font-bold text-blue-900 mb-6">
            Secure Your Financial Future with
            <span className="text-orange-600"> Confidence</span>
          </h1>
          <p className="text-xl text-gray-500 max-w-2xl mx-auto mb-8">
            Join our trusted platform to manage your credit score and enhance your financial health.
          </p>
          {/* <div className="flex w-full flex-wrap gap-4 justify-center">
            <Link to="/auth/login">
              <button className="bg-orange-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-orange-700 transition-colors flex items-center gap-2">
                Check My Score
                <FaArrowRight className="w-4 h-4" />
              </button>
            </Link>
            <Link to="/dashboard">
              <button className="bg-blue-100 text-blue-800 px-6 py-3 rounded-lg font-medium hover:bg-blue-200 transition-colors">
                Dashboard
              </button>
            </Link>
            <Link to="/reports/">
              <button className="bg-blue-100 text-blue-800 px-6 py-3 rounded-lg font-medium hover:bg-blue-200 transition-colors">
                Credit Reports
              </button>
            </Link>
            <Link to="/advice/">
              <button className="bg-blue-100 text-blue-800 px-6 py-3 rounded-lg font-medium hover:bg-blue-200 transition-colors">
                Credit Advice
              </button>
            </Link>
            <Link to="/support/">
              <button className="bg-blue-100 text-blue-800 px-6 py-3 rounded-lg font-medium hover:bg-blue-200 transition-colors">
                Support
              </button>
            </Link>
            <Link to="/privacy/">
              <button className="bg-blue-100 text-blue-800 px-6 py-3 rounded-lg font-medium hover:bg-blue-200 transition-colors">
                Privacy Policy
              </button>
            </Link>
          </div> */}
        </div>

        {/* Features Grid */}
        <div className="mt-24 grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow"
            >
              <img
                src={feature.image}
                alt={feature.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <div className="flex items-center gap-2 mb-3">
                  <feature.icon className="w-5 h-5 text-orange-600" />
                  <h3 className="text-xl font-semibold text-blue-800">
                    {feature.title}
                  </h3>
                </div>
                <p className="text-gray-500">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Benefits Section */}
        <div className="mt-24 bg-blue-50 rounded-2xl p-8 md:p-12">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold text-blue-900 mb-4">
              Why Choose firstcentralcreditBureau?
            </h2>
            <p className="text-gray-600">
              Join millions of users who have taken control of their credit health.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="flex items-center gap-3 bg-white p-4 rounded-lg"
              >
                <benefit.icon className="w-5 h-5 text-orange-600" />
                <span className="text-gray-700">{benefit.text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Landing;
