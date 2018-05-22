<input name="fileToUpload" type="file" id="fileToUpload"/>
<img id="preview" />


$(function()
{
   $("#fileToUpload").on('change', function(){
   // Display image on the page for viewing
        readURL(this,"preview");

   });
});

function readURL(input , tar) {
	if (input.files && input.files[0]) { // got sth

    // Clear image container
    $("#" + tar ).removeAttr('src');

    $.each(input.files , function(index,ff)  // loop each image
    {

        var reader = new FileReader();

        // Put image in created image tags
        reader.onload = function (e) {
            $('#' + tar).attr('src', e.target.result);
        }

        reader.readAsDataURL(ff);

    });
	}
}




// Callback from a <input type="file" onchange="onChange(event)">
function onChange(event) {
  var file = event.target.files[0];
  var reader = new FileReader();
  reader.onload = function(event) {
    // The file's text will be printed here
    console.log(event.target.result)
  };

  reader.readAsText(file);
}