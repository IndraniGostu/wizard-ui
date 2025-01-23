enum InputType {
    TEXT = 'text',
    PASSWORD = 'password',
    EMAIL = 'email',
    NUMBER = 'number',
    // Add other input types as needed
  }
  
  enum FieldType {
    INPUT = 'input',
    TEXTAREA = 'textarea',
    SELECT = 'select',
    // Add other field types as needed
  }
  
  enum ActionType {
    NEXT = 'next',
    PREVIOUS = 'previous',
    SUBMIT = 'submit',
    // Add other action types as needed
  }
  
  interface Field {
    name: string;
    placeholder: string;
    inputType: InputType;
    type: FieldType;
    required: boolean;
  }
  
  interface CTA {
    name: string;
    type: string;
    action: ActionType;
    class: string;
  }
  
  interface FormSection {
    title: string;
    fields: Field[];
    cta: CTA[];
  }
  
  const FormConfig: FormSection[] = [
    {
      title: 'Personal Details',
      fields: [
        {
          name: 'Username',
          placeholder: 'Please enter your username',
          inputType: InputType.TEXT,
          type: FieldType.INPUT,
          required: true
        },
        {
          name: 'Password',
          placeholder: 'Please enter your password',
          inputType: InputType.PASSWORD,
          type: FieldType.INPUT,
          required: true
        }
      ],
      cta: [
        {
          name: 'Next',
          type: 'button',
          action: ActionType.NEXT,
          class: 'form-button-info'
        }
      ]
    },
    {
      title: 'Address Details',
      fields: [
        {
          name: 'Address',
          placeholder: 'Please enter your Address',
          inputType: InputType.TEXT,
          type: FieldType.TEXTAREA,
          required: true
        }
      ],
      cta: [
        {
          name: 'Previous',
          type: 'button',
          action: ActionType.PREVIOUS,
          class: 'form-button-info'
        },
        {
          name: 'Submit',
          type: 'button',
          action: ActionType.SUBMIT,
          class: 'form-button'
        }
      ]
    }
  ];