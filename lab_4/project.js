document.addEventListener('DOMContentLoaded', () => {
  
    setTimeout(() => {
     document.querySelector('.container').style.opacity = 1;
      
      document.querySelector('.container').style.boxShadow = 
      "0 50px 100px 1px gray";
      
    },100)
     
   });
   
   
    document.getElementById('myForm').addEventListener('submit', function(event) {
       const inputs = this.querySelectorAll('input');
       let allEmpty = true;
       inputs.forEach(input => {
         if (input.value.trim() !== '') {
           allEmpty = false;
         }
       });
       if (allEmpty) {
         event.preventDefault();
         alert('Поля для вводу пусті. Заповніть');
       }
     });