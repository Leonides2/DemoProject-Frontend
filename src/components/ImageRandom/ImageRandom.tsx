import { useEffect } from "react"
import useGetRandomImage from "../../api/hooks/ImageRandom/getImageRandom"
import "./ImageRandom.css"
import LoadingComponent from "../LoadingComponent/LoadingComponent"


const ImageRandom = () => {

    const { data: imageURL, isLoading: imageLoading, refetch } = useGetRandomImage({ height: 150, width: 150 })



    useEffect(() => {
        const interval = setInterval(() => {
            refetch();
        }, 5000);

        return () => clearInterval(interval);
    }, [refetch]);


    if (imageLoading) {

        return (
            <>
                <LoadingComponent />
            </>
        )
    }

    return (<>

        <div className="image-container">

            <img alt="randomImage" src={imageURL}>
            </img>

        </div>



    </>)
}

export default ImageRandom