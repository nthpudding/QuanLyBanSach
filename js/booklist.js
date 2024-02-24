var bookname = localStorage.getItem('bookname');
        var bookimage = localStorage.getItem('bookimage');
        var bookpdf = localStorage.getItem('bookpdf');
        var category = localStorage.getItem('Catergory');
        var bookprice = localStorage.getItem('bookprice');
        var bookdescription = localStorage.getItem('bookdescription');
        var authors = localStorage.getItem('Authors');
        //
        var td= document.querySelectorAll('tbody tr td');
        var trash = document.querySelectorAll('.fa-trash-can')
        var counttrash = trash.length;
        var list = document.querySelector('tbody')
        console.log(list);
            console.log(trash);
            for (var i = 0; i < counttrash; i++) {
                trash[i].addEventListener("click", (e) => {
                    let trashParent = e.target.parentElement.parentElement.parentElement.parentElement;
                    trashParent.remove();
                    console.log(trashParent);
                });
            }
        var count = localStorage.length
        if(count>0){
            window.addEventListener('load', ()=>{
                var bookname = localStorage.getItem('bookname');
                var bookimage = localStorage.getItem('bookimage');
                var bookpdf = localStorage.getItem('bookpdf');
                var category = localStorage.getItem('Catergory');
                var bookprice = localStorage.getItem('bookprice');
                var bookdescription = localStorage.getItem('bookdescription');
                var authors = localStorage.getItem('Authors');
                //create list
                var trCre = document.createElement('tr')
                list.appendChild(trCre);
                for(var i=1;i<=(td.length)/10;i++){
                    var mylist = document.createElement('td')
                    if(i==1){
                        mylist.innerHTML = '10';
                        trCre.appendChild(mylist);
                    }
                    if(i==2){
                        
                        var image = document.createElement('img');
                        var Imgurl = localStorage.getItem('bookimage');
                        image.classList.add("bookpic")
                        image.src = Imgurl;
                        mylist.appendChild(image);
                        trCre.appendChild(mylist);
                    }
                    if(i==3){
                        mylist.innerHTML = bookname;
                        trCre.appendChild(mylist);
                    }
                    if(i==4){
                        mylist.innerHTML = category;
                        trCre.appendChild(mylist);
                    }
                    if(i==5){
                        mylist.innerHTML = authors;
                        trCre.appendChild(mylist);
                    }
                    if(i==6){
                        var pEle = document.createElement('p')
                        pEle.classList.add("mb-0");
                        pEle.innerHTML = bookdescription;
                        mylist.appendChild(pEle);
                        trCre.appendChild(mylist);
                    }
                    if(i==7){
                        mylist.innerHTML = '$'+bookprice;
                        trCre.appendChild(mylist);
                    }
                    if(i==8){
                        var aEle = document.createElement('a')
                        aEle.classList.add("bground");
                        aEle.href = bookpdf;
                        aEle.innerHTML = '<i class="fa-solid fa-file-pdf"></i>';
                        mylist.appendChild(aEle);
                        trCre.appendChild(mylist);
                    }
                    if(i==9){
                        var div = document.createElement('div');
                        var aEle = document.createElement('a');
                        var button = document.createElement('button');
    
                        button.classList.add("bground");
                        aEle.classList.add("bground");
                        aEle.href = "bookadd.html";
                        div.classList.add("icon");
                        aEle.innerHTML = '<i class="fa-solid fa-pencil"></i>';
                        button.innerHTML = '<i class="fa-solid fa-trash-can"></i>'

                        div.appendChild(aEle)
                        div.appendChild(button)
                        mylist.appendChild(div)
                        trCre.appendChild(mylist);
                    }
                }
                
                console.log(bookname,bookimage,bookpdf,category,bookprice,bookdescription,authors)
            })
        }
        