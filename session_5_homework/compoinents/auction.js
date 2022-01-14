class Auction{
    $container;

    $inforAuction;
    $imgAuction;
    $boxInforAuction;
    $valueAuction;
    $playerAuction;

    $betAuction;
    $priceStartAuction;
    $priceAuction;
    $multiplier;
    $btnAuction;

    constructor(imgAuction, valueAuction, playerAuction, priceStartAuction, priceAuction ){
        this.$container = document.createElement('div');
        this.$container.classList.add('auction')
        this.$inforAuction = document.createElement('div');
        this.$inforAuction.classList.add('auction_infor');
        this.$inforAuction.style.backgroundImage = 'url('+ imgAuction +')';
        this.$boxInforAuction = document.createElement('div');
        this.$boxInforAuction.classList.add('auction_box_infor')
        this.$valueAuction = document.createElement('div');
        this.$valueAuction.classList.add('uil-layers');
        this.$valueAuction.innerHTML = valueAuction;
        this.$playerAuction = document.createElement('div');
        this.$playerAuction.classList.add('uil-user');
        this.$playerAuction.innerHTML = playerAuction;

        this.$betAuction = document.createElement('div');
        this.$betAuction.classList.add('auction_bet');
        this.$priceStartAuction = document.createElement('div');
        this.$priceStartAuction.innerHTML = priceStartAuction;
        this.$priceAuction = document.createElement('div');
        this.$priceAuction.innerHTML = priceAuction;
        this.$multiplier = document.createElement('div');
        this.$multiplier.innerHTML = 'x1.2';
        this.$btnAuction = document.createElement('button');
        this.$btnAuction.innerHTML = 'Start';
    }

    render(){
        this.$boxInforAuction.appendChild(this.$valueAuction);
        this.$boxInforAuction.appendChild(this.$playerAuction);

        this.$inforAuction.appendChild(this.$boxInforAuction);
        
        this.$betAuction.appendChild(this.$priceAuction);
        this.$betAuction.appendChild(this.$priceStartAuction);
        this.$betAuction.appendChild(this.$multiplier);
        this.$betAuction.appendChild(this.$btnAuction);

        this.$container.appendChild(this.$inforAuction);
        this.$container.appendChild(this.$betAuction);

        return this.$container;
    }

}

export { Auction };