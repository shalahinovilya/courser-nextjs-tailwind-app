## WEBSITE

Link: https://courses-eight-beta.vercel.app/

## Features

- Next.js: A powerful React framework providing server-side rendering and static site generation. (https://nextjs.org/docs)
- TypeScript: Strongly typed programming language that builds on JavaScript, giving you better tooling at any scale. (https://www.typescriptlang.org/docs/)
- Tailwind: is an open source CSS framework. The main feature of this library is that, unlike other CSS frameworks such as Bootstrap, it does not provide a number of predefined classes for elements such as buttons or tables.(https://tailwindcss.com/)

## Architecture

```
customers-frontend
+---public

\---src
    +---app
    |   \---api
    +---assets
    +---components
    |   |   Footer.tsx
    |   |   Layout.tsx
    |   |   NavBar.tsx
    |   |
    |   +---ChooseCoursePage
    |   |       ChooseCoursePage.tsx
    |   |
    |   +---CourseCard
    |   |       CourseCard.tsx
    |   |
    |   +---CourseContentItem
    |   |       CourseContentItem.tsx
    |   |
    |   +---CoursesPage
    |   |       CoursesPage.tsx
    |   |
    |   +---Home
    |   |       Achievements.tsx
    |   |       Certifications.tsx
    |   |       Collaborations.tsx
    |   |       FirstOnlinePlatform.tsx
    |   |       Hero.tsx
    |   |       Mentors.tsx
    |   |       PopularCourses.tsx
    |   |       WhoCanJoin.tsx
    |   |
    |   +---Icons
    |   |
    |   +---Loaders
    |   |       GlobalLoader.tsx
    |   |
    |   +---Message
    |   |   |   Message.tsx
    |   |   |
    |   |   \---OptionsMessage
    |   |           Buttons.tsx
    |   |           Pictures.tsx
    |   |
    |   \---Question
    |           index.tsx
    |
    +---context
    |       CoursesContext.tsx
    |
    +---firebase
    |       config.tsx
    |
    +---interfaces
    |       ICourse.tsx
    |       ICourseInfo.tsx
    |       IQuestionsList.tsx
    |       ISteps.tsx
    |
    +---pages
    |   |   index.tsx
    |   |   _app.tsx
    |   |   _document.tsx
    |   |
    |   +---choose-course
    |   |       index.tsx
    |   |
    |   +---courses
    |   |   |   index.tsx
    |   |   |
    |   |   \---[name]
    |   |           index.tsx
    |   |
    |   \---faq
    |           index.tsx
    |
    \---styles
            custom.css
            font.ts
            globals.css
```

### Description

- Pages Directory: Contains page components used for routing in Next.js, each page aligns with a route. Each page can also have its own components subdirectory for components that are specific to that page.
- Components Directory: Reusable UI components.
- Store Directory: API calls and Context setup.
- Public Directory: Static files like images and fonts.
- Styles Directory: Global styles and tailwind styles.
- Layouts Directory: Layout components that define the structure of different pages, ensuring consistent layout and design across the application.
- Shared Directory: Common utilities and helper functions that can be used throughout the application.
- Types Directory: TypeScript types and interfaces used to ensure type safety and consistency across the application.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

You need to have Node.js v. >= 17.0 installed on your machine. If you don't have it, you can download it from [Node.js official website](https://nodejs.org/).

### Installing

Clone the repository to your local machine:

```bash
git clone git@github.com:RomanDydyk/courses.git
cd courses
```

### Install dependencies

Run for install frontend dependencies

```bash
npm install
```

### Setup environments

To configure the environments, follow these steps:

1. Copy the example environment file: The project includes a ".env.example" file containing example environment variables. Copy this file and rename it to ".env".

    ```bash
    cp .env.example .env
    ```

2. Edit the ".env" file: Open the newly created ".env" file and fill in the necessary values for your environment. This file typically contains configurations such as API keys, database URLs, and other sensitive information required for the project to run.

3. Save the changes: Ensure you save the ".env" file after editing.

The environment variables defined in the .env file will be loaded automatically by Next.js during the build and runtime.

### Run Project

First, run the development server:

```bash
npm run dev
# or
npm run start
```

## Firebase

We have 3 main categories of data in the database:
  - Questions
  - Courses
  - Categories

## Questions

This data is responsible for the questions that are used to further filter the courses after a short survey on the corresponding page.
These questions are sequential and hierarchical and have a certain structure:

```
interface Question {
  message: string
  pictures?: Picture[]
  buttons?: Button[]
}

interface IQuestionsList {
  [key: string]: Question
}
```
Where ```message``` is the question, ```key``` is the unique value of the question.

We also have 2 types of answers:
 - simple buttons with a value
```
interface Button {
  text: string // text in button
  next: string // next question by key
  category: string // chosen filter
}
```
  - answers with pictures
```
interface Picture {
  src: string // image url
  text: string // text under image
  category: string // chosen filter
  next: string // next question by ket
}
```

First Question has key - ```start``` , last has next value ```finish```,

## Categories

This data category is an array of categories that are available on the site,
they can be added to the categories for questions and filtering.

```
categories: string[]
```

## Courses

There are 2 subparagraphs under this item at once:
  - All courses
  - Single course

## All courses

This data contains basic information about all courses that are available. This is ```array``` with this info for each course:

```
interface ICourse {
  description: string // course description
  download: string // link to download course
  title: string // name of course
  src: string // course logo url 
  id: number // course id
  createdAt: any // date of creation
  boughtCount: number // how many people bought this course
  categories: string[] // categories of course
}

```

## Single course 

This is data that contains all the information about a particular course that has been included in the general list

```
interface ICourseInfo {
  name: string  // name of course
  themeCourse: string // theme of course
  objectives: string[]  // list of course objectives
  download?: string // link to download course
  projects: string[] // list of course projects
  courseContent: {
    title: string // name of theme
    listOfContent: string[] // array with content in theme
  }[] // all themes in course to pass
  toolsPlatform: string[] // tools used in the course
  aboutCourse: string // description about course
  LogoSrc: string // course logo url 
}

```

Good luck
