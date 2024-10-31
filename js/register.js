let customerCounter = 0;
let vehicleSalesCounter = 0;
let insuranceSalesCounter = 0;

document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const role = document.getElementById('role').value;
    let accountId = '';

    switch (role) {
        case 'customer':
            customerCounter++;
            accountId = `c${String(customerCounter).padStart(3, '0')}`;
            break;
        case 'vehicleSales':
            vehicleSalesCounter++;
            accountId = `v${String(vehicleSalesCounter).padStart(3, '0')}`;
            break;
        case 'insuranceSales':
            insuranceSalesCounter++;
            accountId = `i${String(insuranceSalesCounter).padStart(3, '0')}`;
            break;
    }

    alert(`Registration successful! Your account ID is: ${accountId}`);

    // TODO : send the data to your server
});

document.getElementById('role').addEventListener('change', function() {
    const staffNumberField = document.getElementById('staffNumberField');
    if (this.value === 'vehicleSales' || this.value === 'insuranceSales') {
        staffNumberField.style.display = 'block';
    } else {
        staffNumberField.style.display = 'none';
    }
});

document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const role = document.getElementById('role');
    const name = document.getElementById('name');
    const email = document.getElementById('email');
    const phone = document.getElementById('phone');
    const staffNumber = document.getElementById('staffNumber');
    const terms = document.getElementById('terms');

    let valid = true;

    clearErrors();

    if (!role.value) {
        showError(role, 'Role is required.');
        valid = false;
    }
    if (!name.value.trim()) {
        showError(name, 'Name is required.');
        valid = false;
    }
    if (!email.value.trim()) {
        showError(email, 'Email is required.');
        valid = false;
    } else if (!validateEmail(email.value.trim())) {
        showError(email, 'This email is not valid.');
        valid = false;
    }
    if (!phone.value.trim()) {
        showError(phone, 'Phone number is required.');
        valid = false;
    }
    if ((role.value === 'vehicleSales' || role.value === 'insuranceSales') && !staffNumber.value.trim()) {
        showError(staffNumber, 'Staff number is required.');
        valid = false;
    }
    if (!terms.checked) {
        showError(terms, 'You must agree to the terms.');
        valid = false;
    }

    if (valid) {
        alert("Registration successful!");
    }
});

function showError(input, message) {
    const errorDiv = document.getElementById(input.id + 'Error');
    errorDiv.textContent = message;
    errorDiv.style.display = 'block';
    if (input.type !== 'checkbox') {
        input.classList.add('error-border');
    }
}

function clearErrors() {
    const errorMessages = document.querySelectorAll('.error');
    errorMessages.forEach(error => error.style.display = 'none');

    const errorInputs = document.querySelectorAll('.error-border');
    errorInputs.forEach(input => input.classList.remove('error-border'));
}

function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}