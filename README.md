# domanjavona
Libraries pour pouvoir générer du code Html en utilisant un écriture de style spécifique, presque similaire à Vue.js


# Prerequis
Un éditeur de text. 
Connaitre javascript. 
Un navigateur. 

:smirk:(Pas de webpack, babel, node_modules, ...).

# Utilisation
Implémentation facile au niveau du code, au debut de votre page ajoutez!

```
<script src="domanjavona.js"></script>
```
Vous pouvez l'utiliser sois en spécifiant l'élément à appliquer le rendu, sois en générant un code html réutilisable.

Templating normal sur Javascript:
```
<script src="jquery.js"></script>
<script src="domanjavona.js"></script>
<div id="app"></div>
<script>

	const mock = [
		{ 'color': 'red', 'shape': 'rond' },
		{ 'color': 'bleu', 'shape': 'rond' },
		{ 'color': 'rouge', 'shape': 'rond' },
		{ 'color': 'vert', 'shape': 'rond' },
	];

	var ligne = "";

	// COde en utilisant le templating methode
	mock.forEach( element =>
	{
		ligne += "<tr><td>" + element.color + "</td><td>" + element.shape + "</td></tr>";
	} )
	$( "#app" ).html( ligne );
</script>
```

utilisant **domanjavona**:
```
<script src="jquery.js"></script>
<script src="domanjavona.js"></script>
<div id="app"></div>
<script>

	const mock = [
		{ 'color': 'red', 'shape': 'rond' },
		{ 'color': 'bleu', 'shape': 'rond' },
		{ 'color': 'rouge', 'shape': 'rond' },
		{ 'color': 'vert', 'shape': 'rond' },
	];

	var ligne = "";

	// Code en utilisant domanjavona
	mock.forEach( element =>
	{
		ligne += Zhtml( {
			selector: "tr",
			text: Zhtml( { selector: "td", text: element.color } ) +
				Zhtml( { selector: "td", text: element.shape } )
		} );
	} );

	Zrender( { selector: "table", elementId: "app", text: ligne } );
</script>
```

# Documentation 
> En cours
