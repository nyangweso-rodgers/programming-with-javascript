# Local vs. Session Storage
* Both __local__ and __session storage__ are properties of the window object that let web applications store data locally within the user's browser.

```js
    myStorage = window.localStorage;
    /*myStorage object can be used to access the current origin's local storage space */
```

* __Local Storage__ data has no expiration date while __session storage__ data gets cleared when the tab or browser is closed.
* Both __local__ and __session storage__ survives page refresh.
* If you need to store structured data you need to use __JSON.stringify(object)__ and __JSON.parse(string)__.
* On Private/incognito mode, all stored data (local/session) is wiped after the browser is closed.
* When using __local storage__ every tab with the same origin can access it's data.
* When using __session storage__ every tab with the same origin creates a new session storage, __getItem('fruit')__ can result in two different values in two tabs with the same origin.

# How Do We Save Data?
* The __setItem()__ method, when passed a key name and value, we will add the key to the given Storage object, or object, or update the key's value if it already exists.

```js
    localStorage.setItem('fruits', 'apple');
    sessionStorage.setItem('fruits', 'apple');
    /* Both key and value must be strings. If were any other type, it gets converted to string automatically */
```

* You can see __local/session storage__ under the application tab > storage > Local/Session Storage.

# How Do We Get Data?
* The __getItem()__ method of the Storage Interface, when passed a key name, will return that key's value, or null if they does not exist.

```js
    var apple = localSrorage.getItem('fruit');
    var apple = sessionStorage.getItem('fruit');
```

# How Do We Remove Data?
* The __removeItem()__ method of the Storage interface, when passed a key name, will remove that key from a given storage object if it exists.

```js
    localStorage.removeItem('fruit');
    sessionstorage.removeItem('fruit');
```

# How Do We Remove All Data?
* The __clear()__ method of the Storage interface clears all keys stored in a given Storage object.

```js
    localStorage.clear();
    sessionStorage.clear();
```