import React, { useState } from "react";
import { Card, PageContainer, TextInput } from "../../components";

export default function BoyOrGirl() {
  const [username, setUsername] = useState<string>("");
  const [output, setOutput] = useState<string>("");

  function findUnique() {
    let uniqueStr = "";

    for (let i = 0; i <= username.length; i++) {
      if (uniqueStr.includes(username[i]) === false) {
        uniqueStr += username[i];
      }
    }

    return uniqueStr;
  }

  function validateGender() {
    const usernameUniqueCharacter = findUnique();
    if (usernameUniqueCharacter.length % 2) {
      setOutput("CHAT WITH HERE!");
      return;
    }

    setOutput("IGNORE HIM");
  }

  return (
    <PageContainer>
      <div className=" flex w-full justify-center items-center mt-10">
        <div className=" w-1/4">
          <Card title={"Boys And Girls"}>
            <TextInput
              className=" border border-gray-500"
              onChange={(e) => setUsername(e.target.value)}
              value={username}
            />

            <button
              className=" bg-slate-900 text-white p-2 mt-10"
              onClick={validateGender}
            >
              Validate Gender
            </button>
            <br></br>
            <div className=" my-10">
              <p className=" font-bold text-lg">Output</p>
              {output}
            </div>
          </Card>
        </div>
      </div>
    </PageContainer>
  );
}
