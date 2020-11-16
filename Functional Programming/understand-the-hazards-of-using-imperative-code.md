# Functional Programming: Understand the Hazards of Using Imperative Code

Consider the scenario: you are browsing the web in your browser, and want to track the tabs you have opened. Let's try to model this using some simple object-oriented code.

A Window object is made up of tabs, and you usually have more than one Window open. The titles of each open site in each Window object is held in an array. After working in the browser (opening new tabs, merging windows, and closing tabs), you want to print the tabs that are still open. Closed tabs are removed from the array and new tabs (for simplicity) get added to the end of it.

The code editor shows an implementation of this functionality with functions for tabOpen(), tabClose(), and join(). The array tabs is part of the Window object that stores the name of the open pages.

## Prompt

Examine the code in the editor. It's using a method that has side effects in the program, causing incorrect behaviour. The final list of open tabs, stored in finalTabs.tabs, should be ['FB', 'Gitter', 'Reddit', 'Twitter', 'Medium', 'new tab', 'Netflix', 'YouTube', 'Vine', 'GMail', 'Work mail', 'Docs', 'freeCodeCamp', 'new tab'] but the list produced by the code is slightly different.

Change Window.prototype.tabClose so that it removes the correct tab.

### Before

```javascript
Window.prototype.tabClose = function (index) {

  // Only change code below this line

  var tabsBeforeIndex = this.tabs.splice(0, index); // Get the tabs before the tab
  var tabsAfterIndex = this.tabs.splice(index + 1); // Get the tabs after the tab

  this.tabs = tabsBeforeIndex.concat(tabsAfterIndex); // Join them together

  // Only change code above this line

  return this;
 };
```

### After

```javascript
Window.prototype.tabClose = function (index) {

  // Only change code below this line

  let removedTab = this.tabs.splice(index,1);

  console.log('tab removed:',removedTab);

  // Only change code above this line

  return this;
 };
```

### Full Code

```javascript
/**
 * @var Window : function
 * @param array : An array of strings, representing browser tabs
 */
var Window = function(tabs) {
  this.tabs = tabs;
};

// When you join two windows into one window
Window.prototype.join = function (otherWindow) {
  this.tabs = this.tabs.concat(otherWindow.tabs);
  return this;
};

/**
 * tabOpen
 * @param tab : ? not used
 * @return object?
 */
Window.prototype.tabOpen = function (tab) {
  this.tabs.push('new tab'); // Let's open a new tab for now
  return this;
};

/**
 * tabClose
 * @param int : index where to close
 * @return object : Window object?
 */
Window.prototype.tabClose = function (index) {

  // Only change code below this line

  let removedTab = this.tabs.splice(index,1);

  console.log('tab removed:',removedTab);

  // Only change code above this line

  return this;
 };

/**
 * Create 3 windows
 */
var workWindow = new Window(['GMail', 'Inbox', 'Work mail', 'Docs', 'freeCodeCamp']);
var socialWindow = new Window(['FB', 'Gitter', 'Reddit', 'Twitter', 'Medium']);
var videoWindow = new Window(['Netflix', 'YouTube', 'Vimeo', 'Vine']);

/**
 * @var finalTabs : Array
 * Open a new tab
 * Close tab 3 in videoWindow ('Vimeo')
 * Join videoWindow with socialWindow
 * Close tab 2 in workWindow ('Inbox')
 * Open a new tab in workWindow
 * Join workWindow with socialWindow
 */
var finalTabs = socialWindow
  .tabOpen()
  .join(videoWindow.tabClose(2))
  .join(workWindow.tabClose(1).tabOpen());
console.log(finalTabs.tabs);
```