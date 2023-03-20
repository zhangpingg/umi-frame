import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import CoverLayer from './coverLayer';

const CreatePortalDemo = () => {
  const [el] = useState(document.createElement('div'));

  useEffect(() => {
    const body = document.querySelector('body');
    body?.appendChild(el);

    return () => {
      body?.removeChild(el);
    };
  }, []);

  return createPortal(<CoverLayer />, el);
};

export default CreatePortalDemo;
