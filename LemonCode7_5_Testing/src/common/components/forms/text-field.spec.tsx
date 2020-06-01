import { TextField } from "./text-field";
import { FieldRenderProps } from 'react-final-form';
import { render } from '@testing-library/react';
import React from "react";

describe('Commons components forms TextField specs', () => {

    it('Render empty. Show input field empty', () => {
        // Arrange
        const dataTestId = 'textFieldInput'
        const value = '';
        const props: FieldRenderProps<any, any> = {
            input: {
                name: '',
                onChange: () => { },
                value,
                onBlur: () => { },
                onFocus: () => { }
            } as any,
            meta: '',
            'data-testid': dataTestId
        };

        // Act
        const { getByTestId } = render(<TextField {...props} />);

        const inputElement = getByTestId(dataTestId) as HTMLInputElement;

        // Assert
        expect(inputElement).toBeInTheDocument();
        expect(inputElement.value).toEqual(value);
    });

    it('Render with text when change. Show input field with text when change', () => {
        // Arrange
        const dataTestId = 'textFieldInput'
        const value = 'testValue';
        const props: FieldRenderProps<any, any> = {
            input: {
                name: '',
                onChange: () => { },
                value,
                onBlur: () => { },
                onFocus: () => { }
            } as any,
            meta: '',
            'data-testid': dataTestId
        };

        // Act
        const { getByTestId } = render(<TextField {...props} />);

        const inputElement = getByTestId(dataTestId) as HTMLInputElement;

        // Assert
        expect(inputElement).toBeInTheDocument();
        expect(inputElement.value).toEqual(value);
    });

    it('Render with error text', () => {
        // Arrange
        const dataTestId = 'textFieldInput'
        const value = '';
        const error = 'Error test'
        const props: FieldRenderProps<any, any> = {
            input: {
                name: '',
                onChange: () => { },
                value,
                onBlur: () => { },
                onFocus: () => { }
            } as any,
            meta: {
                error,
                touched: true
            },
            'data-testid': dataTestId
        };

        // Act
        const { getByText } = render(<TextField {...props} />);

        const errorElement = getByText(error);

        // Assert
        expect(errorElement).toBeInTheDocument();
        expect(errorElement.textContent).toEqual(error);
    });

});