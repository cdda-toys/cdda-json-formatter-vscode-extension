# Cataclysm DDA JSON Formatter

This repository contains the source for a VS Code extension.

The extension will format json files according to the format expected by data files of
[Cataclysm DDA](https://github.com/CleverRaven/Cataclysm-DDA) project.

## Using

When using default VS Code configuration enabling the extension will set this formatter as the default for JSON files and enable format-on-save feature. Saving a JSON file or executing a Format Document command will format current file to the JSON format required for Cataclysm DDA project's data files.

If using non-default overrides you'll have to set this formatter manually, e.g. via `editor.defaultFormatter` setting in user/workspace/folder overrides.

## Installing

See "Installation" at the [Visual Studio Marketplace page](https://marketplace.visualstudio.com/items?itemName=cdda-toys.cdda-json-formatter).

## Configuration

Extension has no settings as this extension aims to be as plug and play as possible.

If it doesn't work make sure it's configured as the formatter for JSON files:
* On default settings then this extension will work out of the box - if it's enabled then disables the default JSON linter and sets itself as the default.

* If there are overrides for JSON formatting you'll have to set it as the formatter manually.

## Compiling

Clone the repository, run `npm install`, open the folder in VS Code and press F5; this should be enough to get Extension Host debugging session running.

An npm package in dependencies handles the formatting, it has the C++ formatter parts from Cataclysm-DDA compiled to javascript with emscripten:

https://github.com/cdda-toys/cdda-json-formatter-emscripten/blob/master/.github/workflows/build.yml

## License

Keep in mind the license is non-trivial - see LICENSE.txt:
* License for contents of this extension's repository is your choice of public domain or MIT.
* The compiled extension ships parts of Cataclysm-DDA project which have additional license at https://github.com/CleverRaven/Cataclysm-DDA/blob/master/LICENSE.txt or see the copy in this repository's LICENSE.txt
