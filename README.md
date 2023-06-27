# Cataclysm DDA JSON Formatter

This is an extension for VS Code, when enabled this will  format json files according to the JSON style of data files for [Cataclysm DDA](https://github.com/CleverRaven/Cataclysm-DDA) project.

## Installation

One of:
* "Installation" section at the [Visual Studio Marketplace page](https://marketplace.visualstudio.com/items?itemName=cdda-toys.cdda-json-formatter).
* [Download a `.vsix` file](https://open-vsx.org/extension/cdda-toys/cdda-json-formatter) hosted on Open VSX and install manually

## Using

When using default VS Code configuration this extension will be plug and play; enabling the extension will default to this formatter for JSON files and enable format-on-save feature. Saving a JSON file or executing a Format Document command will format current file to the JSON format required for Cataclysm DDA project's data files.

If using non-default overrides you'll have to set this formatter manually, e.g. via `editor.defaultFormatter` setting in user/workspace/folder settings.

Restarting VS Code should usually resolve any temporary issues.

## Demo

Save file hotkey or `Format Document` triggers the formatter:

https://github.com/cdda-toys/cdda-json-formatter-vscode-extension/assets/6560075/e9952dcc-982d-44fe-8208-41cf8ae272b3

## Compiling

To compile or debug dev containers can be used, a guide on how to get started with dev containers [can be found in VS Code docs](https://code.visualstudio.com/docs/devcontainers/containers). For a short pick me up guide: install "Docker Desktop for [Your OS]", install the Dev Containers extension in VS and you're good to go.

Once VS Code is set up with dev containers you can clone the repository and open the folder in VS Code. A window should popup offering to "Reopen in container", confirm; once it finishes setting up the container (this also runs `npm install` inside the container), you can press F5; another VS Code instance will pop up that'll have the extension running under the Extension Host debugger.

An npm package in dependencies handles the formatting, it has the C++ formatter parts from Cataclysm-DDA compiled to javascript with emscripten:

https://github.com/cdda-toys/cdda-json-formatter-emscripten/blob/master/.github/workflows/build.yml

## License

Keep in mind the license is non-trivial - see LICENSE.txt:
* License for contents of this extension's repository is your choice of public domain or MIT.
* The compiled extension ships parts of Cataclysm-DDA project which have additional license at https://github.com/CleverRaven/Cataclysm-DDA/blob/master/LICENSE.txt or see the copy in this repository's LICENSE.txt
