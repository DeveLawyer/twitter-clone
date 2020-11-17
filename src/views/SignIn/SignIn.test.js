import React from 'react';
import { render } from '@testing-library/react';
import SignIn from './SignIn';

describe('SignIn Suite', () => {
  it('should set the button as disabled when the fields are invalid', async () => {
    const { findByText } = render(<SignIn loggedIn={false} onLoggedInChange={Function.prototype} />);

    const button = await findByText('Iniciar sesión');
    expect(button).toHaveProperty('disabled', true);
  });
});