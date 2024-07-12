import {ToastContainer,toast} from "react-toastify"
import 'react-toastify/dist/ReactToastify.css';

function Notification() {
    const notify = () => {
        toast('First notification')
    }

    return (
        <div className="container">
        <button onClick={() => notify()}>Send notification</button>
        <ToastContainer />
        </div>
    )
}

export {Notification}