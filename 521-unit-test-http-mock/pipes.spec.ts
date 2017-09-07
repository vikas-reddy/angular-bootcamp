import { ContainsXPipe } from './pipes';

describe('containsXPipe', () => {
  let pipe: ContainsXPipe;

  beforeEach(() => {
    pipe = new ContainsXPipe();
  });

  let sampleInput = ['abcde', 'fghij'];

  it("correctly finds the appropriate subset for ['abcde'] with an input of 'abcde'", () => {
    expect(pipe.transform(sampleInput, 'abcde')).toEqual(['abcde']);
  });

  it('correctly returns empty array when appropriate', () => {
    expect(pipe.transform(sampleInput, 'cb')).toEqual([]);
  });

  it('handles poor inputs gracefully', () => {
    expect(pipe.transform(sampleInput, undefined)).toEqual([]);
    expect(pipe.transform([] as any, [] as any)).toEqual([]);
    expect(pipe.transform('test' as any, [] as any)).toEqual('test');
    expect(pipe.transform('test' as any, ['ABC'] as any)).toEqual('test');
  });
});
