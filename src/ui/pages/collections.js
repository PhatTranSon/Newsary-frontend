import { ConnectedCollections } from "../components/collections";
import { ConnectedWelcomeUser } from "../components/user";
import { CardWrapper } from "../components/cardwrapper";

export const Collections = () => {
    return (
        <>
            <CardWrapper>
                <ConnectedWelcomeUser />
            </CardWrapper>

            <>   
                <ConnectedCollections />
            </>
        </>
    );
}
