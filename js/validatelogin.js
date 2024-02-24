function Validator(options){

    function getparent(element,selector){
        while(element.parentElement){
            if (element.parentElement.matches(selector)){
                return element.parentElement; 
            }
            element = element.parentElement;
        }
    }

    var selectorRule = {};

    function validate(inputele, rule){
        var errormess = rule.test(inputele.value);
        var errorele = getparent(inputele,options.formGroupSelector).querySelector(options.errorselector);
        var rules = selectorRule[rule.selector]

        //lấy ra cac rule selector
        for(var i=0;i<rules.length;i++){
            switch (inputele.type){
                case 'checkbox':
                case 'radio':
                    errormess=rules[i](
                        form.querySelector(rule.selector + ':checked')
                    );
                    break;
                default:
                    errormess=rules[i](inputele.value);
            }
            if(errormess){
                break;
            }
        }
        if(errormess){
            errorele.innerText = errormess
        }else{
            errorele.innerText = ''
        }
        return !errormess;
    }

    var form=document.querySelector(options.form);
    console.log(options.rule);
    if(form){
        //submit form
        form.onsubmit = function(e){
            e.preventDefault();
            var isformvalid= true; 

            options.rule.forEach(function(rule){
                var inputele = form.querySelector(rule.selector);
                var isvalid = validate(inputele, rule);
                if(!isvalid){
                    isformvalid = false;
                }
            })

            var enableinput = form.querySelectorAll('[name]:not([disabled])')
            var formvalue = Array.from(enableinput).reduce(function(value,inputele){
                return (value[inputele.name]=inputele.value) && value
            }, {});

            if(isformvalid){
                if(typeof options.onSubmit ==='function'){
                    var enableinput = form.querySelectorAll('[name]:not([disabled])')
                    var formvalue = Array.from(enableinput).reduce(function(value,inputele){
                        switch(inputele.type){
                            case 'radio':
                                var inputeleval = form.querySelector('input[name="'+ inputele.name + '"]:checked').value;
                                value[inputele.name]= inputeleval
                                localStorage.setItem(inputele.name,inputeleval);
                                break;
                            case 'checkbox':
                                if(!inputele.matches(':checked')){
                                    return value;
                                }
                                if(!Array.isArray(value[inputele.name])){
                                    value[inputele.name] = [];
                                }
                                value[inputele.name].push(inputele.value);
                                localStorage.setItem(inputele.name,inputele.value);
                                break;
                            case 'file':
                                value[inputele.name] = inputele.files;
                                var reader = new FileReader()
                                reader.addEventListener('load',()=>{
                                    localStorage.setItem(inputele.name , reader.result);
                                })
                                reader.readAsDataURL(inputele.files[0])
                                break;
                            
                            default:
                                value[inputele.name] = inputele.value;
                                localStorage.setItem(inputele.name,inputele.value);
                        }
                            return value;
                    }, {});
                    options.onSubmit(formvalue);
                }
            }else{
                console.log("Có lỗi")
            } 

            if(formvalue){
                if(formvalue.password == '123456'){
                    alert('đăng nhập thành công')
                    window.location.href = "web/TrinhGiaKhanh/homepage.html";
                }else{
                    alert('đăng nhập thất bại')
                }
            }
        }

        options.rule.forEach(function(rule){
            //lưu rule
            if(Array.isArray(selectorRule[rule.selector])){
                selectorRule[rule.selector].push(rule.test);
            }else{
                selectorRule[rule.selector] = [rule.test];
            }
            //

            var inputeles = form.querySelectorAll(rule.selector);

            Array.from(inputeles).forEach(function(inputele) {
                inputele.onblur = function (){
                    validate(inputele, rule);
                }
                inputele.oninput = function (){
                    var errorele = getparent(inputele,options.formGroupSelector).querySelector(options.errorselector);
                    errorele.innerText = '';
                }
            } )
        })
        console.log(selectorRule);
    }
}

Validator.isRequired = function(selector){
    return {
        selector: selector,
        test: function(value){
            return value ? undefined : "Vui lòng nhập trường này";
        }
    };
}

Validator.isEmail = function(selector){
    return {
        selector: selector,
        test: function(value){
            var regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
            return regex.test(value) ? undefined : "Vui lòng nhập Email";
        }
    };
}

// Validator.isPassword = function(selector){
//     return {
//         selector: selector,
//         test: function(){
            
//         }
//     };
// }

Validator.minLength = function(selector,min){
    return {
        selector: selector,
        test: function(value){
            return value.length >= min ? undefined : "Nhập tối thiểu 6 kí tự" 
        }
    };
}

Validator.isTrue = function(selector,pass){
    return {
        selector: selector,
        test: function(value){
            return value == pass ? undefined : "Sai mật khẩu"
        }
    };
}
