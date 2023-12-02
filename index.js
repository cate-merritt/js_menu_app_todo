/* Defines class "Task" with two properties and describe method */

class Task {
    constructor(name, position) {
    this.name = name;
    this.position = position;
    }
// Returns string describing task with name and property
    describe() {
    return `${this.name} priority ${this.position}`;
    }
}

/* Defines class "List" with name property
Adds Task array
Describe method adds tasks and describes list */

class List {
  constructor(name) {
    this.name = name;
    this.tasks = [];
    }

/* Adds task to list
If argument is not task, adds error */

    addTask(task) {
    if (task instanceof Task) {
    this.tasks.push(task);
    } else {
    throw new Error(`You can only add an instance of Task. 
    argument is not a task: ${task}`);
    }
}

/* Defines class "Menu"
Methods used to  create, view & display lists
Lists managed one at a time */

    
    describe() {
    return `${this.name} has ${this.tasks.length} items.`;
    }
    }
class Menu { 
    constructor() {
    this.lists = [];
    this.selectedList = null; 
    }
    
/* Begin application
Shows menu options until user selects exit */

    start() { // entry point to application
    let selection = this.showMainMenuOptions(); 
    while (selection != 0) {
    switch(selection) {
    case '1' :
        this.createList();
        break;
    case '2' :
        this.viewList();
        break;
    case '3' :
        this.deleteList();
        break;
    case '4' :
        this.displayLists();
        break;
    default:
        selection = 0;
    }
    selection = this.showMainMenuOptions();
    }
    alert('Later!');
    }
    
/* Show menu options
Return user selection */

    showMainMenuOptions() {
    return prompt(`
    0) exit
    1) create a new list
    2) view a list
    3) delete a list
    4) display all lists
    `);
    }
    
    showListMenuOptions(listInfo) {
    return prompt(`
    0) back
    1) add a new item
    2) delete an item
    -----------------
    ${listInfo}
    `);
    }

/* Displays string of all lists */

    displayLists() {
    let listString = '';
    for (let i = 0; i < this.lists.length; i++) {
    listString += i + ') ' + this.lists[i].name + '\n';
    }
    alert(listString);
    }

/* Creeats new list - adds list to arry "lists" */

    createList() {
    let name = prompt('Enter name for new list:');
    this.lists.push(new List(name));
    }
   
/* View user selected list with name, description, tasks */

    viewList() {
    let index = prompt("Enter the index of the list you want to view:");
    if (index > -1 && index < this.lists.length) {
    this.selectedList = this.lists[index];
    let description = 'List Name: ' + this.selectedList.name + '\n';
    description += ' ' + this.selectedList.describe() + '\n ';
    for (let i = 0; i < this.selectedList.tasks.length; i++) {
    description += i + ') ' + 
    this.selectedList.tasks[i].describe() + '\n';
    }
    let selection1 = this.showListMenuOptions(description);
    switch (selection1) {
    case '1' :
    this.createTask();
    break;
    case '2' :
    this.deleteTask();
    }
    } 
    }
    
/* Delets selected list */

    deleteList() {
    let index = prompt('Enter the index of the list you wish to delete:');
    if (index > -1 && index < this.lists.length) {
    this.lists.splice(index,1);
    }
    }
    
/* Creates new task, add task to selected list */

    createTask() {
    let name = prompt('Enter name of new item:');
    let position = prompt('Enter priority number for new item: ');
    //this.selectedList.tasks.push(new Task(name, position));
    this.selectedList.addTask(new Task(name,position));
    }

/* Deletes selected task from selected list */

    deleteTask() {
    let index = prompt('Enter the index of the item you wish to delete: ');
    if (index > -1 && index < this.selectedList.tasks.length) { this.selectedList.tasks.splice(index,1);
    }
    }
    }

/* Creates instance of class "Menu"
Runs Application */ 

    let menu = new Menu();
    menu.start(); 