import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

import PropTypes from "prop-types"

function QuillTextArea({onChange}) {
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

  return   (  <ReactQuill
    theme="snow"
    onChange={onChange}  
    modules={modules}
    className={
      "w-[98%] bg-transparent rounded-sm px-4 h-[20rem] mb-10"
    }
  />)

}
QuillTextArea.propTypes = {
  onChange: PropTypes.func
}

export default QuillTextArea;
