import { Point } from "../Point2D";

describe("A Point", () => {
   let pt: Point;
   beforeAll(() => {
   });
   describe("Without Initialization", () => {
	  beforeAll(() => {
		 pt = new Point();
	  });
	  test.todo("Should exist.");
	  test.todo("Should have an 'x' value of 0.");
	  test.todo("Should have a 'y' value of 0.");
	  test.todo("Should be (0, 0).");
	  test.todo("Should be '(0, 0)'.");
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
