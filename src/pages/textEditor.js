import React, { useState } from 'react';
import Header from '../components/header';

function TextEditor() {
    const [editorText, setEditorText] = useState('');
    const [editorTitle, setEditorTitle] = useState(''); // 新增状态变量用于存储标题

    const handleTextChange = (e) => {
        setEditorText(e.target.value);
    };

    const handleTitleChange = (e) => {
        setEditorTitle(e.target.value);
    };

    return (
        <div className='container mx-auto p-5'>
            <Header />
            <div className='mx-auto mt-10 w-11/12'>
                <h2 className="text-2xl text-center mb-4 text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-blue-500">
                    文章编辑
                </h2>

                {/* 文章标题输入区 */}
                <div className='bg-white shadow-sm rounded px-3 pt-3 pb-3 mb-4'>
                    <textarea
                        className="mx-auto w-full h-12 p-2 border rounded focus:outline-none focus:shadow-outline"
                        value={editorTitle}
                        onChange={handleTitleChange}
                        placeholder='输入标题'
                    />
                </div>

                {/* 文章内容输入区 */}
                <div className='bg-white shadow-sm rounded px-3 pt-3 pb-3 mb-4'>
                    <textarea
                        className="w-full h-64 p-2 border rounded focus:outline-none focus:shadow-outline"
                        value={editorText}
                        onChange={handleTextChange}
                        placeholder='在此输入文章内容'
                    />
                </div>

                <div className="flex justify-center space-x-4 mt-4">
                    <button
                        className="text-gray-400 py-2 px-4 rounded font-normal hover:bg-gray-100 focus:outline-none focus:shadow-outline"
                        onClick={() => {
                            setEditorTitle('');
                            setEditorText('');
                        }} // 清空标题和内容
                    >
                        取消
                    </button>
                    <button
                        className="bg-sky-500 hover:bg-sky-700 text-white py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                        onClick={() => console.log({ title: editorTitle, content: editorText })} // 打印标题和内容
                    >
                        下一步
                    </button>
                </div>
            </div>
        </div>
    );
}

export default TextEditor;
