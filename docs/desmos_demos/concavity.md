---
layout: default
title: Concavity Demo
nav_order: 3
parent: Demos using Desmos
permalink: desmos-demos/concavity
---

## Concavity Demo using Circles

The concavity of a function $f(x)$ on some $x$-value $x=a$ is determined by the sign of its second derivative $f''(x)$ at $x=a$, i.e. $f''(a)$.
If $f''(a)$ is positive, we say that $f(x)$ is concave-up.
If $f''(a)$ is negative, we say that $f(x)$ is concave-down.

We can often determine the concavity of $f(x)$ at $x=a$, i.e. the sign of $f''(a)$, by examining the graph of $f(x)$ at the point $(a, f(a))$ and the behavior of the curve around $(a, f(a))$.
This behavior can be illustrated by osculating circles, as given below.

[View on Desmos](https://www.desmos.com/calculator/i6vozq28ju){: .btn .fs-3 }



<div id="calculator-1" style="width: 100%; height: 400px;"></div>


<script>
	const calcElement = document.getElementById('calculator-1');
	const calculator = Desmos.GraphingCalculator(calcElement, {
		pasteGraphLink: true
	});
	const graphURL = 'https://www.desmos.com/calculator/i6vozq28ju';

	$.getJSON(graphURL).done(data => calculator.setState(data.state));
</script>



