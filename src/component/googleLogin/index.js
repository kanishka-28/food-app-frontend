import { GoogleLogin } from 'react-google-login';
import { useHistory } from "react-router"
import { googleLogin, userLogin } from '../../services/api';
import { useState, useContext } from "react"
import { SignupContext } from '../../context/signup';
function LoginGoogle() {

    const {loggedIn, setloggedIn } = useContext(SignupContext);

    const history = useHistory();

    const ResponseSuccessGoogle = async (response) => {
        console.log(response);
        const password = response.profileObj.googleId
        const email = response.profileObj.email
        const userName = response.profileObj.name
        console.log(email);
        Promise.resolve(googleLogin({ userName : userName, email: email , password: password , status: "user"})).then(res => {
            localStorage.setItem("token",res.data.token)
            localStorage.setItem("googlePhoto", response.profileObj.imageUrl);
            localStorage.setItem("user", JSON.stringify(res.data.details))
            setloggedIn(true)
            history.push("/");
            window.location.reload();
        }).catch((e) => {
            console.log(e.response);
            setInterval(() => {
               
              }, 5000);
        })
    }
    return (
        <>
            <div className="my-3  flex">
                <div className="m-auto rounded-lg">
                    <GoogleLogin
                        clientId="430560948108-l48c3dssgupp977dti4au6g5vc3dsfp6.apps.googleusercontent.com"
                        buttonText="Login with google"
                        onSuccess={ResponseSuccessGoogle}
                        cookiePolicy={'single_host_origin'}
                    />
                </div>
            </div>
        </>
    )
}

export default LoginGoogle;