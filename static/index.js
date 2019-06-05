var app = angular.module("myApp", ["ngRoute"]);

app.config(function($routeProvider){
    $routeProvider
    .when("/", {
        templateUrl: "main.htm"
    })
    .when("/profile", {
        templateUrl: "profile.htm"
    })
    .when("/new", {
        templateUrl: "new.htm"
    })
    .when("/about", {
        templateUrl: "about.htm"
    })
    .when("/donate", {
        templateUrl: "donate.htm"
    })
    .when("/movie-1", {
        templateUrl: "movie.htm",
        controller: "filmController",
        resolve: {
            cnt: function($route){ $route.current.params.cnt = '1'; }
        }
    })
    .when("/movie-2", {
        templateUrl: "movie.htm",
        controller: "filmController",
        resolve: {
            cnt: function($route){ $route.current.params.cnt = '2'; }
        }
    })
    .when("/movie-3", {
        templateUrl: "movie.htm",
        controller: "filmController",
        resolve: {
            cnt: function($route){ $route.current.params.cnt = '3'; }
        }
    })
    .when("/movie-4", {
        templateUrl: "movie.htm",
        controller: "filmController",
        resolve: {
            cnt: function($route){ $route.current.params.cnt = '4'; }
        }
    })
    .when("/movie-5", {
        templateUrl: "movie.htm",
        controller: "filmController",
        resolve: {
            cnt: function($route){ $route.current.params.cnt = '5'; }
        }
    })
    .otherwise({
        templateUrl: "main.htm"
    });
});

app.controller('filmController', function($scope, $http, $routeParams){
    var count = $routeParams.cnt;
    db = "./static/databases/movie_" + count + ".json";
    console.log('count = ', count);
    $http.get(db).then(
        function(response){
            $scope.movie = response.data;
            console.log($scope.movie);
        },
        function(error){
            console.log("Error for upload movie info: " + error);
        });
});