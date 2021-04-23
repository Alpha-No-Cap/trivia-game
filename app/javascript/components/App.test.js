import React from "react";
import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import App from "./App";

Enzyme.configure({ adapter: new Adapter() });

describe('When App renders', () => {
	let renderedApp;
    
	beforeEach(() => {
	  renderedApp = shallow(<App />, { disableLifecycleMethods: true });
	});
  
	it('provides a route with path "/" to Home component', () => {
	  const renderedHomeRoute = renderedApp.find('[path="/"]');
	  expect(renderedHomeRoute.length).toEqual(1);
	});

  it('displays the Header', () => {
    
    const renderedHeader = renderedApp.find('Header');
    expect(renderedHeader.length).toEqual(1);
  });
});