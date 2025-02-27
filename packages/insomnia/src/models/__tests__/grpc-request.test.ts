import { describe, expect, it, vi } from 'vitest';

import * as models from '../index';

describe('init()', () => {
  it('contains all required fields', async () => {
    Date.now = vi.fn().mockReturnValue(1478795580200);
    expect(models.grpcRequest.init()).toEqual({
      url: '',
      name: 'New gRPC Request',
      description: '',
      protoFileId: '',
      protoMethodName: '',
      metadata: [],
      body: {
        text: '{}',
      },
      reflectionApi: {
        enabled: false,
        apiKey: '',
        module: 'buf.build/connectrpc/eliza',
        url: 'https://buf.build',
      },
      metaSortKey: -1478795580200,
      isPrivate: false,
    });
  });
});

describe('create()', () => {
  it('creates a valid GrpcRequest', async () => {
    Date.now = vi.fn().mockReturnValue(1478795580200);
    const request = await models.grpcRequest.create({
      name: 'My request',
      parentId: 'fld_124',
    });
    const expected = {
      _id: 'greq_cc1dd2ca4275747aa88199e8efd42403',
      created: 1478795580200,
      modified: 1478795580200,
      parentId: 'fld_124',
      name: 'My request',
      description: '',
      url: '',
      protoFileId: '',
      protoMethodName: '',
      metadata: [],
      body: {
        text: '{}',
      },
      reflectionApi: {
        enabled: false,
        apiKey: '',
        module: 'buf.build/connectrpc/eliza',
        url: 'https://buf.build',
      },
      metaSortKey: -1478795580200,
      isPrivate: false,
      type: 'GrpcRequest',
    };
    expect(request).toEqual(expected);
    expect(await models.grpcRequest.getById(expected._id)).toEqual(expected);
  });

  it('fails when missing parentId', async () => {
    Date.now = vi.fn().mockReturnValue(1478795580200);
    expect(() =>
      models.grpcRequest.create({
        name: 'no parentId',
      }),
    ).toThrow('New GrpcRequest missing `parentId`');
  });
});
