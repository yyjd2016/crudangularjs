// Here define functions for Add, Update, Get and Delete book.

app.service("bookService", function ($http) {
    
    // Get all books
    this.getBooks = function () {
        return $http.get("/Home/GetAllBooks");
    }

    // Get book by bookId
    this.getBook = function (bookId) {
        var response = $http({
            method: "post",
            url: "/Home/GetBookById",
            params: {
                id: JSON.stringify(bookId)
            }
        });
        return response;
    }

    // Update Book 
    this.updateBook = function (book) {
        var response = $http({
            method: "post",
            url: "/Home/UpdateBook",
            data: JSON.stringify(book),
            dataType: "json"
        });
        return response;
    }

    // Add Book
    this.AddBook = function (book) {
        var response = $http({
            method: "post",
            url: "/Home/AddBook",
            data: JSON.stringify(book),
            dataType: "json"
        });
        return response;
    }

    //Delete Book
    this.DeleteBook = function (bookId) {
        var response = $http({
            method: "post",
            url: "/Home/DeleteBook",
            params: {
                bookId: JSON.stringify(bookId)
            }
        });
        return response;
    }
});

app.factory("bookFactory", ['$rootScope', 'bookService', function ($rootScope, bookService) {

    /*var book = {
        Title: "",
        Author: "",
        Publisher: "",
        Isbn: ""
    };*/

    var factoryObj = {
        //books : [],
        GetAllBooks: function () {
            //debugger;
            var getBookData = bookService.getBooks();
            getBookData.then(function (book) {
                //$scope.books = book.data;
                $rootScope.books = book.data;
            }, function () {
                alert("Error in getting book record!");
            });
            //return books;
        },
        AddUpdateBook: function () {
            var Book = {
                Title: $rootScope.bookTitle,
                Author: $rootScope.bookAuthor,
                Publisher: $rootScope.bookPublisher,
                Isbn: $rootScope.bookIsbn
            };
            console.log("In bookFactory rootScope: ", Book);

            /*var Book2 = {
                Title: $scope.bookTitle,
                Author: $scope.bookAuthor,
                Publisher: $scope.bookPublisher,
                Isbn: $scope.bookIsbn
            };
            console.log("In bookFactory scope: ", Book2);
            */
            //var getBookAction = $scope.Action;
            var getBookAction = $rootScope.Action;

            if (getBookAction == "Update") {
                console.log("Updating book: ", Book);

                Book.Id = $rootScope.bookId;
                var getBookData = bookService.updateBook(Book);
                getBookData.then(function (msg) {
                    //factoryObj.GetAllBooks();
                    alert(msg.data);
                    //$scope.divBook = false;
                }, function () {
                    alert('Error in updating book record');
                });
            } else {
                console.log("Adding book: ", Book);

                var getBookData = bookService.AddBook(Book);
                getBookData.then(function (msg) {
                    factoryObj.GetAllBooks();
                    alert(msg.data);
                    //$scope.divBook = false;
                }, function () {
                    alert('Error in adding book record');
                });
            }
        }

    }; // End of factoryObj

    return factoryObj;
}]);