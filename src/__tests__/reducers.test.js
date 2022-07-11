import { configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import { SORT } from "../constants";
import allReducers from "../js/reducers/allReducers";

configure({ adapter: new Adapter() });

describe("reducers", () => {
  it("should handle SORT action type", () => {
    const initialState = {
      data: {
        sales: [
          {
            weekEnding: "2016-01-01",
            retailSales: 3,
            wholesaleSales: 4,
            unitsSold: 887,
            retailerMargin: 123294
          },
          {
            weekEnding: "2016-01-08",
            retailSales: 10,
            wholesaleSales: 22,
            unitsSold: 558,
            retailerMargin: 67230
          }
        ]
      }
    };
    expect(
      allReducers(initialState, {
        type: SORT,
        key: "retailSales"
      }).data.sales[0].weekEnding
    ).toEqual("2016-01-08");
  });
});
