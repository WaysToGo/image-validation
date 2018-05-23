// validate the given image details

function validateFile(fileExtension)
        {
            var allowedExtension = ['jpeg', 'jpg'];
            
            // var fileExtension = document.getElementById('image').value.split('.').pop().toLowerCase();
            var isValidFile = false;
                for(var index in allowedExtension) {

                    if(fileExtension === allowedExtension[index]) {
                        isValidFile = true;
                        break;
                    }
                }
              
                return isValidFile;
        }
   // var allowedExtension = ['jpeg', 'jpg', 'png', 'gif', 'bmp'];


function previewFile() {
    var preview = document.querySelector('img');
    var h2=document.querySelector('h2')
    var fileExtension= document.getElementById('image').value.split('.').pop().toLowerCase();
    h2.innerText=''
    preview.src=''
    
if(validateFile(fileExtension)){
    
    var file    = document.querySelector('input[type=file]').files[0];
    var reader  = new FileReader();  

  
    reader.addEventListener("load", function () {
      preview.src = reader.result;
    }, false);
  
    if (file) {
      reader.readAsDataURL(file);
    }
}
else{
    
h2.innerText="please upload a valid image"

}
  }