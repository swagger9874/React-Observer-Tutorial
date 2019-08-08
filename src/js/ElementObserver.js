class ElementObserver{
    constructor(elementId){
        this.element = document.getElementById(elementId)
        console.log(elementId)
    }

    update(model){
        this.element= model.state.number;
        //this.element.style = model.color;
    }
}

export default ElementObserver