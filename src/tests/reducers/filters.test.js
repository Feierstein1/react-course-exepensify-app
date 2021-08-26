import moment from 'moment'
import filtersReducer from '../../reducers/filters'

test('should setup default filter values', ()=>{
    const state = filtersReducer(undefined, {type: '@@INIT'})
    expect(state).toEqual({
        text: '',
        sortBy: 'date',
        startDate: moment().startOf('month'),
        endDate: moment().endOf('month')
    })
})

test('should set sortBy to amount', ()=>{
    const state = filtersReducer(undefined, {type: 'SORT_BY_AMOUNT'})
    expect(state.sortBy).toEqual('amount')
})

test('should set sortBy to date', ()=>{
    const currentState = {
        text: '',
        sortBy: 'amount',
        startDate: undefined,
        endDate: undefined
    }
    const action =  {type: 'SORT_BY_DATE'}
    const state = filtersReducer(currentState, action)
    expect(state.sortBy).toBe('date')
})

test('should set text filter', ()=>{
    const state = filtersReducer(undefined, {type: 'SET_TEXT_FILTER', text: 'test'})
    expect(state.text).toBe('test')
})

test('should set startDate filter', ()=>{
    const state = filtersReducer(undefined, {type: 'SET_START_DATE', startDate: moment(1000)})
    expect(state.startDate).toEqual(moment(1000))
})

test('should set endtDate filter', ()=>{
    const state = filtersReducer(undefined, {type: 'SET_END_DATE', endDate: moment(1000)})
    expect(state.endDate).toEqual(moment(1000))
})

