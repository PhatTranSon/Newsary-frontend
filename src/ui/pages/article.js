import { ConnectedArticleDisplay } from "../components/article";
import { useParams } from "react-router";
import { ConnectedTextMenu } from "../components/text-menu";
import { WordList } from "../components/word-list";


export const Article = () => {
    //Get the id from params
    const { id } = useParams();

    return (
        <>  
            <ConnectedTextMenu />
            <WordList />
            <ConnectedArticleDisplay articleId={id}/>
        </>
    )
};