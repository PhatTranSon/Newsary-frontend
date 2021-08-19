import { useState } from "react";
import { useParams } from "react-router-dom";
import { isValidWord } from "../../helper/string";
import { useSingleNews } from "../../hooks/news";
import { ArticleDisplay } from "../components/article";
import { Loading } from "../components/loading";
import { TextMenu } from "../components/text-menu";
import { WordList} from "../components/word-list";


export const Article = () => {
    //Hold the state of menu
    const [menuVisible, setMenuVisible] = useState(false);
    const [menuX, setMenuX] = useState(0);
    const [menuY, setMenuY] = useState(0);

    //Hold the state of the word list
    const [words, setWords] = useState([]);
    const [wordListVisible, setWordListVisibility] = useState(false);

    //Get the id of the news
    const { id } = useParams();

    //Get the news
    const { article, error } = useSingleNews(id);

    //Event handlers
    function onTextHighlight(info) {
        //Get the text and coordinates
        const { text, coords } = info;

        //Check if word is valid
        if (isValidWord(text)) {
            showMenuAtPosition(coords.x, coords.y);
            displayWordList(text);
        }
    }

    function showMenuAtPosition(x, y) {
        setMenuVisible(true);
        setMenuX(x);
        setMenuY(y);
    }

    function hideMenu() {
        setMenuVisible(false);
    }

    function displayWordList(word) {

    }

    function onLookUp() {
        setMenuVisible(false);
    }

    return (
        article ?
        <>
            <WordList visible={wordListVisible}/>
            <TextMenu 
                visible={menuVisible}
                x={menuX}
                y={menuY}
                onOutsideCick={hideMenu}
                onLookUpClick={onLookUp}
                />
            <ArticleDisplay article={article} onHighlight={onTextHighlight}/>
        </> :
        <Loading />
    )
};