
        var td= document.querySelectorAll('tbody tr td');
        var trash = document.querySelectorAll('.fa-trash-can')
        var counttrash = trash.length;
        var list = document.querySelector('tbody')
        console.log(list);
            console.log(trash);
            for (var i = 0; i < counttrash; i++) {
                trash[i].addEventListener("click", (e) => {
                    let trashParent = e.target.parentElement.parentElement.parentElement;//truy suất tới parentelement có địa chỉ là tr
                    trashParent.remove();
                    console.log(trashParent);
                });
            }
        
        