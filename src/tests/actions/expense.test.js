import {startAddExpense, editExpense, removeExpense} from '../../actions/expenses'

test('should remove expense action object', ()=>{
    const action = removeExpense({id: 123})
    expect(action).toEqual({
        type: 'REMOVE_EXPENSE',
        id: 123
    })
})

// test('should edit expense action object', ()=>{
//     const action = editExpense('123', {note: 'hello world'})
//     expect(action).toEqual({
//         type: 'EDIT_EXPENSE',
//         id: '123',
//         updates: {
//             note: 'hello world'
//         }
//     })
// })

// test('should add expense action object', ()=>{
//     const expenseData = {
//         description: 'Rent',
//         amount: 150000,
//         createdAt: 1000,
//         notes: 'My rent'
//     }
//     const action = startAddExpense(expenseData)
//     expect(action).toEqual({
//         type: 'ADD_EXPENSE',
//         expense: {
//             ...expenseData,
//             id: expect.any(String)
//         }
//     })
// })

// test('should add expense action object with default values', ()=>{
//     const action = startAddExpense()
//     expect(action).toEqual({
//         type: 'ADD_EXPENSE',
//         expense: {
//             ...expenseData,
//             id: expect.any(String)
//         }
//     })
// })