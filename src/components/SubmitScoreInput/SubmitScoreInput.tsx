
import "./SubmitScoreInput.css"
import usePostUser from "../../api/hooks/user/postUserHook"
import { SubmitHandler, useForm } from "react-hook-form"
import Modal from "../Modal/Modal"

const SubmitScoreInput = () =>{

    const {reset, handleSubmit, register} = useForm<{username: string}>()

    const { mutate: postUser} = usePostUser(reset)

    const onSubmit: SubmitHandler<{username: string}> = (data) => {
        postUser(data.username)
    }

    return(
        <>
            <Modal>
                <form className="score-submit-container"
                    onSubmit={handleSubmit(onSubmit)}
                >
                    <h3>
                        Save your data
                    </h3>
                    <label>Username</label>
                            <input type="text"
                            placeholder="Insert a username to save your score"
                            maxLength={32}
                            {...register("username", {
                                required: true
                            })}
                            >
                        
                            </input>
                    <button type="submit">
                        Send
                    </button>
                </form>
            </Modal>
        </>
    )
}

export default SubmitScoreInput