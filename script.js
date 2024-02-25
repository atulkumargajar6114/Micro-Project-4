let displayContent='';
    
    function updateDisplay(){
      document.querySelector('#displayinput').value=displayContent;
    }
    function appendToDisplay(value){
      displayContent=displayContent+value;
      updateDisplay();
    }
    function reset(){
      displayContent='';
      updateDisplay();
    }
    function calculate(){
      displayContent=eval(displayContent)+'';
      updateDisplay();
    }

    function del(){
      displayContent=displayContent.slice(0,-1);
      updateDisplay();
    }
