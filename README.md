<h1>SQL-INJECTIONS</h1>
<p>It is a small frontend library that seeks to find in the fields of the forms
some sql injection</p>

<h2>EXAMPLE</h2>

<p>si detecta algun valor con sql injection retornara true de lo contrario retornara false </p>

<h2>RESULT <h2>
<p>result of the following line</p>

~~~~
import sqlInjection from 'sql-injections'

require sqlInjection from 'sql-injection'
~~~~

```
let text = "SELECT * FROM "
 let result = sqlInjection.hasSql(text)
console.log(result)
```
<h2>RESULT <h2>
<p>result of the following line</p>
