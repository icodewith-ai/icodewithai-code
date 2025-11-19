// =============================================================================
// NEWSLETTER FORM - Client-side validation and form handling
// =============================================================================

(function () {
    'use strict';

    // Configuration
    const CONFIG = {
        errorMessages: {
            firstName: "First name is required",
            lastName: "Last name is required",
            email: "Please enter a valid email address",
            emailInvalid: "Email format is invalid"
        },
        successMessage: "Thank you for subscribing! You have been added to our newsletter list."
    };

    // Form elements
    let form, thankYouMessage;
    let fields = {};

    // Initialize when DOM is ready
    function init() {
        form = document.getElementById('newsletter-form');
        thankYouMessage = document.getElementById('thank-you-message');

        if (!form || !thankYouMessage) {
            // It's possible this script is loaded but the form isn't present (though unlikely with current layout)
            return;
        }

        // Get all form fields
        fields = {
            firstName: document.getElementById('firstName'),
            lastName: document.getElementById('lastName'),
            email: document.getElementById('email')
        };

        setupEventListeners();
    }

    // Setup event listeners
    function setupEventListeners() {
        // Add onBlur validation for each field
        Object.keys(fields).forEach(fieldName => {
            if (fields[fieldName]) {
                fields[fieldName].addEventListener('blur', () => validateField(fieldName));
            }
        });

        // Add form submit handler
        form.addEventListener('submit', handleSubmit);
    }

    // Validate individual field
    function validateField(fieldName) {
        const field = fields[fieldName];
        const errorElement = document.getElementById(fieldName + '-error');

        if (!field || !errorElement) return false;

        let isValid = true;
        let errorMessage = '';

        switch (fieldName) {
            case 'firstName':
            case 'lastName':
                if (!field.value.trim()) {
                    isValid = false;
                    errorMessage = CONFIG.errorMessages[fieldName];
                }
                break;

            case 'email':
                if (!field.value.trim()) {
                    isValid = false;
                    errorMessage = CONFIG.errorMessages.email;
                } else if (!isValidEmail(field.value)) {
                    isValid = false;
                    errorMessage = CONFIG.errorMessages.emailInvalid;
                }
                break;
        }

        // Update field state and show/hide error
        updateFieldState(field, errorElement, isValid, errorMessage);
        return isValid;
    }

    // Update field visual state and error message
    function updateFieldState(field, errorElement, isValid, errorMessage) {
        const formGroup = field.closest('.form-group');

        if (isValid) {
            formGroup.classList.remove('has-error');
            errorElement.textContent = '';
            errorElement.classList.remove('show');
        } else {
            formGroup.classList.add('has-error');
            errorElement.textContent = errorMessage;
            errorElement.classList.add('show');
        }
    }

    // Email validation helper - requires valid TLD (min 2 characters)
    function isValidEmail(email) {
        // More strict: requires at least 2 character TLD (.com, .ai, etc.)
        const emailRegex = /^[^\s@]+@[^\s@]+\.[a-zA-Z]{2,}$/;
        return emailRegex.test(email);
    }

    // Handle form submission
    function handleSubmit(event) {
        event.preventDefault();

        // Validate all fields
        const fieldsToValidate = Object.keys(fields);
        const validations = fieldsToValidate.map(fieldName => validateField(fieldName));
        const fieldsValid = validations.every(valid => valid);

        if (fieldsValid) {
            proceedWithSubmission();
        } else {
            // Focus on first invalid field
            const firstInvalidField = fieldsToValidate.find(fieldName => {
                const errorElement = document.getElementById(fieldName + '-error');
                return errorElement && errorElement.classList.contains('show');
            });

            if (firstInvalidField && fields[firstInvalidField]) {
                fields[firstInvalidField].focus();
            }
        }
    }


    // Proceed with actual form submission after validation
    async function proceedWithSubmission() {
        // Final validation
        const allValidations = Object.keys(fields).map(fieldName => validateField(fieldName));
        const allValid = allValidations.every(valid => valid);

        if (!allValid) {
            console.error('Form submission failed final validation');
            return;
        }

        // Show loading state
        const submitButton = form.querySelector('button[type="submit"]');
        const originalText = submitButton.textContent;
        submitButton.textContent = 'Subscribing...';
        submitButton.disabled = true;

        try {
            // Prepare form data
            const formData = {
                firstName: fields.firstName.value.trim(),
                lastName: fields.lastName.value.trim(),
                email: fields.email.value.trim()
            };

            // Submit to Netlify function
            // Note: Using absolute URL to allow local testing against production backend (once deployed)
            const response = await fetch('https://ibuildwithai.netlify.app/.netlify/functions/newsletter-signup', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });

            const result = await response.json();

            if (response.ok && result.success) {
                // Success - show success message
                showSuccessMessage();
            } else {
                // Server returned an error
                throw new Error(result.error || 'Failed to subscribe');
            }
        } catch (error) {
            console.error('Form submission error:', error);

            // Show error message to user
            alert('Sorry, there was an error subscribing you. Please try again later or contact us directly.');

            // Reset button
            submitButton.textContent = originalText;
            submitButton.disabled = false;
        }
    }

    // Show success message and hide form
    function showSuccessMessage() {
        // Hide form
        form.style.display = 'none';

        // Update and show thank you message
        const thankYouTitle = thankYouMessage.querySelector('h3');
        const thankYouText = thankYouMessage.querySelector('p');

        if (thankYouTitle) {
            thankYouTitle.textContent = 'Thank you for subscribing!';
        }
        if (thankYouText) {
            thankYouText.textContent = CONFIG.successMessage;
        }

        thankYouMessage.style.display = 'block';

        // Scroll to thank you message
        thankYouMessage.scrollIntoView({ behavior: 'smooth' });
    }

    // Initialize when DOM is ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }

})();
