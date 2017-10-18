import * as firebase from 'firebase';
import { create } from '../../firebase/firebase';
import expenses from '../fixtures/expenses'

test('should add an expense to firebase', (done) => {
    create(expenses[1]).then((ref) => {
      return firebase.database().ref(`expenses/${ref.key}`).once('value');   
    }).then((snapshot) => {
        expect(snapshot.val()).toEqual(expenses[1]); 
        done();  
    });  
});