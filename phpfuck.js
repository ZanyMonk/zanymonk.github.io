class PHPFuck {
    constructor() {
        this.debug = true
        this.options = {
            assign: false, // 'extract', 'putenv'
        }
        const a = "![].[]"; // striung(6) "1Array"
        const n = [
            '![]-![]',
            '+![]',
            '![]+![]',
            '![]+![]+![]',
            '![]+![]+![]+![]',
            '![]+![]+![]+![]+![]',
            '![]+![]+![]+![]+![]+![]',
            '(![].![]^![]+![]+![])-![]',
            '(![].![]^![]+![]+![])',
            '(![].![]^![]+![])',
        ];
        this.n = n;

        this.charMapping = {
           "\0": `([].[]^[].[])[!![]]`,
           "\n": `(${n[3]}.!![])^(${n[9]}).![]`,
            ' ': `(${a})[${n[4]}]^(${a})[![]]`,
            '!': `(${a})[${n[4]}]^(${n[2]}).![]^(${a})[${n[2]}]`,
            '"': `(${a})[${n[4]}]^(${a})[${n[2]}]^![].!![]`,
            '#': `(${a})[${n[2]}]^(${n[0]}).![]^(${a})[${n[4]}]`,
            '$': `(${a})[${n[5]}]^(${n[1]}).![]^(${a})[${n[1]}]^-(![]).![]`,
            '%': `(${a})[${n[5]}]^(${n[0]}).![]^(${a})[${n[1]}]^-(![]).![]`,
            '&': `(${a})[${n[2]}]^-(![]).![]^(${a})[${n[5]}]`,
            "'": `(-![].![])[!![]]^(${n[3]}.!![])^(${n[9]}).![]`,
            '(': `(${a})[${n[4]}]^(${n[0]}).![]^(${a})[${n[5]}]`,
            ')': `(${a})[${n[4]}]^(${a})^(${a})[${n[5]}]`,
            '*': `(${a})[${n[2]}]^(${n[4]}).![]^(${a})[${n[1]}]^-(![]).![]`,
            '+': `(${a})[${n[2]}]^(${n[5]}).![]^(${a})[${n[1]}]^-(![]).![]`,
            ',': `(${a})[${n[0]}]^(${n[0]}).![]^-![].![]`,
            '-': `(-![].![])[!![]]`,
            '.': `(![]/(![]+![]).![])[![]]`,
            '/': `(${a})[![]]^![].!![]^(${a})[${n[2]}]^-(![]).![]`,
            '0': `${n[0]}.!![]`,
            '1': `${n[1]}.!![]`,
            '2': `${n[2]}.!![]`,
            '3': `${n[3]}.!![]`,
            '4': `${n[4]}.!![]`,
            '5': `${n[5]}.!![]`,
            '6': `${n[6]}.!![]`,
            '7': `${n[7]}.!![]`,
            '8': `${n[8]}.!![]`,
            '9': `${n[9]}.!![]`,
            ':': `(${a})[${n[2]}]^(${n[1]}).![]^(${a})[${n[5]}]`,
            ';': `(${a})[${n[2]}]^(${n[0]}).![]^(${a})[${n[5]}]`,
            '<': `(${a})[${n[2]}]^(${n[7]}).![]^(${a})[${n[5]}]`,
            '=': `(${a})[${n[2]}]^(${n[6]}).![]^(${a})[${n[5]}]`,
            '>': `(${a})[${n[2]}]^(${n[5]}).![]^(${a})[${n[5]}]`,
            '?': `(${a})[${n[2]}]^(${n[4]}).![]^(${a})[${n[5]}]`,
            '@': `(${a})[${n[2]}]^(${n[2]}).![]`,
            'A': `(${a})[${n[1]}]`,
            'B': `(${a})[${n[2]}]^(${n[0]}).![]`,
            'C': `(${a})[${n[2]}]^![].!![]`,
            'D': `(${a})[${n[2]}]^(${n[6]}).![]`,
            'E': `(${a})[${n[2]}]^(${n[7]}).![]`,
            'F': `(${a})[${n[2]}]^(${n[4]}).![]`,
            'G': `(${a})[${n[2]}]^(${n[5]}).![]`,
            'H': `(${a})[${n[5]}]^(${n[1]}).![]`,
            'I': `(${a})[${n[5]}]^(${n[0]}).![]`,
            'J': `(${a})[${n[2]}]^(${n[8]}).![]`,
            'K': `(${a})[${n[2]}]^(${n[9]}).![]`,
            'L': `(${a})[${n[5]}]^(${n[5]}).![]`,
            'M': `(${a})[${n[5]}]^(${n[4]}).![]`,
            'N': `(${a})[${n[5]}]^(${n[7]}).![]`,
            'O': `(${a})[${n[5]}]^(${n[6]}).![]`,
            'P': `(${a})[${n[4]}]^(${a})`,
            'Q': `(${a})[${n[4]}]^(${n[0]}).![]`,
            'R': `(${a})[${n[4]}]^(${n[3]}).![]`,
            'S': `(${a})[${n[4]}]^(${n[2]}).![]`,
            'T': `(${a})[${n[4]}]^(${n[5]}).![]`,
            'U': `(${a})[${n[4]}]^(${n[4]}).![]`,
            'V': `(${a})[${n[4]}]^(${n[7]}).![]`,
            'W': `(${a})[${n[4]}]^(${n[6]}).![]`,
            'X': `(${a})[${n[4]}]^(${n[9]}).![]`,
            'Y': `(${a})[${n[4]}]^(${n[8]}).![]`,
            'Z': `(${a})[![].!![]]^(${n[6]}).![]^-![].![]`,
            '[': `(${a})[${n[1]}]^-(![]).![]^${n[7]}.!![]`,
           '\\': `(${a})[${n[1]}]^-(![]).![]^${n[0]}.!![]`,
            ']': `(${a})[${n[1]}]^-(![]).![]^${n[1]}.!![]`,
            '^': `(${a})[${n[1]}]^-(![]).![]^${n[2]}.!![]`,
            '_': `(${a})[${n[2]}]^-(![]).![]`,
            '`': `(${a})[${n[4]}]^(${a})^${n[0]}.!![]`,
            'a': `(${a})[${n[4]}]`,
            'b': `(${a})[${n[4]}]^(${n[2]}).![]^![].!![]`,
            'c': `(${a})[${n[4]}]^(${n[2]}).![]^(${n[0]}).![]`,
            'd': `(${a})[${n[4]}]^(${n[2]}).![]^(${n[7]}).![]`,
            'e': `(${a})[${n[4]}]^(${n[2]}).![]^(${n[6]}).![]`,
            'f': `(${a})[${n[4]}]^(${n[2]}).![]^(${n[5]}).![]`,
            'g': `(${a})[${n[4]}]^(${n[2]}).![]^(${n[4]}).![]`,
            'h': `(${a})[${n[4]}]^(${n[1]}).![]^(${n[8]}).![]`,
            'i': `(${a})[${n[4]}]^(${n[1]}).![]^(${n[9]}).![]`,
            'j': `(${a})[${n[4]}]^(${n[2]}).![]^(${n[9]}).![]`,
            'k': `(${a})[${n[4]}]^(${n[2]}).![]^(${n[8]}).![]`,
            'l': `(${a})[${n[1]}]^-(![]).![]`,
            'm': `(${a})[${n[4]}]^(${n[5]}).![]^(${n[9]}).![]`,
            'n': `(${a})[${n[2]}]^![].!![]^-(![]).![]`,
            'o': `(${a})[${n[4]}]^(${n[6]}).![]^(${n[8]}).!![]`,
            'p': `(${a})[![]]^![].!![]`,
            'q': `(${a})[${n[1]}]^(${n[0]}).![]`,
            'r': `(${a})[${n[2]}]`,
            's': `(${a})[![].!![]]^(${n[2]}).![]`,
            't': `(${a})[![].!![]]^(${n[5]}).![]`,
            'u': `(${a})[![].!![]]^(${n[4]}).![]`,
            'v': `(${a})[![].!![]]^(${n[7]}).![]`,
            'w': `(${a})[![].!![]]^(${n[6]}).![]`,
            'x': `(${a})[![].!![]]^(${n[9]}).![]`,
            'y': `(${a})[${n[5]}]`,
            'z': `${n[9]}.!![]^(${a})[${n[2]}]^![].!![]`,
            '{': `(${a})[${n[4]}]^(${n[7]}).![]^-![].![]`,
            '|': `(${a})[${n[4]}]^(${n[0]}).![]^-![].![]`,
            '}': `(${a})[${n[4]}]^(${n[1]}).![]^-![].![]`,
            '~': `(${a})[${n[4]}]^(${n[2]}).![]^-![].![]`,
        };


        const phpParser = require('php-parser');
        this.parser = new phpParser({
            parser: {
                extractDoc: true,
                suppressErrors: true,
                php7: true
            },
            ast: {
                withPositions: true
            },
            lexer: {
                short_tags: true,
                asp_tags: true
            }
        });

        // const aa = this.parser.parseEval('test();')
        // console.log(aa)
    }

    basicEncode = (code, paren = true) => {
        const res = [...code].map(char => `(${this.charMapping[char] || this.fixMissingChar(char)})`).join('.')
        if (paren) return '('+res+')'
        return res
    }

    encodeNumber = num => {
        return `${this.n[0]}+(${[...num.toString()].map(n => this.n[n]).join('.')})`
    }

    encodeVariable = varName => {
        const current = this.basicEncode('current');
        const compact = this.basicEncode('compact');
        return `${current}(${compact}(${this.basicEncode(varName)}))`;
    }

    fixMissingChar = (char) => {
        const charCode = this.encodeNumber(char.codePointAt());
        return `${this.basicEncode('mb_chr')}(${charCode})`;
    }

    encode(code, options) {
        Object.assign(this.options, options)
        const cleanCode = code => code.replace(/ |\n/g, '');

        let evalCode = '';
        let func;
        let encoded;
        switch (this.options.mode) {
            case 'create_function':
                const create_function = this.basicEncode("create_function");
                const str_getcsv = this.basicEncode("str_getcsv");
                const comma = this.basicEncode(",");
                const quote = this.basicEncode('"');
                encoded = this.basicEncode(code.replace(/"/g, '""'));

                evalCode = `
                ${create_function}(
                    ...${str_getcsv}(${comma}.${quote}.${encoded}.${quote})
                )()`;
                break;
            case 'assert':
                func = this.basicEncode('assert');
                const prefix = this.basicEncode('(function(){');
                const postfix = this.basicEncode(';return 1;})()');
                encoded = this.basicEncode(code);
                evalCode = `${func}((${prefix}).${encoded}.(${postfix}))`;
                break;
            case 'custom':
                func = this.basicEncode(this.options.customFunc);
                encoded = this.basicEncode(code);
                evalCode = `${func}(${encoded});`;
                break;
            default:
                return this.parse(code, options);
        }

        return '<?php ' + cleanCode(evalCode);
    }

    parse(code, options) {
        Object.assign(this.options, options)
        let ast;
        try {
            ast = this.parser.parseCode(code);
            ast = this.fixAST(ast);
            return phpUnparser(ast, {
                indent: '',
                dontUseWhitespaces: true,
                shortArray: true,
                bracketsNewLine: false,
                collapseEmptyLines: true,
            });
        } catch (e) {
            console.error(e);
        }
    }

    /**
     * @from    $var = 'value';
     * @to      extract(['var' => 'value']);
     * @to      putenv('var=value');
     */
    fixAssign(c) {
        const value = this.basicEncode(c.right.value)
        if (this.options?.assign == 'extract') {
            return {
                kind: 'call',
                what: {
                    kind: 'identifier',
                    name: this.basicEncode('extract')
                },
                arguments: [
                    {
                        kind: 'array',
                        items: [
                            {
                                kind: 'entry',
                                key: {
                                    kind: 'identifier',
                                    name: this.basicEncode(c.left.name),
                                },
                                value: {
                                    kind: 'identifier',
                                    name: value,
                                },
                            }
                        ]
                    }
                ]
            }
        } else if (this.options?.assign == 'putenv') {
            return {
                kind: 'call',
                what: {
                    kind: 'identifier',
                    name: this.basicEncode('putenv')
                },
                arguments: [
                    {
                        kind: 'identifier',
                        name: this.basicEncode(`${c.left.name.toUpperCase()}=${c.right.value}`),
                    }
                ]
            }
        } else {
            c.right = {
                kind: 'identifier',
                name: value,
            }
            return c
        }
    }

    /**
     * @from    $var
     * @to      compact('var');
     */
    fixVariable(c) {
        if (this.options?.assign == 'extract') {
            return {
                kind: 'call',
                what: {
                    kind: 'identifier',
                    name: this.basicEncode('compact'),
                },
                arguments: [
                    {
                        kind: 'identifier',
                        name: this.basicEncode(c.name),
                    }
                ]
            }
        } else if (this.options?.assign == 'putenv') {
            return {
                kind: 'call',
                what: {
                    kind: 'identifier',
                    name: this.basicEncode('getenv')
                },
                arguments: [
                    {
                        kind: 'identifier',
                        name: this.basicEncode(c.name.toUpperCase()),
                    }
                ]
            }
        } else return c
    }

    fixCall(c) {
        c.what.name = this.basicEncode(c.what.name)
        c.arguments = c.arguments.map((a) => this.fixArg(a))
        return c;
    }

    fixArg(c) {
        if (c.kind == 'string') return this.fixString(c)
        else if(c.kind == 'number') return this.fixNumber(c)
        else if (c.kind == 'array') return this.fixArray(c)
        else if (c.kind == 'call') return this.fixCall(c)
        else if(c.kind == 'variable') return this.fixVariable(c)
        else if(c.kind == 'assign') return this.fixAssign(c)
        else if(c.kind == 'identifier') return c
        else if(c.kind == 'inline') return c

        console.error('NOT SUPPORTED', c);
        return c;
    }

    fixString(c) {
        return {
            kind: 'identifier',
            name: this.basicEncode(c.value),
        }
    }

    fixNumber(c) {
        return {
            kind: 'identifier',
            name: '('+this.encodeNumber(c.value)+')',
        }
    }

    fixArray(c) {
        c.items = c.items.map((e) => {
            if(e.key) e.key = this.fixArg(e.key)
            e.value = this.fixArg(e.value)
            return e
        })
        return c;
    }

    fixAST(ast) {
        ast.children = ast.children.map((c) => this.fixArg(c)).filter((x)=>x)
        // ast.children = ast.children.map((c) => {
        //     console.log(c);
        //     if(c.kind == 'call') return this.fixCall(c)
        //     return c;
        // }).filter((x)=>x)
        // console.log(ast.children)
        return ast;
    }
}