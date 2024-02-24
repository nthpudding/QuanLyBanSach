        var catename = localStorage.getItem('catename');
        var catedes = localStorage.getItem('catedes');
        
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
                var catename = localStorage.getItem('catename');
                var catedes = localStorage.getItem('catedes');
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
                        mylist.innerHTML = catename;
                        trCre.appendChild(mylist);
                    }
                    if(i==3){
                        var pEle = document.createElement('p')
                        pEle.classList.add("mb-0");
                        pEle.innerHTML = catedes;
                        mylist.appendChild(pEle);
                        trCre.appendChild(mylist);
                    }
                    if(i==4){
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
        