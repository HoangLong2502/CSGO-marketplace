class ListMatch{
    $container;
    $team2;
    $infor;
    $team2;

    constructor(name1, img1, logoMajor, time, name2, img2){
        this.$container = document.createElement('div');
        this.$container.classList.add('list_match');

        this.$team1 = document.createElement('div');
        this.$team1.classList.add('team');
        this.$team1Name = document.createElement('span');
        this.$team1Name.innerHTML = name1;
        this.$team1img = document.createElement('img');
        this.$team1img.src = img1;

        this.$infor = document.createElement('div');
        this.$infor.classList.add('infor');
        this.$logoMajor = document.createElement('img');
        this.$logoMajor.src = logoMajor;
        this.$time = document.createElement('div');
        this.$time.classList.add('time');
        this.$time.innerHTML = time;
        
        this.$team2 = document.createElement('div');
        this.$team2.classList.add('team');
        this.$team2Name = document.createElement('span');
        this.$team2Name.innerHTML = name2;
        this.$team2img = document.createElement('img');
        this.$team2img.src = img2;
    }

    render(){
        this.$team1.appendChild(this.$team1Name);
        this.$team1.appendChild(this.$team1img);

        this.$infor.appendChild(this.$logoMajor);
        this.$infor.appendChild(this.$time);

        this.$team2.appendChild(this.$team2img);
        this.$team2.appendChild(this.$team2Name);

        this.$container.appendChild(this.$team1);
        this.$container.appendChild(this.$infor);
        this.$container.appendChild(this.$team2);
        return this.$container;
    }
}

export { ListMatch };