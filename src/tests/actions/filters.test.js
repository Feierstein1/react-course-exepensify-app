import moment from 'moment'
import {setTextFilter, sortByDate, sortByAmount, setStartDate, setEndDate} from '../../actions/filters'

test('should generate set start date action object', ()=>{
    const action = setStartDate(moment(0))
    expect(action).toEqual({
        type: 'SET_START_DATE',
        startDate: moment(0)
    })
})

test('should generate set end date action object', ()=>{
    const action = setEndDate(moment(0))
    expect(action).toEqual({
        type: 'SET_END_DATE',
        endDate: moment(0)
    })
})

test('should update text filter object action', ()=>{
    const action = setTextFilter('test')
    expect(action).toEqual({
        type: 'SET_TEXT_FILTER',
        text: 'test'
    })
})

test('should return action to sort by date', ()=>{
    const action = sortByDate()
    expect(action).toEqual({
        type: 'SORT_BY_DATE'
    })
})

test('should return action to sort by amount', ()=>{
    const action = sortByAmount()
    expect(action).toEqual({
        type: 'SORT_BY_AMOUNT'
    })
})