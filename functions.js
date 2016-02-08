function calculateAge(form)
{
	var currentAge = parseInt(form.currentYr.value) - parseInt(form.birthYr.value);

	alert('You are either ' + currentAge + ' or ' + (currentAge-1));
}

function calculateAgeBonus(form)
{
	var year = new Date().getFullYear();
	var currentAge = year - parseInt(form.birthYr2.value);

	alert('Current year is ' + year + '. You are either ' + currentAge + ' or ' + (currentAge-1));
}

function calculateSupply(form)
{
	var amountNeeded = parseInt(form.amountPerDay.value) * (79- parseInt(form.age.value));

	alert('You will need ' + amountNeeded + ' to last you until the ripe old age of 79');
}

function calculateSupplyBonus(form)
{
	var amountNeeded = parseFloat(form.amountPerDay2.value) * (79- parseInt(form.age2.value));

	alert('You will need ' + Math.round(amountNeeded) + ' to last you until the ripe old age of 79');
}

function calcCircumfrence(form)
{
	var circumference = Math.PI * form.radius.value * 2;

	alert('The circumference is ' + circumference);
}

function calcArea(form)
{
	var area = form.radius2.value * form.radius2.value * Math.PI;

	alert('The area is ' + area);
}

function celsiusToFahrenheit(form)
{
	var celsius = form.celsius.value;
	var fahrenheit = ( (celsius * 9) /5 ) + 32;

	alert(celsius + '°C is ' + fahrenheit + '°F');
}

function fahrenheitToCelcius(form)
{
	var fahrenheit = form.fahrenheit.value;
	var celsius = ( (fahrenheit -32) *5 ) / 9;

	alert(fahrenheit + '°F is ' + celsius + '°C');
}