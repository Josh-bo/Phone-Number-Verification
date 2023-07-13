const verify = () => {
    if(getNumber.value == ""){
        display.innerHTML = "Please enter a Phone number"
        nameContainer.innerHTML = ``
        
        TimeOut()
    }
    else if(isNaN(Number(getNumber.value))){
        display.innerHTML = "Only Number is allowed!, Texts are prohibited"

        TimeOut()
    }
    else if(getNumber.value.length != 11){
        display.innerHTML = "Phone number must be 11 digits"
        TimeOut()
        nameContainer.innerHTML = ``
    }
    // MTN
    else if(getNumber.value.length == 11){
        let NumberSliced = getNumber.value.slice(0,4)
        // console.log(NumberSliced)

        if(NumberSliced == "0803" || NumberSliced == "0806" || NumberSliced == "0703" || NumberSliced == "0706" || NumberSliced == "0810" || NumberSliced == "0813" || NumberSliced == "0814" || NumberSliced == "0816" || NumberSliced == "0903" || NumberSliced == "0906" || NumberSliced == "0904" || NumberSliced == "0704"){
           
            spinnerFunction()
            setTimeout(() => {
                nameContainer.innerHTML = `
                    <div class="bg-warning rounded-2 w-75 mx-auto text-center p-3">
                        MTN : ${getNumber.value}
                    </div>
                    
                `              
            }, 3000);
        }

        // GLO
        else if(NumberSliced == "0805" || NumberSliced == "0807" || NumberSliced == "0811" || NumberSliced == "0705" || NumberSliced == "0815" || NumberSliced == "0905"){
           
            spinnerFunction()

            setTimeout(() => {
                nameContainer.innerHTML = `
                    <div class="bg-success rounded-2 w-75 mx-auto text-center text-light p-3">
                        GLO : ${getNumber.value}
                    </div>   
                `
            }, 3000);
        }
          // AIRTEL
    else if(NumberSliced == "0802" || NumberSliced == "0808" || NumberSliced == "0812" || NumberSliced == "0701" || NumberSliced == "0708" || NumberSliced == "0902" || NumberSliced == "0907" || NumberSliced == "0901"){
           
        spinnerFunction()
        setTimeout(() => {
                   
            nameContainer.innerHTML = `
            <div class="bg-danger rounded-2 w-75 mx-auto text-center text-light p-3">
            AIRTEL : ${getNumber.value}
            </div> 
            `
        }, 3000);
    }

    // 9mobile
    else if(NumberSliced == "0809" || NumberSliced == "0817" || NumberSliced == "0818" || NumberSliced == "0908" || NumberSliced == "0909"){
           
        spinnerFunction()
        setTimeout(() => {
                   
            nameContainer.innerHTML = `
            <div class="bg-success rounded-2 w-75 mx-auto text-center text-light p-3">
            9mobile : ${getNumber.value}
            </div>
            
            `               
        }, 3000);
     }

    // NTEL
        else if(NumberSliced == "0804"){
            spinnerFunction()
            setTimeout(() => {
                   
                nameContainer.innerHTML = `
                <div class="bg-info rounded-2 w-75 mx-auto text-center p-3">
                NTEL : ${getNumber.value}
                </div>
                `       
            }, 3000);
        }

    // SMILE
        else if(NumberSliced == "0702"){
            spinnerFunction()
            setTimeout(() => {
                   
                nameContainer.innerHTML = `
                <div class="bg-info rounded-2 w-75 mx-auto text-center p-3">
                SMILE : ${getNumber.value}
                </div>
                `       
            }, 3000);
        }
    
        else{
        display.innerHTML = "Not Found"

        TimeOut()
        }
    }
}


const TimeOut = () => {
    setTimeout(() => {
        display.innerHTML = ""
    }, 3000);
}

const spinnerFunction = () => {
    sipnnerContainer.innerHTML = `<div class="spinner-grow text-primary" role="status">
        <span class="visually-hidden">Loading...</span>
    </div>`

    setTimeout(() => {
        sipnnerContainer.innerHTML = ""
    }, 3000);
    
}