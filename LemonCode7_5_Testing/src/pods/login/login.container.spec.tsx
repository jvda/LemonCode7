import * as React from 'react';
import { HashRouter, Switch, Route, Router, useHistory, MemoryRouter } from 'react-router-dom';
import { render, waitFor, fireEvent } from '@testing-library/react';
import { createMemoryHistory } from 'history';
import * as LoginApi from './login.api';
import { LoginContainer } from '.';
import { switchRoutes, SessionProvider } from 'core';

describe('Login container specs', () => {

    it('Login with valids credentials', async () => {
        //Arrange
        const validateCredentialResult: boolean = true;
        const credentials = {
            login: 'testLogin',
            password: 'testPassword'
        };
        const history = createMemoryHistory({ initialEntries: [switchRoutes.root] });
        
        const getStubValidateCredentials = jest.spyOn(LoginApi, 'validateCredentials').mockResolvedValue(validateCredentialResult);
        const getStubAlert = jest.spyOn(window, 'alert').mockImplementation((alert: string) => {});

        //Act
        const { getByTestId, queryByTestId } = render(
            <SessionProvider >
                <Router history={history}>
                    <LoginContainer />
                </Router>
            </SessionProvider>
        );

        //Assert
        const loginElement = await waitFor(() => getByTestId('loginNameField')) as HTMLInputElement;
        const passwordElement = await waitFor(() => getByTestId('passwordNameField')) as HTMLInputElement;
        const buttonElement = await waitFor(() => getByTestId('buttonLogin')) as HTMLButtonElement;

        expect(loginElement).not.toBeNull();
        expect(loginElement).toBeInTheDocument();
        expect(passwordElement).not.toBeNull();
        expect(passwordElement).toBeInTheDocument();
        expect(buttonElement).not.toBeNull();
        expect(buttonElement).toBeInTheDocument();

        await waitFor(() => fireEvent.change(loginElement, { target: { value: credentials.login } }));
        await waitFor(() => fireEvent.change(passwordElement, { target: { value: credentials.password } }));
        await waitFor(() => fireEvent.click(buttonElement));

        expect(loginElement.value).toEqual(credentials.login);
        expect(passwordElement.value).toEqual(credentials.password);
        expect(getStubValidateCredentials).toHaveBeenCalled();
        expect(getStubValidateCredentials).toHaveBeenCalledWith(credentials.login,credentials.password);
        expect(getStubAlert).not.toHaveBeenCalled();
            
        expect(history.location.pathname).toEqual(switchRoutes.hotelCollection);

    });

    it('Login with NO valids credentials', async () => {
        //Arrange
        const validateCredentialResult: boolean = false;
        const credentials = {
            login: 'testLogin',
            password: 'testPassword'
        };
        const history = createMemoryHistory({ initialEntries: [switchRoutes.root] });
        
        const getStubValidateCredentials = jest.spyOn(LoginApi, 'validateCredentials').mockResolvedValue(validateCredentialResult);
        const getStubAlert = jest.spyOn(window, 'alert').mockImplementation((alert: string) => {});

        //Act
        const { getByTestId, queryByTestId } = render(
            <SessionProvider >
                <Router history={history}>
                    <LoginContainer />
                </Router>
            </SessionProvider>
        );

        //Assert
        const loginElement = await waitFor(() => getByTestId('loginNameField')) as HTMLInputElement;
        const passwordElement = await waitFor(() => getByTestId('passwordNameField')) as HTMLInputElement;
        const buttonElement = await waitFor(() => getByTestId('buttonLogin')) as HTMLButtonElement;

        expect(loginElement).not.toBeNull();
        expect(loginElement).toBeInTheDocument();
        expect(passwordElement).not.toBeNull();
        expect(passwordElement).toBeInTheDocument();
        expect(buttonElement).not.toBeNull();
        expect(buttonElement).toBeInTheDocument();

        await waitFor(() => fireEvent.change(loginElement, { target: { value: credentials.login } }));
        await waitFor(() => fireEvent.change(passwordElement, { target: { value: credentials.password } }));
        await waitFor(() => fireEvent.click(buttonElement));

        expect(loginElement.value).toEqual(credentials.login);
        expect(passwordElement.value).toEqual(credentials.password);
        expect(getStubValidateCredentials).toHaveBeenCalled();
        expect(getStubValidateCredentials).toHaveBeenCalledWith(credentials.login,credentials.password);
        expect(getStubAlert).toHaveBeenCalled();
        expect(getStubAlert).toHaveBeenCalledWith(
            'invalid credentials, use admin/test, excercise: display a mui snackbar instead of this alert.'
        );

        expect(history.location.pathname).toEqual(switchRoutes.root);
    });


});