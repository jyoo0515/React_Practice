import React, { useEffect } from "react";

function HistorySample({ history }) {
    const goBack = () => {
        history.goBack();
    };

    const goHome = () => {
        history.push("/");
    };

    useEffect(() => {
        console.log(history);
        const unblock = history.block("Are you sure?");
        return () => {
            unblock();
        };
    }, [history]);

    return (
        <div>
            <button onClick={goBack}>Go back</button>
            <button onClick={goHome}>Home</button>
        </div>
    );
}

export default HistorySample;
