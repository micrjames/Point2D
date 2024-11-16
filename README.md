# Point2D
A 2D Point class implementation.
## Table Of Contents
* [General Info](#general-info)
* [Technologies Used](#technologies-used)
* [Features](#features)
* [Setup](#setup)
* [Usage](#usage)
* [Project Status](#project-status)
* [Room for Improvement](#room-for-improvement)
* [Contact](#contact)

## General Info
Like so many projects before, this project is written to facilitate the creation of other projects. I decided not to use an array as the basic container for the data to be held in the Tree. As JavaScript/Typescript is so object-centric these days, especially since es6, I decided to create an array-like object with an iterator and implement a Tree using that as the data container.

## Technologies Used
Only plain, vanilla Typescript is used with no libraries or other packages.

## Features
* Create a point from either an *x* or *y* value or from another *Point* definition.
* Retrieve these values, *x*, *y*, or the *Point* defintion.
* Set those values, *x*, *y*, or the *Point* defintion.
* Compare two *Point*s and check whether their values are equal.
* Alter the position of the *Point*.
    * Move the *Point* to another position.
    * Translate the *Point* to another position by *dx* and *dy* values.

## Setup
Simply import the *Point* class into the project in the usual way.

## Usage
Given a *Point* object.
```
    let pt: Point;
```
Create a *Point* by instantiating it by:
    * Specifying no constructor arguments.
```
    pt = new Point();
```
    * Specifying the each of *x* and *y* component values of the *Point*.
```
    pt = new Point(x, y);
```
Retrieve the component values of the *Point*.
```
    const x = pt.x;
    const y = pt.y;
```
Similarly, we can get the values of the *Point*.
```
    pt.pt;
```
We can also check whether two Points are equal. If we already have another Point, *otherPt*,
```
    pt.equals(otherPt);
```
Furthermore, we can relocate the *Point* within the confines of a 2D, in this case, coordinate system.
    * Move the *Point* to another location.
    move(x: number, y: number)
    * Translate the *Point* by some amount of each of its component values.
```
    pt.translate(dx, dy);
```

## Project Status
As this code is intended to be a part of a project in itself, this project is still in progress and will be until that project is completed. 
 
## Room for Improvement
The areas where there may be some room for improvement are those where some properties may be better suited to be public and thereby a couple functions should be removed.
 
## Contact
Feel free to contact me @michaelrjamesjr on twitter. 
