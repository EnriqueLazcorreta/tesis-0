<!--

  if (document.images) {	
      normal = new MakeImageArray(9);
      sobre = new MakeImageArray(9);

      normal[1].src = "http://sci2s.ugr.es/keel/imagen/botones/description.gif";
      normal[2].src = "http://sci2s.ugr.es/keel/imagen/botones/members.gif";
      normal[3].src = "http://sci2s.ugr.es/keel/imagen/botones/publication.gif";
      normal[4].src = "http://sci2s.ugr.es/keel/imagen/botones/references.gif";
      normal[5].src = "http://sci2s.ugr.es/keel/imagen/botones/keel-dataset.gif";
      normal[6].src = "http://sci2s.ugr.es/keel/imagen/botones/keel2.gif";
      normal[7].src = "http://sci2s.ugr.es/keel/imagen/botones/software2.gif";
      normal[8].src = "http://sci2s.ugr.es/keel/imagen/botones/links2.gif";
      normal[9].src = "http://sci2s.ugr.es/keel/imagen/botones/access.gif";
      			
      sobre[1].src = "http://sci2s.ugr.es/keel/imagen/botones/description1.gif";
      sobre[2].src = "http://sci2s.ugr.es/keel/imagen/botones/members1.gif";
      sobre[3].src = "http://sci2s.ugr.es/keel/imagen/botones/publication1.gif";
      sobre[4].src = "http://sci2s.ugr.es/keel/imagen/botones/references1.gif";
      sobre[5].src = "http://sci2s.ugr.es/keel/imagen/botones/keel-dataset1.gif";
      sobre[6].src = "http://sci2s.ugr.es/keel/imagen/botones/keel3.gif";
      sobre[7].src = "http://sci2s.ugr.es/keel/imagen/botones/software3.gif";
      sobre[8].src = "http://sci2s.ugr.es/keel/imagen/botones/links3.gif";
      sobre[9].src = "http://sci2s.ugr.es/keel/imagen/botones/access1.gif";
      
  }

  	/**
  		This function changes the image on the left menu when the action is "OnMouseOver"
  	*/
   function entra(doc,num) {
      if (document.images) { 
        document.images[doc].src = sobre[num].src;
      }
    }

    /**
  		This function changes the image on the left menu when the action is "OnMouseOut"
  	*/
    function sale(doc,num) {
      if (document.images) {
        document.images[doc].src = normal[num].src;
      }                   
    }

  
 -->