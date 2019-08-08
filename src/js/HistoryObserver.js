class HistoryObserver{
    constructor(){
        this.history = [];
    }

    update(model){
        this.history.unshift(model.state.color[0].toUpperCase())
        
        let msg = "The last used 5 colors were: "
        for(let i=0;i<5;i++){
            if(this.history[i]){
                msg += this.history[i] + " "
            }
        }
        console.log(msg)
    }
}
export default HistoryObserver