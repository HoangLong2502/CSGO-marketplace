import { setScreen } from "../app.js";
import { SignUp } from "./signup.js";
import { Input } from "./input.js"
import { homePage } from "../home_page.js";

class Login{
    $container;
    $title;

    $formLogin;
    $inputEmail;
    $inputPassword;

    $btnSubmit;
    $btnMoveToSignUp;

    constructor(){
        this.$container = document.createElement('div');
        this.$container.classList.add('Login');

        this.$title = document.createElement('h1');
        this.$title.innerHTML = 'Login your Account';

        this.$formLogin= document.createElement('form');
        this.$formLogin.addEventListener('submit', this.Submit);

        this.$inputEmail = new Input('email', 'Email Address', 'email');
        this.$inputPassword = new Input('password', 'Password', 'password');

        this.$btnSubmit = document.createElement('button');
        this.$btnSubmit.classList.add('login_btn');
        this.$btnSubmit.type = 'submit';
        this.$btnSubmit.innerHTML = 'Login';

        this.$btnMoveToSignUp = document.createElement('button');
        this.$btnMoveToSignUp.innerHTML = 'Move To SignUp';
        this.$btnMoveToSignUp.addEventListener('click', this.moveToSignUp);
    }

    moveToSignUp = () =>{
        const signup = new SignUp();
        setScreen(signup);
    }

    Submit = (evt) =>{
        evt.preventDefault();
        const email = this.$inputEmail.getInputValue();
        const password = this.$inputPassword.getInputValue();

        firebase.auth().signInWithEmailAndPassword(email, password)
        .then((userInfo) =>{
            console.log(userInfo);
            const homepage = new homePage();
            setScreen(homepage);
        })
        .catch((err) =>{
            console.log(err)
        })
    }

    render(){
        this.$formLogin.appendChild(this.$inputEmail.render());
        this.$formLogin.appendChild(this.$inputPassword.render());
        this.$formLogin.appendChild(this.$btnSubmit);

        this.$container.appendChild(this.$title);
        this.$container.appendChild(this.$formLogin);
        this.$container.appendChild(this.$btnMoveToSignUp);
        return this.$container;
    }
}

export { Login }