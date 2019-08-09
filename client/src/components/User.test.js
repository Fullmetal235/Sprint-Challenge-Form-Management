import React from 'react';
import {render, fireEvent} from '@testing-library/react'


import User from './User.js'


describe('NewUser component', () => {
    it('renders a new user', () => {
        render(<User/>)
    })
    

    it('update the message when speak button is clicked', () => {
        const { getByTestId, queryByText } = render(<User />);
    
        // the text is not there
        expect(queryByText(/awesome/i)).toBeFalsy();
    
        const button = getByTestId(/awesomeBtn/i);
        fireEvent.click(button);
    
        // after clicking the button, the text is there
        expect(queryByText(/awesome/i)).toBeTruthy();
      });
})