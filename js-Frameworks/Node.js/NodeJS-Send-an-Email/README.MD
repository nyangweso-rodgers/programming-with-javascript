# Node.js Send an Email

# The Nodemailer Module
* The __Nodemailer__ module makes it easy to send emails from your computer. The __Nodemailer__ module can be downloaded and installed using npm:

    ```cdm
        C:\Users\Your Name>npm install nodemailer
    ```

* After you have downloaded the Nodemailer module, you can include the module in any application:

    ```js
        var nodemailer = require('nodemailer');
    ```

# Send an Email
* Now you are ready to send emails from your server.
* Use the username and password from your selected email provider to send an email. This tutorial will show you how to use your Gmail account to send an email:

    ```js
        // Example

        var nodemailer = require('nodemailer');

        var transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'youremail@gmail.com',
            pass: 'yourpassword'
        }
        });

        var mailOptions = {
        from: 'youremail@gmail.com',
        to: 'myfriend@yahoo.com',
        subject: 'Sending Email using Node.js',
        text: 'That was easy!'
        };

        transporter.sendMail(mailOptions, function(error, info){
        if (error) {
            console.log(error);
        } else {
            console.log('Email sent: ' + info.response);
        }
        });
    ```

* And that's it! Now your server is able to send emails.

# Multiple Receivers
* To send an email to more than one receiver, add them to the "to" property of the mailOptions object, separated by commas:

    ```js
        // Example

        // Send email to more than one address:

        var mailOptions = {
        from: 'youremail@gmail.com',
        to: 'myfriend@yahoo.com, myotherfriend@yahoo.com',
        subject: 'Sending Email using Node.js',
        text: 'That was easy!'
        }
    ```

# Send HTML
* To send HTML formatted text in your email, use the "html" property instead of the "text" property:

    ```js
        // Send email containing HTML:
        var mailOptions = {
        from: 'youremail@gmail.com',
        to: 'myfriend@yahoo.com',
        subject: 'Sending Email using Node.js',
        html: '<h1>Welcome</h1><p>That was easy!</p>'
        }
    ```