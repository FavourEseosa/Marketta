const xlScreen = window.matchMedia("(min-width: 993px)");
const lgScreen = window.matchMedia("(max-width: 992px)");
const medScreen = window.matchMedia("(max-width: 768px)");
const smScreen = window.matchMedia("(max-width: 568px)");

{	let toggleMenu = document.getElementById("toggle-menu");
	let menu = document.getElementById("menu");
	let dropdownBtn = document.querySelector('.drop-btn');
	let dropdownContent = document.querySelector(".drop-content");
	let notToggleMenu = document.querySelector("#toggle-menu *");

	toggleMenu.addEventListener("click", ()=>{
		menu.classList.toggle("trans-off");
	});

	dropdownBtn.addEventListener('click', ()=> {
		dropdownContent.classList.toggle('hide');
		// dropdownContent.classList.toggle('trans-off');
		// dropdownContent.classList.toggle('animate__fadeInDown')
	});

	document.body.addEventListener("click", ()=>{
		if( !(menu.classList.contains('hide')) ){
			menu.classList.add("hide");
		}
	})
}
	
{	let menuItems = document.querySelectorAll("#menu li");
	let activeTabTrans = "scale(1.4, 1.4)";
	let activeTabColor = "#000"

	// for (j = 0; j < (menuItems.length - 1); i++){
	// 	menuItems[j].addEventListener('click', 
	// 		activeTab(this, activeTabColor, activeTabTrans)
	// 	);
	// }

	function activeTab(elem, txtColor, trans){
		for (i = 0; i < (menuItems.length - 1); i++){
			menuItems[i].style.color = "";
			menuItems[i].style.transform = "";
		}
		elem.style.color = txtColor;
		elem.style.transiform = trans;
	}
}