import NewTweet from "./NewTweet/";
import TweetsList from "./TweetsList";
import React from 'react';


const Home = ({ searchQuery }) => {
    return (
        <div className="w-50 mt-3">
            <h5 className="mx-3">Home</h5>
            <NewTweet />
            <TweetsList searchQuery={searchQuery}/>
        </div>
    );
}
 
export default Home;