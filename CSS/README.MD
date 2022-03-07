# Cascading Style Sheets (CSS)

## Table of Contents
- []
- [References](#References)


# Inline CSS:
with an __inline CSS__, a unique style is applied to a single element. in order to use an inline style, add the style attribute to the relevant tag.

# Embeded/Internal Css:
Internal styles are defined within the $<$ style $>$ element, inside the $<$ head $>$ section of the HTML page

# CSS Rules and Selectors
a style rule has threee parts: 
1. selectors, 
2. property and 
3. value;

# Type Selectors
are the most common and easy to undersatnd selectors. This selector targets element types on the page.
* to target all the paragraphs on the page
```css
    p {
	color: red;
	font-size: 130%;
    };
```
# ID Selectors
__id selectors__ allow you to style an HTML element that has an id attribute, regardless of their position in the document tree. to select an element with a specific ID, use a hash character, and follow it with the id of the element.

# Class Selectors
__class selectors__ work in a similar way as __ID Selectors__ the major difference is that _ID's can only be applied once per page_, while _class selectors can be used as many times on a page as needed_. to select elements with specific class, use a period character followed by the name of the class.

# Descendant Selectors:
these selectors are used to select elements that are descendants of another element. when selecting levels, you can select as many levels deep as you need to.
```css
    /* to target only <em> elements of the first paragraph of the 'intro' section;*/
    #intro .first em {
	color: pink;
	background-color: grey;
    }
```

# Working with Texts
1. __Font-Family Property__: there are two types of font-family names:
    * font family: a pecific font family (like Times New Roman or Arial)
    * generic family: a group of font families with a similar look (like Serif or Monosapce)
2. __The font-size Property__:you can use numeric values in __pixels__ or __ems__ to manipulate __font size__. the __ems__ size is a relative size unit. it allows all major browsera to resize the text. the browser's default size is 16px

    _Note_: _em = pixels/16_

3. __font-style Property__: it is typically used to specify italic text. it has three values: 
    * normal, 
    * italic, and 
    * oblique;
4. __font-weight Property__: controls the _boldness_ or _thickness_ of the text. the values can be set to:
    * normal(default size), 
    * bold, 
    * bolder and 
    * lighter.

    _Remark_: _you can also define the font weight with a number from 100(thin) to 900(thick)_ 
    * 400 = normal
	* 700 = bold;
5. __Font-variant__: allows you to convert your font to all small caps. the values can be set as:
    * normal, 
    * small-caps, and 
    * inherit
6. __text-align property__: specifies the __horizontal alignment__ of text in an element. by default, text on your website is aligned to the left. __text align property__ values are as follows: 
    * left, 
    * right, 
    * center and 
    * justify; _each line is streteched so that every line has equal width, and the left and right margins are straight (as magazin newpapers)_
7. __verical-align property__: sets an element's vertical alignment. commonly used values are: 
    * top, 
    * middle, and 
    * bottom;
    
    _Remark_: _the vertical-align property also takes the following values:_
    * baseline, 
    * sub, 
    * super, 
    * % and 
    * px (or pt, cm);
8. __text-decoration property__: specifies how the text will be described. commonly used values are:
    * none - _the default value, defines a normal text_
    * inherit- _inherits this property from the parent element_
    * overline- _draws a horizontal line above the text_
    * underline - _drawsa a horizontal line below the text_
    * line-through  - _draws a horizontal line through the text_
    * blink - _makes the text blink - the value is depreciated and most browsers ignore it._

9. __text-indent property__: specifies how much horizontal space should be left before the beginning of the first line of text. property values are 
    * length(px, pt, cm etc), 
    * % and 
    * inherit
    
    _Remark_: _negative values are allowed. the first line will be indented to the left if the values is negative_

10. __text-shadow__: adds shadow to the text; the 
    * first value defines the distance of the shadow in x(horizontal) direction, 
    * the second value sets the distance in the  (vertical) direction, 
    * the third value defines the blur of the shadow and 
    * the fourth value sets the color.

    _Remarks_: 
    * _to add more than one shadow to the text, add a comma seperated list of shadows,_
    * _text-shadow with Blur Effects_: when working with shadows, you can use any CSS supported color formats. for x and y offsets, various types of units can be used (e.g., px, cm, mm, in, pc, pt, e.t.c.,)
    ```css
        /* the eaxample below creates a blue drop-shadow two pixels higher than the main text, one pixel to the left of it, and with a 0.5em blur*/
        h1{
            font-size: 20pt;
            text-shadow: rgba(0, 0, 255, 1) - 1px -2px 0.5em;
        }
    ```
11. __text-transform property__: specifies how to capitalize an element's text. e.g., it can be used to make text appear with each word capitaized. __text-transform values__: 
    * all-uppercase
    * all-lowercase
    * none - _will produce no capitalization effect at all_

12. __letter-spacing property__: specifies the space between characters. the values can be set as:
    * normal - _defines the default style with no extra characters between_
    * length - _defines an extra space between characters using measurement units like px, pt,cm, mm_
    * inherit - _inherits the property from its parent element_.

    _Remark_: _for defining extra spaces between characters, negatie values are also permitted_.

13 __word-spacing property__: specifies spaces between words in a text. values can be set to:
    * normal, 
    * length, and 
    * inherit
14. __white-space property__: specifies how a white-space inside an element is handled. values can be set as 
    * normal, 
    * inherit, 
    * nowwrap -  _makes the text continue on the same line until a break tag is encountered, and also collapse into a single whitespace._

    _Remark_: the __white-space property__ also supports other values:
    * pre - _text will only wrap on line breaks and white space_
    * pre-line - _text will wrap where there is a break in code, but extra white space is still ignored._
    * pre-wrap - _text will wrap when necessary, and on line breaks. behaves as the __pre value__, except that it add extra line breaks to preent the tet breaking out of the element box._

# Box Model Properties
Every element of the webpage is a box. CSS uses the box model to determine how big the boxes are and how to place them. the box model is also used to calculate the actual width and height of the HTML elements. __CSS Box Model__ - represents the design and layout of the site. it consists of 
* margins, 
* borders, 
* paddings, and the 
* actual content.

the properties work in the same order: 
* top, 
* right, 
* bottom, and 
* left

_Remark_: __Total element height = height + top padding + bottom padding + top border + bottom border + top margin + bottom margin__ 

1. __border__: in order to add a border to the element, you need to specify the:
    * size, 
    * style, and 
    * color of the border
2. __border-width__: specifies the width of the border.
3. __border-color__: odefined using:
    * color name, 
    * RGB or 
    * Hex values
4. __border-style__:the default values of __border-style__ is __none__, which defines no border. other styles include: 
    * dotted, 
    * dashed, 
    * double, 
    * grooved, 
    * ridged, 
    * inset, 
    * outset, 
    * hidden
    * none

    _Remark_: In CSS, it's possible to specify different borders for different sides using the following properties:
    * border-top style, border-right style, border-bottom style, border-left style for the corresponding sides

# Minimum and Maximum Sizes Properties
to set the min. and max. height and width of an element, you can use the following properties:
* min-width - the min.width of an element
* max-width - the max. width of an element
* min-height - the min. height
* max-height - the max. height of an element

# Positioning Elements
__Positioning properties__ allow you to position an element. it can also place an element behind another, and specify what should happen when an elements content is too big. elements can be positioned using the 
* top, 
* bottom, 
* left 
* right
1. __Static Positioning__: HTML elements are positioned static by default. a _static positioned element_ is always positioned according to the normal flow of the page.
    ```css
        .static-position {
        position: static;
        /* static positioned elements are not affected by the top, bottom, left and right properties*/
        top: 30px;
        right: 5px;
        color: red;
        }
    ```
2. __Fixed postioning__: an element with fixed position is positioned relative to the browser window and will not moved even if the window is scrolled. the position can be specified using one or more of the properties: 
    * top, 
    * right, 
    * bottom, and 
    * left
    ```css
    /* in the example below,, the paragraph is fixed to 30px from the top and 5px from the right8*/
    .fixed-position {
        position: fixed;
        top: 30px;
        right: 5px;
        color: red;
    }
    ```
3. __Relative Positioning__: a relative positioned element is positioned relative to its normal position. the properties include:
    * top, 
    * right, 
    * bottom, and 
    * left 

    _Remerks_:
    *  _the content of relatively positioned elements can be moved and overlap other elements, but the reserved space for the element is still preserved in the normal flow._
    * _the value cannot be used for table cells, columns, column groups, rows, row groups, or captions_
    ```css
        .relative-position {
            background-color: green;
            color: white;
            position: relative;
            top: 150px;
            left: 50px;
            }
    ```
4. __Absolute Positioning__: an absolute positioned element is positioned relative to its parent element that has a position other than static. if no such element is found, the containing block is $<$ html $>$. an absolute positioned elements are removed from the normal flow. the document and other elements behave like the absolutely positioned element does not exist.

# Working with Images - Properties
1. __background-image__: sets one or several background images in an element. to specify more than one image, just seperate the URL's with commas.
2. __background-repeat__: property specifies how the background images are repeated. a __background-image__ can be repeated along the:
    * horizontal axis, the 
    * vertical axis, 
    * both axes or 
    * not repeated at all
    * the repeat-x will repeat a backgound image only horizontally
    * the repeat-y will repeat background-image only ertically
    * when the background-repeat property is set to __inherit__, it will take the same speciffied value as the property for the element's parent
    * if you want the image to be shown only once, use the non-repeat value.
3. __background-attachment__: sets whether a background image is fixed or scrolls with the rest of the page. even if an element has a scrolling mechanism, a 'fixed' backgorund doesn't move with the element.

# Styling the Lists
1. __list-style__: property can be used to set:
    * circle, 
    * square, 
    * decimal, 
    * disc, 
    * lower-alpha
2. __list-style-image__: specifies an image to be used as the list item marker.
3. __list-style-position__: specifies the position of the marker box(inside, outside). __list-style-position__ outside is the default value.

```css
    ol.lower-alpha{
	list-style-type: lower-alpha;
    }
    .unordered{
        /*list-style-type: circle;
        list-style-image: url();
        list-style-position: inside;*/
        /* shorthand*/
        list-style: square outside none;
    }
```

# Styling Tables
1. __border-collapse__: property specifies whether the table borders are collapsed into a single border or seperated as default.
2. __border-spacing__: if the borders are seperate, the __border-spacing__ property can be used to cahnge the spacing.
3. __caption-side__: specifies the position of a table caption. the values can be set as:
    * top or 
    * bottom
4. __empty-cells__: spescifies whether or not to display borders and background on empty cells in a table. possible values are : 
    * show - _the borders of empty cells are rendered_
    * hide - _the borders of empty cells are not drawn_
5. __table-layout__: specififes how the width of table columns is calculated. the possible values are:
    * auto - _when column or cell width are not explicitly set, the column width will be in proportion to the amount of content in the cells that make up the column._
    * fixed - _when column or cell width are not explicitly set, the column width will not be affected by the amount of content in the cells that make up the column_

    _Remark: the table layout is set to auto by default_
    ```css
        caption {
        caption-side: top;
        }   
        table {
            /*border-collapse: separate;*/
            border-spacing: 20px 40px;
            empty-cells: show;
        }
    ```
# Styling the Links
__Links__ can be styled with any CSS property (e.g., color, font-family, background. e.t.c.,). in addition, links can be styled differently depending on what state they are in. the following pseudo selectors are available:
* a:link - defines the style for normal unvisited link
* a:visited - defines the style for visited links 
* a:active - a link becomes active once you click on it.
* a:hover - a link is hoered when the mouse is over it

_Remarks_: _when setting the style for several link states, there are some order rules:_
* a:hover MUST come after a:link and a:visited
* a:active MUST come after a:hover

# Link's Text Decoration
Bby default, text links are underlined by the browser. one of the most common uses of CSS with links is to remove the underline.
1. __text-decoration__: property is used to remove the underline

_Remark_: _the following properties are used to control the look and feel of links:_
* __border: none__ - removes border from images with links
* __outline:none__ - removes the dotted border on clicked lines in Internet Explorer













# HMTL5 Input Types
* <input type="search"/>
* <input type="tel"/>
* <input type="url"/>
* <input type="email"/>
* <input type="datetimr"/>
* <input type="date"/>
* <input type="month"/>
* <input type="week"/>
* <input type="time"/>
* <input type="datetime-local"/>
* <input type="number"/>
* <input type="range"/>
* <input type="color"/>

# References
1. [CSS Tutorial - W3School](https://www.w3schools.com/css/default.asp)