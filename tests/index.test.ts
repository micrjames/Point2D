import { Point } from "../Point2D";

describe("A Point", () => {
   let pt: Point;
   let negOne: number
   let zero: number;
   let one: number;
   let zeroPt: Point;
   let onePt: Point;
   let negOnePt: Point;
   let oneZeroPt: Point;
   let point: Point;
   let pointStr: string;
   beforeAll(() => {
	  zero = 0;
	  one = 1;
	  negOne = -1;
	  zeroPt = new Point(0, 0);
	  onePt = new Point(1, 1);
	  negOnePt = new Point(-1, -1);
	  oneZeroPt = new Point(1, 0);
   });
   describe("Without Initialization", () => {
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
		 point = pt.pt;
		 pointStr = pt.toString();
	  });
	  describe("And No Alteration of Values", () => {
		 test("Should exist.", () => {
			expect(pt).toBeDefined();
		 });
		 test("Should have an 'x' value of 1.", () => {
			const x = pt.x;
			expect(x).toBe(one);
		 });
		 test("Should have a 'y' value of 1.", () => {
			const y = pt.y;
			expect(y).toBe(one);
		 });
		 test("Should be (1, 1).", () => {
			expect(point).toEqual(onePt);
		 });
		 test("Should be '(1, 1)'.", () => {
			const onePtStr = onePt.toString();
			expect(pointStr).toBe(onePtStr);
		 });
	  });
	  describe("And Alteration of Values", () => {
		 describe("Setting a Point", () => {
			describe("With a Point", () => {
			   beforeAll(() => {
				  pt.pt = new Point(-1, -1);
				  point = pt.pt;
				  pointStr = pt.toString();
			   });
			   test("Should have an 'x' value of -1.", () => {
				  const x = pt.x;
				  expect(x).toBe(negOne);
			   });
			   test("Should have a 'y' value of -1.", () => {
				  const y = pt.y;
				  expect(y).toBe(negOne);
			   });
			   test("Should be (-1, -1).", () => {
				  expect(point).toEqual(negOnePt);
			   });
			   test("Should be '(-1, -1)'.", () => {
				  const negOnePtStr = negOnePt.toString();
				  expect(pointStr).toBe(negOnePtStr);
			   });
			});
			describe("With the Point Values", () => {
			   beforeAll(() => {
				  pt.x = -1;
				  pt.y = -1;
				  point = pt.pt;
			   });
			   test("Should have an 'x' value of -1.", () => {
				  const x = pt.x;
				  expect(x).toBe(negOne);
			   });
			   test("Should have a 'y' value of -1.", () => {
				  const y = pt.y;
				  expect(y).toBe(negOne);
			   });
			   test("Should be (-1, -1).", () => {
				  expect(point).toEqual(negOnePt);
			   });
			   test("Should be '(-1, -1)'.", () => {
				  const negOnePtStr = negOnePt.toString();
				  expect(pointStr).toBe(negOnePtStr);
			   });
			});
		 });
		 describe("Translating the Values of the Point", () => {
			beforeAll(() => {
			   pt.translate(1, 1);
			   point = pt.pt;
			   pointStr = pt.toString();
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
		 describe("Moving the Point", () => {
			beforeAll(() => {
			   pt.move(1, 0);
			   point = pt.pt;
			   pointStr = pt.toString();
			});
			test("Should have an 'x' value of 1.", () => {
			   const x = pt.x;
			   expect(x).toBe(one);
			});
			test("Should have a 'y' value of 0.", () => {
			   const y = pt.y;
			   expect(y).toBe(zero);
			});
			test("Should be (1, 0).", () => {
			   expect(point).toEqual(oneZeroPt);
			});
			test("Should be '(1, 0)'.", () => {
			   const oneZeroPtStr = oneZeroPt.toString();
			   expect(pointStr).toBe(oneZeroPtStr);
			});
		 });
	  });
	  describe("Comparing two Points", () => {
		 let ptsEqual: boolean;
		 let pt: Point;
		 beforeAll(() => {
			pt = new Point(1, 0);
			ptsEqual = pt.equals(oneZeroPt);
		 });
		 test("Should be Equal.", () => {
			expect(ptsEqual).toBeTruthy();
		 });
	  });
   });
});
