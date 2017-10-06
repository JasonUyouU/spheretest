var windowWidth = window.innerWidth;
var maxDeviceWidth = 768;

if (windowWidth < 768) {
	$(function () {	
	$('.time')
	.mousedown(refresh)
	.mouseup(openWindow)
});
}

function refresh() {
	window.location.reload();
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
	var endDay = document.getElementById('endDay')
	var endTime = document.getElementById('endTime')

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
		var timeDifference = endTimeIndex - startTimeIndex + 48;
	} else {
		var timeDifference = endTimeIndex - startTimeIndex;
	}
	for (i = 0; i <= dayDifference; i++) {
		if (startDayIndex + i > 6) {
			//startDayIndex goes back to 0
			e = startDay.options[i + startDayIndex - 7].value;
		} else {
			e = startDay.options[i + startDayIndex].value;	
		}
		for(j = 0; j <= timeDifference; j++){
			if (startTimeIndex + j > 47) {
				//startTimeIndex goes back to 0
				f = startTime.options[j + startTimeIndex - 48].value;
			} else {
				f = startTime.options[j + startTimeIndex].value;
			}	

			document.querySelector('label[for=' + e + f +']').classList.add('blue');
			modal.style.display = 'none';	

			if (startDayIndex < endDayIndex && startTimeIndex < endTimeIndex) {
				for(k = 0; k < dayDifference; k++) {
					a = startDay.options[startDayIndex + k].value;
					d = startDay.options[k + 1 + startDayIndex].value;
					for(l = 0; l <  48 - endTimeIndex; l++) {
						b = startTime.options[endTimeIndex + l].value;
						for(m = 0; m < startTimeIndex; m++){
							c = startTime.options[m].value;
							document.querySelector('label[for=' + d + c +']').classList.add('blue');
						}
						document.querySelector('label[for=' + a + b +']').classList.add('blue');

					}
				}
			}
			// if (startDayIndex > endDayIndex && startTimeIndex < endTimeIndex) {
			// 	for(k = 0; k < dayDifference; k++) {
			// 		if (startDayIndex + k > 6) {
			// 			//startDayIndex goes back to 0
			// 			e = startDay.options[k + startDayIndex - 7].value;
			// 		} else {
			// 			e = startDay.options[k + startDayIndex].value;	
			// 		}
			// 		for(l = 0; l <  48 - endTimeIndex; l++) {
			// 			z = startTime.options[endTimeIndex + l].value;
			// 			for(m = 0; m < startTimeIndex; m++){
			// 				c = startTime.options[m].value;
			// 				// document.querySelector('label[for=' + e + c +']').classList.add('blue');
			// 			}
			// 			document.querySelector('label[for=' + e + z +']').classList.add('blue');

			// 		}				
			// 	}
			// }
			}
		}
	} 

