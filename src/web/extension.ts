import * as vscode from "vscode";

interface FormatterModule extends EmscriptenModule {
	cwrap: typeof cwrap;
}

let cddaJsonFormatterModule: () => Promise<FormatterModule> = require("@cdda-toys/cdda-json-formatter-emcc-build");

export class CataJsonFormattingProvider implements
	vscode.DocumentFormattingEditProvider {

	outputChannel: vscode.OutputChannel;
	formatterModule: FormatterModule;
	formatterApply: (input: string) => string;

	constructor(outputChannel: vscode.OutputChannel, formatterModule: FormatterModule) {
		this.outputChannel = outputChannel;
		this.formatterModule = formatterModule;
		this.formatterApply = formatterModule.cwrap("json_format", "string", ["string"]);
	}

	public provideDocumentFormattingEdits(
		document: vscode.TextDocument,
		options: vscode.FormattingOptions,
		token: vscode.CancellationToken): vscode.ProviderResult<vscode.TextEdit[]> {

		let formatted = this.formatterApply(document.getText());

		if (formatted === "") {
			return [];
		}

		if (!formatted.startsWith("[") && !formatted.startsWith("{")) {
			this.outputChannel.replace(formatted);
			this.outputChannel.show(true);
			return [];
		}

		const allTextRange = new vscode.Range(
			document.lineAt(0).range.start,
			document.lineAt(document.lineCount - 1).rangeIncludingLineBreak.end,
		);

		if (!formatted.endsWith("\n")) {
			formatted += "\n";
		}

		this.outputChannel.hide();
		this.outputChannel.clear();
		return [vscode.TextEdit.replace(allTextRange, formatted)];
	}
}

export function activate(context: vscode.ExtensionContext) {
	const outputChannel = vscode.window.createOutputChannel("Cataclysm JSON formatter", "json");
	const formatterModulePromise = cddaJsonFormatterModule();
	formatterModulePromise.then(formatterModule => {
		let jsonSelector: vscode.DocumentSelector = { language: "json" };
		let cataJsonFormattingProvider = new CataJsonFormattingProvider(outputChannel, formatterModule);

		let documentFormattingEditProvider = vscode.languages
			.registerDocumentFormattingEditProvider(jsonSelector, cataJsonFormattingProvider);

		context.subscriptions.push(documentFormattingEditProvider);
	});
}

export function deactivate() {
	//
}
