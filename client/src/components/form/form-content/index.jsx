import PropTypes from "prop-types";
function FormContent({ children, header }) {
  return (
    <div className="w-full flex items-center justify-center flex-col gap-2 ">
      <h4 className="w-[95%] font-bold capitalize"> {header} </h4>
      {children}
    </div>
  );
}
FormContent.propTypes = {
  children: PropTypes.node.isRequired,
  header: PropTypes.string,
};

export default FormContent;
