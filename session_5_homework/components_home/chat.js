import { SideBar } from "./chat_sideBar.js";
import { MessageArea } from './messageArea.js';
import { InfoPanel } from './inforPanel.js';

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

    activeChat;

    constructor(){
        this.$container = document.createElement('div');
        this.$container.classList.add('chat');

        this.$topChat = new SideBar(this.setActiveChat);
        this.activeChat = null;

        this.$listChat = document.createElement('div');
        this.$listChat.classList.add('chat_list');
        this.$messageArea = new MessageArea();
        this.$infoPanel = new InfoPanel();
        
        this.$underChat = document.createElement('div');
        this.$underChat.classList.add('chat_under');
        this.$inputChat = document.createElement('input');
        this.$inputChat.classList.add('chat_input');
        this.$inputChat.placeholder = 'Type your message';
        this.$btnSendChat = document.createElement('button');
    };

    setActiveChat = (conversation) => {
        console.log(conversation);
        this.activeChat = conversation;
        this.$topChat.setChat(this.activeChat);
        this.$messageArea.setChat(this.activeChat);
    };


    render(){
        this.$underChat.appendChild(this.$inputChat);
        this.$underChat.appendChild(this.$btnSendChat);

        const chatArea = document.createElement('div');
        chatArea.classList.add('flex-1', 'flex', 'flex-col');

        const messageAreaContainer = document.createElement('div');
        messageAreaContainer.classList.add('flex', 'flex-1');
        messageAreaContainer.appendChild(this.$messageArea.render());
        messageAreaContainer.appendChild(this.$infoPanel.render());
        chatArea.appendChild(messageAreaContainer);
        this.$listChat.appendChild(chatArea);

        this.$container.appendChild(this.$topChat.render());
        this.$container.appendChild(this.$listChat);
        return this.$container;
    }
}

export { Chat };