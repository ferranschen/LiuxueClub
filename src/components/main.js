import React from 'react';
import Sidebar from './left-sidebar'
import { HeartIcon, ChatBubbleOvalLeftEllipsisIcon } from '@heroicons/react/24/outline';

const posts = [
    {
        id: 1, title: "#分享 [新聞] 30 多歲的女子持刀攻擊「Super Junior」", content: "[獨家] 30 多歲的女子持刀攻擊… 「Super Junior」圭賢受傷一名30多歲的女子進入音 ...", author: "Author 1", timestamp: "2023-11-19", authorImg: "https://via.placeholder.com/40"
        , numLikes: 123, numComments: 120
    },
    { id: 2, title: "T1 3:0 輾壓奪冠！！！！🏆Faker 生涯第四冠", content: "雖然今年比賽沒什麼戲劇性感", author: "Author 2", timestamp: "2023-11-18", authorImg: "https://via.placeholder.com/40", numLikes: 2, numComments: 4 },
    { id: 3, title: "男生假裝愛你會有的表現", content: "我觀察到很多男生即使不愛了，也不說分手", author: "Author 2", timestamp: "2023-11-18", authorImg: "https://via.placeholder.com/40", numLikes: 30, numComments: 4 },
    { id: 4, title: "關於男友…", content: "跟男友愛愛一年多，以前都可以半個小時以上", author: "Author 2", timestamp: "2023-11-18", authorImg: "https://via.placeholder.com/40", numLikes: 55, numComments: 20 },

];
export default function MainBoard() {
    const handleClick = (post) => {
        console.log(`Post clicked: ${post.title}`);
        // Implement navigation or other actions here
    };
    return (
        <div className='container mx-auto flex '>
            <Sidebar />
            <div className='flex-grow lg:px-8'>
                <div className="container mx-auto p-4">
                    <div className="grid grid-cols-1 gap-4">
                        {posts.map(post => (
                            <div key={post.id} className="p-4 border-b border-gray-300   hover:bg-gray-100 hover:duration-150 cursor-pointer" onClick={() => handleClick(post)}>
                                <div className="flex items-center space-x-3">
                                    <img src={post.authorImg} alt={`${post.author}'s profile`} className="w-10 h-10 rounded-full" />
                                    <div>
                                        <h2 className="text-md font-bold">{post.title}</h2>
                                        <p className="text-gray-700 text-sm">{post.content}</p>
                                    </div>
                                </div>
                                {/* number of like */}
                                <div className="flex flex-row items-center space-x-3 mt-2 text-sm">
                                    <div className="flex  items-center">
                                        <HeartIcon className="h-6 w-6 text-gray-500" />
                                        <p className="text-gray-700">{post.numLikes}</p>
                                    </div>
                                    <div className="flex items-center">
                                        <ChatBubbleOvalLeftEllipsisIcon className="h-6 w-6 text-gray-500" />
                                        <p className="text-gray-700">{post.numComments}</p>
                                    </div>
                                    <div className="flex items-center text-sm text-gray-500">
                                        Posted by {post.author} on {post.timestamp}
                                    </div>
                                </div>

                            </div>
                        ))}
                    </div>
                    <div className="flex space-x-4 text-sm text-gray-500 border-b">
                        <div className="flex-none py-10">
                            <img src="https://images.unsplash.com/photo-1502685104226-ee32379fefbe?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=256&h=256&q=80" alt="" className="h-10 w-10 rounded-full bg-gray-100" />
                        </div>
                        <div className=' py-10'>
                            <h3 className="font-medium text-gray-900">陳凱全</h3>
                            <p>
                                <time dateTime="2020-03-16">Mar 16</time>
                            </p>
                            <div
                                className="prose prose-sm mt-4 max-w-none text-gray-500"
                                dangerouslySetInnerHTML={{
                                    __html: `
                    <p>真假拉 你要講真欸</p>
                    <p>Dcard 即將被取代了嗎...</p>
                    `,
                                }}
                            />
                        </div>
                    </div>
                    <div className="flex space-x-4 text-sm text-gray-500 border-b">
                        <div className="flex-none py-10">
                            <img src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=256&h=256&q=80" alt="" className="h-10 w-10 rounded-full bg-gray-100" />
                        </div>
                        <div className=' py-10'>
                            <h3 className="font-medium text-gray-900">楊威豪</h3>
                            <p>
                                <time dateTime="2020-03-16">Mar 16</time>
                            </p>
                            <div
                                className="prose prose-sm mt-4 max-w-none text-gray-500"
                                dangerouslySetInnerHTML={{
                                    __html: `
                    <p>我們小橘子真的超暖🥹🍊🧡</p>
                    `,
                                }}
                            />
                        </div>
                    </div>
                    <div className="flex space-x-4 text-sm text-gray-500 border-b">
                        <div className="flex-none py-10">
                            <img src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=256&h=256&q=80" alt="" className="h-10 w-10 rounded-full bg-gray-100" />
                        </div>
                        <div className=' py-10'>
                            <h3 className="font-medium text-gray-900">楊威豪</h3>
                            <p>
                                <time dateTime="2020-03-16">Mar 16</time>
                            </p>
                            <div
                                className="prose prose-sm mt-4 max-w-none text-gray-500"
                                dangerouslySetInnerHTML={{
                                    __html: `
                    <p>不是我</p>
                    `,
                                }}
                            />
                        </div>
                    </div>
                </div>
            </div>

        </div>




    );
}