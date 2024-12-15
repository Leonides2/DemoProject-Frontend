import { useEffect } from "react";
import * as signalR from "@microsoft/signalr"
import useGetUsers from "../../api/hooks/user/getUsersHook";
import { useGlobalSettings } from "../../hooks/useGlobalSettingsHook";
import "./ScoreList.css"

const ScoreList = () =>{

    const { isDarkMode } = useGlobalSettings()
    const { data: Users,  refetch: refetch} = useGetUsers()
    
    //if (userError || !Users) return <></>
  

    useEffect(() => {
    
        const connection = new signalR .HubConnectionBuilder()
          .withUrl((import.meta.env.VITE_API_URL + '/SignalR').replace('/api',''))
          .configureLogging(signalR.LogLevel.Information)
          .build();
    
        connection.on('User Created', (name: string, score: string) => {
            refetch()
          console.log(`Username: ${name}, User Score: ${score}`);
        });
    
        connection
          .start()
          .then(() => console.log('SignalR connected'))
          .catch((err) => console.error('Error while starting connection: ' + err));
    
        return () => {
          connection.stop();
        };
      }, []);
    

    return(
    <>
        <div className={`user-score-list ${isDarkMode ? '' : 'light'}`}>
        <div className="score-item">
        <p> Username</p> <p> Score</p>
        </div>
        
            {
              Users?.map(
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