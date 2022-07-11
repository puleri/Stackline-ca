import React from "react";
import { shallow, configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import Product from "../js/components/Product";
import Table from "../js/components/Table";

configure({ adapter: new Adapter() });

describe("components", () => {
  describe("Product", () => {
    it("should render a <div> element", () => {
      const wrapper = shallow(<Product />);
      const div = wrapper.find("div");
      expect(div.exists()).toBeTruthy();
    });
    it("should contain a <figure> element with a child <img> element that has a src attribute equal to {props.src}", () => {
      const wrapper = shallow(<Product src="google.com" />);
      const figure = wrapper.find("figure");
      const img = figure.find("img");
      expect(figure.exists()).toBeTruthy();
      expect(img.exists()).toBeTruthy();
      expect(img.props().src).toEqual("google.com");
    });
    it("the <figure> element should contain a child <figcaption> element with text equal to {props.title} and an id equal to 'title'", () => {
      const wrapper = shallow(<Product title="Cool Product" />);
      const figure = wrapper.find("figure");
      const figcaptions = figure.find("figcaption");
      const figcaption = figcaptions.find("#title");
      expect(figcaption.exists()).toBeTruthy();
      expect(figcaption.text()).toEqual("Cool Product");
    });
    it("the <figure> element should contain a child <figcaption> element with text equal to {props.subtitle} and an id equal to 'subtitle'", () => {
      const wrapper = shallow(<Product subtitle="Nice subtitle" />);
      const figure = wrapper.find("figure");
      const figcaptions = figure.find("figcaption");
      const figcaption = figcaptions.find("#subtitle");
      expect(figcaption.exists()).toBeTruthy();
      expect(figcaption.text()).toEqual("Nice subtitle");
    });
    it("should contain tags passed in from {props.tags}", () => {
      const wrapper = shallow(<Product tags="[<span>Tag</span>]" />);
      const spans = wrapper.find("#spans");
      expect(spans.props().children).toEqual("[<span>Tag</span>]");
    });
    it("should contain icons passed in from {props.icons}", () => {
      const wrapper = shallow(<Product icons="<Component />" />);
      const icons = wrapper.find("#icons");
      expect(icons.props().children).toEqual("<Component />");
    });
  });

  describe("Table", () => {
    it("should render a <div> element", () => {
      const wrapper = shallow(<Table />);
      const div = wrapper.find("div");
      expect(div.exists()).toBeTruthy();
    });
    it("should contain a <table> element", () => {
      const wrapper = shallow(<Table />);
      const table = wrapper.find("table");
      expect(table.exists()).toBeTruthy();
    });
    it("the <table> element should contain a <thead> element", () => {
      const wrapper = shallow(<Table />);
      const table = wrapper.find("table");
      const thead = table.find("thead");
      expect(thead.exists()).toBeTruthy();
    });
    it("the <table> element should contain a <tbody> element", () => {
      const wrapper = shallow(<Table />);
      const tbody = wrapper.find("tbody");
      expect(tbody.exists()).toBeTruthy();
    });
    it("should contain <td> elements that are passed in from {props.rows}", () => {
      const wrapper = shallow(
        <Table
          rows={
            <tr>
              <td>Test</td>
            </tr>
          }
        />
      );
      const td = wrapper.find("td");
      expect(td.exists()).toBeTruthy();
    });
    it("has an onClick method", () => {
      const fakeFunction = jest.fn();
      const wrapper = shallow(<Table sortBy={fakeFunction} />);
      const th = wrapper
        .find("thead")
        .find("tr")
        .find("th")
        .first();
      th.simulate("click");
      expect(fakeFunction).toHaveBeenCalledTimes(1);
    });
  });
});
