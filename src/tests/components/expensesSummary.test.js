import React from 'react';
import {shallow} from 'enzyme';
import {ExpensesSummary} from '../../components/expensesSummary';

test('should correctly render ExpensesSummary with one expense', () => {
    const wrapper = shallow(<ExpensesSummary expenseCount={1} expensesTotal={235} />);
    expect(wrapper).toMatchSnapshot();
});

test('should correctly render ExpensesSummary with multiple expenses', () => {
    const wrapper = shallow(<ExpensesSummary expenseCount={23} expensesTotal={235123432423} />);
    expect(wrapper).toMatchSnapshot();
});