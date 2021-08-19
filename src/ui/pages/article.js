import { ConnectedArticleDisplay } from "../components/article";
import { useParams } from "react-router";


export const Article = ({  }) => {
    //Get the id from params
    const { id } = useParams();

    return (
        <>
            <ConnectedArticleDisplay articleId={id}/>
        </>
    )
};