import React from 'react';
import {render, fireEvent} from '@testing-library/react'
import "@testing-library/jest-dom/extend-expect";
import '@testing-library/react/cleanup-after-each'

import User from './User.js'


describe('NewUser component', () => {
    it('renders a new user', () => {
        render(<User/>)
    })
})