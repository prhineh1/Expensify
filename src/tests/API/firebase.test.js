import * as firebase from 'firebase';
import * as Api from '../../firebase/firebase';
import expenses from '../fixtures/expenses'

test('should add an expense to firebase', (done) => {
    Api.create(expenses[1]).then((ref) => {
      return firebase.database().ref(`expenses/${ref.key}`).once('value');   
    }).then((snapshot) => {
        expect(snapshot.val()).toEqual(expenses[1]); 
        done();  
    });  
});

test('should fetch expenses from firebase', (done) => {
    Api.get().then((expenses) => {
        expect(expenses).toEqual(expect.any(Array));
        done();
    });
});