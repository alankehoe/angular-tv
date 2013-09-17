'use strict';

function MainCtrl($scope, $http) {

    // Variables
    $scope.apiKey = "6f950ea6ed5ae98f5af25c6925488b5c";
    $scope.results = [];
    $scope.availableGenres = [];
    $scope.availableNetworks = [];
    $scope.orderFields = ["Air Date", "Rating"];
    $scope.orderDirections = ["Descending", "Ascending"];
    $scope.orderField = "Air Date"; //Default order field
    $scope.orderReverse = false;

    // Models
    $scope.filterText = null;
    $scope.genreFilter = null;
    $scope.networkFilter = null;

    // Functions
    $scope.init = function () {
        //API requires a start date
        var today = new Date();
        //Create the date string and ensure leading zeros if required
        var apiDate = today.getFullYear() + ("0" + (today.getMonth() + 1)).slice(-2) + "" + ("0" + today.getDate()).slice(-2);
        $http.jsonp('http://api.trakt.tv/calendar/premieres.json/' + $scope.apiKey + '/' + apiDate + '/' + 30 + '/?callback=JSON_CALLBACK').success(function (data) {
            //As we are getting our data from an external source,
            //we need to format the data so we can use it to our desired effect
            //For each day, get all the episodes
            angular.forEach(data, function (value, index) {
                //The API stores the full date separately from each episode. Save it so we can use it later
                var date = value.date;
                //For each episode add it to the results array
                angular.forEach(value.episodes, function (tvshow, index) {
                    //Create a date string from the timestamp so we can filter on it based on user text input
                    tvshow.date = date; //Attach the full date to each episode
                    $scope.results.push(tvshow);

                    $scope.availableNetworks.push(tvshow.show.network);

                    //Loop through each genre for this episode
                    angular.forEach(tvshow.show.genres, function(genre, index) {
                        //Only add to the availableGenres array if it doesn't already exist
                        var exists = false;
                        angular.forEach($scope.availableGenres, function(avGenre, index) {
                            if(avGenre == genre) {
                                exists = true;
                            }
                        });
                        if (exists === false) {
                            $scope.availableGenres.push(genre);
                        }
                    });
                });
            });
        }).error(function (error) {

            });
    };

    $scope.setGenreFilter = function(genre) {
        $scope.genreFilter = genre;
    };

    $scope.customOrder = function(tvshow) {
        switch ($scope.orderField) {
            case "Air Date":
                return tvshow.episode.first_aired;
                break;
            case "rating":
                return tvshow.episode.ratings.percentage;
                break;
        }
    };
};

function MapCtrl($scope) {
    angular.extend($scope, {
        center: {
            latitude: 0, // initial map center latitude
            longitude: 0 // initial map center longitude
        },
        markers: [], // an array of markers,
        zoom: 8 // the zoom level
    });
}

function ErrorCtrl($scope) {
    $scope._error = function() {
        document.body.style.backgroundColor="#f3f3f3";
    }
}

