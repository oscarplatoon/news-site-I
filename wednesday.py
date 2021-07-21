
class Day:
    pass


class Wednesday(Day):
    state = { } # class level attribute
    
    def __init__(self, task_list, quote_of_the_day, x):
        self.task_list = task_list
        self.quote = quote_of_the_day
        self.state["something"] = x


w1 = Wednesday(["complete News Site I", "eat some cereal"], "Life is a garden - Dig it!!", "something")

w2 = Wednesday(["take a nap"], "Sleep is good", "new thing")

print(w1.state["something"])