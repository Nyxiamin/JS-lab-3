document.getElementById('userForm').addEventListener('submit', function (event) {
    event.preventDefault();
    userForm();
});

function userForm() {
    var firstName = document.getElementById('firstName').value;
    var lastName = document.getElementById('lastName').value;
    var email = document.getElementById('email').value;
    var address = document.getElementById('address').value;
    var city = document.getElementById('city').value;
    var province = document.getElementById('province').value;
    var membership = document.querySelector('input[name="membership"]:checked').value;

    var outputDiv = document.getElementById('user-output');
    outputDiv.innerHTML = "<p>Full Name: " + firstName + " " + lastName + "</p>" +
                          "<p>Email: " + email + "</p>" +
                          "<p>Address: " + address + "<br>" +
                          city + ", " + province + "</p>" +
                          "<p>Membership: " + membership + "</p>";
}
