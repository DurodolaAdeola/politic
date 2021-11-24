$(document).ready(function() {
    $("#insurance").submit(function(event){

    const religion =$("select#religion").val();
    const aims =$("select#aims").val();
    const passion =$("select#passion").val();
  
    if ( religion=== "xtian" || "muslim" && passion === "reading" ) {
      
      $('#maturedFem').show();
    } else if ( religion=== "xtian" || "muslim" &&  passion === "travelling" ) {

    

      
      $('#youngFem').show();
    } else if ( religion=== "xtian" || "muslim" &&  passion === "womanizing" ||"drinking" ) {

     

      
        $('#maturedMale').show(); 
    } else if ( religion=== "xtian"|| "muslim" &&  passion === "building" ){
     
     $('#youngMale').show();  
    }else {

      

     $('Please fill the form correctly or leave my dating app').show();
    }
    event.preventDefault();

    });
  });