// Dynamically set copyright year in footer
document.addEventListener('DOMContentLoaded', function() {
	var yearSpan = document.getElementById('copyright-year');
	if (yearSpan) {
		yearSpan.textContent = new Date().getFullYear();
	}
});
