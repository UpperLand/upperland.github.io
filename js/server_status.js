$(function () {

   /*Staff list*/
   const staff = ["AlexHowls", "Artuloda", "miguel"];
   /*Streamers list*/
   const streamers = ["andreitagamer"];
   /*Mods list*/
   const mods = [];
   /*Helpers list*/
   const helpers = [];
   /*Honor members list*/
   const honorMembers = [];

   /*Format for Owner tag*/
   const staffFlag = "<span class='owner_tag'> (STAFF)</span>"
   /*Format for Admin tag*/
   const streamersFlag = "<span class='admin_tag'> (STREAMER)</span>"
   /*Format for Mod tag*/
   const modFlag = "<span class='mod_tag'> (MOD)</span>"
   /*Format for Helper tag*/
   const helperFlag = "<span class='helper_tag'> (HELPER)</span>"
   /*Format for Honor Member tag*/
   const honorFlag = "<span class='honor_tag'> (HONOR)</span>"

   /*Server PING URL*/
   const statusUrl = "https://api.minetools.eu/ping/45.35.210.2/25696";
   /*List of online players*/
   var playerList = [];
   var alarm = 0;

   /*This funtion add the rank tags to the names*/
   function rankTags() {
      for (let y = 0; y < staff.length; y++) {
         $('#' + staff[y]).append(staffFlag);
      }
      for (let y = 0; y < streamers.length; y++) {
         $('#' + streamers[y]).append(streamersFlag);
      }
      for (let y = 0; y < mods.length; y++) {
         $('#' + mods[y]).append(modFlag);
      }
      for (let y = 0; y < helpers.length; y++) {
         $('#' + helpers[y]).append(helperFlag);
      }
      for (let y = 0; y < honorMembers.length; y++) {
         $('#' + honorMembers[y]).append(honorFlag);
      }
   }

   function getServerStatus() {
      $.getJSON(statusUrl, function (statusInfo) {
         /*Code bellow forces status to appear as OFFLINE (during maintenance tasks etc)
         $('#status_text').css('color', 'red');
         $('#status_text').html('Offline');
         $('#players_num').html(null);
         playerList = [];
         return false;*/

         /*Normal code for displaying server status*/
         if (statusInfo.error) {
            alarm = 1;
            $('#status_text').css('color', 'red');
            $('#status_text').html('Offline');
            $('#players_num').html(null);
            playerList = [];
            return false;
         } else {
            alarm = 0;
            $('#status_text').css('color', '#80ff00');
            $('#status_text').html('Online');
            $('#players_num').html('Jugadores online: ' + statusInfo.players.online);
            /*Temporary disabled
            var players = statusInfo.players.sample.map(player => "<li id='" + player.name + "'>" + player.name + "</li>");
            $('#players_list').html(players);
            rankTags();*/
         }
if (alarm === 1) {
   $('audio#beep')[0].play()
}
      });
   }

   setInterval(getServerStatus, 2000);

});