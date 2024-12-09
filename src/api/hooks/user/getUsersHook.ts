import { useQuery} from "react-query";
import { User } from "../../models/user/user";
import { getAllUsers } from "../../modules/users/services/userService";


const useGetUsers = () => {
    return useQuery<User[]>({
        queryKey: ["users"], 
        queryFn: getAllUsers,
        staleTime: Infinity
    })
}


export default useGetUsers;