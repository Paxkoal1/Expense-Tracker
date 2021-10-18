import { useState } from "react";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

export default function NewExpense(props) {
    const [isTyping, setIsTyping] = useState(false);

    const saveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString(),
        };
        props.onAddExpense(expenseData);
        setIsTyping(false)
    };

    function isTypingHandler() {
        setIsTyping(true);
    }

    function stoppedTypingHandler() {
        setIsTyping(false);
    }

    return (
        <div className="new-expense">
            {!isTyping && (
                <button onClick={isTypingHandler}>Add New Expense</button>
            )}
            {isTyping && (
                <ExpenseForm
                    onSaveExpenseData={saveExpenseDataHandler}
                    onCancelAddExpenseHandler={stoppedTypingHandler}
                />
            )}
        </div>
    );
}
