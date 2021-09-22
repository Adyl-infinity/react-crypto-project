import React, {useState} from 'react';
import logo from "./images/logo.png"

const Login = () => {
    const adminUser = {
        email: "admin",
        password: "admin"
    }

    const [user, setUser] = useState({name: "", email:""})
    const [error, setError] = useState("")

    const Login = details => {
        console.log(details)

        if (details.email == adminUser.email && details.password == adminUser.password){
            console.log("Logged in")
            setUser({
                name: details.name,
                email: details.email
            })
        } else {
            console.log("Details do not match!")
            setError("Details do not match!")
        }
    }

    const Logout = () => {
        setUser({name: "", email: ""})
    }

    const [details, setDetails] = useState({name: "", email: "", password: ""})
    const submitHandler = e => {
        e.preventDefault()

        Login(details)
    }

    return (
        <div className="login">
            {/*{(user.email != "") ? (*/}
            {/*    <div className="welcome">*/}
            {/*        <h2>Welcome, <span>{user.name}</span></h2>*/}
            {/*        <button onClick={Logout}>Logout</button>*/}
            {/*    </div>*/}
            {/*) : (*/}
            {/*    <LoginForm Login={Login} error={error}/>*/}
            {/*)}*/}
                <div className="logo">
                    <img src={logo} alt="" className="logo__img"/>
                </div>

                <div>
                    <form className="form">
                        <p className="input__description">Логин</p>
                        <input name="email" type="text" placeholder="Логин" className="input__style"/>
                        <p className="input__description">Пароль</p>
                        <input name="password" type="password" placeholder="Пароль" className="input__style"/>
                        <br/>
                        <input type="checkbox"/><span className="input__text">Запомнить пароль</span><br/><br/>
                        <button type="submit" className="btn">Войти</button>
                        <p className="prompt">Забыли пароль?</p>
                    </form>
                </div>
        </div>
    );
};

export default Login;