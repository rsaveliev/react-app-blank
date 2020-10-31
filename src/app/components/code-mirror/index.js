import React from 'react';
import { string } from 'prop-types';
import { UnControlled as CodeMirror } from 'react-codemirror2';

import 'codemirror/mode/jsx/jsx';
import 'codemirror/mode/javascript/javascript';
import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/material.css';
import './style.scss';

const CodeArea = ({ template }) => {
  return (
    <CodeMirror
      className="code-mirror"
      value={template}
      options={{
        readOnly: true,
        mode: 'jsx',
        lineWrapping: true,
        smartIndent: true,
        lineNumbers: true,
        foldGutter: true,
        gutters: ['CodeMirror-linenumbers', 'CodeMirror-foldgutter'],
        autoCloseTags: true,
        matchBrackets: true,
        autoCloseBrackets: true,
      }}
    />
  );
};

CodeArea.propTypes = {
  template: string
};

export default CodeArea;
