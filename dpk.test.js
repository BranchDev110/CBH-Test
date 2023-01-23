const crypto = require("crypto");
const { deterministicPartitionKey } = require("./dpk");

// describe("deterministicPartitionKey", () => {
//   it("Returns the literal '0' when given no input", () => {
//     const trivialKey = deterministicPartitionKey();
//     expect(trivialKey).toBe("0");
//   });
// });

describe('deterministicPartitionKey', () => {
  test('returns trivial partition key when no event is passed', () => {
    const result = deterministicPartitionKey();
    expect(result).toBe('0');
  });
  test('returns given partition key when one is provided', () => {
    const event = {
      partitionKey: 'key'
    };
    const result = deterministicPartitionKey(event);
    const data = JSON.stringify(event);
    const expected = crypto.createHash('sha3-512').update(data).digest('hex');
    expect(result).toBe('key');
  });
  test('returns hashed version of JSON string when no partition key is provided', () => {
    const event = {
      field1: 'value1',
      field2: 'value2'
    };
    const result = deterministicPartitionKey(event);
    const data = JSON.stringify(event);
    const expected = crypto.createHash('sha3-512').update(data).digest('hex');
    expect(result).toBe(expected);
  });
  test('returns hashed version of candidate if it is too long', () => {
    const event = {
      partitionKey: 'this partition key is too long to be accepted this partition key is too long to be accepted this partition key is too long to be accepted this partition key is too long to be accepted this partition key is too long to be accepted this partition key is too long to be accepted this partition key is too long to be accepted this partition key is too long to be accepted'
    };
    const result = deterministicPartitionKey(event);
    const expected = crypto.createHash('sha3-512').update(event.partitionKey).digest('hex');
    expect(result).toBe(expected);
  });
});
