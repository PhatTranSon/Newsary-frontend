import { WordListButton } from "./button";
import { List } from "./list";

export const WordList = ({ visible }) => {
    return (
        <>
            <WordListButton />
            <List visible={visible}/>
        </>
    )
}