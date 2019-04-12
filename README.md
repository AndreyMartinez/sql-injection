<h1>SQL-INJECTIONS</h1>
<p>It is a small frontend library that seeks to find in the fields of the forms
some sql injection</p>

<h2>EXAMPLE</h2>
<p>If any value is detected with injection sql it will return true, otherwise it will return false </p>

<h2>RESULT <h2>
<p>result of the following line</p>
<p>Import project with react , vue ,angular<p>

	
```
import sqlInjection from 'sql-injections'	
```

<p>Import project with node</p>

	
```
const sqlInjection require sqlInjection	
```

<p>Example</p>

	
```
let text = "SELECT * FROM "
 let result = sqlInjection.hasSql(text)
console.log(result)
```

<p>RESULT<p>
<p>true</p>

<p>Second example</p>

	
```
let text = "Your name "
 let result = sqlInjection.hasSql(text)
console.log(result)
```

<p>RESPULT</p>
<p>false</p>
