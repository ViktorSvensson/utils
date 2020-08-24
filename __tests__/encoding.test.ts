import { atob, btoa, encode } from "../src/index";

describe("/encoding", () => {
  it("atob() converts ascii to base64", () => {
    const input = atob("Hello, world!");
    expect(input).toEqual("SGVsbG8sIHdvcmxkIQ==");
  });

  it("btoa() converts base64 to ascii", () => {
    const input = btoa("SGVsbG8sIHdvcmxkIQ==");
    expect(input).toEqual("Hello, world!");
  });

  it("encode() converts ascii to base64", () => {
    const input = encode("Hello, world!", "ascii", "base64");
    expect(input).toEqual("SGVsbG8sIHdvcmxkIQ==");
  });

  it("encode() converts base64 to ascii", () => {
    const input = encode("SGVsbG8sIHdvcmxkIQ==", "base64", "ascii");
    expect(input).toEqual("Hello, world!");
  });
});
