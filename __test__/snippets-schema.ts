import { Schema } from 'ajv';

const snippetProperties = {
  prefix: { type: 'string' },
  body: {
    type: 'array',
    items: { type: 'string' },
  },
  description: { type: 'string' },
};

const schema: Schema = {
  type: 'object',
  patternProperties: {
    "^.*$": {
      type: 'object',
      properties: {
        prefix: { type: 'string' },
        body: {
          type: 'array',
          items: { type: 'string' },
        },
        description: { type: 'string' },
      },
      required: ['prefix', 'body', 'description'],
      additionalProperties: false,
    }
  },
  additionalProperties: false,
};

export default schema;
