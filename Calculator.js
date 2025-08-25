// CalCULATOR PROGRAM

function appendToDisplay(value) {
    const display = document.getElementById( 'display');
    display.value += value;
  }
    function clearDisplay() {
   display.value = "";
    };
  
    function calculate() {
      try {
    display.value = eval(display.value);
      } catch (error) {
          display.value = "Error";
      }
    }
  