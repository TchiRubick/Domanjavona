/**
 * Générateur d'un DOM dans le contenue du cible.
 * LE style de templating est plus ou moins similaire à celui de vueJs
 * Ce librarie ne possède aucune restriction d'utilisation, ni Webpack ni babel.
 * Il est utilisable de suite sans des configurations compliqués.
 * @param {string}  selector
 * @param {string}	className
 * @param {string}	idName
 * @param {string}	additionalParams
 * @param {string}	text
 * @param {string}	elementId
 * @param {string}	type
 * @param {string}	src
 * @param {string}	value
 * @param {string}	placeholder
 * @param {boolean}	closingTag
 */
class virtualDom {
	private closingTag: boolean;
	private open: string;
	private close: string;
	private slash: string;
	private result: string;
	private className: string;
	private idName: string;
	private type: string;
	private src: string;
	private value: string;
	private placeholder: string;
	private additionalParams: string;
	private elementId: string;
	private selector: string;
	private text: string;

	constructor(arg: any) {
		this.closingTag = false;
		this.open = "<";
		this.close = ">";
		this.slash = "/";
		this.result = "";
		this.selector = arg.selector || null;
		this.className = arg.className || "";
		this.additionalParams = arg.additionalParams || "";
		this.text = arg.text || "";
		this.elementId = arg.elementId || null;
		this.type = arg.type || "";
		this.src = arg.src || "";
		this.value = arg.value || "";
		this.placeholder = arg.placeholder || "";
		this.idName = arg.idName || "";
	}

	/**
	 * Formattage des attribue
	 * attribue disponible
	 * class, id, type, src, value, placeholder.
	 * Les attribue manquant sont à mentionner dans le additionalParams
	 */
	private parametreFormatter = () => {
		if (this.className !== "") this.ClassNameFunction();
		if (this.idName !== "") this.idNameFunction();
		if (this.type !== "") this.typeFunction();
		if (this.src !== "") this.srcFunction();
		if (this.value !== "") this.valueFunction();
		if (this.placeholder !== "") this.placeholderFunction();
		if (this.additionalParams !== "") this.additionalParamsFunction();
	};

	/**
	 * Ajout des class
	 */
	private ClassNameFunction = () =>
		(this.result += " class='" + this.className + "' ");

	/**
	 * Ajout de l'id
	 */
	private idNameFunction = () =>
		(this.result += " id='" + this.idName + "' ");

	/**
	 * Les paramètres aditionel
	 */
	private additionalParamsFunction = () =>
		(this.result += " " + this.additionalParams + " ");

	/**
	 * Ajout du type
	 */
	private typeFunction = () => (this.result += " type='" + this.type + "' ");

	/**
	 * Ajout de la source
	 */
	private srcFunction = () => (this.result += " src='" + this.src + "' ");

	/**
	 * ajout du value
	 */
	private valueFunction = () =>
		(this.result += " value='" + this.value + "' ");

	/**
	 * ajout du placeholder
	 */
	private placeholderFunction = () =>
		(this.result += " placeholder='" + this.placeholder + "' ");

	/**
	 * Debut du formatage pour une balise ouvert
	 */
	private starting = () => {
		this.parametreFormatter();
		return this.open + this.selector + this.result + this.close;
	};

	/**
	 * Debut et fin de formatage pour une balise fermé
	 */
	private startingClosed = () => {
		this.parametreFormatter();
		return (
			this.open +
			this.selector +
			this.result +
			" " +
			this.slash +
			this.close
		);
	};

	/**
	 * Fin de formatage pour une balise ouvert
	 */
	private ending = () => this.open + this.slash + this.selector + this.close;

	/**
	 * Methode gateway pour tout le traitement
	 */
	public format = () => {
		if (this.closingTag) return this.startingClosed();
		return this.starting() + this.text + this.ending();
	};

	/**
	 * retourne l'id de l'element à modifier
	 */
	public getElement = () => this.elementId;
}

/**
 * Rend le rendu de l'element sur le dom suivant l'id du selecteur
 * @param {object} arg
 */
var Zrender = function(arg: object) {
	var vd = new virtualDom(arg);
	var element = vd.getElement();
	if (element) document.getElementById(element).innerHTML = vd.format();
};

/**
 * Retourne le code générer pour le templating
 * @param {object} arg
 */
var Zhtml = function(arg: object) {
	var vd = new virtualDom(arg);
	return vd.format();
};
