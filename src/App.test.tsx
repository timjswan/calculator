import React from 'react';
import { render } from '@testing-library/react';
import { shallow, mount } from 'enzyme';
import { Provider } from 'react-redux';
import store from './redux/store';
import App from './App';
import Equals from './components/atoms/equals';
import Calc from './components/organisms/calc';

test('matches snapshot', () => {
  const calc = shallow(
    <Provider store={store}>
        <Calc />
    </Provider>,
  );

  expect(calc).toMatchSnapshot();
});

test('renders tims calc', () => {
  const { getByText } = render(    
    <Provider store={store}>
        <App />
    </Provider>,
  );
  const linkElement = getByText(/tim's calc/i);
  expect(linkElement).toBeInTheDocument();
});

test('renders equals without crashing', () => {
  shallow(
    <Provider store={store}>
        <Equals />
    </Provider>,
  );
});

test('adds 1 + 2', () => {
  const calc = mount(
    <Provider store={store}>
        <Calc />
    </Provider>,
  );
  calc.find('input').at(0).simulate('change', { target: { name: 'screen', value: 1 } });
  calc.find('Button[children="+"]').simulate('click');
  calc.find('input').at(0).simulate('change', { target: { name: 'screen', value: 2 } });
  calc.find('Button[children="="]').simulate('click');
  expect(calc.find('input').at(0).prop('value')).toEqual('3');
});

