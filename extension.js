// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
const vscode = require('vscode');
const axios = require('axios');

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed

/**
 * @param {vscode.ExtensionContext} context
 */
function activate(context) {
	// Use the console to output diagnostic information (console.log) and errors (console.error)
	// This line of code will only be executed once when your extension is activated
	console.log('Congratulations, your extension "helloworld-minimal-sample" is now active!');

	// The command has been defined in the package.json file
	// Now provide the implementation of the command with  registerCommand
	// The commandId parameter must match the command field in package.json
	let disposable = vscode.commands.registerCommand('extension.getBusOne', () => {
		// The code you place here will be executed every time your command is executed

		axios.get(`https://data.smartdublin.ie/cgi-bin/rtpi/realtimebusinformation?stopid=1190&format=json`)
		.then(function (response) {
			// handle success
			console.log(response);
			console.log(response.data.results[0].route);
			let okay1 = response.data.results[0].route;
			let okay2 = response.data.results[0].duetime;
			let okay = "Stop outside home: Bus Number " + okay1 + ", due in " + okay2;
			vscode.window.showInformationMessage(okay);
		})
		// Display a message box to the user
	});

	let disposable2 = vscode.commands.registerCommand('extension.getBusTwo', () => {
		// The code you place here will be executed every time your command is executed

		axios.get(`https://data.smartdublin.ie/cgi-bin/rtpi/realtimebusinformation?stopid=213&format=json`)
		.then(function (response) {
			// handle success
			console.log(response);
			console.log(response.data.results[0].route);
			let okay1 = response.data.results[0].route;
			let okay2 = response.data.results[0].duetime;
			let okay = "Stop opposite Airport takeaway: Bus Number " + okay1 + ", due in " + okay2;
			vscode.window.showInformationMessage(okay);
		})
		// Display a message box to the user
	});

	context.subscriptions.push(disposable);

	context.subscriptions.push(disposable2);
}

// this method is called when your extension is deactivated
function deactivate() {}

module.exports = {
	activate,
	deactivate
}
