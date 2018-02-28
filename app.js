$(document).ready(function () {

	// searchTerm doesn't work
	var searchTerm;
	//  = $("#searchTerm").val();
	var numRecords = 10;
	var startYear = 20100101;
	var endYear = 20180101;


	var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?q=" + searchTerm + "&api_key=40a0d8e56ff84c42ae6b9d78e99bcc95&begin_date=" + startYear + "&end_date=" + endYear;

	console.log(queryURL);


	function searchNYTimes(searchTerm) {
		$.ajax({
			url: queryURL,
			method: "GET"
		}).then(function (data) {
			console.log(data);
			console.log(data.response.docs[0].headline.main);
			console.log(data.response.docs[0].byline.original);
			console.log(data.response.docs[0].pub_date);
			console.log(data.response.docs[0].web_url);
			var results = data.response;

			for (var i = 0; i < numRecords; i++) {

				var articleDiv = $("<div>");
				var headline = $("<h2>").text(data.response.docs[i].headline.main);
				var writtenBy = $("<h3>").text(data.response.docs[i].byline.original);
				var date = $("<p>").text(data.response.docs[i].pub_date);
				var articleURL = $("<a>").attr("href", data.response.docs[i].web_url).text(data.response.docs[i].web_url);

				articleDiv.append(headline, writtenBy, date, articleURL);
				$("#articleDiv").append(articleDiv);


			}
			console.log(queryURL);
		})

	}

	$("#search").on("click", function (event) {
		$("#articleDiv").empty();
		event.preventDefault();
		searchTerm = $("#searchTerm1").val();
		numRecords = $("#numberOfRecords1").val();
		//still need to add the start and end dates, but need to convert the date that is entered to YYYYMMDD
		console.log(searchTerm);
		searchNYTimes(searchTerm);
	});


	$("#clear").on("click", function () {
		$("#articleDiv").empty();
	})



})