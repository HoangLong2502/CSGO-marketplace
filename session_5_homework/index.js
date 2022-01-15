import { setScreen } from "./app.js"
import { Login } from "./components_Authentication/login.js";
import { homePage } from "./home_page.js"

firebase.auth().onAuthStateChanged((user) =>{
    if(user){
        const homepage = new homePage();
        setScreen(homepage);
    }
    else {
        const login = new Login();
        setScreen(login);
    }
});