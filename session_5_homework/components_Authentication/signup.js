import { setScreen } from "../app.js";
import { Input } from "./input.js";
import { Login } from "./login.js";

class SignUp{
    $container;
    $title;

    $formSignUp;
    $inputName;
    $inputEmail;
    $inputPassword;
    $inputConfirmPassword;

    $feedback;
    $btnSubmit;
    $btnMoveToLogin;

    constructor(){
        this.$container = document.createElement('div');
        this.$container.classList.add('SignUp');

        this.$title = document.createElement('h1');
        this.$title.innerHTML = 'Create Account';

        this.$formSignUp= document.createElement('form');
        this.$formSignUp.addEventListener('submit', this.Submit);

        this.$inputName = new Input('text', 'Name', 'name');
        this.$inputEmail = new Input('email', 'Email Address', 'email');
        this.$inputPassword = new Input('password', 'Password', 'password');
        this.$inputConfirmPassword = new Input('password', 'Confirm Password', 'confirmPassword');

        this.$feedback = document.createElement('div');

        this.$btnSubmit = document.createElement('button');
        this.$btnSubmit.classList.add('signup_btn');
        this.$btnSubmit.type = 'submit';
        this.$btnSubmit.innerHTML = 'Sign Up';

        this.$btnMoveToLogin = document.createElement('button');
        this.$btnMoveToLogin.innerHTML = 'Move To LogIn';
        this.$btnMoveToLogin.addEventListener('click', this.moveToLogin);
    }

    // xử lí sự kiện click chuyển về trang Login:
    moveToLogin = () =>{
        const login = new Login();
        setScreen(login);
    }

    //xử lí sự kiện submit form đăng kí:
    Submit = (evt) =>{
        evt.preventDefault();
        const name = this.$inputName.getInputValue();
        const email = this.$inputEmail.getInputValue();
        const password = this.$inputPassword.getInputValue();
        const confirmPassword = this.$inputConfirmPassword.getInputValue();

        this.$inputName.setError(null);
        this.$inputEmail.setError(null);
        this.$inputPassword.setError(null);
        this.$inputConfirmPassword.setError(null);

        if(!name){
            this.$inputName.setError('Please type your Name');
        };
        if(!email){
            this.$inputEmail.setError('Please type your Email');
        }
        if(password.length < 6){
            this.$inputPassword.setError('Password length must be greater or equal than 6!');
        }
        if(confirmPassword != password){
            this.$inputConfirmPassword.setError('Confirm password not matched!')
        }

        // xử lí User đăng kí tài khoản:
        firebase.auth().createUserWithEmailAndPassword(email, password)
        .then(() =>{
            this.$feedback.innerHTML = 'Register Successfully!';
            firebase.auth().currentUser.sendEmailVerification();
            this.$inputName.setInputValue('');
            this.$inputEmail.setInputValue('');
            this.$inputPassword.setInputValue('');
            this.$inputConfirmPassword.setInputValue('');
        })
        .catch((error) =>{
            this.$feedback.innerHTML = error.toString();
            console.log(error);
        });
    } 

    render(){
        this.$formSignUp.appendChild(this.$inputName.render());
        this.$formSignUp.appendChild(this.$inputEmail.render());
        this.$formSignUp.appendChild(this.$inputPassword.render());
        this.$formSignUp.appendChild(this.$inputConfirmPassword.render());
        this.$formSignUp.appendChild(this.$btnSubmit);

        this.$container.appendChild(this.$title);
        this.$container.appendChild(this.$formSignUp);
        this.$container.appendChild(this.$feedback);
        this.$container.appendChild(this.$btnMoveToLogin);
        return this.$container;
    }

}

export { SignUp };