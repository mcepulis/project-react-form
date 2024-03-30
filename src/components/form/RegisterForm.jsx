import { useState } from 'react';
import style from './Form.module.css';

export function RegisterForm() {
    const [username, setUsername] = useState('');
    const [usernameErr, setUsernameErr] = useState('');

    const [email, setEmail] = useState('');
    const [emailErr, setEmailErr] = useState('');

    const [password, setPassword] = useState('');
    const [passwordErr, setPasswordErr] = useState('');

    const [repeatPassword, setRepeatPassword] = useState('');
    const [repeatPasswordErr, setRepeatPasswordErr] = useState('');

    function handleUsernameChange(e) {
        setUsername(e.target.value);
    }

    function handleEmailChange(e) {
        setEmail(e.target.value);
    }

    function handlePasswordChange(e) {
        setPassword(e.target.value);
    }

    function handleRepeatPasswordChange(e) {
        setRepeatPassword(e.target.value);
    }

    function isValidUsername(text) {
        if (text.length < 1) {
            return 'Per trumpas';
        }

        if (text.length > 20) {
            return 'Per ilgas';
        }

        return true;
    }

    function isValidEmail(text) {
        if (text.length < 6) {
            return 'Per trumpas';
        }

        if (text.length > 50) {
            return 'Per ilgas';
        }

        if (!text.match(/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/)) {
            return 'blogas email formatas';
        }
    
        return true;

    }

    function isValidPassword(text) {
        // if (text.length < 1) {
        //     return false;
        // }

        if (text.length < 6) {
            return 'Ivesti ne maziau kaip 6 simbolius';
        }
    
        if (text.length > 20) {
            return 'Slaptazodis per ilgas';
        }

        return true;
    }

    function handleFormSubmit(e) {
        e.preventDefault();

        const usernameErrorValue = isValidUsername(username);
        const emailErrorValue = isValidEmail(email);
        const passwordErrorValue = isValidPassword(password);
        const repeatPasswordErrorValue = isValidPassword(repeatPassword);
        

        let isAllFormValid = true;

        if (usernameErrorValue !== true) {
            isAllFormValid = false;
            setUsernameErr(usernameErrorValue);
            console.log("error");    
        } else {
            setUsernameErr('');
            console.log("kitas");    
        }

        if (emailErrorValue !== true) {
            isAllFormValid = false;
            setEmailErr(emailErrorValue);
            console.log("error"); 
        } else {
            setEmailErr('');
            console.log("kitas");  
        }

        if (!isValidPassword(password)) {
            isAllFormValid = false;
            setPasswordErr(passwordErrorValue);
            console.log("error");   
        } else {
            setPasswordErr('');
            console.log("kitas");  
        }

        if (password !== repeatPassword) {
            isAllFormValid = false;
            setRepeatPasswordErr(repeatPasswordErrorValue);
            console.log("error");   
        } else {
            setRepeatPasswordErr('');
            console.log("kitas");  
        }

        if (passwordErrorValue && repeatPasswordErrorValue) {
            isAllFormValid = false;
            setPasswordErr('Ivesti ne maziau kaip 6 simbolius');
            setRepeatPasswordErr('Ivesti ne maziau kaip 6 simbolius');
        }
    
        if (password !== repeatPassword) {
            isAllFormValid = false;
            setPasswordErr('Nesutampa slaptazodziai');
            setRepeatPasswordErr('Nesutampa slaptazodziai');
        }

        if (isAllFormValid) {
            console.log('viskas gerai, siuncia info i serveri');
        }
    }

    return (
        <form onSubmit={handleFormSubmit} className={style.form}>
            <div className={style.formRow}>
                <label className={style.label} htmlFor="">Username</label>
                <input value={username} onChange={handleUsernameChange} className={style.input} type="text" placeholder="Eg. John" />
                {/* {usernameErr.length === 0 ? null : <p className={style.error}>{usernameErr}</p>} */}
                {usernameErr && <p className={style.error}>{usernameErr}</p>}
            </div>
            <div className={style.formRow}>
                <label className={style.label} htmlFor="">Email</label>
                <input value={email} onChange={handleEmailChange} className={style.input} type="email" placeholder="Eg. john@cena.com" />
                {emailErr && <p className={style.error}>{emailErr}</p>}
            </div>
            <div className={style.formRow}>
                <label className={style.label} htmlFor="">Password</label>
                <input value={password} onChange={handlePasswordChange} className={style.input} type="password" placeholder="enter your password" />
                {passwordErr && <p className={style.error}>{passwordErr}</p>}
            </div>
            <div className={style.formRow}>
                <label className={style.label} htmlFor="">Repeat password</label>
                <input value={repeatPassword} onChange={handleRepeatPasswordChange} className={style.input} type="password" placeholder="enter your password" />
                {repeatPasswordErr && <p className={style.error}>{repeatPasswordErr}</p>}
            </div>
            <div className={style.formRow}>
                <button className={style.button} type="submit">Register</button>
            </div>
        </form>
    );
}