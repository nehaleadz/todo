app.controller('MainController',
    ['$scope', function($scope){
        $scope.title = 'TODO'; 
        $scope.todoList = [];
        
        $scope.addItem = function(){
            $scope.todoList.push({
                text: $scope.todoItem,
                done: false
            });
            $scope.todoItem = "";
        }
        $scope.removeItem = function(){
            var oldList = $scope.todoList;
            $scope.todoList = [];
            angular.forEach(oldList, function(item){
                if (!item.done){
                    $scope.todoList.push(item);
                }
            });
        }
    }]
);