import React from 'react';
import { mount, configure } from 'enzyme'; // test the life cycle event and render components with its child component
import Adapter from 'enzyme-adapter-react-16';
import App from './App';
configure({ adapter: new Adapter() });

// Test Our Render(){} App component
describe('App', () => {
  let app = mount(<App />);

  it('renders the App title', () => {
    console.log(app.debug());
    expect(app.find('h2').text()).toEqual('Note to Self');
  });

  it('render the clear button', () => {
    expect(
      app
        .find('.btn')
        .at(1)
        .text()
    ).toEqual('Clear Note');
  });

  describe('When rendering the form', () => {
    it('Create a Form component', () => {
      expect(app.find('Form').exists()).toBe(true);
    });

    it('Render a FormControl component', () => {
      expect(app.find('FormControl').exists()).toBe(true);
    });

    it('Expect a submit button', () => {
      expect(
        app
          .find('.btn')
          .at(0)
          .text()
      ).toEqual('Submit');
    });
  });
});
