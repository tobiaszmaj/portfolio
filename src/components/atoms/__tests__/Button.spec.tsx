import React from 'react';
import Button from 'components/atoms/Button/Button';
//@ts-ignore
import { render } from 'tests/test-utils';

describe('Dropdown', () => {
    it('renders properly', () => {
        const { getByText } = render(<Button>test</Button>);
        const test = getByText(/test/i);

        expect(test).toBeInTheDocument();
    });
});