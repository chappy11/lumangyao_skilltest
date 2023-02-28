import { useMemo, useRef, useState } from "react";
import { text } from "stream/consumers";
import { Card, PageContainer, TextArea } from "../../components";

export default function AwayTooLongWords() {
  const inputRef = useRef<HTMLTextAreaElement | null>(null);
  const [wordList, setWordList] = useState<string[]>([]);
  const [isDisable, setIsDisable] = useState<boolean>(false);
  const [input, setInput] = useState<string>("");
  const numberOfLines = () => {
    return parseInt(wordList[0]);
  };

  const onChange: React.ChangeEventHandler<HTMLTextAreaElement> = (e) => {
    const arr = e.target.value.split("\n");

    if (isNaN(numberOfLines()) && wordList.length > 0) {
      setInput("");
      wordList.pop();
      return;
    }

    if (wordList.length - 1 > numberOfLines() || wordList.length > 100) {
      setIsDisable(true);
      return;
    }

    setInput(e.target.value);
    setWordList(arr);
  };

  function removeFirstAndLastLetter(text: string) {
    return text.slice(1).slice(0, -1);
  }

  function shortenText(text: string) {
    if (text.length < 11) {
      return text;
    }

    const getCountOfRemainingText = removeFirstAndLastLetter(text).length;
    const formatText = text[0].concat(
      getCountOfRemainingText.toString(),
      text[text.length - 1]
    );
    return formatText;
  }

  function handleReset() {
    setInput("");
    setWordList([]);
    setIsDisable(false);
  }

  const displayButton = useMemo(() => {
    if (isDisable) {
      return (
        <button className=" bg-red-400 text-white p-3" onClick={handleReset}>
          Reset
        </button>
      );
    }
  }, [isDisable]);

  const displayList = useMemo(() => {
    if (wordList.length - 1 > numberOfLines()) {
      return wordList
        .slice(1)
        .map((val) => <p>{shortenText(val).toLowerCase()}</p>);
    }
  }, [wordList, numberOfLines]);

  return (
    <PageContainer>
      <div className=" flex flex-row flex-1 justify-center items-center">
        <div className=" w-3/4">
          <div className=" w-ful" />
          <Card title="A Way Too Long Word">
            <p>
              Instruction: In First line enter limit of words do you like to
              put, after enter the words when you reach the limit you will not
              allow to input again and the textbox will also be disabel just
              press enter again then there will be reset button you press it
              will refresh the text box and the result
            </p>
            <div className=" flex  items-center mt-10">
              <div className=" h-10 flex flex-row " />
              <div className=" flex-1">
                <TextArea
                  ref={inputRef}
                  onChange={onChange}
                  value={input}
                  disabled={isDisable}
                />
                {displayButton}
              </div>

              <div className=" p-5 flex-1">
                <h1 className=" font-bold">Output: </h1>
                <div>{displayList}</div>
                <div className=" h-5" />
              </div>
            </div>

            <div className=" h-10" />
          </Card>
        </div>
      </div>
    </PageContainer>
  );
}
