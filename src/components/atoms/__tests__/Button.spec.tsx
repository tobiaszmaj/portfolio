import React from 'react';
import Button from 'components/atoms/Button/Button';
// @ts-ignore
import { render } from 'tests/test-utils';
import { theme } from 'theme/mainTheme';

describe('Button', () => {
    it('renders text properly', () => {
        const { getByText } = render(<Button>test</Button>);
        const button = getByText(/test/i);

        expect(button).toBeInTheDocument();
    });

    it('renders proper color', () => {
        const { getByText } = render(<Button color="red">color test</Button>);
        const button = getByText(/color test/i);

        expect(button).toHaveStyle(`background-color: ${theme.red}`);
    });
});