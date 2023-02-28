import React, { useMemo, useState } from "react";
import { Card, PageContainer, TextArea } from "../../components";

export default function Magnet() {
  const [input, setInput] = useState<string>("");
  const [magnetList, setMagnetList] = useState<string[]>([]);
  const [isDisable, setIsDisable] = useState<boolean>(false);
  const numberOfLines = () => {
    return parseInt(magnetList[0]);
  };

  const onChange: React.ChangeEventHandler<HTMLTextAreaElement> = (e) => {
    const arr = e.target.value.split("\n");
    if (magnetList.length - 1 > numberOfLines()) {
      setIsDisable(true);
      return;
    }

    if (isNaN(numberOfLines()) && magnetList.length > 0) {
      setInput("");
      magnetList.pop();
      return;
    }

    if (magnetList.length - 1 > numberOfLines() || magnetList.length > 100) {
    }

    setInput(e.target.value);
    setMagnetList(arr);
  };

  const output = useMemo(() => {
    if (numberOfLines() < magnetList.length - 1) {
      return getNumberOfGroup();
    }
  }, [magnetList, numberOfLines]);

  function removeTheFirstIndex() {
    return magnetList.slice(1);
  }

  function getNumberOfGroup() {
    const newList = removeTheFirstIndex();

    let countGroup = 0;
    for (let i = 0; i <= newList.length; i++) {
      if (i !== 0) {
        if (newList[i - 1] !== newList[i]) {
          countGroup++;
        }
      }
    }

    return countGroup - 1;
  }

  return (
    <PageContainer>
      <div className=" flex w-full items-center justify-center mt-10">
        <div className=" flex w-1/4">
          <Card title="Magnet">
            <p>
              Instruction: Enter the limit of how many magnets are you gonna put
              then enter the magnets after that when you reach the limit the
              result will be display at the bottom{" "}
            </p>
            <div className=" flex-1">
              <TextArea
                className=" border border-gray-600 outline-none p-3 focus:border-cyan-800"
                cols={50}
                rows={15}
                onChange={onChange}
                value={input}
                disabled={isDisable}
              />
            </div>
            <div className=" flex-1 mb-5">
              <p className=" text-lg font-bold">Output</p>
              <p>{output}</p>
            </div>
          </Card>
        </div>
      </div>
    </PageContainer>
  );
}
