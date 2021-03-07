import React from "react";

// Data used for profiles
const profileData = {
    jyoo: {
        name: "Jason Yoo",
        description: "A undergrad student at Yonsei University",
    },

    gildong: {
        name: "Gildong Hong",
        description: "Fairytale character",
    },
};

const Profile = ({ match }) => {
    // reference params value in match
    const { username } = match.params;
    const profile = profileData[username];
    if (!profile) {
        return <div>User does not exist.</div>;
    }

    return (
        <div>
            <h3>
                {username}({profile.name})
            </h3>
            <p>{profile.description}</p>
        </div>
    );
};

export default Profile;
