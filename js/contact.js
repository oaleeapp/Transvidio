




var emailInput = document.getElementById('email');
var summitButton = document.getElementById('summitButton');

function addNewRequest(email) {
  // A post entry.
  var requestData = {
	email: email,
  };
  // Get a key for a new Post.
  var newRequestKey = firebase.database().ref().child('requests').push().key;

  // Write the new post's data simultaneously in the posts list and the user's post list.
  var updates = {};
  updates['/requests/' + newRequestKey] = requestData;

  return firebase.database().ref().update(updates);
}

// Bindings on load.
window.addEventListener('load', function() {

  // Bind menu buttons.
  summitButton.onclick = function() {
    addNewRequest(emailInput.value);
  };

}, false);
