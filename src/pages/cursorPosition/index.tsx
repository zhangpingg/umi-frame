import React, { useRef, useState, useCallback } from 'react';
import { Input, Button } from 'antd';

interface cursorPositionObjProps {
  pStart: number;
  pEnd: number;
}

const XoTest = () => {
  const textareaRef = useRef<HTMLTextAreaElement | any>(null);
  const [value, setValue] = useState<string>('123456789');
  const [cursorPositionObj, setCursorPositionObj] =
    useState<cursorPositionObjProps>();

  /** 插入数据 */
  const insertData = () => {
    const newContent = '新数据';
    const newValue = `${value.slice(
      0,
      cursorPositionObj?.pStart || value.length,
    )}${newContent}${value.slice(cursorPositionObj?.pEnd || value.length)}`;
    setValue(newValue);
  };
  /** change 事件 */
  const onChange = (e: any) => {
    setValue(e.target.value);
  };
  /** 获取光标位置 */
  const getCursorPosition = () => {
    const textAreaNode = textareaRef?.current?.resizableTextArea.textArea;
    const pStart = textAreaNode?.selectionStart; // 光标开始位置
    const pEnd = textAreaNode?.selectionEnd; // 光标结束位置
    setCursorPositionObj({ pStart, pEnd });
    textAreaNode?.setSelectionRange(pStart, pEnd);
    textAreaNode?.focus();
  };
  /** 设置光标位置 */
  const setCursorPosition = useCallback(() => {
    const textAreaNode = textareaRef.current?.resizableTextArea.textArea;
    const pStart = 5;
    const pEnd = 5;
    textAreaNode?.setSelectionRange(pStart, pEnd);
    textAreaNode?.focus();
    setCursorPositionObj({ pStart, pEnd });
  }, []);

  return (
    <div className={'contnet'}>
      <Input.TextArea
        ref={textareaRef}
        showCount
        value={value}
        onChange={onChange}
      />
      <p>光标位置：{JSON.stringify(cursorPositionObj)}</p>
      <Button onClick={getCursorPosition}>获取光标位置</Button>
      <Button onClick={insertData}>插入数据</Button>
      <Button onClick={setCursorPosition}>设置光标位置</Button>
    </div>
  );
};

export default XoTest;
