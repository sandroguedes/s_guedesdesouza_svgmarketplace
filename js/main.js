(() =>
{
console.log('fired!');
let iconState = document.querySelectorAll('.iconbox')
function clickState(EventObject)
{
	let activeIcon = EventObject.currentTarget;
	activeIcon.classList.toggle('selected')
	addToCount()
}
iconState.forEach(function(icon) {icon.addEventListener('click', clickState, true)})
function addToCount()
{
	const countElement = document.querySelector('.qty_number')
	countElement.dataset.qty_number = document.querySelectorAll('.iconbox.selected').length
	countElement.innerHTML = countElement.dataset.qty_number
}
})();