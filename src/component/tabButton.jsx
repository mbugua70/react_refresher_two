/* eslint-disable react/prop-types */

const TabButton = ({ children, onSet, isSelected }) => {
  return (
    <>
      {/* composition of the props children */}
      {/*React will automatically pass the special prop children to every custom componenent */}
      <button className={isSelected ? "active" : undefined} onClick={onSet}>
        {children}
      </button>
    </>
  );
};

export default TabButton;