
import useGetUsers from "../../api/hooks/user/getUsersHook";
import { useGlobalSettings } from "../../hooks/useGlobalSettingsHook";
import "./ScoreList.css"
import LoadingComponent from "../LoadingComponent/LoadingComponent";
import useSignalR from "../../api/hooks/signalR/useSignalR";

const ScoreList = () =>{

    const { isDarkMode } = useGlobalSettings()
    const { data: Users, isLoading: usersLoading,  refetch: refetch} = useGetUsers()

    useSignalR({
      url: (import.meta.env.VITE_API_URL + "/SignalR").replace("/api", ""),
      eventHandlers: {
          "User Created": (name: string, score: string) => {
              refetch();
              console.log(`Username: ${name}, User Score: ${score}`);
          },
      },
    });

    return(
    <>
        <div className={`user-score-list ${isDarkMode ? '' : 'light'}`}>
        <div className="score-item">
        <p> Username</p> <p> Score</p>
        </div>


            {
              usersLoading ? 
              <>
                <LoadingComponent/>
              </> 
              : Users?.map(
                item => {
                  return <div className="score-item" key={item.id}>
                    <p>{item.username}  </p>
                    <p>{item.score}</p>
                    
                  </div>
                }
              )
            }
          </div>
    </>
    )
}
export default ScoreList