const Input = ({ type = "text", placeholder, className, onChange, value }) => {
    return (
      <input
        type={type}
        placeholder={placeholder}
        className={`input input-bordered w-full ${className}`}
        onChange={onChange}
        value={value}
      />
    );
  };
  
  export default Input; // ✅ Exporting Default
  