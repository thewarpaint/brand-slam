<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1.00" />
<script src="http://code.jquery.com/jquery-1.10.0.min.js"></script>
<script src="http://ajax.googleapis.com/ajax/libs/angularjs/1.0.6/angular.min.js"></script>
<script src="http://cdnjs.cloudflare.com/ajax/libs/underscore.js/1.4.4/underscore-min.js"></script>
<script src="http://netdna.bootstrapcdn.com/twitter-bootstrap/2.3.2/js/bootstrap.min.js"></script>


<script type="text/javascript">
	/*window.jQuery || document.write('<script type="text/javascript" src="static/js/lib/jquery-1.9.1.min.js"><\/script>');
	window.angular || document.write('<script type="text/javascript" src="static/js/lib/angular-1.0.5.min.js"><\/script>');
	window.jQuery.fn.tooltip || document.write('<script type="text/javascript" src="static/js/lib/bootstrap-2.3.1.min.js"><\/script>');*/
</script>

<script src="static/js/app.js"></script>
<script src="static/js/ng-services.js"></script>
<script src="static/js/ng-controllers.js"></script>
<script src="static/js/timer.js"></script>

<link href="http://netdna.bootstrapcdn.com/twitter-bootstrap/2.3.2/css/bootstrap-combined.min.css" rel="stylesheet">
<link href="static/css/flat-ui.css" rel="stylesheet">
<link href="static/css/main.css" rel="stylesheet">
</head>

<body ng-app="brandSlam" ng-controller="BrandSlamCtrl" ng-style="brands[index].style">
<div id="wrap">
	<div class="container">
		<h1 class="align-center" timer countdown="60" interval="1000">{{ countdown }}</h1>

		<button class="btn btn-large btn-inverse pull-right" ng-click="forward()">Saltar</button>

		<div id="logotype" class="align-center">
			<img ng-src="{{ brands[index].logotypeURL }}">
		</div>
	</div>

	<div id="push"></div>
</div> <!-- #wrap -->

<div id="footer">
	<div class="container"><!-- only with #guess.span12 -->
		<form id="guess-form">
			<input type="text" id="guess" ng-model="guess" class="span12" autofocus><!-- .span12 vs .input-block -->
		</form>
	</div>
</div>
</body>
</html>