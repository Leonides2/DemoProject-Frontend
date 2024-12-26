import { useMutation } from "react-query";
import { postUser } from "../../modules/users/services/userService";
import { UserData } from "../../models/user/user";

const usePostUser = (onSuccess: () => void) => {

    return useMutation({
        mutationFn: async (username: string) => {
            let score = localStorage.getItem("score")
            if(!score || isNaN(Number(score))) return

            let data: UserData ={
                username: username,
                score: score,
                email: null,
                password: null
            }
            return postUser({data});
        }, 
        onSuccess: (response) => {
            if (!response) return;    
            onSuccess();
        },
        onError: (error) => {
            console.log(error);
        }
    })
}

export default usePostUser;