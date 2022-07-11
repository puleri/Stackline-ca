import { configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import { SORT } from "../constants";
import { sortBy } from "../js/actions/actions";

configure({ adapter: new Adapter() });

describe("actions", () => {
  describe("sortBy", () => {
    it("should create a SORT action", () => {
      const key = "retailSales";
      const expectedAction = {
        type: SORT,
        key
      };
      expect(sortBy(key)).toEqual(expectedAction);
    });
  });
});
