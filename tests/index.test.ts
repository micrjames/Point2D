import { Point } from "../Point2D";

describe("A Point", () => {
   let pt: Point;
   let zero: number;
   let zeroPt: Point;
   beforeAll(() => {
	  zero = 0;
	  zeroPt = new Point(0, 0);
   });
   describe("Without Initialization", () => {
	  let point: Point;
	  let pointStr: string;
	  beforeAll(() => {
		 pt = new Point();
		 point = pt.pt;
		 pointStr = pt.toString();
	  });
	  test("Should exist.", () => {
		 expect(pt).toBeDefined();
	  });
	  test("Should have an 'x' value of 0.", () => {
		 const x = pt.x;
		 expect(x).toBe(zero);
	  });
	  test("Should have a 'y' value of 0.", () => {
		 const y = pt.y;
		 expect(y).toBe(zero);
	  });
	  test("Should be (0, 0).", () => {
		 expect(point).toEqual(zeroPt);
	  });
	  test("Should be '(0, 0)'.", () => {
		 const zeroPtStr = zeroPt.toString();
		 expect(pointStr).toBe(zeroPtStr);
	  });
   });
   describe("With Initialization", () => {
	  beforeAll(() => {
		 pt = new Point(1, 1);
	  });
	  describe("And No Alteration of Values", () => {
		 test.todo("Should exist.");
		 test.todo("Should have an 'x' value of 1.");
		 test.todo("Should have a 'y' value of 1.");
		 test.todo("Should be (1, 1).");
		 test.todo("Should be '(1, 1)'.");
	  });
	  describe("And Alteration of Values", () => {
		 describe("Setting a Point", () => {
			describe("With a Point", () => {
			   beforeAll(() => {
				  pt.pt = new Point(-1, -1);
			   });
			   test.todo("Should have an 'x' value of -1.");
			   test.todo("Should have a 'y' value of -1.");
			   test.todo("Should be (-1, -1).");
			   test.todo("Should be '(-1, -1)'.");
			});
			describe("With the Point Values", () => {
			   beforeAll(() => {
				  pt.x = -1;
				  pt.y = -1;
			   });
			   test.todo("Should have an 'x' value of -1.");
			   test.todo("Should have a 'y' value of -1.");
			   test.todo("Should be (-1, -1).");
			   test.todo("Should be '(-1, -1)'.");
			});
		 });
		 describe("Translating the Values of the Point", () => {
			beforeAll(() => {
			   pt.translate(1, 1);
			});
			test.todo("Should have an 'x' value of 0.");
			test.todo("Should have a 'y' value of 0.");
			test.todo("Should be (0, 0).");
			test.todo("Should be '(0, 0)'.");
		 });
		 describe("Moving the Point", () => {
			beforeAll(() => {
			   pt.move(1, 0);
			});
			test.todo("Should have an 'x' value of 1.");
			test.todo("Should have a 'y' value of 0.");
			test.todo("Should be (1, 0).");
			test.todo("Should be '(1, 0)'.");
		 });
	  });
	  describe("Comparing two Points", () => {
		 let otherPt: Point;
		 let ptsEqual: boolean;
		 beforeAll(() => {
			otherPt = new Point(1, 0);
			ptsEqual = pt.equals(otherPt);
		 });
		 test.todo("Should be Equal.");
	  });
   });
});
