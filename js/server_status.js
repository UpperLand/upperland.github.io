//based on a pen by @robinselmer
const url = "https://api.minetools.eu/ping/45.35.63.82/19427";

function getServerData() {
   $.getJSON(url, function (info) {
      //data is the JSON string
      if (info.error) {
         $('#status_text').css('color', 'red');
         $('#status_text').html('Offline');
         $('#players_num').html(null);
         return false;
      } else {
         $('#status_text').css('color', '#80ff00');
         $('#status_text').html('Online');
         $('#players_num').html('Jugadores online: '+ info.players.online);
         
      }
   });
};
setInterval(getServerData, 2000);