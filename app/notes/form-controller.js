{

  angular
    .module('meganote.notes')
    .controller('NotesFormController', NotesFormController);

    NotesFormController.$inject = ['$state', '$scope', 'Flash', 'NotesService'];
    function
    //controller function refactor based on classmate suggestion

    NotesFormController (
      $scope.clearForm = clearForm;
      $scope.note = NotesService.find($state.params.noteID;
      $scope.save = save;
      $scope.delete = deleteScope;
      );

      function clearForm() {
        $scope.note = { title: '', body_html: '' };
      };

      function save() {
        if ($scope.note._id) {
          NotesService.update($scope.note)
            .then(
              function(res) {
                $scope.note = res.data.note;
                Flash.create('success', res.data.message);
              },
              function() {
                Flash.create('danger', 'Oops! Something went wrong.');
              });
        }
        else {
          NotesService.create($scope.note)
            .then(
              function(res) {
                $scope.note = res.data.note;
                Flash.create('success', res.data.message);
              },
              function() {
                Flash.create('danger', 'Oops! Something went wrong.');
              });
        }
      };

      function deleteScope() {
        NotesService.delete($scope.note)
          .then(function(){
            $scope.clearForm();
          });
      }

    }
}
