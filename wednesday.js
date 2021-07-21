
class Day {
    constructor(quoteOfTheDay) {
        this.state = { }
        this.state.quote = quoteOfTheDay
    }
}

class Thursday extends Day {

}

class Wednesday extends Day {
    static value = { }
    
    state = { 

    } // instance attribute
    
    constructor(taskList, quoteOfTheDay, x) {
        super(quoteOfTheDay)
        
        this.state.taskList = taskList
        Wednesday.value.something = x
    }
}

let w1 = new Wednesday(["complete News Site I", "eat some cereal"], "Life is a garden - Dig it!!", "something")

let w2 = new Wednesday(["take a nap"], "Sleep is good", "new thing")

console.log(Wednesday.value.something)

