import { useState, useId } from "react"

export default function App() {
  const [questionnaire, setQuestionnaire] = useState([
    {
      id: useId(),
      question: `You’re really busy at work and a colleague is telling you their life story and personal woes. You:`,
      answers: [
        { id: useId(), title: `Don’t dare to interrupt them`, score: 4 },
        {
          id: useId(),
          title: `Think it’s more important to give them some of your time; work can wait`,
          score: 3
        },
        {
          id: useId(),
          title: `Listen, but with only with half an ear`,
          score: 2
        },
        {
          id: useId(),
          title: `Interrupt and explain that you are really busy at the moment`,
          score: 1
        }
      ]
    },

    {
      id: useId(),
      question: `You’ve been sitting in the doctor’s waiting room for more than 25 minutes. You:`,
      answers: [
        {
          id: useId(),
          title: `Look at your watch every two minutes`,
          score: 4
        },
        {
          id: useId(),
          title: `Bubble with inner anger, but keep quiet`,
          score: 3
        },
        {
          id: useId(),
          title: `Explain to other equally impatient people in the room that the doctor is always running late`,
          score: 2
        },
        {
          id: useId(),
          title: `Complain in a loud voice, while tapping your foot impatiently`,
          score: 1
        }
      ]
    },

    {
      id: useId(),
      question: `You’re having an animated discussion with a colleague regarding a project that you’re in charge of. You:`,
      answers: [
        { id: useId(), title: `Don’t dare contradict them`, score: 4 },
        { id: useId(), title: `Think that they are obviously right`, score: 3 },
        {
          id: useId(),
          title: `Defend your own point of view, tooth and nail`,
          score: 2
        },
        {
          id: useId(),
          title: `Continuously interrupt your colleague`,
          score: 1
        }
      ]
    }
  ])

}