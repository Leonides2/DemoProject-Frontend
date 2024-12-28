import axios from "axios";


const ImageApi = axios.create({
    baseURL: "https://random.imagecdn.app/v1",
    headers: {
        "Content-Type" : "text/html"
    }
})


export const getRandomImage = ({width, height}: {width: number, height: number}) => {

    return ImageApi.get<string>(`/image?width=${width}&height=${height}`)
        .then(response => {
            if(response.status = 200){
                return response.data
            }

            throw new Error("Can't get the image. The server response: " + response.data)
        })

}