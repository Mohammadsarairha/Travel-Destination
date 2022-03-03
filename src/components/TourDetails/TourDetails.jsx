import { useParams } from 'react-router-dom'
import Header from "../header/Header";
import Footer from '../footer/Footer';
import ReactReadMoreReadLess from "react-read-more-read-less";
import "./TourDetails.css";
function TourDetails({ data }) {
    const { id } = useParams();
    return (
        <>
            <Header />
            {
                <div>
                    {data.filter(cityId => cityId.id === id).map(cityInfo => (
                        <ReactReadMoreReadLess
                        charLimit={290}
                        readMoreText={"Read more"}
                        readLessText={"Read less"}
                        readMoreClassName="read-more-less--more"
                        readLessClassName="read-more-less--less"
                      >
                        {cityInfo.info}
                      </ReactReadMoreReadLess>
                        
                    ))}
                </div>
            }
            <Footer/>
        </>
    )
}

export default TourDetails;