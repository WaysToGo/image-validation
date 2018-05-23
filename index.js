// validate the given image details

function validateFile(fileName)
        {
            var allowedExtension = ['jpeg', 'jpg', 'gif', 'bmp'];
           var fileExtension= fileName.split('.').pop().toLowerCase();
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



function previewFile() {
    var preview = document.querySelector('img');
    var h2=document.querySelector('h2')
    var fileName= document.getElementById('image').value
    h2.innerText=''
    preview.src=''
    
if(validateFile(fileName)){    
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