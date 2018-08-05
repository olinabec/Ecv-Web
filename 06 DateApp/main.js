var app = angular.module('myApp', []);
app.controller('myCtrl', function($scope) {
    $scope.isMaleSelected = false;
    $scope.isFemaleSelected = false;


    $scope.loadPersonList = function load(){
        $scope.personList = [];
        $('#content').empty();
        $('#content').append("<H1>Added by Jquery</H1>");

        $(document).ready(function(){
                $.get('https://randomuser.me/api?results=5').then(function(data){
                    var results = data.results

                    results.forEach(element => {
                    let person = {
                            name : element.name.first + " " + element.name.last,
                            gender : element.gender,
                            age : element.dob.age,
                            email : element.email,
                            address : element.location.street + " " + element.location.city + " " + element.location.state,
                            idName : element.id.name,
                            idValue : element.id.value,
                            picture : element.picture.large
                    }

                    debugger;
                    if($scope.isMaleSelected && person.gender == "male")
                    {
                        $scope.personList.push(person);
                        
                        $('#content').append("<div>"  + person.name + "</div><div>" + person.gender + "</div><div>" + person.age + "</div><div>" + person.email + "</div><div>" + person.address + "</div><div>" + person.idName + "</div><div>" + person.idValue + "</div>")
                        $('#content').append("<a href='Detail.html?id=" + person.idValue + " target='_self' ><img src=" + person.picture + "></a>")
                    }
                    else if($scope.isFemaleSelected && person.gender == "female")
                    {
                        $scope.personList.push(person);

                        $('#content').append("<div>"  + person.name + "</div><div>" + person.gender + "</div><div>" + person.age + "</div><div>" + person.email + "</div><div>" + person.address + "</div><div>" + person.idName + "</div><div>" + person.idValue + "</div>")
                        $('#content').append("<a href='Detail.html?id=" + person.idValue + " target='_self' ><img src=" + person.picture + "></a>")
                    }
                    else
                    {
                        $scope.personList.push(person);

                        $('#content').append("<div>"  + person.name + "</div><div>" + person.gender + "</div><div>" + person.age + "</div><div>" + person.email + "</div><div>" + person.address + "</div><div>" + person.idName + "</div><div>" + person.idValue + "</div>")
                        $('#content').append("<a href='Detail.html?id=" + person.idValue + " target='_self' ><img src=" + person.picture + "></a>")
                    }
                });
            })
        })
    }

    $scope.loadPersonList();
});

