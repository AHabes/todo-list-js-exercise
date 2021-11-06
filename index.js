const newTask = function(title, description) {
  return {
    title: title,
    description: description,
    complete: false,
    completeTask: () => {
      this.complete = true;
    },
    logTaskState: () => {
      console.log(`${this.title} has${this.complete ? " " : " not "}been completed`);
    }
  };
};

// DRIVER CODE BELOW
const task1 = newTask("Clean Cat Litter", "Take all the 💩 out of the litter box");
const task2 = newTask("Do Laundry", "😨");
task1.logTaskState(); // Clean Cat Litter has not been completed
task1.completeTask();
task1.logTaskState(); // Clean Cat Litter has been completed

const tasks = [task1, task2];

console.log(tasks);
