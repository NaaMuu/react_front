import Write_Button from "../../component/Button/Write_Button";
import { useAuth } from '../../context/AuthContext';

const Home = () => {
    const { isLogIn } = useAuth();

    return (
        <div>
            {isLogIn && <Write_Button />}
        </div>
    );
}

export default Home;
