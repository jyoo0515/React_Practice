import React, { useCallback, useMemo, useRef, useState } from "react";
// import InputSample from './components/InputSample';
import UserList from "./components/UserList";
import CreateUser from "./components/CreateUser";
import "./App.css";

function countActiveUsers(users) {
    console.log("Counting active users");
    return users.filter((user) => user.active).length;
}

function App() {
    const [inputs, setInputs] = useState({
        username: "",
        email: "",
    });

    const { username, email } = inputs;

    // useCallback을 사용할 때에는 함수 뒤에 [deps] 배열에
    // 함수에 사용되는 모든 state와 props를 넣어준다
    const onChange = useCallback(
        (e) => {
            const { name, value } = e.target;
            setInputs({
                ...inputs,
                [name]: value,
            });
        },
        [inputs],
    );

    const [users, setUsers] = useState([
        {
            id: 1,
            username: "jyoo",
            email: "jyoo@yonsei.ac.kr",
            active: true,
        },
        {
            id: 2,
            username: "tester",
            email: "tester@yonsei.ac.kr",
            active: false,
        },
        {
            id: 3,
            username: "buzz",
            email: "buzz@yonsei.ac.kr",
            active: false,
        },
    ]);

    const nextId = useRef(4);

    const onCreate = useCallback(() => {
        const user = {
            id: nextId.current,
            username,
            email,
        };
        setUsers(users.concat(user));

        setInputs({
            username: "",
            email: "",
        });
        nextId.current += 1;
    }, [users, username, email]);

    const onRemove = useCallback(
        (id) => {
            // user.id 가 파라미터로 일치하지 않는 원소만 새 배열로 정의
            setUsers(users.filter((user) => user.id !== id));
        },
        [users],
    );

    const onToggle = useCallback(
        (id) => {
            setUsers(
                users.map((user) =>
                    user.id === id ? { ...user, active: !user.active } : user,
                ),
            );
        },
        [users],
    );

    const count = useMemo(() => countActiveUsers(users), [users]);
    // 뒤에 있는 배열의 내용이 바뀌었을 때만 앞의 함수를 호출

    return (
        <div className="App">
            {/* <InputSample/> */}
            <CreateUser
                username={username}
                email={email}
                onChange={onChange}
                onCreate={onCreate}
            />
            <UserList users={users} onRemove={onRemove} onToggle={onToggle} />
            <div>Active users: {count}</div>
        </div>
    );
}

export default App;
