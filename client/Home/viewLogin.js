import Data from "../Data/data.js";
import Helper from "../helpers.js";

export default class Login{

    constructor(){
        this.loginHtml();
        this.signInCancel();
    }

    loginHtml = () => {
        let main = document.querySelector('main');

        main.innerHTML = '';
        
        main.innerHTML = `<div class="login-item">
                            <label for="usernameField">Username</label>
                            <input id="usernameField" type="text">
                            <label for="">Password</label>
                            <input id="passwordField" type="password">
                            <button id="btnSignIn">Sign In</button>
                            <button id="btnCancel">Cancel</button>
                          </div>`;
    }

    signInCancel = () => {
        let signIn = document.getElementById('btnSignIn');
        let cancel = document.getElementById('btnCancel');
        let username = document.getElementById('usernameField');
        let password = document.getElementById('passwordField');
        cancel.addEventListener('click', ()=> window.location.reload());

        signIn.addEventListener('click', async ()=>{
            let item = {};
            item.username = username.value;
            item.password = password.value;
            let data = new Data();
            let resp = await data.logIn(item);
            if(resp == '[]'){
                alert('Username or Password are incorrect!');
            }else{
               let helper = new Helper();
               helper.loggedInUser(resp);
               username.value = "";
               password.value = "";
               window.location.reload() 
            }
        });
    }

}