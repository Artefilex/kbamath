import {AiOutlineDelete} from "react-icons/ai"
import PropTypes from "prop-types"
import { useCallback } from "react";
export default function DeleteButton({onSuccess , id}){
    const deleteHandle = useCallback(async () => {
        // await fetch(
        //   `${process.env.REACT_APP_HOST_URL}/admin/panel/portfoly/delete/${id}`,
        //   {
        //     method: "POST",
        //     headers: { "Content-Type": "application/Json" },
        //     body: JSON.stringify({ id: id }),
        //   }
        // );
        onSuccess();
      }, [ onSuccess]);

    return (
        <button type="button" onClick={deleteHandle}  className="">
         <AiOutlineDelete/>
        </button>
    )
} 


DeleteButton.propTypes = {
    onSuccess: PropTypes.node.isRequired,
    id: PropTypes.number.isRequired
}