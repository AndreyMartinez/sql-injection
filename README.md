SQL-INJECTIONS
=================

[![npm version](https://badge.fury.io/js/sql-injections.svg)](https://badge.fury.io/js/sql-injections)


It is a small frontend library that seeks to find in the fields of the forms
some sql injection


EXAMPLE
-----

If any value is detected with injection sql it will return true, otherwise it will return false 

RESULT
----- 
result of the following line
Import project with react , vue ,angular

	
```
import sqlInjection from 'sql-injections'	
```

Import project with node

	
```
const sqlInjection require sqlInjection	
```

Example
----- 

	
```
let text = "SELECT * FROM "
 let result = sqlInjection.hasSql(text)
console.log(result)
```

RESULT
----- 
true

Second example
----- 
	
```
let text = "Your name "
 let result = sqlInjection.hasSql(text)
console.log(result)
```

RESULT
----- 
false
