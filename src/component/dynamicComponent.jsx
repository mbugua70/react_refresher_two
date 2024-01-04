/* eslint-disable react/prop-types */
const DynamicComponent = ({ children }) => {
  return (
    <>
      <div className="main">
        <p>{children}</p>
      </div>
    </>
  );
};

export default DynamicComponent;
