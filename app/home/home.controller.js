angular.module('Colist').controller('homeController', homeController)

homeController.$inject = ['$scope', '$firebaseArray', '$firebaseObject']

function homeController($scope, $firebaseArray, $firebaseObject) {

    /* Variables */
    let me = this
    let elementsRef = firebase.database().ref().child("notes")
    me.notes

    /* Functions */
    me.init = init
    me.add = add
    me.remove = remove

    function init() {
        me.notes = $firebaseArray(elementsRef)
        me.newNote = {}
    }

    function add() {
        if (typeof me.newNote.title === 'undefined' || me.newNote.title === '') {
            ons.notification.alert('Title can\'t be empty!')
        } else {
            var description = typeof me.newNote.description === 'undefined' ? '' : me.newNote.description
            me.notes.$add({
                title: me.newNote.title,
                description: description,
                date: new Date(Date.now()).toLocaleDateString()
            })
            ons.notification.alert('Added!')
            me.newNote = {
                title: '',
                description: ''
            }
        }
    }

    function remove(note) {
        ons.notification.confirm({ message: 'Are you sure?' }).then(function(response) {
            if (response) {
                me.notes.$remove(note)
            }
        })
    }

    init()
}