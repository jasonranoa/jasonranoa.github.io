---
layout: default
title: Dog
nav_order: 1
parent: Demos using Desmos
permalink: desmos-demos/dog
---



## Slope Field Generator

<div markdown='1'>


$y' = \frac{dy}{dx}=$ 
<span id="diff-eq">xy + y</span>

<div id="calculator" style="width: 100%; height: 400px;"></div>

$x_\text{min}$: <span id="xmin-span"></span>
$x_\text{min}$: <span id="xmax-span"></span>
$n_x$: <span id="xndiv-span">10</span>

$y_\text{min}$: <span id="ymin-span">10</span>
$y_\text{min}$: <span id="ymax-span">10</span>
$n_y$: <span id="yndiv-span">10</span>


<script src="{{ site.url }}/scripts/desmosInit.js"></script>
<script>
	gridOptions = {
		xmin: new InputElement("xmin", 0, "x_{min}"),
		xmax: new InputElement("xmax", 100, "x_{max}"),
		xndiv: new InputElement("xndiv", 10, "n_{x}"),
		ymin: new InputElement("ymin", 0, "y_{min}"),
		ymax: new InputElement("ymax", 100, "y_{max}"),
		yndiv: new InputElement("yndiv", 10, "n_{y}"),
	};
</script>

</div>

