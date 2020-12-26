import { 
    setTextFilter,
    setStartDate,
    setEndDate,
    sortByAmount,
    sortByDate
} from '../../actions/filters';
import moment from 'moment';

test('should genterate set start date action object', ()=> {
    const action = setStartDate((moment(0)));
    expect(action).toEqual( {
        type : 'SET_START_DATE',
        startDate : moment(0)
    });
});

test('should genterate set end date action object', ()=> {
    const action = setEndDate((moment(0)));
    expect(action).toEqual( {
        type : 'SET_END_DATE',
        endDate : moment(0)
    });
});

test('should genterate sortBy date action object', () => {
    expect(sortByDate()).toEqual( {
        type : 'SORT_BY_DATE'
    });
});

test('should genterate sortBy amount action object', () => {
    expect(sortByAmount()).toEqual( {
        type : 'SORT_BY_AMOUNT'
    });
});

test('should genterate set Text action object', () => {
    const text = 'bill';
    const action = setTextFilter(text);
    expect(action).toEqual( {
        type: 'SET_TEXT_FILTER',
        text
    });
});

test('should genterate set Text action object with default', () => {
    const action = setTextFilter();
    expect(action).toEqual( {
        type: 'SET_TEXT_FILTER',
        text : ''
    });
});