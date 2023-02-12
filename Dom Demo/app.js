document.addEventListener("DOMContentLoaded",function(){
    const list=document.querySelector("#movie-list ul")
    const forms=document.forms;

    //delete the movie
    list.addEventListener('click',(e)=>{   //click is the event here
        if(e.target.className=='delete'){  // detect the delete button when clicked
            const li=e.target.parentElement;    
            li.parentNode.removeChild(li); // remove the entire element form the list where delete is clicked
        }
    })

    //add movie in the list
    const addForm=forms['add-movie'];
    addForm.addEventListener("submit",function(e){
        e.preventDefault();

    //creating the elements - create necessary elements for the list of movie along with the delete button
        const value=addForm.querySelector('input[type="text"]').value;
        const li=document.createElement('li'); // li-parent element
        const movieName=document.createElement('span')  //child element of li
        const deleteBtn=document.createElement("span") //child element of li

        //add text content
        movieName.textContent=value;
        deleteBtn.textContent='delete';

        //add class
        movieName.classList.add('name')
        deleteBtn.classList.add('delete')

        //append in DOM 
        li.appendChild(movieName);  // moviename add in li
        li.appendChild(deleteBtn);  // delete  button add in li
        list.appendChild(li);          // finally li add in list


    })
})