const initialDisplay = document.getElementById("user-initials");

function renderScores() {
    const renderInitials = localStorage.getItem('initialsForm',JSON.parse(getInitials));
    

    initialDisplay.textContent = renderInitials;
}