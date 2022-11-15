        
        document.getElementById("text").innerHTML = "";
        let text = "Join Us in fellowship today"
        let counter = 0;
        let counter2 = 0
        let display = true
        let isTyping = false;

        function cursorBlink(){
                blink = setInterval( function (){
                    if(counter2 == text.length+2){
                    display = false;
                    clearInterval(blink);
                }
                if(display == true){
                    document.getElementById("cursor").innerHTML = "&vert;"
                    display = false;
                    counter2++
                }else{
                    document.getElementById("cursor").innerHTML = "&nbsp;"
                    display = true
                    counter2++
                }
                if(isTyping == true){
                    document.getElementById("cursor").innerHTML = "&vert;"
                    clearInterval(blink)
                }
            },500);  
        }

       
        function typingEffect(){
            type = setInterval(function (){
                isTyping = true
    
                document.getElementById("text").innerHTML += text[counter];
                counter++
                if(counter == text.length){
                    isTyping = false
                    cursorBlink();
                    clearInterval(type) 
                }  
        },50)
        }

      
        setTimeout(typingEffect,2000)
        cursorBlink();
        
        
      

       
            
            
        


        