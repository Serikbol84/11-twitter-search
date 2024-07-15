import { KZ_IMG_PATH, NFACTORIAL_IMG_PATH } from "../img"
import Tweet from './Tweet';
import React from 'react';


const TweetsList = ({ searchQuery }) => {
    const tweets = [
        {
            authorName: 'Free KZ today',
            authorUsername: '@kz',
            img: KZ_IMG_PATH,
            content: 'UPDATE: Alibek says he has not considered becoming finance minister again',
            replies:200,
            retweets: 1000,
            likes:500,
        },
        {
            authorName: 'nFactorial',
            authorUsername: '@nfactorial',
            img: NFACTORIAL_IMG_PATH,
            content: 'Шаймаганбетов Серикбол прошел курс frontend developer в nFactorial!',
            replies: 1000000,
            retweets: 400000,
            likes: 1000000,
        },
        {
            authorName: 'nFactorial',
            authorUsername: '@nfactorial',
            img: NFACTORIAL_IMG_PATH,
            content: 'Data analytics course starts today!',
            replies: 10000000,
            retweets: 1000000,
            likes: 500,
        },
        {
            authorName: 'nFactorial',
            authorUsername: '@nfactorial',
            img: NFACTORIAL_IMG_PATH,
            content: 'Black friday! Успей купить курсы сегодня!',
            replies: 10000000,
            retweets: 1000000,
            likes: 500,
        },
        {
            authorName: 'nFactorial',
            authorUsername: '@nfactorial',
            img: NFACTORIAL_IMG_PATH,
            content: 'Black friday! Успей купить курсы сегодня!',
            replies: 1,
            retweets: 4,
            likes: 4,
        },
        {
            authorName: 'nFactorial',
            authorUsername: '@nfactorial',
            img: NFACTORIAL_IMG_PATH,
            content: 'Шаймаганбетов Серикбол прошел курс frontend developer в nFactorial!',
            replies: 1000000,
            retweets: 400000,
            likes: 1000000,
        },
        {
            authorName: 'nFactorial',
            authorUsername: '@nfactorial',
            img: NFACTORIAL_IMG_PATH,
            content: 'Black friday! Успей купить курсы сегодня! Успей купить курсы сегодня! Успей купить курсы сегодня! Успей купить курсы сегодня! Успей купить курсы сегодня! Успей купить курсы сегодня! Успей купить курсы сегодня! Успей купить курсы сегодня! Успей купить курсы сегодня! Успей купить курсы сегодня!',
            replies: 1,
            retweets: 4,
            likes: 4,
        },
        {
            authorName: 'nFactorial',
            authorUsername: '@nfactorial',
            img: NFACTORIAL_IMG_PATH,
            content: 'Шаймаганбетов Серикбол сдал все домашки!',
            replies: 1000000,
            retweets: 400000,
            likes: 1000000,
        },
    ];

    const filteredTweets = tweets.filter(tweet => 
        tweet.content.toLowerCase().startsWith(searchQuery.toLowerCase())
    );

    return (
        <div>
            {filteredTweets.map((tweet, index) => (
                <Tweet {...tweet} key={index} />
            ))}
        </div>
    );
}

export default TweetsList;