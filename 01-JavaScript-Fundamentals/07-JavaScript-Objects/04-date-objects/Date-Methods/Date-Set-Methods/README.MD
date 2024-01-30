# `Date` Set Methods

# `setDate()` Method
* The `setDate()` method allows you to set the `day` of the month for a `Date` object. 

    ```js
        var d = new Date();
        console.log("Original date: " + d); // Output: Original date: Thu Jun 08 2023 21:33:49 GMT+0300 (East Africa Time)

        // or, using setDate()
        var dd = d.setDate(15);
        console.log('Updated date: ' + d); // Output: Updated date: Thu Jun 15 2023 21:33:49 GMT+0300 (East Africa Time)
    ```
* We can use `setDate()` Method to find `Tomorrow's` date:

    ```js
        // tomorrow's date
        const tomorrowFunction = function tomorrow() {
            const day = new Date();

            day.setDate(day.getDate() + 1);

            return day;
        };

        console.log(tomorrowFunction());
    ```