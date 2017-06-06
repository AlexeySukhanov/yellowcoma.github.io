	function init() {
		var activeTab = document.getElementsByClassName('tabs__btns__item')
		
		for(var i = 0; i < activeTab.length; i++){
			activeTab[i].onclick = getActiveTabClass;
		}
	}

	function getActiveTabClass(eventObj) {

		// tabs button clear
		var activeTab = document.getElementsByClassName('tabs__btns__item')
		for(var i = 0; i < activeTab.length; i++){
			if(activeTab[i].getAttribute('class') == 'tabs__btns__item tabs__btns__item--active') {
				activeTab[i].setAttribute('class', 'tabs__btns__item')
			}
		}

		// add active class to tabs-button
		var elem = eventObj.target;
		elem.setAttribute('class', 'tabs__btns__item tabs__btns__item--active');

		// tabs-content clear
		var activeTabContent = document.getElementsByClassName('tabs__content');
		for(var y = 0; y < activeTabContent.length; y++){
			activeTabContent[y].setAttribute('class', 'tabs__content');
		}

		// add active class to tabs-content
		for(var i = 0; i < activeTab.length; i++){
			if(activeTab[i].getAttribute('class') == 'tabs__btns__item tabs__btns__item--active') {
				activeTabContent[i].setAttribute('class', 'tabs__content tabs__content--active');
			}
		}
	}

		window.onload = init;


		