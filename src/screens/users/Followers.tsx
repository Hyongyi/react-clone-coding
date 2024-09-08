import React from "react";
import { useOutletContext, useParams } from "react-router-dom";

interface FollowersContext{
    nameOfMyUser : string;
}

function Followers(){
    const {nameOfMyUser} = useOutletContext<FollowersContext>();
    console.log(nameOfMyUser);
    return <h1>Here are {nameOfMyUser}의 followers</h1>
}

export default Followers;