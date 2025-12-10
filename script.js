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
	
}

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
// Define the startFlashing() and stopFlashing() functions using
// setInterval() and clearInterval() [8, 9], and bind them to the
// timerButton using addEventListener for 'click' and 'dblclick' [10].
