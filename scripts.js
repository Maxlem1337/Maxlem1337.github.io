var codes = ["E314_LeuvenLummen", "E314_LummenLeuven"];
var types = {
  traffic_jam:"Traffic jam",
  accident:"Accident",
  incident:"Incident",
  road_work:"Werken",
  speed_traps:"Speed traps"
};

var typeIcons = {
  traffic_jam:"fa-car",
  accident:"fa-exclamation-triangle",
  incident:"fa-exclamation-triangle",
  road_work:"fa-road",
  speed_traps:"fa-video-camera"
};

var typeClasses = {
  traffic_jam:"traffic_jam",
  accident:"accident",
  incident:"incident",
  road_work:"road_work",
  speed_traps:"speed_traps"
};


$.ajax({
  url: "https://services.vrt.be/traffic/events",
  type: "GET",
  beforeSend: function(xhr) {
    xhr.setRequestHeader('accept', 'application/vnd.traffic.vrt.be.events_1.0+json');
  },
  success: function(data) {
    insertData(data);
  }
});


function insertData(data) {
  //console.log(JSON.stringify(data));
  $("#date > .col-md-12 > .update-nag > .update-text").text(data.issueDate);

  $.each(data.events, function(index,value){
    //console.log(value.route.code);
    if($.inArray(value.route.code, codes) != -1){
      type=types[value.type];
      road=value.route.road;
      roadFrom=value.route.roadFrom;
      roadTo=value.route.roadTo;
      segment=value.segment;
      text = value.text;
      delay = value.delay;

      //$("#events").append("<p>"+type+" op "+road+" "+roadFrom+" - " + roadTo+ " (" + segment + ") " +"</p>");

      $("#events").append(`<div class="col-md-12">
        <div class="update-nag">
          <div class="update-split `+typeClasses[value.type]+`"><i class="fa `+typeIcons[value.type]+`"></i></div>
          <div class="update-text">`+type+" op "+road+" "+roadFrom+" - " + roadTo+ " (" + segment + ")"+" "+value.text+` <label>X</label> </div>
        </div>
      </div>`);

    }
  });



}






$(document).ready(function(){

    $( "#events > .col-md-12 > .update-nag > .update-text" ).click(function() {
        $(this).parent().parent().hide();
    });

    $( "#date" ).click(function() {
      console.log("Show");
        $( "#events > .col-md-12 > .update-nag > .update-text" ).parent().parent().show();
    });

});
