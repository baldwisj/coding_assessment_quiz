const userSet = document.getElementById('user-initials')

function renderScores() {
    const renderInitials = JSON.parse(localStorage.getItem('initialsForm'));
    console.log(renderInitials);
    const indiv = document.createElement("li");
    userSet.append(indiv);
    indiv.setAttribute("id", "scoreList");
    const userListItem = document.getElementById("scoreList");
    
    userListItem.innerHTML = renderInitials.initials + " " + renderInitials.scores;
    
}
renderScores();