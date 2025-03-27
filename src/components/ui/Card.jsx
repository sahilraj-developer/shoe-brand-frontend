const Card = ({ children, className }) => {
    return <div className={`card bg-base-100 shadow-xl ${className}`}>{children}</div>;
  };
  
  const CardHeader = ({ title }) => {
    return (
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
      </div>
    );
  };
  
  const CardTitle = ({ children }) => {
    return <h2 className="card-title">{children}</h2>;
  };
  
  const CardDescription = ({ children }) => {
    return <p className="text-gray-500">{children}</p>;
  };
  
  const CardContent = ({ children }) => {
    return <div className="card-body">{children}</div>;
  };
  
  const CardFooter = ({ children }) => {
    return <div className="card-actions justify-end p-4">{children}</div>;
  };
  
  // ✅ Ensure `CardDescription` is exported
  export { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter };
  