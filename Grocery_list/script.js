function addlist(){
    let item=document.createElement("li");
    item.id="item";
    item.innerText=`-${document.getElementById('text').value}`;
    document.getElementById('itemContnar').appendChild(item);
    if(document.getElementById('text').value==""){
        alert("Write something!")
    }
    document.getElementById('text').value="";

    item.addEventListener("click",()=>{
        item.style.textDecoration='line-through';
    })
}


document.getElementById('text').addEventListener("keyup", function(event){
    if(event.key=="Enter"){
        addlist()
    }
    
});

document.querySelector(".clear").addEventListener("click",function(){
    document.getElementById('itemContnar').innerText=""
})
