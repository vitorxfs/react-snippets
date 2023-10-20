import fs from 'fs';
import path from 'path';
import Validator from 'ajv';
import schema from './snippets-schema';

import { describe, expect, it } from 'vitest';

describe('Snippets', () => {
  it('defines a valid code snippets json', () => {
    const snippetsPath = path.join(__dirname, '../snippets/snippets.code-snippets');
    const snippets = JSON.parse(fs.readFileSync(snippetsPath).toString());

    const v = new Validator();

    const isValid = v.compile(schema)(snippets)

    expect(isValid).toBeTruthy();
  })
});
