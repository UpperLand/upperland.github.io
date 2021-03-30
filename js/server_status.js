/*Staff Members list*/
const staffMembers = ["AlexHowls", "AndreitaGamer", "Miguel", "Artuloda"];
/*Format for STAFF tag*/
const staffTag = "<span class='staff_tag'> (STAFF)</span>"
/*Server PING URL*/
const statusUrl = "https://api.minetools.eu/ping/45.35.63.82/19427";
/*List of online players*/
var playerList = [];

function getServerStatus() {
   $.getJSON(statusUrl, function (statusInfo) {
      //data is the JSON string
      if (statusInfo.error) {
         $('#status_text').css('color', 'red');
         $('#status_text').html('Offline');
         $('#players_num').html(null);
         return false;
      } else {
         $('#status_text').css('color', '#80ff00');
         $('#status_text').html('Online');
         $('#players_num').html('Jugadores online: ' + statusInfo.players.online);
         var players = statusInfo.players.sample.map(player => "<li id='"+player.name+"'>"+player.name+"</li>");
         $('#players_list').html(players);
         for (let y = 0; y < staffMembers.length; y++) {
            $('#'+staffMembers[y]).append(staffTag);
         }
      }
   });
}

setInterval(getServerStatus, 2000);
