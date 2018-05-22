function validateFile()
        {
            var allowedExtension = ['jpeg', 'jpg'];
            var image=document.getElementById('image')
            var fileExtension = document.getElementById('img1').value.split('.').pop().toLowerCase();
            console.log(document.getElementById('img1').value)
            // image.src=document.getElementById('img1').value;

            var reader = new FileReader();s
            // Put image in created image tags
            reader.onload = function (e) {
              // image.src=
              console.log(e.target.result);
            }

            reader.readAsDataURL(ff);
            var isValidFile = false;

                for(var index in allowedExtension) {

                    if(fileExtension === allowedExtension[index]) {
                        isValidFile = true;
                        break;
                    }
                }

                if(!isValidFile) {
                    alert('Allowed Extensions are : *.' + allowedExtension.join(', *.'));
                }

                return isValidFile;
        }

       // var allowedExtension = ['jpeg', 'jpg', 'png', 'gif', 'bmp'];