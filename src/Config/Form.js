const FormConfig = [
    {
        title: 'Personal Details',
        fields: [
            {
                name: 'Username',
                placeholder: 'Please enter your username',
                inputType: 'text',
                type: 'input',
                required: true
            },
            {
                name: 'Password',
                placeholder: 'Please enter your password',
                inputType: 'text',
                type: 'input',
                required: true
            }
        ],
        cta : [{
            name: 'Next',
            type: 'button',
            action: 'next',
            class: 'form-button-info'
        }]
    },
    {
        title: 'Address Details',
        fields: [
            {
                name: 'Address',
                placeholder: 'Please enter your Address',
                inputType: 'text',
                type: 'textarea',
                required: true
            },
            
        ],
        cta : [{
            name: 'Previous',
            type: 'button',
            action: 'previous',
            class: 'form-button-info'
        },
        {
            name: 'Submit',
            type: 'button',
            action: 'submit',
            class: 'form-button'
        }
    ]
    },
]

export default FormConfig;