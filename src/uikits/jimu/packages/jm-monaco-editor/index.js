const pbKeywords = [
    'import', 'option', 'message', 'package', 'service',
    'optional', 'rpc', 'returns', 'return', 'true', 'false', 'required'
];
const pbTypeKeywords = [
    'double', 'float', 'int32', 'int64', 'uint32',
    'uint64', 'sint32', 'sint64', 'fixed32', 'fixed64',
    'sfixed32', 'sfixed64', 'bool', 'string', 'bytes'
];
const keydesc = { "message": "消息体", "string": "字符串类型" }
function compareWithList(lastword, keys, resultList, wordType) {
    for (const aPbKeywords of keys) {
        if (aPbKeywords.indexOf(lastword) >= 0) {
            let keydoc = keydesc[aPbKeywords]
            if (!keydoc) {
                keydoc = wordType + aPbKeywords
            }
            let item = {
                label: aPbKeywords,
                kind: monaco.languages.CompletionItemKind.Function,
                documentation: keydoc,
                insertText: aPbKeywords
            };
            resultList.push(item);
        }
    }
}

function createCompleters(textUntilPosition) {
    console.log(textUntilPosition)
    if (undefined == textUntilPosition) {
        return [];
    }
    let resultList = [];
    let lastword = textUntilPosition.split(" ").pop();
    compareWithList(lastword, pbKeywords, resultList, "关键字:");
    compareWithList(lastword, pbTypeKeywords, resultList, "类型:");
    return resultList;
}
function registerLanguage(monaco) {
    monaco.languages.register({ id: 'protobuf' });
    monaco.languages.setMonarchTokensProvider('protobuf', {
        keywords: pbKeywords,
        typeKeywords: pbTypeKeywords,
        operators: [
            '=', '>', '<', '!', '~', '?', ':', '==', '<=', '>=', '!=',
            '&&', '||', '++', '--', '+', '-', '*', '/', '&', '|', '^', '%',
            '<<', '>>', '>>>', '+=', '-=', '*=', '/=', '&=', '|=', '^=',
            '%=', '<<=', '>>=', '>>>='
        ],
        symbols: /[=><!~?:&|+\-*\/^%]+/,
        escapes: /\\(?:[abfnrtv\\"']|x[0-9A-Fa-f]{1,4}|u[0-9A-Fa-f]{4}|U[0-9A-Fa-f]{8})/,
        tokenizer: {
            root: [
                [/[a-z_$][\w$]*/, {
                    cases: {
                        '@typeKeywords': 'typeKeyword',
                        '@keywords': 'keyword',
                        '@default': 'identifier'
                    }
                }],
                [/[A-Z][\w\$]*/, 'type.identifier'],
                { include: '@whitespace' },

                // delimiters and operators
                [/[{}()\[\]]/, '@brackets'],
                [/[<>](?!@symbols)/, '@brackets'],
                [/@symbols/, {
                    cases: {
                        '@operators': 'operator',
                        '@default': ''
                    }
                }],
                // @ annotations.
                [/@\s*[a-zA-Z_\$][\w\$]*/, { token: 'annotation', log: 'annotation token: $0' }],
                // numbers
                [/\d*\.\d+([eE][\-+]?\d+)?/, 'number.float'],
                [/0[xX][0-9a-fA-F]+/, 'number.hex'],
                [/\d+/, 'number'],
                // delimiter: after number because of .\d floats
                [/[;,.]/, 'delimiter'],
                // strings
                [/"([^"\\]|\\.)*$/, 'string.invalid'], // non-teminated string
                [/"/, { token: 'string.quote', bracket: '@open', next: '@string' }],
                // characters
                [/'[^\\']'/, 'string'],
                [/(')(@escapes)(')/, ['string', 'string.escape', 'string']],
                [/'/, 'string.invalid']
            ],
            comment: [
                [/[^\/*]+/, 'comment'],
                [/\/\*/, 'comment', '@push'], // nested comment
                ["\\*/", 'comment', '@pop'],
                [/[\/*]/, 'comment']
            ],
            string: [
                [/[^\\"]+/, 'string'],
                [/@escapes/, 'string.escape'],
                [/\\./, 'string.escape.invalid'],
                [/"/, { token: 'string.quote', bracket: '@close', next: '@pop' }]
            ],
            whitespace: [
                [/[ \t\r\n]+/, 'white'],
                [/\/\*/, 'comment', '@comment'],
                [/\/\/.*$/, 'comment']
            ]
        }
    });



    monaco.editor.defineTheme('protobuf', {
        base: 'vs-dark',
        inherit: true,
        rules: [
            /*
            { token: 'keyword', foreground: 'DB2121' },
            { token: 'typeKeyword', foreground: 'F84842', fontStyle: 'italic' },
            { token: 'identifier', foreground: '0C5ED7', fontStyle: 'bold' },
            { token: 'type.identifier', foreground: '00CA8C', fontStyle: 'bold' },
            { token: 'comment', foreground: '7A7A7A' },
            { token: 'number', foreground: '000000', fontStyle: 'italic' },
            { token: 'string', fontStyle: 'italic' }
            */
            { token: 'keyword' },
            { token: 'typeKeyword', fontStyle: 'italic' },
            { token: 'identifier', fontStyle: 'bold' },
            { token: 'type.identifier', fontStyle: 'bold' },
            { token: 'comment' },
            { token: 'number', fontStyle: 'italic' },
            { token: 'string', fontStyle: 'italic' }
        ]
    });

    monaco.languages.registerCompletionItemProvider('protobuf', {
        provideCompletionItems: function (model, position) {

            var textUntilPosition = model.getValueInRange({ startLineNumber: position.lineNumber, startColumn: 1, endLineNumber: position.lineNumber, endColumn: position.column });
            //var match = textUntilPosition.match(/cu/gim);
            //var suggestions = match ? createCompleters() : [];
            var suggestions = createCompleters(textUntilPosition);
            return {
                suggestions: suggestions
            };
            //return createCompleters();
        }
    });
}


export default registerLanguage;