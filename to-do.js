var inp = document.getElementById('inp');

var addBtn = document.getElementById('addBtn')

var err = document.getElementById('err')

var listDiv = document.getElementById('listDiv');


var listed;
var listed;
var listext;
var pgraph;
var checkBtn;
var delBtn;

addBtn.addEventListener('click',function(){
    createList()
    deleteList()
    doneList()
    // console.log(checkBtn)

    

    
});



document.addEventListener("keypress",function(x){
    if (x.which == 13 || x.keyCode == 13){
      createList()
      deleteList()
      doneList()
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

}

function deleteList(){


for (var i=0;i<document.getElementsByClassName('rem').length;i++)
    {
        document.getElementsByClassName('rem')[i].addEventListener('click',function(){
            // console.log('pass')

            this.parentElement.style.display='none'
            
            console.log( document.getElementsByClassName('rem')[i] + ' is deleted')
        })
        // listDiv.removeChild(listno[i]) THIS.PARENTELEMENT

    }}


    function doneList(){
        for (var i=0;i<document.getElementsByClassName('add').length;i++)
    {
        document.getElementsByClassName('add')[i].addEventListener('click',function(){

    
    this.parentElement.querySelector('p').classList.add('strike')

    // console.log( document.getElementsByClassName('add')[i] + ' is done')

    
    // style.textDecoration = 'line-through';
            
            // style.display='none'
        })
       
    }

    }

    // delBtn.addEventListener('click',deleteList)

// function deleteList(){
//     // listDiv.removeChild(this.listed)
    
//     var listno = document.getElementsByClassName("listed")
//     console.log(listno);

//     // listDiv.removeChild(listno[i]) THIS.PARENTELEMENT

    
//     // listDiv.removeChild(getSelection)



    
    
//     // this.removeChild(listed)
// }
