if(localStorage.getItem('dataMock') === null){
    const dataMock = [
        {
            title: 'backlog',
            issues: [],
        },
        {
            title: 'ready',
            issues: [],
        },
        {
            title: 'in Progress',
            issues: [],
        },
        {
            title: 'Finished',
            issues: [],
        },
    ];
    localStorage.setItem("dataMock", JSON.stringify(dataMock));
}
const dataMock = JSON.parse(localStorage.getItem('dataMock'));
createLists();

let backlogAddCardBtn = document.getElementsByClassName('list__add-card-btn')[0];
backlogAddCardBtn.classList.add('list__add-card-btn--active');
backlogAddCardBtn.onclick = addCardBacklog;

let addCardBtns = document.getElementsByClassName('list__add-card-btn');
for(let i = 1; i<addCardBtns.length; i++){
    addCardBtns[i].onclick = addCard;
}
checkAddCardBtns();

function createLists(){
    for(let i=0; i<dataMock.length; i++){
        let main = document.getElementsByClassName('main')[0];
        let list = document.createElement('div');
        list.classList.add('list', 'list--margin');
        let listName = document.createElement('div');
        listName.classList.add('list__name');
        listName.innerHTML = `${dataMock[i].title}`;
        let listMenuBtn = document.createElement('button');
        listMenuBtn.classList.add('list__menu-btn');
        listMenuBtn.innerHTML = '...';
        let listItemWrapper = document.createElement('ul');
        listItemWrapper.classList.add('list__item-wrapper');

        main.append(list);
        list.append(listName);
        list.append(listMenuBtn);
        list.append(listItemWrapper);

        for (let y=0; y<dataMock[i].issues.length; y++){
            let listItem = document.createElement('li');
            listItem.classList.add('list__item');
            listItem.innerHTML = dataMock[i].issues[y].name;
            listItemWrapper.append(listItem);
        }
        let addCardBtn = document.createElement('button');
        addCardBtn.classList.add('list__add-card-btn');
        addCardBtn.innerHTML = 'Add card';
        addCardBtn.id = `${i}`;
        list.append(addCardBtn);
    }
}
function addCardBacklog () {
    let backlog = document.getElementsByClassName('list__item-wrapper')[0];
    let input = document.createElement('input');
    input.classList.add('list__item');

    backlog.append(input);
    input.focus();
    input.addEventListener('blur', addTask);
    input.addEventListener('keyup', addTaskPressEnter);
    function addTaskPressEnter(e){
        if (e.code === "Enter") {
            addTask();
        }
    }
    function addTask() {
        input.removeEventListener('blur', addTask);
        input.removeEventListener('keyup', addTaskPressEnter);
        let li = document.createElement('li');
        li.classList.add('list__item');
        li.innerHTML = `${input.value}`;
        input.remove();
        backlog.append(li);
        dataMock[0].issues.push({
            name: input.value
        });
        localStorage.setItem("dataMock", JSON.stringify(dataMock));
        addCardBtns[1].classList.remove('list__add-card-btn--disabled');
        addCardBtns[1].classList.add('list__add-card-btn--active');
        addCardBtns[1].disabled = false;
    }
}

function addCard() {
    let select = document.createElement('select');
    select.classList.add('list__item', 'list__item--select');
    this.previousSibling.append(select);
    let id = this.id;
    let previousListIndex = id-1;
    for(let taskIndex=0; taskIndex<dataMock[previousListIndex].issues.length; taskIndex++){
        let option = document.createElement('option');
        option.innerHTML = dataMock[previousListIndex].issues[taskIndex].name;
        option.setAttribute('value', dataMock[previousListIndex].issues[taskIndex].name);
        option.id = `${previousListIndex} ${taskIndex}`;
        select.append(option);
    }
    select.focus();
    select.addEventListener('blur', addTask, {once: true});
    function addTask(){
        let options = document.getElementsByClassName('list__item--select')[0];
        let listIndex = options[this.selectedIndex].id[0];
        let taskIndex = options[this.selectedIndex].id[2];
        dataMock[listIndex].issues.splice(taskIndex, 1);
        let card = document.getElementsByClassName('list__item-wrapper')[listIndex];
        let task = card.getElementsByClassName('list__item')[taskIndex];
        task.remove();
        select.remove();

        let listItem = document.createElement('li');
        listItem.classList.add('list__item');
        listItem.innerHTML = this.value;
        let list = document.getElementsByClassName('list__item-wrapper')[id];
        list.append(listItem);
        dataMock[id].issues.push({
            name: this.value,
        });
        localStorage.setItem("dataMock", JSON.stringify(dataMock));
        checkAddCardBtns();
    }
}
function checkAddCardBtns(){
    for (let i=1; i<dataMock.length; i++){
        if(dataMock[i-1].issues.length === 0){
            addCardBtns[i].disabled = true;
            addCardBtns[i].classList.remove('list__add-card-btn--active');
            addCardBtns[i].classList.add('list__add-card-btn--disabled');
        }
        else{
            addCardBtns[i].classList.remove('list__add-card-btn--disabled');
            addCardBtns[i].classList.add('list__add-card-btn--active');
            addCardBtns[i].disabled = false;
        }
    }
}