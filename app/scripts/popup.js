$.ajax({
    url: 'http://www.reddit.com/r/tattoos.json',
    method: 'GET',

    success: (function(data){

      var toAdd = "<ul>"
      for (var i = 1; i <11; i++){
        var tatDat = data.data.children;

        console.log(tatDat[i].data.thumbnail);
        if(tatDat[i].data.thumbnail === "nsfw" || tatDat[i].data.thumbnail === "self"){

        } else {
        toAdd += "<li><a href='http://www.reddit.com" + tatDat[i].data.permalink + "'><img src='" + tatDat[i].data.thumbnail + "'></img></a></li>"
      }

    }
    toAdd += "</ul>";
    $(".build").html(toAdd);

  })

});
