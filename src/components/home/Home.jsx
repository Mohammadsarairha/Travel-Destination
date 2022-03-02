
import Header from "../header/Header";
import Tours from "../tours/Tours";
import Footer from "../footer/Footer";

function Home({ data }) {
    return (
        <>
            <Header />
            <Tours data={data} />
            <Footer />
        </>
    )
}

export default Home;