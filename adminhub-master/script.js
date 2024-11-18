



const allSideMenu = document.querySelectorAll('#sidebar .side-menu.top li a');

allSideMenu.forEach(item=> {
	const li = item.parentElement;

	item.addEventListener('click', function () {
		allSideMenu.forEach(i=> {
			i.parentElement.classList.remove('active');
		})
		li.classList.add('active');
	})
});




// TOGGLE SIDEBAR
const menuBar = document.querySelector('#content nav .bx.bx-menu');
const sidebar = document.getElementById('sidebar');

menuBar.addEventListener('click', function () {
	sidebar.classList.toggle('hide');
})







const searchButton = document.querySelector('#content nav form .form-input button');
const searchButtonIcon = document.querySelector('#content nav form .form-input button .bx');
const searchForm = document.querySelector('#content nav form');

searchButton.addEventListener('click', function (e) {
	if(window.innerWidth < 576) {
		e.preventDefault();
		searchForm.classList.toggle('show');
		if(searchForm.classList.contains('show')) {
			searchButtonIcon.classList.replace('bx-search', 'bx-x');
		} else {
			searchButtonIcon.classList.replace('bx-x', 'bx-search');
		}
	}
})





if(window.innerWidth < 768) {
	sidebar.classList.add('hide');
} else if(window.innerWidth > 576) {
	searchButtonIcon.classList.replace('bx-x', 'bx-search');
	searchForm.classList.remove('show');
}


window.addEventListener('resize', function () {
	if(this.innerWidth > 576) {
		searchButtonIcon.classList.replace('bx-x', 'bx-search');
		searchForm.classList.remove('show');
	}
})



const switchMode = document.getElementById('switch-mode');

switchMode.addEventListener('change', function () {
	if(this.checked) {
		document.body.classList.add('dark');
	} else {
		document.body.classList.remove('dark');
	}
})









//weekly
let circularProgress = document.querySelector(".circular-progress-week"),
progressValue = document.querySelector(".progress-value");

let progressStartValue = 0,
progressEndValue = 90,
speed = 15;

let progress = setInterval(() => {
  progressStartValue++;
  
  progressValue.textContent = `${progressStartValue}%`
  circularProgress.style.background = `conic-gradient(#337ab7 ${progressStartValue * 3.6}deg, #ededed 0deg)`
  
  if(progressStartValue == progressEndValue){
    clearInterval(progress);
  }


}, speed);

//monthly
let circularProgress2 = document.querySelector(".circular-progress-month"),
progressValue2 = document.querySelector(".progress-value2");

let progressStartValue2 = 0,
progressEndValue2 = 77,
speed2 = 20;

let progress2 = setInterval(() => {
  progressStartValue2++;
  
  progressValue2.textContent = `${progressStartValue2}%`
  circularProgress2.style.background = `conic-gradient(#337ab7 ${progressStartValue2 * 3.6}deg, #ededed 0deg)`
  
  if(progressStartValue2 == progressEndValue2){
    clearInterval(progress2);
  }


}, speed2);


//quarterly
let circularProgress3 = document.querySelector(".circular-progress-quarter"),
progressValue3 = document.querySelector(".progress-value3");

let progressStartValue3 = 0,
progressEndValue3 = 69,
speed3 = 20;

let progress3 = setInterval(() => {
  progressStartValue3++;
  
  progressValue3.textContent = `${progressStartValue3}%`
  circularProgress3.style.background = `conic-gradient(#337ab7 ${progressStartValue3 * 3.6}deg, #ededed 0deg)`
  
  if(progressStartValue3 == progressEndValue3){
    clearInterval(progress3);
  }


}, speed2);


//yearly
let circularProgress4 = document.querySelector(".circular-progress-year"),
progressValue4 = document.querySelector(".progress-value4");

let progressStartValue4 = 0,
progressEndValue4 = 76,
speed4 = 20;

let progress4 = setInterval(() => {
  progressStartValue4++;
  
  progressValue4.textContent = `${progressStartValue4}%`
  circularProgress4.style.background = `conic-gradient(#337ab7 ${progressStartValue4 * 3.6}deg, #ededed 0deg)`
  
  if(progressStartValue4 == progressEndValue4){
    clearInterval(progress4);
  }


}, speed4);



// $(document).ready(function(){
// 	$('.notification').hover(function()
// 	{
// 		$(this).notification().addClass('red');
// 	},
// 	function()
// 	{
// 		$(this).notification().removeClass('red');
// 	}
// );
// });