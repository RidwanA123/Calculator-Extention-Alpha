

let one = document.getElementById("one")
let two = document.getElementById("two")
let three = document.getElementById("three")
let plus = document.getElementById("plus")
let equals = document.getElementById("equals")
let minus = document.getElementById("minus")
let times = document.getElementById("X")
let divide = document.getElementById("division")
let lcd = document.getElementById("lcd")
let mplus = document.getElementById("mplus")
let operation = false
let memread = document.getElementById("mr")
let memclear = document.getElementById("mc")
let numberset1 = 0
let numberset2 = 0
let operator
let mode = 1
let result
let clear = false
function calculate() {
    if (mode == 1) {
        if (operator == "+") {
            numberset2 = parseInt(lcd.innerHTML)
            result = numberset1 + numberset2
            lcd.innerHTML = result
            clear = true
        }
        else if (operator == "-") {
            numberset2 = parseInt(lcd.innerHTML)
            result = numberset1 - numberset2
            lcd.innerHTML = result
            clear = true
        }
        else if (operator =="*") {
            numberset2 = parseInt(lcd.innerHTML)
            result = numberset1 * numberset2
            lcd.innerHTML = result
            clear = true
        }
        else if (operator == "/") {
            numberset2 = parseInt(lcd.innerHTML)
            result = numberset1 / numberset2
            lcd.innerHTML = result
            clear = true
        }
    }
}
chrome.storage.sync.get(['memory'], function(result) {
    if (result.memory > 0) {
        document.getElementById("memorystatus").innerHTML = "Memory"
    }
  });
console.log("Loaded")

function clearz() {
    if (clear == true) {
        lcd.innerHTML = ""
        clear = false
        operation = false
    }
}
one.addEventListener("click", function() {
clearz()
desired = 1
   if (lcd.innerHTML == "0" || mode == 0) {
        lcd.innerHTML =""
   }
   lcd.innerHTML = lcd.innerHTML + desired.toString()
   mode = 1

})

two.addEventListener("click", function() {
    clearz()
    desired = 2
    if (lcd.innerHTML == "0" || mode == 0) {
         lcd.innerHTML =""
    }
    lcd.innerHTML = lcd.innerHTML + desired.toString()
    mode = 1
})

three.addEventListener("click", function() {
    clearz()
    desired = 3
   if (lcd.innerHTML == "0" || mode == 0) {
        lcd.innerHTML =""
   }
   lcd.innerHTML = lcd.innerHTML + desired.toString()
   mode = 1
})

four.addEventListener("click", function() {
    clearz()
    desired = 4
   if (lcd.innerHTML == "0" || mode == 0) {
        lcd.innerHTML =""
   }
   lcd.innerHTML = lcd.innerHTML + desired.toString()
   mode = 1
})


five.addEventListener("click", function() {
    clearz()
    desired = 5
   if (lcd.innerHTML == "0" || mode == 0) {
        lcd.innerHTML =""
   }
   lcd.innerHTML = lcd.innerHTML + desired.toString()
   mode = 1
})


six.addEventListener("click", function() {
    clearz()
    desired = 6
   if (lcd.innerHTML == "0" || mode == 0) {
        lcd.innerHTML =""
   }
   lcd.innerHTML = lcd.innerHTML + desired.toString()
   mode = 1
})


seven.addEventListener("click", function() {
    clearz()
    desired = 7
   if (lcd.innerHTML == "0" || mode == 0) {
        lcd.innerHTML =""
   }
   lcd.innerHTML = lcd.innerHTML + desired.toString()
   mode = 1
})


eight.addEventListener("click", function() {
    clearz()
    desired = 8
   if (lcd.innerHTML == "0" || mode == 0) {
        lcd.innerHTML =""
   }
   lcd.innerHTML = lcd.innerHTML + desired.toString()
   mode = 1
})


nine.addEventListener("click", function() {
    clearz()
    desired = 9
   if (lcd.innerHTML == "0" || mode == 0) {
        lcd.innerHTML =""
   }
   lcd.innerHTML = lcd.innerHTML + desired.toString()
   mode = 1
})

zero.addEventListener("click", function(){
    clearz()
    desired = 0
    if (lcd.innerHTML != "0"){
        if (mode == 0){
            lcd.innerHTML = ""
        }
        lcd.innerHTML = lcd.innerHTML + desired.toString()
        mode = 1
    }
})






plus.addEventListener("click", function() {
    if (mode == 1) {
        numberset1 = parseInt(lcd.innerHTML)
        mode = 0 
        operator = "+"
        operation = true
    }

})

minus.addEventListener("click", function() {
    if (mode == 1) {
        numberset1 = parseInt(lcd.innerHTML)
        mode = 0 
        operator = "-"
        operation = true
    }

})
times.addEventListener("click", function() {
    if (mode == 1) {
        numberset1 = parseInt(lcd.innerHTML)
        mode = 0 
        operator = "*"
        operation = true
    }

})
divide.addEventListener("click", function() {
    if (mode == 1) {
        numberset1 = parseInt(lcd.innerHTML)
        mode = 0 
        operator = "/"
        operation = true
    }

})

equals.addEventListener("click",function() {
    calculate()
})

mplus.addEventListener("click", function() {
    
    if (mode != 0) {
        if (operation == true) {
            calculate()
          
            chrome.storage.sync.set({'memory': result}, function() {
                
                document.getElementById('memorystatus').innerHTML = "Memory"
                console.log()
              });
        }
        else {
    
        chrome.storage.sync.set({'memory': lcd.innerHTML}, function() {
            
            document.getElementById('memorystatus').innerHTML = "Memory"
            
            
           
          });
    
    }
}
    chrome.storage.sync.get(['memory'], function(result) {
        console.log(result)
       
       
      });
})
memread.addEventListener("click", function() {
    chrome.storage.sync.get(['memory'], function(result) {
       lcd.innerHTML = result.memory
       mode = 1
       
       
       
      });
})

memclear.addEventListener("click" , function() {
    chrome.storage.sync.set({'memory': 0}, function() {
        document.getElementById('memorystatus').innerHTML = ""
                
    })
})
