import moment from 'moment'
import expensesReducer from '../../reducers/expenses'
import expenses from '../fixtures/expenses'

test('should set default state for expenses', ()=>{
    const state = expensesReducer(undefined, {type: '@@INIT'})
    expect(state).toEqual([])
})

test('should remove expense by ID', ()=>{
    const action ={
        type: 'REMOVE_EXPENSE',
        id: expenses[1].id
    }
    const state = expensesReducer(expenses, action)
    expect(state).toEqual([expenses[0], expenses[2]])
})

test('should NOT remove expense by ID', ()=>{
    const action ={
        type: 'REMOVE_EXPENSE',
        id: 'noId'
    }
    const state = expensesReducer(expenses, action)
    expect(state).toEqual(expenses)
})

test('should add new expense', ()=>{
    const expense = {
            id: '4',
            description: 'new expense',
            note: '',
            amount: 9900,
            createdAt: moment(0).add(20, 'days').valueOf()
        }
    const action ={
        type: 'ADD_EXPENSE',
        expense
    }
    const state = expensesReducer(expenses, action)
    expect(state).toEqual([...expenses, expense])
})

test('should edit an expense', ()=>{
    const action ={
        type: 'EDIT_EXPENSE',
        id: expenses[2].id,
        updates :{
            description: 'new expense Edit',
        }
    }
    const state = expensesReducer(expenses, action)
    expect(state[2].description).toEqual('new expense Edit')
})

test('should NOT edit an expense', ()=>{
    const action ={
        type: 'EDIT_EXPENSE',
        id: 'noID',
        updates :{
            description: 'new expense Edit',
        }
    }
    const state = expensesReducer(expenses, action)
    expect(state).toEqual(expenses)
})