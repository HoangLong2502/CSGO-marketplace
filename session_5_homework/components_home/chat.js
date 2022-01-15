class Chat {
    $container;
    $topChat;
    $inforChat;
    $addChat;
    $detailChat;

    $listChat;

    $underChat;
    $inputChat;
    $btnSendChat;

    constructor(){
        this.$container = document.createElement('div');
        this.$container.classList.add('chat');

        this.$topChat = document.createElement('div');
        this.$topChat.classList.add('chat_top');
        this.$inforChat = document.createElement('div');
        this.$inforChat.classList.add('chat_infor');
        this.$inforChat.innerHTML = 'Team Rust B';
        this.$addChat = document.createElement('button');
        this.$addChat.classList.add('chat_add');
        this.$addChat.classList.add('uil-plus');
        this.$detailChat = document.createElement('button');
        this.$detailChat.classList.add('chat_detail');
        this.$detailChat.classList.add('uil-angle-right');

        this.$listChat = document.createElement('div');
        this.$listChat.classList.add('chat_list');
        
        this.$underChat = document.createElement('div');
        this.$underChat.classList.add('chat_under');
        this.$inputChat = document.createElement('input');
        this.$inputChat.classList.add('chat_input');
        this.$inputChat.placeholder = 'Type your message';
        this.$btnSendChat = document.createElement('button');
        this.$btnSendChat.classList.add('chat_btn');
        this.$btnSendChat.classList.add('uil-arrow-up');
    }

    render(){
        this.$topChat.appendChild(this.$inforChat);
        this.$topChat.appendChild(this.$detailChat);
        this.$topChat.appendChild(this.$addChat);
        this.$underChat.appendChild(this.$inputChat);
        this.$underChat.appendChild(this.$btnSendChat);
        this.$container.appendChild(this.$topChat);
        this.$container.appendChild(this.$listChat);
        this.$container.appendChild(this.$underChat);
        return this.$container;
    }
}

export { Chat };