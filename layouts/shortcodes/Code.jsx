import SyntaxHighlighter from "react-syntax-highlighter";
import { a11yDark } from "react-syntax-highlighter/dist/cjs/styles/hljs";

const HighlightedCode = ({ children, language, codeStyle = undefined }) => {
  if (!codeStyle) {
    codeStyle = a11yDark;
  }
  return (
    <SyntaxHighlighter language={language} style={codeStyle}>
      {children}
    </SyntaxHighlighter>
  );
};

export default HighlightedCode;
