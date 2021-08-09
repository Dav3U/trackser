var inp = document.getElementById('inp');

var addBtn = document.getElementById('addBtn')

var err = document.getElementById('err')

var listDiv = document.getElementById('listDiv');

var pgraph = document.getElementById('pgraph')

var userChoice = document.getElementById('displayChoice')

var progressBar = document.getElementById('progressBar');

var progText = document.getElementById('progText');

var taskProg = document.getElementById('taskProg');

var listCounter=0;

var doneCounter = 0;

document.onload =inp.focus()


pgraph.style.textTransform="uppercase"
// pgraph.style.marginTop="20px"

var taskCompletion=0;
var listed;
var listed;
var listext;
var pgraph;
var checkBtn;
var delBtn;


addBtn.addEventListener('click',function(){
    createList()
});



document.addEventListener("keypress",function(x){
    if (x.which == 13 || x.keyCode == 13){
      createList()
    //   deleteList()
    //   doneList()
    }
  })


function createList()

{

    if (inp.value=="")
    {
        err.style.display='block';
         inp.focus();

    }
    else
    {
    

listCounter += 1;

taskCompletion = Math.floor((doneCounter/listCounter) * 100);
progressBar.style.width = taskCompletion + '%'


progText.innerHTML= taskCompletion + '%'

taskProg.innerHTML ="Task Completion Progress "+ doneCounter +"/"+listCounter


// console.log(listCounter)

err.style.display='none';
    
listed= document.createElement('div');

listed.classList.add('listed');

pgraph = document.createElement('p');
 

listext = document.createTextNode(inp.value);

pgraph.classList.add('list-pgraph')

checkBtn = document.createElement('button')

delBtn = document.createElement('button')

checkBtn.classList.add('fa','fa-check','fa-1.5x','listed-icon1','add')

delBtn.classList.add('fa','fa-trash','fa-1.5x','listed-icon2','rem')


pgraph.appendChild(listext);

listed.appendChild(pgraph)

listed.appendChild(checkBtn)

listed.appendChild(delBtn)

listDiv.appendChild(listed)

listDiv.style.display = 'block'

inp.value="";
inp.focus();


}
delBtn.addEventListener('click', deleteList)
checkBtn.addEventListener('click', doneList)

}



function deleteList(){
    this.parentElement.style.display='none'

    if(listCounter!=0)
    {
    listCounter-=1
    }

    if(this.parentElement.querySelector('p').classList.contains('strike'))
    {
    doneCounter-=1

    }
    

     if (listCounter==0 && doneCounter ==0)
    {
        taskCompletion =0;
    }
    

    else
    {

    taskCompletion = Math.floor((doneCounter/listCounter) * 100);
    }
    progressBar.style.width = taskCompletion + '%'
    progText.innerHTML= taskCompletion + '%'

taskProg.innerHTML ="Task Completion Progress "+ doneCounter +"/"+listCounter


    console.log("done "+doneCounter)
    console.log("list "+listCounter)

    console.log("task "+taskCompletion)


}


function doneList(){
        doneCounter+=1

    this.parentElement.querySelector('p').classList.add('strike');
    this.disabled= true

    //     for (var i=0;i<document.getElementsByClassName('add').length;i++)
    // {
    //     document.getElementsByClassName('add')[i].addEventListener('click',function(){

    
    // // this.parentElement.querySelector('p').classList.add('strike');
        

    //     })
       
    // }

    
   
        taskCompletion = Math.floor((doneCounter/listCounter) * 100);
        progressBar.style.width = taskCompletion + '%'


        progText.innerHTML= taskCompletion + '%'

taskProg.innerHTML ="Task Completion Progress "+ doneCounter +"/"+listCounter


        console.log("done "+doneCounter)
        console.log("list "+listCounter)

        console.log("task "+taskCompletion)

    }

