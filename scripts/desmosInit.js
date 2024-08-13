// Something

var elt = document.getElementById('calculator');
var calculator = Desmos.GraphingCalculator(elt);

class InputElement {
	constructor(key, defaultValue, desmosLabel) {
		this.key = key;
		this.defaultValue = defaultValue;

		this.desmosLabel = desmosLabel;
		calculator.setExpression({
			id: this.key,
			latex: desmosLabel + "=" + defaultValue
		});

		this.span = document.getElementById(key + "-span");
		this.MQField = MQ.MathField(this.span, {
			handlers: {
				edit: function(_) {
					calculator.setExpression({
						id: key,
						latex: desmosLabel + "=" + _.latex()
					})
				}
			}
		});
		this.MQField.latex(defaultValue)
	}
};

