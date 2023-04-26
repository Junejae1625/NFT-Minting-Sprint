import { render } from '@testing-library/react';

import App from './App';

describe('<App />', () => {
  it('should render the App', () => {
    const { container, getByText } = render(<App />);

    getByText('App');
    expect(container.firstChild).toBeInTheDocument();
  });
});
