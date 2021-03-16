import React from 'react';
import Project from 'components/organisms/Projects/Project';
// @ts-ignore
import { render } from 'tests/test-utils';

const example = {
    title: 'test title',
    description: 'test description',
    demoLink: 'demo link',
    codeLink: 'code link',
    image: {
        aspectRatio: 1.4895104895104896,
        sizes: '(max-width: 850px) 100vw, 850px',
        src: '/static/4760a2005965bcdda0033b399e4e32bb/3394d/ecommerce-project.png',
        srcSet:
            '/static/4760a2005965bcdda0033b399e4e32bb/e59e6/ecommerce-project.png 213w,\n/static/4760a2005965bcdda0033b399e4e32bb/bce34/ecommerce-project.png 425w,\n/static/4760a2005965bcdda0033b399e4e32bb/3394d/ecommerce-project.png 850w,\n/static/4760a2005965bcdda0033b399e4e32bb/8fe88/ecommerce-project.png 1275w,\n/static/4760a2005965bcdda0033b399e4e32bb/99fc4/ecommerce-project.png 1424w',
        tracedSVG:
            "data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20width='850'%20height='571'%20v…-3-3'%20fill='%23d3d3d3'%20fill-rule='evenodd'/%3e%3c/svg%3e",
    },
    technologies: [
        {
            name: 'some technology',
            icon: {
                publicURL: 'some-icon',
            },
        },
    ],
};

describe('Project', () => {
    it('renders without crashing', () => {
        const { container } = render(
            <Project
                title={example.title}
                demoLink={example.demoLink}
                codeLink={example.codeLink}
                image={example.image}
                description={example.description}
                technologies={example.technologies}
                withServer={true}
                right={false}
            />
        );

        const project = container.querySelector('article');
        expect(project).toBeInTheDocument();
    });

    it('displays every prop', () => {
        const { container, getByText } = render(
            <Project
                title={example.title}
                demoLink={example.demoLink}
                codeLink={example.codeLink}
                image={example.image}
                description={example.description}
                technologies={example.technologies}
                withServer={true}
                right={false}
            />
        );

        const title = container.querySelector('h3');
        const description = container.querySelector('p');
        const serverInfo = getByText(/note:/i);
        const codeLink = getByText(/view code/i);
        const demoLink = getByText(/live demo/i);
        const technology = container.querySelector('li');

        expect(title).toHaveTextContent('test title');
        expect(description).toHaveTextContent('test description');
        expect(serverInfo).toBeInTheDocument();
        expect(codeLink).toHaveAttribute('href', 'code link');
        expect(demoLink).toHaveAttribute('href', 'demo link');
        expect(technology).toHaveTextContent('some technology');
    });
});