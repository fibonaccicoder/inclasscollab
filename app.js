$(document).ready(function(){

	var searchTerm;
	var numRecords=2;
	var startYear = 20100101;
	var endYear =20180101;

	//var APIKey = "7a543ee853d441988ae0c83eea0ba36e";

	var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?q=" + "trump" + "&api_key=40a0d8e56ff84c42ae6b9d78e99bcc95" + "&limit=" + numRecords + "&begin_date="; + startYear + "&end_date=" + endYear;

	console.log(queryURL);


	function searchNYTimes(){
		$.ajax({
			url: queryURL,
			method: "GET"
		}).then(function(data){
			var results = data.response;
			for (var i =0; i<results.length; i++){
			var articleDiv = $("<div>");
			var headline = $("<h2>").innerHTML(data.response.docs[i].headline.main);
			var writtenBy = $("<h3").innerHTML(data.response.docs[i].byline.original);
			var date = $("<p>").innerHTML(data.response.docs[i].pub_date);
			var articleURL = $("h4").innerHTML(data.response.docs[i].web_url);

			$("#article-div").append(articleDiv);
			articleDiv.append(headline, writtenBy, date, articleURL);
		}
		})

		}

	}

	function displayArticles(){

	}

searchNYTimes();
})