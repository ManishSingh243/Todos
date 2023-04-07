var itemList = document.getElementById('todolist');
var doneList  = document.getElementById('todosdone');

createItem.addEventListener('click', addItem);

function addItem(e){
    e.preventDefault();

    var todoname = document.getElementById('todoname').value;
    var description = document.getElementById('description').value;

    var totalchar = todoname+" "+description;

    var li = document.createElement('li');

    var laterUsage = li.appendChild(document.createTextNode(totalchar));
	laterUsage.className = 'content';

    //add tick button
    var doneButton = document.createElement('button');
    doneButton.className = 'selectItem';
    doneButton.appendChild(document.createTextNode('select'));
    li.appendChild(doneButton);

    //add remove button
    var removebutton = document.createElement('button');
    removebutton.className = 'removeItem';
    removebutton.appendChild(document.createTextNode('Remove'));
    li.appendChild(removebutton);

    itemList.appendChild(li);
	
	document.getElementById('todoname').value = "";
    document.getElementById('description').value = "";
}



 itemList.addEventListener('click',insertItem);

function insertItem(e){
    e.preventDefault();

    if(e.target.classList.contains('selectItem')){
        var li  = e.target.parentElement;
          doneList.appendChild(li.firstChild);
		  doneList.innerHTML+='<br>';
		  doneList.innerHTML+='<br>';
		  itemList.removeChild(li);
    }
}

itemList.addEventListener('click', deleteItem);

function deleteItem(e){
	if(e.target.classList.contains('removeItem')){
        var li  = e.target.parentElement;
          itemList.removeChild(li);
    }
}	