function checkCode() {
  const input = document.getElementById('codeInput').value;
  const output = document.getElementById('codeOutput');
  if (!input.trim()) {
    output.innerHTML = '<div class="alert alert-warning">Code paste chey!</div>';
    return;
  }
  const errors = [];
  if (input.includes('function') && !input.match(/function\s+\w+\s*\(/)) errors.push('Function syntax wrong - () check chey.');
  if (input.includes('error') || input.includes('SyntaxError')) errors.push('Syntax error - braces/quotes fix chey.');
  if (input.includes('undefined') && !input.includes('let ') && !input.includes('const ')) errors.push('Variable declare chey: let/const.');
  output.innerHTML = errors.length ? 
    `<div class="alert alert-danger">Errors: ${errors.join('<br>')}</div>` : 
    '<div class="alert alert-success">✅ Code correct!</div>';
}
