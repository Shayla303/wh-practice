//starts new stuff//
var form= document.getElementsByClass("pureForm");


function init() {
  gapi.client.setApiKey("AIzaSyA8qRL8nR8ce1gJaiFC5LHPBmo--TY5mds");
  gapi.client.load("youtube", "v3", function() {
    // yt api is ready
  });
}

function tplawesome(e,t){res=e;for(var n=0;n<t.length;n++){res=res.replace(/\{\{(.*?)\}\}/g,function(e,r){return t[n][r]})}return res}

 $(function() {
   $("form").on("submit",function(e) {
     e.preventDefault();
     var enterSong = e.target.elements.search.val();
     // prepare the request
      var request = gapi.client.youtube.search.list({
         part: "snippet",
         type: "video",
         channelId: "whitneyhoustonVEVO",
         maxResults: 10,
         order:"viewcount",
         q: encodeURIComponent($(enterSong).val()).replace(/%20/g, "+")
        });
        // execute the request
        request.execute(function(response) {
        });
        results();
      }

      $("#results").html("");
        var results = response.result;
          $.each(results,function(index, item) {
            $.get("item.html",function(data){
            $("#results").append(tplawesome(data,[{"title":item.snippet.title,"videoid": item.id.videoId}]));
          });
        });
        function resetVideoHeight() {
          $(".video").css("height", $("#results").width() * 9/16);
    });

    $(window).on("resize", resetVideoHeight);

  });

  resetVideoHeight();
  }
});
