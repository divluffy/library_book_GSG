let myMain    = document.querySelector("main"),
    myHeader  = document.querySelector("header"),
    btn       = document.querySelector(".btn-upload button"),
    addbook   = document.querySelector(".addbook"),
    overlay   = document.querySelector(".overlay"),
    searchBtn = document.querySelector(".search-btn"),
    searchPop = document.querySelector(".search-pop"),
    closePop  = document.querySelector(".close-pop"),
    addmyBook = document.querySelector(".addmyBook"),
    viewmenu  = document.querySelector(".view-menu"),
    msginput  = document.querySelector(".msg-input"),
    showme  = document.querySelector(".showme"),
    backmenu  = document.querySelector(".backmenu"),
    closepb   = document.querySelector(".close-pop-book"),
    header    = document.querySelector("header"),
    myForm    = document.querySelector(".form"),
    bookTitle = document.querySelector("#bookTitle"),
    Theauthor = document.querySelector("#Theauthor"),
    Imagelink = document.querySelector("#Imagelink"),
    category  = document.querySelector("#Category");
    
 let books = [
    {title:"Harry Potter and the Sorcerer's Stone",author:"J.K. Rowling",linke:"./src/b1.jpg", category:"Novels"},
    {title:"The Woman in the Window",author:"A.J. Finn",linke:"./src/b2.jpg", category:"Novels"},
    {title:"The Great Alone",author:"Kristin Hannah",linke:"./src/b3.jpg", category:"Novels"},
    {title:"Little Fires Everywhere",author:"Celeste Ng",linke:"./src/b4.jpg", category:"Novels"}
]


let newbook =[];


if(localStorage.test){

    console.log(localStorage.test)
    let moon = localStorage.test
    let nig = JSON.parse(localStorage.getItem('test'));
    console.log(moon)

    console.log(nig)

    newbook = nig
for (let a = 0; a < nig.length; a++) {
        addBookStorge(a)  
}



}




function  addBookStorge(a){
    let creat = document.createElement('div'),
        creat2Div  = document.createElement('div'),
         creatH1    = document.createElement('h1'),
         creatH2    = document.createElement('h2'),
         creatImg    = document.createElement('img'),
         creatSpan    = document.createElement('span')

    //add tags for cards
    myMain.appendChild(creat)
    creat.classList.add("card")
    creat.appendChild(creat2Div)
    creat2Div.appendChild(creatH1)
    creat2Div.appendChild(creatH2)
    creat.appendChild(creatImg)
    creat2Div.appendChild(creatSpan)

    //content from books array
    creatH1.textContent = newbook[a].title
    creatH2.textContent = newbook[a].author
    creatImg.src = newbook[a].linke
    creatSpan.textContent = newbook[a].category
}




addmyBook.addEventListener('click', ()=>{
    let v1 = bookTitle.value,
        v2 = Theauthor.value,
        v3 = Imagelink.value,
        v4 = category.value;

    if(v1&&v2&&v3&&v4){


    
        let book = {
            title:v1,
            author:v2,
            linke:v3,
            category:v4};
    
            newbook.unshift(book)
    

            
        let booktake = JSON.stringify(newbook);
        localStorage.setItem("test", booktake);
        let mytest = JSON.parse(localStorage.getItem('test'));

        console.log(book)
        console.log(newbook)
        console.log(localStorage.test)
        console.log(localStorage)

        

        let creatNew = document.createElement('div'),
            creat2New  = document.createElement('div'),
            creatH1N    = document.createElement('h1'),
            creatH2N    = document.createElement('h2'),
            creatImgN    = document.createElement('img'),
            creatSpanN    = document.createElement('span')

        //add tags for cards
        myMain.insertBefore(creatNew, myMain.firstElementChild)
        creatNew.classList.add("card")
        creatNew.appendChild(creat2New)
        creat2New.appendChild(creatH1N)
        creat2New.appendChild(creatH2N)
        creatNew.appendChild(creatImgN)
        creat2New.appendChild(creatSpanN)

        //content from books array
        creatH1N.textContent = v1
        creatH2N.textContent = v2
        creatImgN.src = v3
        creatSpanN.textContent = v4
        deleteActive()
    }else{
        msginput.classList.add("active")
        setTimeout(()=>{
            msginput.classList.remove("active")
        },1500)
    }
})








for (let i = 0; i < books.length; i++) {
    addBokk(i)
}










function  addBokk(n){
    let creat = document.createElement('div'),
        creat2Div  = document.createElement('div'),
         creatH1    = document.createElement('h1'),
         creatH2    = document.createElement('h2'),
         creatImg    = document.createElement('img'),
         creatSpan    = document.createElement('span')

    //add tags for cards
    myMain.appendChild(creat)
    creat.classList.add("card")
    creat.appendChild(creat2Div)
    creat2Div.appendChild(creatH1)
    creat2Div.appendChild(creatH2)
    creat.appendChild(creatImg)
    creat2Div.appendChild(creatSpan)

    //content from books array
    creatH1.textContent = books[n].title
    creatH2.textContent = books[n].author
    creatImg.src = books[n].linke
    creatSpan.textContent = books[n].category
}



















// close pops
function deleteActive(){
    addbook.classList.remove("active")
    overlay.classList.remove("active")
    myHeader.classList.remove("active")
}

// if he will add book - pop
btn.onclick = ()=>{
    addbook.classList.add("active")
    overlay.classList.add("active")
}
//
overlay.onclick = ()=>{
    deleteActive()
 }
//
closepb.onclick = ()=>{
    deleteActive()
}
//if he want search in book - pop
searchBtn.onclick = ()=>{
    searchPop.classList.add("active");
}

closePop.onclick = ()=>{
    searchPop.classList.remove("active");
}
//menu show

showme.onclick = ()=>{
    myHeader.classList.toggle("active");
    searchPop.classList.add("on");
    addbook.classList.add("on");
}

backmenu.onclick = ()=>{
    myHeader.classList.toggle("active");
}
