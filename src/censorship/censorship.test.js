const assert = require("assert");
const censor = require("./censorship.js");

describe("Censorship", () => {
  it("Your function exists", () => {
    assert.strictEqual(typeof censor, "function");
  });

  it("Your function accepts 2 parameters", () => {
    assert.strictEqual(censor.length, 2);
  });

  it("Your function doesn't have for loop", () => {
    assert.strictEqual(
      censor.toString().includes("for "),
      false,
      "don't use a loop"
    );
  });

  it("Your function doesn't have while loop", () => {
    assert.strictEqual(
      censor.toString().includes("while "),
      false,
      "don't use a loop"
    );
  });

  it("Your function handle empty array", () => {
    assert.deepStrictEqual(censor([], "test"), []);
  });

  it("Censor 1 word", () => {
    assert.deepStrictEqual(censor(["schnibble"], "schnibble"), ["*********"]);
  });

  it("Censor an array of sentences", () => {
    assert.deepStrictEqual(
      censor(
        [
          "I love the smell of tacos in the morning.",
          "Where is my umbrella?",
          "The test is not a diagnosis of the disease psittacosis.",
          "Eat tacos every day.",
        ],
        "tacos"
      ),
      [
        "I love the smell of ***** in the morning.",
        "Where is my umbrella?",
        "The test is not a diagnosis of the disease psittacosis.",
        "Eat ***** every day.",
      ]
    );
  });

  it("Your function doesn't mutate parameters", () => {
    let test = ["this test is awesome"];

    censor(test);

    assert.deepStrictEqual(
      test,
      ["this test is awesome"],
      "don't mutate the parameter"
    );
  });
});
