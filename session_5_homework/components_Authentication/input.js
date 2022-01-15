class Input{
    $container;
    $label;
    $input;
    $errorMsg;

    constructor(type, label, name){
        this.$container = document.createElement('div');
        this.$container.classList.add('input');

        this.$label = document.createElement('label');

        this.$input = document.createElement('input');
        this.$input.type = type;
        this.$input.name = name;
        this.$input.placeholder = label;

        this.$errorMsg = document.createElement('div');
        this.$errorMsg.classList.add('error_msg');
    }

    // Lấy giá trị trong thẻ input:
    getInputValue(){
        return this.$input.value;
    }

    // Set lại giá trị của thẻ input khi submit:
    setInputValue(newValue) {
        this.$input.value = newValue;
    }

    // tạo function thông báo lỗi khi đăng kí:
    setError(messsage){
        if(messsage){
            this.$errorMsg.innerHTML = messsage;
            this.$errorMsg.classList.add('has_error');
        }
        else {
            this.$errorMsg.innerHTML = '';
            this.$errorMsg.classList.remove('has_error');
        }
    }

    render(){
        this.$label.appendChild(this.$input);
        this.$container.appendChild(this.$label);
        this.$container.appendChild(this.$errorMsg);
        return this.$container;
    }
}

export { Input };