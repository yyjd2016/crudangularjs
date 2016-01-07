
app.controller("mvcCRUDCtrl", ['$scope', '$rootScope', 'crudAJService', function ($scope, $rootScope, crudAJService) {
    $scope.divBook = false;
    GetAllBooks();

    // Get all book records
    function GetAllBooks() {
        //debugger;
        var getBookData = crudAJService.getBooks();
        getBookData.then(function (book) {
            //$scope.books = book.data;
            $rootScope.books = book.data;
        }, function () {
            alert("Error in getting book record!");
        });
    }

    $scope.editBook = function (book) {
        var getBookData = crudAJService.getBook(book.Id);
        getBookData.then(function (_book) {
            /*
            $scope.book = _book.data;
            $scope.bookId = book.Id;
            $scope.bookTitle = book.Title;
            $scope.bookAuthor = book.Author;
            $scope.bookPublisher = book.Publisher;
            $scope.bookIsbn = book.Isbn;
            $scope.Action = "Update";
            $scope.divBook = true;
            */
            $rootScope.book = _book.data;
            $rootScope.bookId = book.Id;
            $rootScope.bookTitle = book.Title;
            $rootScope.bookAuthor = book.Author;
            $rootScope.bookPublisher = book.Publisher;
            $rootScope.bookIsbn = book.Isbn;
            $rootScope.Action = "Update";

        }, function () {
            alert('Error in getting book records');
        });
    }

    $scope.AddUpdateBook = function () {
        var Book = {
            Title: $rootScope.bookTitle,
            Author: $rootScope.bookAuthor,
            Publisher: $rootScope.bookPublisher,
            Isbn: $rootScope.bookIsbn
        };

        var getBookAction = $rootScope.Action;

        if (getBookAction == "Update") {
            console.log("Updating book: ", Book);

            Book.Id = $rootScope.bookId;
            var getBookData = crudAJService.updateBook(Book);
            getBookData.then(function (msg) {
                GetAllBooks();
                alert(msg.data);
                //$scope.divBook = false;
            }, function () {
                alert('Error in updating book record');
            });
        } else {
            console.log("Adding book: ", Book);

            var getBookData = crudAJService.AddBook(Book);
            getBookData.then(function (msg) {
                GetAllBooks();
                alert(msg.data);
                //$scope.divBook = false;
            }, function () {
                alert('Error in adding book record');
            });
        }
    }

    $scope.AddBookDiv = function () {
        ClearFields();
        $scope.Action = "Add";
        $scope.divBook = true;
    }

    $scope.AddBookModal = function () {
        ClearFields();
        $rootScope.Action = "Add";
        $scope.toggleBookModal();
    }

    $scope.deleteBook = function (book) {
        var getBookData = crudAJService.DeleteBook(book.Id);
        getBookData.then(function (msg) {
            alert(msg.data);
            GetAllBooks();
        }, function () {
            alert('Error in deleting book record');
        });
    }

    function ClearFields() {
        $rootScope.bookId = "";
        $rootScope.bookTitle = "";
        $rootScope.bookAuthor = "";
        $rootScope.bookPublisher = "";
        $rootScope.bookIsbn = "";
    }
    $scope.Cancel = function () {
        $scope.divBook = false;
    };

    // Ejemplo con modal
    $scope.showBookModal = false;

    $scope.toggleBookModal = function () {
        $scope.showBookModal = !$scope.showBookModal;
    };

}]);


// Dialogo modal
app.controller('MainCtrl', function ($scope) {
    $scope.showModal = false;
    $scope.toggleModal = function () {
        $scope.showModal = !$scope.showModal;
    };
});
