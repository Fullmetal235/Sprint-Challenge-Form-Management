import React from 'react';
import {render, fireEvent} from '@testing-library/react'

import FormikForm from './Form.js'


describe('Form.js', () => {
    it('renders without crashing using react dom', () => {
        render(<FormikForm/>)
      })

    it('should return the value of h2', () => {
     const title = render(<FormikForm />)
     title.getByText(/Registration Form/i)
    })
   

})