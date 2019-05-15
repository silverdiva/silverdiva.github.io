
app.get("/postal", function (req, res) {
	// Controller
	console.log("Received a request for the postal page");
	var params = {
		result: getResults(req.query)
	};
	res.render("postal", params);
});
app.get("/postal_service", function (req, res) {
	console.log("Received a request for the postal_service page");
	res.render("postal_service");
});
app.get("/calculateShipping", calculate);

	function getResults(data) {
		if (data.submit == 'Add') {
			return add(data.num1, data.num2);
		} else if (data.submit == 'Subtract') {
			return subtract(data.num1, data.num2);
		} else if (data.submit == 'Multiply') {
			return multiply(data.num1, data.num2);
		} else if (data.submit == 'Divide') {
			return divide(data.num1, data.num2);
		} else {
			console.log("Something weird happened. What did you click on????");
		}
	}

	function calculate(request, response) {
		const lb = Number(request.query.lb);
		const oz = Number(request.query.oz);
		const type = request.query.type;

		if (lb == 0 &&
			oz > 4 && (type == "First Class Letter: Stamped" ||
				type == "First Class Letter: Metered")) {
			type = "Large Flat Envelope";
		}
		if (lb == 0 && oz > 13 && type == "First Class Envelopes: Large Flat") {
			type = "First Class Package";
		}
		getPrice(response, lb, oz, type);
	}
	function getPrice(response, lb, oz, type) {
		var price = 0.0;
		switch (type) {
			case "First Class Letter: Stamped":
				price = 1.0;

				break;
			case "First Class Letter: Metered":
				price = 2.0;
				break;
			case "First Class Envelope: Large Flat":
				price = 3.0;
				break;
			case "default":
				price = 4.0;
		}
		const params = {
			lb: lb,
			oz: oz,
			type: type,
			price: price
		};
		response.render("postal/results", params);
	}



