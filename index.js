const verify = () => {
    if(getNumber.value == ""){
        display.innerHTML = "Please enter a Phone number"

        TimeOut()
    }
    else if(getNumber.value.length != 11){
        display.innerHTML = "Phone number must be 11 digits"
        TimeOut()
    }
    // MTN
    else if(getNumber.value.length == 11){
        let NumberSliced = getNumber.value.slice(0,4)
        console.log(NumberSliced)

        if(NumberSliced == "0803" || NumberSliced == "0806" || NumberSliced == "0703" || NumberSliced == "0706" || NumberSliced == "0810" || NumberSliced == "0813" || NumberSliced == "0814" || NumberSliced == "0816" || NumberSliced == "0903" || NumberSliced == "0906" || NumberSliced == "0904"){
           
            nameContainer.innerHTML = `
                <div class="bg-warning rounded-2 w-75 mx-auto text-center">
                    MTN : ${getNumber.value}
                </div>
                
            `              
        }

        // GLO
        else if(NumberSliced == "0805" || NumberSliced == "0807" || NumberSliced == "0811" || NumberSliced == "0705" || NumberSliced == "0815" || NumberSliced == "0905"){
           
            nameContainer.innerHTML = `
                <div class="bg-success rounded-2 w-75 mx-auto text-center text-light">
                    GLO : ${getNumber.value}
                </div>
                
            `
        }
          // AIRTEL
    else if(NumberSliced == "0802" || NumberSliced == "0808" || NumberSliced == "0812" || NumberSliced == "0701" || NumberSliced == "0708" || NumberSliced == "0902" || NumberSliced == "0907" || NumberSliced == "0901"){
           
            nameContainer.innerHTML = `
                <div class="bg-danger rounded-2 w-75 mx-auto text-center text-light">
                    AIRTEL : ${getNumber.value}
                </div> 
            `
    }

    // 9mobile
    else if(NumberSliced == "0809" || NumberSliced == "0817" || NumberSliced == "0818" || NumberSliced == "0908" || NumberSliced == "0909"){
           
            nameContainer.innerHTML = `
                <div class="bg-success rounded-2 w-75 mx-auto text-center text-light">
                    9mobile : ${getNumber.value}
                </div>
                
            `               
     }

    // NTEL
        else if(NumberSliced == "0804"){
            nameContainer.innerHTML = `
                <div class="bg-info rounded-2 w-75 mx-auto text-center">
                    NTEL : ${getNumber.value}
                </div>
                `       
        }

    // SMILE
        else if(NumberSliced == "0702"){
            nameContainer.innerHTML = `
                <div class="bg-info rounded-2 w-75 mx-auto text-center">
                    SMILE : ${getNumber.value}
                </div>
                `       
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
