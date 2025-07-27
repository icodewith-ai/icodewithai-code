// =============================================================================
// CONTACT FORM - Client-side validation and form handling
// =============================================================================

(function() {
    'use strict';

    // Configuration - Make easily configurable
    const CONFIG = {
        errorMessages: {
            firstName: "First name is required",
            lastName: "Last name is required",
            email: "Please enter a valid email address",
            emailInvalid: "Email format is invalid",
            reason: "Please select a reason for contacting us",
            message: "Message is required",
            captcha: "Please complete the CAPTCHA"
        },
        successMessage: "Thank you. We'll get back to you within 24 hours.",
        reasonOptions: [
            // Will be configured later - make easily configurable
            { value: "podcast", text: "I want to be a guest on the podcast." },
            { value: "partner-up", text: "I want to partner up with you." },
            { value: "training", text: "Interested in getting training from you." },
            { value: "other", text: "Other" }
        ]
    };

    // Form elements
    let form, thankYouMessage;
    let fields = {};
    let recaptchaToken = null;

    // Initialize when DOM is ready
    function init() {
        form = document.getElementById('contact-form');
        thankYouMessage = document.getElementById('thank-you-message');
        
        if (!form || !thankYouMessage) {
            console.error('Contact form elements not found');
            return;
        }

        // Get all form fields
        fields = {
            firstName: document.getElementById('firstName'),
            lastName: document.getElementById('lastName'),
            email: document.getElementById('email'),
            reason: document.getElementById('reason'),
            message: document.getElementById('message'),
            captcha: document.getElementById('captcha')
        };

        setupEventListeners();
        populateReasonDropdown();
        
        // Expose methods for reCAPTCHA callback
        window.contactForm = {
            onRecaptchaSuccess: handleRecaptchaSuccess
        };
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

    // Populate reason dropdown with configurable options
    function populateReasonDropdown() {
        const reasonSelect = fields.reason;
        if (!reasonSelect) return;

        // Clear existing options except the first placeholder
        const placeholder = reasonSelect.querySelector('option[value=""]');
        reasonSelect.innerHTML = '';
        if (placeholder) {
            reasonSelect.appendChild(placeholder);
        }

        // Add configured options
        CONFIG.reasonOptions.forEach(option => {
            const optionElement = document.createElement('option');
            optionElement.value = option.value;
            optionElement.textContent = option.text;
            reasonSelect.appendChild(optionElement);
        });
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
            case 'message':
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
                
            case 'captcha':
                // For reCAPTCHA v3, check if we have a token
                if (!recaptchaToken) {
                    isValid = false;
                    errorMessage = CONFIG.errorMessages.captcha;
                }
                break;
                
            // Reason is optional, so no validation needed
            case 'reason':
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

    // Email validation helper
    function isValidEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }

    // Handle form submission
    function handleSubmit(event) {
        event.preventDefault();
        
        // First validate all fields except CAPTCHA
        const fieldsToValidate = Object.keys(fields).filter(fieldName => fieldName !== 'captcha');
        const validations = fieldsToValidate.map(fieldName => validateField(fieldName));
        const fieldsValid = validations.every(valid => valid);
        
        if (fieldsValid) {
            // If fields are valid, check reCAPTCHA v2
            if (typeof grecaptcha !== 'undefined') {
                // Check if reCAPTCHA v2 is completed
                const response = grecaptcha.getResponse();
                if (response.length > 0) {
                    recaptchaToken = response;
                    proceedWithSubmission();
                } else {
                    // reCAPTCHA not completed
                    validateField('captcha');
                }
            } else {
                // Fallback for when reCAPTCHA is not available
                const captchaField = fields.captcha;
                if (captchaField && captchaField.checked) {
                    recaptchaToken = 'fallback-token';
                    proceedWithSubmission();
                } else {
                    validateField('captcha');
                }
            }
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
    
    // Handle reCAPTCHA success
    function handleRecaptchaSuccess(token) {
        recaptchaToken = token;
        // Clear any CAPTCHA error
        const captchaError = document.getElementById('captcha-error');
        if (captchaError) {
            captchaError.textContent = '';
            captchaError.classList.remove('show');
        }
        // Proceed with form submission
        proceedWithSubmission();
    }
    
    // Proceed with actual form submission after validation and CAPTCHA
    function proceedWithSubmission() {
        // Final validation including CAPTCHA
        const allValidations = Object.keys(fields).map(fieldName => validateField(fieldName));
        const allValid = allValidations.every(valid => valid);
        
        if (allValid) {
            // Form is valid - show success message
            showSuccessMessage();
        } else {
            // This should not happen if we got here, but just in case
            console.error('Form submission failed final validation');
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
            thankYouTitle.textContent = 'Thank you!';
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