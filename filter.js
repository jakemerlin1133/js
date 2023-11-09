const filterInput = document.querySelector('#filterInput');

filterInput.addEventListener('keyup', () =>{
   const filterValue = document.querySelector('#filterInput').value.toUpperCase();
    const student_name = document.querySelector('#students-name');
    const li = student_name.querySelectorAll('.collections-list');

    for(let i = 0; i < li.length; i++){
        const a = li[i].getElementsByTagName('a')[0];
        if(a.innerHTML.toUpperCase().indexOf(filterValue) > -1){
            li[i].style.display = "block";   
        }else{
            li[i].style.display = "none";

        }
    }


});