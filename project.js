// Form validation (basic)
document.getElementById('form').addEventListener('submit', function(event) {
    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let phone = document.getElementById('phone').value;
    let country = document.getElementById('country').value;

    if (!name || !email || !phone || !country) {
        event.preventDefault();
        alert("Please fill in all the fields.");
    }
});
