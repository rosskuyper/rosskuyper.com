import React from 'react'
import {Heading} from '../../../components/Heading/Heading'
import {Project} from '../../../components/Project/Project'
import styles from './WorkSections.module.css'

const ProjectProjects = () => (
  <div>
    <Heading variant="h3">Projects</Heading>

    <Project heading="Habit Tracker (Backend) [WIP]" href="https://github.com/rosskuyper/habit-api">
      Serverless backend powered by AWS Lambda (Node/TS) &amp; API-Gateway for a private
      non-production playground project.
    </Project>

    <Project
      heading="Habit Tracker (Mobile) [WIP]"
      href="https://github.com/rosskuyper/habit-mobile"
    >
      React Native playground for a private non-production project.
    </Project>

    <Project heading="MacOS Dotfiles" href="https://github.com/rosskuyper/dotfiles">
      MacOS dotfiles for consistent OS and developer env configuration (forked from
      mathiasbynens/dotfiles).
    </Project>

    <Project
      heading="French Verb Drills"
      href="https://github.com/rosskuyper/francais-rosskuyper-com"
    >
      Simple interface for helping learn the wonderful world of French verb conjugations.
    </Project>
  </div>
)

const TerraformProjects = () => (
  <div>
    <Heading variant="h3">Terraform</Heading>

    <Project
      heading="AWS S3 Cloudfront"
      href="https://github.com/rosskuyper/terraform-aws-s3-cloudfront"
    >
      Provision an S3 / Cloudfront combination for static sites
    </Project>

    <Project
      heading="Codebuild CI / CD"
      href="https://github.com/rosskuyper/terraform-aws-codebuild-ci-cd"
    >
      Foundations for a CodeBuild project linked to a GitHub repo, for simple projects
    </Project>

    <Project
      heading="API Gateway Lambda Proxy"
      href="https://github.com/rosskuyper/terraform-aws-apigw-lambda-proxy"
    >
      Simple APIGW / Lambda proxy for projects that handle routing within the lambda
    </Project>
  </div>
)

const BoilerplateProjects = () => (
  <div>
    <Heading variant="h3">Boilerplate</Heading>

    <Project
      heading="Terraform Module Template"
      href="https://github.com/rosskuyper/terraform-module-template"
    >
      A template repo for quickly creating new TF modules
    </Project>

    <Project
      heading="TypeScript Package Template"
      href="https://github.com/rosskuyper/ts-package-boilerplate"
    >
      Boilerplate code for creating a new NodeJS / TypeScript package in the Github registry
    </Project>
  </div>
)

const HandbookProjects = () => (
  <div>
    <Heading variant="h3">Handbook</Heading>

    <Project
      heading="Getting to know an engineering team (set of questions)."
      href="https://handbook.rosskuyper.com/leadership/getting-to-know-a-team/"
    >
      A collection of questions that might help figure out what it would actually be like working at
      a company day to day
    </Project>

    <Project
      heading="Leadership learnings from Silicon Valley"
      href="https://handbook.rosskuyper.com/leadership/lessons-from-silicon-valley-leadership/"
    >
      Collated learnings from talking to various people in positions of leadership
    </Project>
  </div>
)

export const WorkSections = () => {
  return (
    <div className={styles.workSections}>
      <ProjectProjects />
      <HandbookProjects />
      <TerraformProjects />
      <BoilerplateProjects />
    </div>
  )
}
