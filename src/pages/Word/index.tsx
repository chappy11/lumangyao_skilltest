import { useState } from "react";
import { Card, PageContainer, TextInput } from "../../components";

export default function Word() {
  const [input, setInput] = useState<string>("");
  const [output, setOutput] = useState<string>("");

  function validateText() {
    const upperCaseCharacter = input
      .split("")
      .filter((val) => val === val.toUpperCase());

    const lowerCaseCharacter = input
      .split("")
      .filter((val) => val === val.toLowerCase());

    const isEqualNumberCases =
      upperCaseCharacter.length === lowerCaseCharacter.length;
    const isLowerCases = lowerCaseCharacter.length > upperCaseCharacter.length;
    if (isEqualNumberCases || isLowerCases) {
      setOutput(input.toLowerCase());
      return;
    }

    setOutput(input.toUpperCase());
  }

  return (
    <PageContainer>
      <div className=" flex mt-20 justify-center item-center">
        <div className=" w-1/4">
          <Card title="Word">
            <div className=" p-5">
              <TextInput
                onChange={(e) => setInput(e.target.value)}
                value={input}
              />
              <div className=" h-5" />
              <button
                className=" bg-slate-900 text-white p-3"
                onClick={validateText}
              >
                Submit
              </button>
              <div className=" h-10" />
              <p className=" font-bold text-slate-800">Output:</p>

              <p className=" text-lg">{output}</p>
              <div className=" h-10" />
            </div>

            <br />
          </Card>
        </div>
      </div>
    </PageContainer>
  );
}
