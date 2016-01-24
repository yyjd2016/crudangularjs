
app.controller("countryCtrl", ['$scope', 'bookService', 'bookFactory', function ($scope, bookService, bookFactory) {
    $scope.showModal = false;

    $scope.bookTitle = "La Gozadera";

    function ClearFieldsModal() {
        $scope.bookId = "";
        $scope.bookTitle = "";
        $scope.bookAuthor = "";
        $scope.bookPublisher = "";
        $scope.bookIsbn = "";
    }

    $scope.AddBookModal = function () {
        ClearFieldsModal();
        $scope.Action = "Add";
        $scope.toggleModal();
    }

    $scope.toggleModal = function () {
        $scope.showModal = !$scope.showModal;
    };

    $scope.AddUpdateBook = function () {
        console.log("$scope.bookTitle: ", $scope.bookTitle);

        var Book = {
           Title: $scope.bookTitle,
           Author: $scope.bookAuthor,
           Publisher: $scope.bookPublisher,
           Isbn: $scope.bookIsbn
        };
        console.log("In ModalCtrl: ", Book);
  
        bookFactory.AddUpdateBook();
    };

}]);
