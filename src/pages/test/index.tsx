import { useEffect, useRef, useState } from 'react';
import { Progress } from 'antd';

const Index = () => {
    const fn1 = async () => {
        const blob = new Blob(['abcde'], { type: 'text/plain' });
        const subBlob = blob.slice(0, 3);
        const subText = await subBlob.text();
        //console.log(subText); // abc
        const subArrBuf = await blob.arrayBuffer();
        const stream = blob.stream();
        console.log(stream); // abc
    };

    useEffect(() => {
        fn1();
    }, []);

    return <div>test</div>;
};

export default Index;
