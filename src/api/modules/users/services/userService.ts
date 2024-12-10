import { api } from "../../../config";
import { User, UserData } from "../../../models/user/user";

export const getAllUsers = () =>{

    return api.get<Array<User>>("/User").then(
        response => {
            if (response.status === 200){
                return response.data
            }

            throw new Error("Can't get the users. The server response: " + response.data)
        }
    )
}

export const postUser = ({data}:{data: UserData}) =>{
    return api.post("/User",data).then(
        response => {
            if (response.status === 200){
                return response.data
            }

            throw new Error("Can't get the users. The server response: " + response.data)
        }
    )
}