import { Member } from "./schedule_member.js";

const member1 = new Member('Boombl4', './img/LogoNation.png');
const member2 = new Member('simple', './img/LogoNation.png')
const member3 = new Member('Electronic', './img/LogoNation.png')
const member4 = new Member('Perfector', './img/LogoNation.png')
const member5 = new Member('b1t', './img/LogoNation.png')

class Team{
    $container;
    $imgLogo;
    $nameTeam;
    $list_member;

    constructor(img, nameteam, player1, player2, player3, player4, player5){
        this.$container = document.createElement('div');
        this.$imgLogo = document.createElement('img');
        this.$imgLogo.src = img;
        this.$nameTeam = document.createElement('p');
        this.$nameTeam.innerHTML = nameteam;
        this.$list_member1 = member1;
        this.$list_member2 = member2;
        this.$list_member3 = member3;
        this.$list_member4 = member4;
        this.$list_member5 = member5;

    }

    render(){
        this.$container.appendChild(this.$imgLogo);
        this.$container.appendChild(this.$nameTeam);
        this.$container.appendChild(this.$list_member1.render());
        this.$container.appendChild(this.$list_member2.render());
        this.$container.appendChild(this.$list_member3.render());
        this.$container.appendChild(this.$list_member4.render());
        this.$container.appendChild(this.$list_member5.render());
    
        return this.$container;
    }
}

export { Team };