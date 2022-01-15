import { Header } from "./components_home/header.js";
import { Body } from "./components_home/body.js";

class homePage{
    $container;
    $header;
    $body;

    constructor(){
        this.$container = document.createElement('div');

        this.$header = new Header();
        this.$body =  new Body();
    }

    render(){
        this.$container.appendChild(this.$header.render());
        this.$container.appendChild(this.$body.render());
        return this.$container;
    }
}

export { homePage };