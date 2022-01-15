import { ListMatch } from "./schedule_listMatch.js";
import { Team } from "./schedule_team.js";

const team1 = new Team("./img/NaviLogo.png", 'Navi Team');
const team2 = new Team("./img/VitalityTeam.png", 'Vitality Team')

const match1 = new ListMatch('Navi Team', "./img/NaviLogo.png", './img/image 9.png', '09 Feb 17:30', 'Vitality Team', "./img/VitalityTeam.png");
const match2 = new ListMatch('Navi Team', "./img/NaviLogo.png", './img/image 9.png', '09 Feb 17:30', 'Vitality Team', "./img/VitalityTeam.png")
const match3 = new ListMatch('Navi Team', "./img/NaviLogo.png", './img/image 9.png', '09 Feb 17:30', 'Vitality Team', "./img/VitalityTeam.png")

class Schedule{
    $container;

    $bigMatch;
    $team1;
    $center;
    $timeMatch;
    $logoChalenger;
    $imgVS;
    $team2;

    $listMatch;

    constructor(){
        this.$container = document.createElement('div');
        this.$container.classList.add('schedule')

        this.$bigMatch =  document.createElement('div');
        this.$bigMatch.classList.add('schedule_bigMatch');
        this.$bigMatch.style.backgroundImage = 'url(./img/background_schedule.png)';
        this.$team1 = team1;
        this.$center = document.createElement('div');
        this.$center.classList.add('schedule_center');
        this.$timeMatch = document.createElement('p');
        this.$timeMatch.innerHTML = '09 Feb 17:30';
        this.$logoChalenger = document.createElement('img');
        this.$logoChalenger.src = './img/image 9.png';
        this.$imgVS = document.createElement('img');
        this.$imgVS.src = './img/imgVS.png';
        this.$imgVS.style.width = '40%'
        this.$team2 = team2;
    }

    render(){
        this.$center.appendChild(this.$timeMatch);
        this.$center.appendChild(this.$logoChalenger);
        this.$center.appendChild(this.$imgVS);

        this.$bigMatch.appendChild(this.$team1.render());
        this.$bigMatch.appendChild(this.$center);
        this.$bigMatch.appendChild(this.$team2.render());

        this.$container.appendChild(this.$bigMatch);
        this.$container.appendChild(match1.render());
        this.$container.appendChild(match2.render());
        this.$container.appendChild(match3.render());
        return this.$container;
    }
}

export { Schedule }