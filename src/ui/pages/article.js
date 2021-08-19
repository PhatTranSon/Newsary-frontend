import { ConnectedArticleDisplay } from "../components/article";
import { useParams } from "react-router";
import { ConnectedTextMenu } from "../components/text-menu";


export const Article = ({  }) => {
    //Get the id from params
    const { id } = useParams();

    return (
        <>  
            <ConnectedTextMenu />
            <ConnectedArticleDisplay articleId={id}/>
        </>
    )
};