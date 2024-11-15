import { pt } from "./IPt";
import { StringBuilder } from "./StringBuilder/StringBuilder";

export class Point {
   protected _pt: pt;

   constructor();
   constructor(x: number, y: number)
   constructor(x?: number, y?: number) {
      this._pt = x && y ? { _x: x, _y: y } : { _x: 0, _y: 0 };
   }
   get pt(): Point {
	  return new Point(this._pt._x, this._pt._y);
   }
   set pt(pt: Point) {
	  this._pt._x = pt.x;
	  this._pt._y = pt.y;
   }

   get x(): number {
	  return this._pt._x;
   }
   get y(): number {
	  return this._pt._y;
   }
   set x(x: number) {
	  this._pt._x = x;
   }
   set y(y: number) {
	  this._pt._y = y;
   }
   equals(pt: Point): boolean {
	  return this._pt._x === pt.x && this._pt._y === pt.y;
   }
   move(x: number, y: number) {
	  this.pt = new Point(x, y);
   }
   translate(dx: number, dy: number) {
	  this._pt._x += dx;
	  this._pt._y += dy;
   }

   toString(): string {
	  const sb = new StringBuilder();
	  sb.append(`${this._pt._x}`)
	  	.append(',')
		.append(' ')
	  	.append(`${this._pt._y}`);
	  return sb.build();
   }
}
