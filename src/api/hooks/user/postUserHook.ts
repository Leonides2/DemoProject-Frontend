import { useMutation } from "react-query";
import { postUser } from "../../modules/users/services/userService";

const usePostUser = (onSuccess: () => void) => {

    return useMutation({
        mutationFn: async (username: string) => {
            let score = localStorage.getItem("score")
            if(!score || isNaN(Number(score))) return

            const data = {
                username: username,
                score: score
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