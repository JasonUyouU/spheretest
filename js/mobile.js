var windowWidth = window.innerWidth;
var maxDeviceWidth = 768;

if (windowWidth < 768) {
	$(function () {	
	$('.time')
	.mousedown(openWindow)
});
}

// Get the modal
var modal = document.getElementById('myModal');

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal 
function openWindow() {
    modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
var button = document.getElementById('modalButton');

button.onclick = function() {
	var startDay = document.getElementById('startDay')
	var startTime = document.getElementById('startTime')
	var startAmPm = document.getElementById('startAmPm').value;
	var endDay = document.getElementById('endDay')
	var endTime = document.getElementById('endTime')
	var endAmPm = document.getElementById('endAmPm').value;
	var endDayValue = endDay.value;

	var startDayIndex = document.getElementById('startDay').selectedIndex;
	var startTimeIndex = document.getElementById('startTime').selectedIndex;
	var endDayIndex = document.getElementById('endDay').selectedIndex;
	var endTimeIndex = document.getElementById('endTime').selectedIndex;

	var e =[];
	var f = [];


	if (startDayIndex > endDayIndex) {
		var dayDifference = endDayIndex - startDayIndex + 7;
	} else {
		var dayDifference = endDayIndex - startDayIndex;
	}


	if (startTimeIndex > endTimeIndex) {
		var timeDifference = endTimeIndex - startTimeIndex + 24;
	} else {
		var timeDifference = endTimeIndex - startTimeIndex;
	}

	// if (startAmPm === endAmPm && endTimeIndex > startTimeIndex) {
	// 	var timeDifference = endTimeIndex - startTimeIndex;
	// } else if(startAmPm === endAmPm && startTimeIndex > endTimeIndex) {
	// 	var timeDifference = endTimeIndex - startTimeIndex + 24;
	// }


	for (i = 0; i <= dayDifference; i++) {
		if (startDayIndex + i > 6) {
			//startDayIndex goes back to 0
			e = startDay.options[i + startDayIndex - 7].value;
		} else {
			e = startDay.options[i + startDayIndex].value;	
		}
		for(j = 0; j <= timeDifference; j++){
			if (startTimeIndex + j > 23) {
				f = startTime.options[j + startTimeIndex - 24].value;
			} else {
				f = startTime.options[j + startTimeIndex].value;
			}
		}
	console.log(e)	
	if(startDay !== endDay) {
		for(h = 0; h <= 24 - timeDifference; h++)
			
		}
}
}