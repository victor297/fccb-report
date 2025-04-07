import { useSelector, useDispatch } from "react-redux";
import { motion } from "framer-motion";
import logo from "@/assets/logo.png";
import { FiLogOut, FiMoon, FiSun } from "react-icons/fi";
import { toggleDarkMode } from "../../redux/features/darkModeSlice";
import { useEffect } from "react";
import { checkExpiration } from "../../redux/features/auth/authSlice";

const NavbarNew = () => {
  const dispatch = useDispatch();
  const isDarkMode = useSelector((state) => state.darkMode.isDarkMode); // Get dark mode state
  const { userInfo } = useSelector((state) => state.auth);
  
    useEffect(() => {
      dispatch(checkExpiration()); 
    });
console.log(userInfo,"userInfo")
  return (
    <header
      className={`${
        isDarkMode ? "bg-gray-800" : "bg-white bg-gradient-to-t from-sky-300 to-sky-100"
      } border-b border-gray-200 dark:border-gray-700 p-3`}
    >
      <div className="max-w-full px-4 py-2">
        <div className="flex justify-between items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center space-x-2"
          >
            <img src={logo} alt="Logo" height={60} width={320} />
          </motion.div>
          <div className="flex items-center space-x-6">
            <span className={`text-xs ${isDarkMode ? "text-gray-300" : "text-gray-600"}`}>
              Welcome {userInfo?.username}
            </span>
            <button
              onClick={() => dispatch(toggleDarkMode())} // Dispatch Redux action
              className={`p-2 rounded-full ${isDarkMode ? "bg-gray-700 text-gray-300" : "bg-gray-100 text-gray-600"}`}
            >
              {isDarkMode ? <FiSun className="w-4 h-4" /> : <FiMoon className="w-4 h-4" />}
            </button>
            <FiLogOut className={`cursor-pointer w-4 h-4 ${isDarkMode ? "text-gray-300" : "text-gray-600"} hover:text-[#FF6600]`} />
          </div>
        </div>
      </div>
    </header>
  );
};

export default NavbarNew;
