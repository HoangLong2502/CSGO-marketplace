class ChatItem {
    id;
    name;
    numberUser;

    $container;
    $Name;
    $NumberUser;

    onSelectConversation;

    constructor(id, name, numberUser, onSelectConversation){
        this.id = id;
        this.name = name;
        this.numberUser = numberUser;
        this.onSelectConversation = onSelectConversation;

        this.$container = document.createElement('div');
        this.$container.classList.add('chat_item');
        this.$container.addEventListener('click', this.handleClick);

        this.$Name = document.createElement('span');
        this.$Name.innerHTML = this.name;

        this.$NumberUser = document.createElement('span');
        this.$NumberUser.innerHTML = '(' + this.numberUser + ')';
    }

    handleClick = () => {
        this.onSelectConversation({
            id: this.id,
            name: this.name,
        })
    }

    setActive = (active) =>{
        if(active){
            this.$container.classList.add('active');
        }
        else {
            this.$container.classList.remove('active');
        }
    }

    render(){
        this.$container.appendChild(this.$Name);
        this.$container.appendChild(this.$NumberUser);
        return this.$container;
    }
}

export { ChatItem };