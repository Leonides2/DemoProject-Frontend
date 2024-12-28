
import { useQuery } from "react-query"
import { getRandomImage } from "../../modules/ImageRandom/ImageRandomService"


const useGetRandomImage = ({width, height}: {width: number, height: number}) => {
    return useQuery<string>({
        queryKey: ["randomImage", {width, height}], 
        queryFn: () => getRandomImage(
            { 
                height: height,
                width: width
            }
        ),
        retry: true,
        retryDelay: 100,
        placeholderData: ""
    })
}

export default useGetRandomImage