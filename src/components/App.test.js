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

  // When the user type in the form
  describe('when creating a note', () => {
    let testNote = 'test  note is here';

    // simulate a change event
    beforeEach(() => {
      app.find('FormControl').simulate('change', {
        // we want our state to update with change value
        target: { value: testNote }
      });
    });

    it('should update a test in the state', () => {
      expect(app.state().text).toEqual(testNote);
    });

    // When the user click on submit
    describe('And submitting the new note', () => {
      // simulate a click event
      beforeEach(() => {
        app
          .find('.btn')
          .at(0)
          .simulate('click');
      });

      it('Add the new to state or update the state with new value', () => {
        console.log(app.state());
        expect(app.state().notes[0].text).toEqual(testNote);
      });
    });
  });
});
