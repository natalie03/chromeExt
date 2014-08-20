
$.ajax({
    url: 'http://www.reddit.com/r/tattoos.json',
    method: 'GET',

    success: (function(data){

      var toAdd = "<ul>"
      for (var i = 1; i <11; i++){
        console.log(data.data.children[i].data.thumbnail);
        if(data.data.children[i].data.thumbnail === "nsfw"){

        }else {
        toAdd += "<li><img src='" + data.data.children[i].data.thumbnail + "'></a></li>"
      }

    }
    toAdd += "</ul>";
    $(".build").html(toAdd);

  })

});
