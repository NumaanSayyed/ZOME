import Collection from './Collection';
import Fsleeve from '../JSON/Fsleeve.json';
function Full() {
    return (
        <>
            <Collection products={Fsleeve} />
        </>
    );
}

export default Full;
