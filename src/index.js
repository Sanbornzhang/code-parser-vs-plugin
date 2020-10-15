const vscode = require('vscode')
const _activate = context => {
  const configuration = vscode.workspace.getConfiguration('code-parser');
	let disposable = vscode.commands.registerCommand('code-parser.parserCode', function () {
		vscode.window.showInformationMessage('Hello World from code-parser!');
	});

	context.subscriptions.push(disposable);
}
module.exports = {
  activate: _activate,
}