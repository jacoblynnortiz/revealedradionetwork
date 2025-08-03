const revenueTabSectionsContainer = document.getElementById('revenue-tab-sections');

const revenueTabsContainer = document.querySelector('.revenue-tabs-container');
const revenueTabsList = revenueTabsContainer.querySelector('ul');
const revenueTabButtons = revenueTabsList.querySelectorAll('a');
const revenueTabSections = revenueTabSectionsContainer.querySelectorAll('.revenue-tab-section');

revenueTabButtons.forEach((tab, index) => {
    if (index === 1) {
        revenueTabSections[index].classList.remove('tab-hidden');
    } else {
        revenueTabSections[index].classList.add('tab-hidden');
    }
});

revenueTabsContainer.addEventListener('click', (e) => {
    const clickedTab = e.target.closest("a");

    if (!clickedTab) return;

    e.preventDefault();

    // determins which tab you clicked to reveal said tab and hide the others

    const activeSectionId = clickedTab.getAttribute("href");
    const activeSection = document.getElementById(activeSectionId);
    revenueTabSections.forEach((section) => {
        section.classList.add('tab-hidden');
    });
    activeSection.classList.remove('tab-hidden');

    // determins which tab to change styling for if it is active or not and makes the others inactive

    let allTabs = revenueTabsList.querySelectorAll("a");

    for (let tab = 0; tab < allTabs.length; tab++) {
        allTabs[tab].classList.add('revenue-tab-inactive');
        allTabs[tab].classList.remove('revenue-tab-active');
    }

    clickedTab.classList.add('revenue-tab-active');
    clickedTab.classList.remove('revenue-tab-inactive');
});

revenueTabsContainer.addEventListener('click', (e) => {
    e.preventDefault();
});