// Reminder Form Handler
// Handles form submission for reminder widgets

document.addEventListener('DOMContentLoaded', function() {
    // Find all reminder forms on the page
    const reminderForms = document.querySelectorAll('[data-reminder-form]');
    
    reminderForms.forEach(function(form) {
        initializeReminderForm(form);
    });
});

function initializeReminderForm(form) {
    const formId = form.id;
    
    // Get form elements
    const firstNameField = form.querySelector('input[name="firstName"]');
    const lastNameField = form.querySelector('input[name="lastName"]');
    const emailField = form.querySelector('input[name="email"]');
    const submitButton = form.querySelector('button[type="submit"]');
    const buttonText = submitButton.querySelector('.button-text');
    const buttonLoading = submitButton.querySelector('.button-loading');
    
    // Get message containers
    const successMessage = document.getElementById(formId + '-success-message');
    const errorContainer = document.getElementById(formId + '-error-message');
    const errorMessageP = errorContainer.querySelector('p');
    
    // Get error message elements
    const firstNameError = document.getElementById(formId + '-firstName-error');
    const lastNameError = document.getElementById(formId + '-lastName-error');
    const emailError = document.getElementById(formId + '-email-error');

    // Validation functions
    function validateRequired(field, errorElement, fieldName) {
        const value = field.value.trim();
        if (!value) {
            showFieldError(errorElement, `${fieldName} is required`);
            return false;
        }
        hideFieldError(errorElement);
        return true;
    }

    function validateEmail(field, errorElement) {
        const value = field.value.trim();
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        
        if (!value) {
            showFieldError(errorElement, 'Email is required');
            return false;
        }
        
        if (!emailRegex.test(value)) {
            showFieldError(errorElement, 'Please enter a valid email address');
            return false;
        }
        
        hideFieldError(errorElement);
        return true;
    }

    function showFieldError(errorElement, message) {
        errorElement.textContent = message;
        errorElement.classList.add('show');
        errorElement.parentNode.classList.add('has-error');
    }

    function hideFieldError(errorElement) {
        errorElement.textContent = '';
        errorElement.classList.remove('show');
        errorElement.parentNode.classList.remove('has-error');
    }

    function clearAllErrors() {
        hideFieldError(firstNameError);
        hideFieldError(lastNameError);
        hideFieldError(emailError);
        errorContainer.style.display = 'none';
    }

    function showGlobalError(message) {
        errorMessageP.textContent = message;
        errorContainer.style.display = 'block';
    }

    function setLoadingState(isLoading) {
        if (isLoading) {
            submitButton.disabled = true;
            buttonText.style.display = 'none';
            buttonLoading.style.display = 'inline';
        } else {
            submitButton.disabled = false;
            buttonText.style.display = 'inline';
            buttonLoading.style.display = 'none';
        }
    }

    // Real-time validation on blur
    firstNameField.addEventListener('blur', function() {
        validateRequired(firstNameField, firstNameError, 'First name');
    });

    lastNameField.addEventListener('blur', function() {
        validateRequired(lastNameField, lastNameError, 'Last name');
    });

    emailField.addEventListener('blur', function() {
        validateEmail(emailField, emailError);
    });

    // Form submission handler
    form.addEventListener('submit', async function(e) {
        e.preventDefault();
        
        // Clear previous errors
        clearAllErrors();
        
        // Validate all fields
        const isFirstNameValid = validateRequired(firstNameField, firstNameError, 'First name');
        const isLastNameValid = validateRequired(lastNameField, lastNameError, 'Last name');
        const isEmailValid = validateEmail(emailField, emailError);
        
        if (!isFirstNameValid || !isLastNameValid || !isEmailValid) {
            return;
        }

        // Set loading state
        setLoadingState(true);

        try {
            // Prepare form data
            const formData = {
                firstName: firstNameField.value.trim(),
                lastName: lastNameField.value.trim(),
                email: emailField.value.trim(),
                pageUrl: window.location.href,
                pageTitle: document.title
            };

            console.log('Submitting reminder form:', {
                firstName: formData.firstName,
                lastName: formData.lastName,
                email: formData.email,
                pageUrl: formData.pageUrl,
                pageTitle: formData.pageTitle
            });

            // Submit to Netlify function
            const functionUrl = window.location.hostname === 'localhost' 
                ? 'https://icodewithai.netlify.app/.netlify/functions/reminder-form'
                : '/.netlify/functions/reminder-form';
            
            const response = await fetch(functionUrl, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData)
            });

            const result = await response.json();

            if (response.ok && result.success) {
                // Success - hide form and show thank you message
                form.style.display = 'none';
                successMessage.style.display = 'block';
                console.log('Reminder form submitted successfully');
            } else {
                // Server returned an error
                const errorMessage = result.error || 'An error occurred. Please try again.';
                showGlobalError(errorMessage);
                console.error('Reminder form submission error:', errorMessage);
            }

        } catch (error) {
            // Network or other error
            console.error('Reminder form submission failed:', error);
            showGlobalError('Unable to submit form. Please check your connection and try again.');
        } finally {
            // Remove loading state
            setLoadingState(false);
        }
    });
}