import { api } from "../../../config";
import { User } from "../../../models/user/user";

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