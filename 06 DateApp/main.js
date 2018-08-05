var app = angular.module('myApp', []);
app.controller('myCtrl', function($scope) {
    $scope.title = "John";
    $scope.content = "Doe";
    var item = {title : $scope.title, content : $scope.content};
    var item2 = {title: "Title2", content : "Content2"};
    $scope.todoList = [item, item2];

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

                $scope.personList.push(person);

                $('#content').append("<div>"  + person.name + "</div><div>" + person.gender + "</div><div>" + person.age + "</div><div>" + person.email + "</div><div>" + person.address + "</div><div>" + person.idName + "</div><div>" + person.idValue + "</div>")
                $('#content').append("<a href='Detail.html?id='" + person.idValue + "' target='_self' ><img src=" + person.picture + "></a>")
                    console.log(element)
                });
            })
        })
    }
});

