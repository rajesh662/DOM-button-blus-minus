let add = parseInt(document.querySelector(".txt").value);
let result = document.querySelector(".result");
function incre(){
    add+=1;
    document.querySelector(".txt").value = add;
  
}


function decre(){
    if( add>0){
        add-=1;
        document.querySelector(".txt").value = add;
    }
}