import React from "react";
import { configure, mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import configureStore from "redux-mock-store";
import thunk from "redux-thunk";
import { Provider } from "react-redux";
import json from "../data/Webdev_data.json";
import ProductContainer from "../js/containers/ProductContainer";
import TableContainer from "../js/containers/TableContainer";
import Product from "../js/components/Product";
import Table from "../js/components/Table";

const data = json[0];

configure({ adapter: new Adapter() });

const middlewares = [thunk];
const mockStore = configureStore(middlewares);
let store;

describe("containers", () => {
  describe("ProductContainer", () => {
    beforeEach(() => {
      store = mockStore({ data: data });
    });
    it("renders 1 Product component", () => {
      const wrapper = mount(
        <Provider store={store}>
          <ProductContainer />
        </Provider>
      );
      expect(wrapper.find(Product)).toHaveLength(1);
    });
    it("passes the following items to Product component as props: src, title, subtitle, tags, icons", () => {
      const wrapper = mount(
        <Provider store={store}>
          <ProductContainer />
        </Provider>
      );
      const props = wrapper.find(Product).props();
      expect(props.src).toEqual(store.getState().data.image);
      expect(props.title).toEqual(store.getState().data.title);
      expect(props.subtitle).toEqual(store.getState().data.subtitle);
      expect(props.tags).toBeTruthy();
      expect(props.icons).toBeTruthy();
    });
  });
  describe("TableContainer", () => {
    beforeEach(() => {
      store = mockStore({ data: data });
    });
    it("renders 1 Table component", () => {
      const wrapper = mount(
        <Provider store={store}>
          <TableContainer />
        </Provider>
      );
      expect(wrapper.find(Table)).toHaveLength(1);
    });
    it("passes the following items from state to Table as props: rows", () => {
      const wrapper = mount(
        <Provider store={store}>
          <TableContainer />
        </Provider>
      );
      const props = wrapper.find(Table).props();
      expect(props.rows).toBeTruthy();
    });
  });
});
