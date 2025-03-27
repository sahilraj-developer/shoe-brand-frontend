const Label = ({ htmlFor, children, className }) => {
    return (
      <label htmlFor={htmlFor} className={`label text-gray-700 ${className}`}>
        {children}
      </label>
    );
  };
  
  export default Label; // ✅ Default export
  