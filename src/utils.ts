import { SECTIONS } from "./const.ts";
import { writingSectionB } from "./questions/writingSectionB.ts";
import { writingSectionA } from "./questions/writingSectionA.ts";
import { speakingSectionA } from "./questions/speakingSectionA.ts";
import { speakingSectionB } from "./questions/speakingSectionB.ts";

export const generateQuestion = (section: SECTIONS) => {
  switch (section) {
    case SECTIONS.SPEAKING_A:
      return getQuestionSpeakingSectionA();
    case SECTIONS.SPEAKING_B:
      return getQuestionSpeakingSectionB();
    case SECTIONS.WRITING_A:
      return getQuestionWritingSectionA();
    case SECTIONS.WRITING_B:
      return getQuestionWritingSectionB();
  }
};

const getQuestionWritingSectionA = () => {
  return writingSectionA[Math.floor(Math.random() * writingSectionA.length)];
};
const getQuestionWritingSectionB = () => {
  return writingSectionB[Math.floor(Math.random() * writingSectionB.length)];
};
const getQuestionSpeakingSectionA = () => {
  return speakingSectionA[Math.floor(Math.random() * speakingSectionA.length)];
};
const getQuestionSpeakingSectionB = () => {
  return speakingSectionB[Math.floor(Math.random() * speakingSectionB.length)];
};
