import {Link} from "react-router-dom";

const Home = () => {
    return <div>
        <h1>Home Page</h1>
        <Link to={"/questions"}>
            <button>questions</button>
        </Link>
    </div>
}


export default Home;
