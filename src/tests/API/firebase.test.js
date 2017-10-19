import * as firebase from 'firebase';
import * as Api from '../../firebase/firebase';
import expenses from '../fixtures/expenses'

beforeAll((done) => {
    const expensesData= {};
    expenses.forEach(({ id, description, note, amount, createdAt }) => {
        expensesData[id] = { description, note, amount, createdAt };
    });
    firebase.database().ref('expenses').set(expensesData).then(() => done());
});

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

test('should delete an expense from firebase', (done) => {
    Api.remove('1').then(() => {
        return firebase.database().ref('expenses/1').once('value')
    }).then((snapshot) => {
        expect(snapshot.val()).toBeFalsy();
        done();
    });
});

test('should edit an expense if firebase', (done) => {
    const updates = {
        note: 'This has been updated',
    };
    Api.edit(updates, '2').then(() => {
        return firebase.database().ref('expenses/2/note').once('value')
    }).then((snapshot) => {
        expect(snapshot.val()).toBe(updates.note);
        done();
    });
});