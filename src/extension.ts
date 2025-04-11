// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';
import { FlowPanel } from './panels/FlowPanel';
import { SidebarProvider } from './SidebarProvider';

// This method is called when your extension is activated
// Your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {
	// Debug welcome message
	console.log('Compass HLS VSC extension is now active!');

	// Register the sidebar panel
	const sidebarProvider = new SidebarProvider(context.extensionUri);
	context.subscriptions.push(
		vscode.window.registerWebviewViewProvider(
			"compass-flow",
			sidebarProvider
		)
	);

	// Load commands
	const showHelloWorldCommand = vscode.commands.registerCommand("hello-world.showHelloWorld", () => {
    FlowPanel.render(context.extensionUri);
  });

	// The command has been defined in the package.json file
	// Now provide the implementation of the command with registerCommand
	// The commandId parameter must match the command field in package.json
	const disposable = vscode.commands.registerCommand('hgbo-dse-hls-integration-plugin.helloWorld', () => {
		// The code you place here will be executed every time your command is executed
		// Display a message box to the user
		vscode.window.showInformationMessage('Hello World from HGBO-DSE HLS Integration Plugin!');
	});

	context.subscriptions.push(disposable);
}

// This method is called when your extension is deactivated
export function deactivate() {}
