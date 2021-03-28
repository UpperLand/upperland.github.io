//based on a pen by @robinselmer
const url = "https://api.minetools.eu/ping/45.35.63.82/19427";

function getServerData() {
   $.getJSON(url, function (info) {
      //data is the JSON string
      if (info.error) {
         $('#status_color').css('color', 'red');
         $('#status_color').html('Offline');
         return false;
      } else {
         $('#status_color').css('color', '#80ff00');
         $('#status_color').html('Online');
      }
   });
};
setInterval(getServerData, 1000);