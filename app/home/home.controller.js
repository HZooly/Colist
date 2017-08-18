angular.module('Colist').controller('homeController', homeController)

homeController.$inject = ['$scope', '$firebaseArray', '$firebaseObject']

function homeController($scope, $firebaseArray, $firebaseObject) {

    /* Variables */
    let me = this
    me.notes

    /* Functions */
    me.init = init
    me.add = add

    function init() {
        let elementsRef = firebase.database().ref().child("notes")
        me.notes = $firebaseArray(elementsRef)
        me.newNote = {}
    }

    function add() {
        if (typeof me.newNote.title === 'undefined') {
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

    init()
}