import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

import PropTypes from "prop-types"

function QuillTextArea({onChange,value}) {
    const modules = {
        toolbar: [
          [{ header: [1, 2, 3, 4, 5, 6, false] }],
          [{ font: [] }],
          [{ size: [] }],
          ["bold", "italic", "underline", "strike", "blockqoute"],
          [{ list: "ordered" }, { list: "bullet" }],
          [{ indent: "-1" }, { indent: "+1" }],
          ["link"],
        ],
      };

  return   (  
    <div className="flex w-[95%] flex-col items-center justify-center relative mb-10 mobile:mb-4">
    <ReactQuill
    theme="snow"
    onChange={onChange}  
    modules={modules}
    value={value}
    className={
      "w-[95%] bg-transparent rounded-sm h-[20rem] mb-10"
    }
  /> 
   </div>
  )

}
QuillTextArea.propTypes = {
  onChange: PropTypes.func,
  value: PropTypes.any,
}

export default QuillTextArea;
