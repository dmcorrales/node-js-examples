class ExtensionHelper{
    constructor(){
        this._validExtension = ['png','jpg','gif','jpeg'];
    }
    validateExtension(name){
        if(this._validExtension.indexOf(name) < 0)
            return false;
    return true;   
    }
}

module.exports = ExtensionHelper;