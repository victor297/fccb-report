// Input.js

const Input = ({ label, id, type = "text", placeholder, register, error }) => {
    return (
      <div className="mb-2">
        <label htmlFor={id} className="block text-sm font-medium text-gray-700">
          {label}
        </label>
        <input
          id={id}
          type={type}
          {...register}
          className={`mt-1 block border p-2 w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 ${
            error ? "border-red-500" : ""
          }`}
          placeholder={placeholder}
        />
        {error && <p className="text-sm text-red-500 mt-1">{error}</p>}
      </div>
    );
  };
  
  export default Input;