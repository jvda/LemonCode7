import * as React from 'react';
import { render, waitFor, fireEvent } from '@testing-library/react';
import { LoginComponent } from './login.component';
import { LoginEntityVm } from './login.vm';

describe('Login component specs', () => {    

    it('should display login with empty fields', async () => {
        // Arrange
        const props = {
            onLogin: jest.fn(),
            initialLogin: {
                login: '',
                password: ''
            } as LoginEntityVm
        };

        // Act
        const { getByTestId } = render(<LoginComponent {...props}/>);

        // Assert
        const loginElement = await waitFor(() => getByTestId('loginNameField')) as HTMLInputElement;
        const passwordElement = await waitFor(() => getByTestId('passwordNameField')) as HTMLInputElement;
        expect(loginElement).not.toBeNull();
        expect(loginElement).toBeInTheDocument();
        expect(loginElement.value).toEqual(props.initialLogin.login);
        expect(passwordElement).not.toBeNull();
        expect(passwordElement).toBeInTheDocument();
        expect(passwordElement.value).toEqual(props.initialLogin.password);
    });

    it('should display login with initial values', async () => {
        // Arrange
        const props = {
            onLogin: jest.fn(),
            initialLogin: {
                login: 'initName',
                password: 'initPassword'
            } as LoginEntityVm
        };

        // Act
        const { getByTestId } = render(<LoginComponent {...props}/>);

        // Assert
        const loginElement = await waitFor(() => getByTestId('loginNameField')) as HTMLInputElement;
        const passwordElement = await waitFor(() => getByTestId('passwordNameField')) as HTMLInputElement;
        expect(loginElement).not.toBeNull();
        expect(loginElement).toBeInTheDocument();
        expect(loginElement.value).toEqual(props.initialLogin.login);
        expect(passwordElement).not.toBeNull();
        expect(passwordElement).toBeInTheDocument();
        expect(passwordElement.value).toEqual(props.initialLogin.password);
    });


    it('should call onLogin', async () => {
        // Arrange
        const props = {
            onLogin: jest.fn(),
            initialLogin: {
                login: 'initName',
                password: 'initPassword'
            } as LoginEntityVm
        };

        // Act
        const { getByTestId } = render(<LoginComponent {...props}/>);

        // Assert
        const buttonElement = await waitFor(() => getByTestId('buttonLogin')) as HTMLButtonElement;

        await waitFor(() => fireEvent.click(buttonElement));

        expect(props.onLogin).toBeCalled();
        expect(props.onLogin).toHaveBeenCalled();
        
    });

});