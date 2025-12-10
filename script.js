// Task 1: Verification Log
console.log("Status Manager Started");

// Global variable setup (required for Task 10 using setInterval/clearInterval)
let intervalId = null;

// Use const to target required elements for easier access later in the script
// We use querySelector or getElementById to retrieve specific DOM nodes [3].
const mainTitle = document.querySelector("#main-title");
const toggleButton = document.getElementById("toggle-button");
const statusOutput = document.querySelector("#status-output");
const timerButton = document.getElementById("timer-button");
const controlPanel = document.getElementById("control-panel");
const itemList = document.getElementById("item-list");

/* ======================================= */
// --- Task 3: Selecting and Changing Inner HTML ---

mainTitle.innerHTML = "DOM Project: Ready!";

// Example: mainTitle.innerHTML = "New Title";

/* ======================================= */
// --- Task 4: Attribute Modification ---

toggleButton.setAttribute('data-action', "status-toggle");

// to add the required 'data-action' attribute.

/* ======================================= */
// --- Task 9: Looping and Applying Changes ---

function highlightListItems() {

	// Get all <li> elements
	const items = document.querySelectorAll("li");

	// Loop through them and set the color to blue
	for (let i = 0; i < items.length; i++) {
		items[i].style.color = "blue";
	}
}

// Calling function to run once when page loads
highlightListItems();

/* ======================================= */
// --- Tasks 5, 6, 7 & 8: Toggle Functionality ---

function toggleStatus(e) {

	// Task 5: Toggle the hidden class on the status output div
	statusOutput.classList.toggle("hidden");

	// Task 6: Preventing default anchor behavior
	e.preventDefault();

	// Task 7: Inline styles on the title based on visibility
	if (!statusOutput.classList.contains("hidden")) {

		// If visible, title is highlighted yellow
		mainTitle.style.backgroundColor = "yellow";

		// Task 8: Calling helper function
		statusOutput.appendChild(createTimestamp());

	} else {

		// If hidden, inline style is removed;
		mainTitle.style.backgroundColor = "";
	}
}

// Task 5: Bind toggleStatus on click of toggle-button
toggleButton.addEventListener("click", toggleStatus);

// Task 8: Creating helper function for timestamps
function createTimestamp() {
	const timestamp = new Date().toLocaleString();
	const p = document.createElement("p");
	p.textContent = `Status checked at: ${timestamp}`;
	return p;
}

/* ======================================= */
// --- Task 10: Timed Animation ---

function startFlashing() {

	// Avoid creating multiple intervals if the user clicks repeatedly
	if (intervalId !== null) {
		return
	}

	// Toggle the .hidden class on the control-panel every 500ms
	intervalId = setInterval(() => {
		controlPanel.classList.toggle("hidden");
	}, 500);
}

function stopFlashing() {

	// Only stop if an interval is currently running
	if (intervalId !== null) {
		clearInterval(intervalId);
		intervalId = null;

		// Make sure the control panel is visible when the animation stops
		controlPanel.classList.remove("hidden");
	}

}

// Bind the functions to the timer button
timerButton.addEventListener("click", startFlashing);
timerButton.addEventListener("dblclick", stopFlashing);