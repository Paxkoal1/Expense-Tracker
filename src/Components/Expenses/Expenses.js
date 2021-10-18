import { useState } from "react";

import "./Expenses.css";
import Card from "../UI/Card";
import ExpensesChart from "./ExpensesChart";
import ExpensesList from "./ExpensesList";
import ExpensesFilter from "./ExpensesFilter";

export default function Expenses(props) {
    const [filteredYear, setFilteredYear] = useState("2020");
    const filterChangeHandler = (selectedYear) => {
        setFilteredYear(selectedYear);
    };

    const filteredArray = props.items.filter(
        (e) => e.date.getFullYear().toString() === filteredYear
    );

   

    return (
        <div>
            <Card className="expenses">
                <ExpensesFilter
                    selected={filteredYear}
                    onChangeFilter={filterChangeHandler}
                />
                <ExpensesChart expenses={filteredArray}/>
                <ExpensesList items={filteredArray}/>
            </Card>
        </div>
    );
}
