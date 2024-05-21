
export const FORM_LABELS = {
  name: 'Name',
  password: 'Password',
  email: 'Email',
  age: 'Age',
  site: 'Site',
  role: 'Role'
}

export const FORM_PLACEHOLDERS = {
  name: 'Enter name',
  password: 'Enter password',
  email: 'Enter email',
  age: 'Enter age',
  site: 'Enter site',
  role: 'Enter role'
}


export const FORM_SUCCESS = {
  name: 'Good!',
  password: 'Good!',
  email: 'Good!',
  age: 'Good!',
  site: 'Good!',
  role: 'Good!'
}

export const FORM_ERRORS: any = {
  name: '',
  password: '',
  email: '',
  age: '',
  site: '',
  role: ''
}

export const VALIDATION_MESSAGES: any = {
  name: {
    required: 'Name is required',
    minlength: 'Min 4 length',
    maxlength: 'Max 15 length'
  },
  password: {
    required: 'Password is required',
    minlength: 'Min 7 length',
    maxlength: 'Max 25 length'
  },
  email: {
    required: 'Email is required',
    emailValidator: 'Invalid format'
  },
  age: {
    required: 'Age is required',
    rangeValidator: 'Invalid format',
    minRange: 'Min age 1',
    maxRange: 'Max age 122'
  },
  site: {
    required: 'Site is required',
    urlNotAllowed: 'Invalid format',
    pending: 'Checking...'
  },
  role: {
    required: 'Role is required'
  }
}

export const ROLES: string[] = ['Gost', 'Moderator', 'Admin']
