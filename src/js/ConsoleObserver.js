
class ConsoleObserver{
    
    update(model){
        console.log("The number is " + (model.state.number +1 ) + " and the color is " + model.state.color )
    }

}

export default ConsoleObserver