import { ChatItem } from "./chat_item.js";
import { CreateChatModal } from "./createChatModal.js";

class SideBar {
    $container;
    $btnchatList;
    $chatList;
    $btnCreateChat;
    $createChatModal;
    $listChatItem;

    setActiveChat

    constructor(setActiveChat){
        this.$container = document.createElement('div');
        this.$container.classList.add('chat_top');

        this.$btnchatList = document.createElement('button');
        this.$btnchatList.classList.add('chat_detail');
        this.$btnchatList.classList.add('uil-angle-right');

        this.$btnCreateChat = document.createElement('button');
        this.$btnCreateChat.classList.add('chat_add');
        this.$btnCreateChat.classList.add('uil-plus');
        this.$btnCreateChat.addEventListener('click', this.createChat);

        this.$createChatModal = new CreateChatModal();

        this.$chatList = document.createElement('div');
        this.$chatList.innerHTML = 'Conversation List';

        this.$listChatItem = [];
        this.setActiveChat = setActiveChat;

        db.collection('conversation').onSnapshot(this.chatListener);
    }

    createChat = () =>{
        this.$createChatModal.setVisible(true);
    }

    chatListener = (snapshot) => {
        snapshot.docChanges().forEach((change) => {
            console.log(change.doc.data());
            const conversation = change.doc.data();
            const id = change.doc.id;
            const $chatItem = new ChatItem(
                id,
                conversation.name,
                conversation.users.length,
                this.setActiveChat
            );

            this.$listChatItem.push($chatItem);
            this.$chatList.appendChild($chatItem.render());
        });
    };

    setChat = (conversation) =>{
        this.$listChatItem.forEach(item => {
            if (item.id === conversation.id) {
                item.setActive(true);
            }
            else {
                item.setActive(false);
            }
        });
    };

    render(){
        this.$container.appendChild(this.$chatList);
        this.$container.appendChild(this.$btnchatList);
        this.$container.appendChild(this.$btnCreateChat);
        this.$container.appendChild(this.$createChatModal.render());
        return this.$container
    }

}

export { SideBar };