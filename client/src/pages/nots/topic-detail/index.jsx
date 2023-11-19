import { useParams } from "react-router-dom"
import NotsMain from "../nots-component"

export default function TopicDetail (){
    const {topicid} = useParams()


    return (
        <NotsMain>
            {topicid}
        </NotsMain>
    )
}