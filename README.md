# input-validators-js

A simple npm-package for validating user input like `email`, `password`-strength, `date`-format and so on.

## Installation

`npm i input-validators-js`

Including `input-validators-js` in your project:

```javascript
const validate = require("input-validators-js");
...
```

### Validating `email` formatting

```javascript
validate.validateEmail(emailString);
```

This will return `true` if the string passes the email-regex and `false` if not.

### Validating names

```javascript
validate.validateName(nameString);  
```
This will return `true` if the string passes the name-regex and `false` if not.

### Validating password strength

This function is used to check password strength based on characters present in the passed string.

#### Strong password strength regex
`^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})`

#### Medium password strength regex
`^(((?=.*[a-z])(?=.*[A-Z]))|((?=.*[a-z])(?=.*[0-9]))|((?=.*[A-Z])(?=.*[0-9])))(?=.{6,})`

Passing the password through

```javascript
validate.validatePasswordStrength(passwordString);  
```

will return one of three possible objects:

```json
passwordAccepptable: true, passwordStrength: "strong"
passwordAccepptable: true, passwordStrength: "medium"
passwordAccepptable: false, passwordStrength: "weak"
```

## Validating date-formatting DD/MM/YYYY

```javascript
validate.validateDateFormatDayMonthYear(dateString);
```

This will return `true` if the string passes the date-regex and `false` if not.

## Validating date-formatting YYYY/MM/DD

```javascript
validate.validateDateFormatYearMonthDay(dateString, format);
```

Accepts two parameters:

`dateString` - This is the date which is being validated.
`format` - `number` `0, 1, or 2` which changes formatting regex accordingly:
* `0`- YYYY/M/D and YYYY.M.D
* `1`- YYYY-MM-DD and YYYY-M-D
* `2`- YYYY-MM-DD

Will `return` `true` or `false` if `dateString` passes regex.
