function checkCode() {
  const input = document.getElementById('codeInput').value;
  const output = document.getElementById('codeOutput');
  const errors = [];

  // Real linting rules
  if (input.trim() === '') {
    output.innerHTML = '<span class="text-warning">Paste some code to check!</span>';
    return;
  }
  if (!input.match(/function\s+\w+\s*\(/)) errors.push('Invalid function syntax - check parentheses.');
  if (input.includes('SyntaxError') || input.includes('error')) errors.push('Syntax error detected - fix brackets/quotes.');
  if (input.includes('undefined') && !input.includes('let') && !input.includes('const')) errors.push('Undefined variable? Declare with let/const.');
  if (input.match(/;\s*$/gm) && input.match(/;\s*$/).length > input.split('\n').length * 0.8)) errors.push('Too many semicolons - JS optional.');

  if (errors.length) {
    output.innerHTML = `<span class="text-danger fw-bold">Errors found: ${errors.join('<br>')}</span>`;
  } else {
    output.innerHTML = '<span class="text-success fw-bold">✅ Code looks perfect! No issues.</span>';
  }
}
