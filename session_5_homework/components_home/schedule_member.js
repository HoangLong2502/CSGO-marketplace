class Member{
    $container;
    $name;
    $logoNation;

    constructor(name, logoNation){
        this.$container = document.createElement('div');
        this.$container.classList.add('schedule_member')
        this.$name = document.createElement('span');
        this.$name.innerHTML = name;
        this.$logoNation = document.createElement('img');
        this.$logoNation.src = logoNation;
    }

    render(){
        this.$container.appendChild(this.$name);
        this.$container.appendChild(this.$logoNation);
        return this.$container;
    }
}

export { Member };