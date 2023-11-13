import {GoogleLogin} from 'react-google-login';
import { useHistory } from 'react-router-dom';

const clientId="333288399917-3a10ppd508cr3oq1n2s4j88m1ijbl0np.apps.googleusercontent.com";

const onFailure= (res)=>{
    console.log("Login Failed! res: ",res);
}
function Login({setEmail}){
    
  const history = useHistory();

    const onSuccess= (res)=>{
        console.log("Login Success Current User: ",res.profileObj);
        setEmail(res.profileObj.email)
        history.push('/invoices');;
    }

    return(
        <div id='signInButton' style={{position:'absolute',top:'45vh',left:'45vw'}}>
        <GoogleLogin
    clientId={clientId}
    buttonText="Login with Google"
    onSuccess={onSuccess}
    onFailure={onFailure}
    cookiePolicy={'single_host_origin'}
    isSignedIn={true}
  />
    </div>
    )
}
export default Login;