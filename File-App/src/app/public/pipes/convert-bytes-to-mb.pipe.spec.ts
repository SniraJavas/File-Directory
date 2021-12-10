import { ConvertBytesPipe } from './convert-bytes.pipe';

describe('ConvertBytesToMBPipe', () => {
  it('create an instance', () => {
    const pipe = new ConvertBytesPipe();
    expect(pipe).toBeTruthy();
  });
});
