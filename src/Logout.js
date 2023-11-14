import {GoogleLogout} from 'react-google-login';
import { useHistory } from 'react-router-dom';

const clientId="333288399917-3a10ppd508cr3oq1n2s4j88m1ijbl0np.apps.googleusercontent.com";

function Logout({email,setEmail}){
    const history = useHistory();

    const onSuccess= (res)=>{
        console.log("Logout Success Current User: ",res);
        setEmail(null)
        history.push('/')
    }
    
    return(
        <div id='signInButton' style={{position:'absolute',top:'45vh',left:'45vw'}}>
        <GoogleLogout
    clientId={clientId}
    buttonText="Logout"
    onLogoutSuccess={onSuccess}
  />
    </div>
    )
}
export default Logout;