import React from "react";

const User = React.memo(function User({ user, onRemove, onToggle }) {
    return (
        <div>
            <b
                style={{
                    cursor: "pointer",
                    color: user.active ? "green" : "black",
                }}
                onClick={() => onToggle(user.id)}
            >
                {user.username}
            </b>
            <span>({user.email})</span>
            <button onClick={() => onRemove(user.id)}>Delete</button>
        </div>
    );
});

function UserList({ users, onRemove, onToggle }) {
    return (
        <div>
            {users.map((user) => (
                <User
                    user={user}
                    key={user.id}
                    onRemove={onRemove}
                    onToggle={onToggle}
                />
            ))}

            {/* If unique id doesn't exist to be used as a key
            {users.map((user, index) => (
                <User user={user} key={index} />
            ))} */}
        </div>
    );
}

export default React.memo(UserList);
