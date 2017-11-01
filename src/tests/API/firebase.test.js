import * as firebase from 'firebase';
import * as Api from '../../firebase/firebase';
import expenses from '../fixtures/expenses';
import budget from '../fixtures/budgets';

let uid, budgetArray

beforeEach((done) => {
     budgetArray = [budget];
     uid = 'abc123';
    const expensesData = {};
    const budgetsData = {};
    budgetArray.forEach(budget => budgetsData[budget.id] = { description: budget.description, amount: budget.amount })
    expenses.forEach(({ id, description, note, amount, createdAt }) => {
        expensesData[id] = { description, note, amount, createdAt };
    });
    firebase.database().ref(`users/${uid}/expenses`).set(expensesData).then(() => done());
    firebase.database().ref(`users/${uid}/budgets`).set(budget).then(() => done());
});

test('should add an expense to firebase', (done) => {
    Api.create(expenses[1], uid).then((ref) => {
      return firebase.database().ref(`users/${uid}/expenses/${ref.key}`).once('value');   
    }).then((snapshot) => {
        expect(snapshot.val()).toEqual(expenses[1]); 
        done();  
    });  
});

test('should add a budget to firebase', (done) => {
    Api.createBudget(budget, uid).then((ref) => {
      return firebase.database().ref(`users/${uid}/budgets/${ref.key}`).once('value');   
    }).then((snapshot) => {
        expect(snapshot.val()).toEqual(budget); 
        done();  
    });  
});

test('should fetch expenses from firebase', (done) => {
    Api.get(uid).then((expenses) => {
        expect(expenses).toEqual(expect.any(Array));
        done();
    });
});

test('should fetch budgets from firebase', (done) => {
    Api.getBudgets(uid).then((budgets) => {
        expect(budgets).toEqual(expect.any(Array));
        done();
    });
});

test('should delete an expense from firebase', (done) => {
    Api.remove('a;sdlfj2089', uid).then(() => {
        return firebase.database().ref(`users/${uid}/budgets/1`).once('value')
    }).then((snapshot) => {
        expect(snapshot.val()).toBeFalsy();
        done();
    });
});

test('should delete a budget from firebase', (done) => {
    Api.removeBudget('1', uid).then(() => {
        return firebase.database().ref(`users/${uid}/budgets/1`).once('value')
    }).then((snapshot) => {
        expect(snapshot.val()).toBeFalsy();
        done();
    });
});

test('should edit an expense in firebase', (done) => {
    const updates = {
        note: 'This has been updated',
    };
    Api.edit(updates, '2', uid).then(() => {
        return firebase.database().ref(`users/${uid}/expenses/2/note`).once('value')
    }).then((snapshot) => {
        expect(snapshot.val()).toBe(updates.note);
        done();
    });
});

test('should edit a budget in firebase', (done) => {
    const updates = {
        description: 'This has been updated',
    };
    Api.editBudget(updates, 'a;sdlfj2089', uid).then(() => {
        return firebase.database().ref(`users/${uid}/budgets/a;sdlfj2089/description`).once('value')
    }).then((snapshot) => {
        expect(snapshot.val()).toBe(updates.description);
        done();
    });
});